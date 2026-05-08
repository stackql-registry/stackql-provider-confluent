# Title

normalize: wrap bare top-level array responses into an object envelope so stackql can project rows

# Body

## Summary

OpenAPI 3 lets an operation declare its 200 response schema as a top-level array (`type: array`). StackQL's row projection requires an object-with-array shape (e.g. `{ data: [...] }`) so each item becomes a row and the array's enclosing key becomes the `objectKey`. With a bare array at the root there's nowhere to attach an `objectKey` and the resulting resource is unqueryable as a SELECT — `SELECT * FROM ...` returns no rows even when the upstream API returns a non-empty array.

This is a generic OpenAPI shape, not a provider-specific quirk. `normalize` should detect every operation with a bare-array 200 response, wrap it into a synthetic object envelope, generate the matching wrapper schema in `components.schemas`, and emit a Go-template `transform.body` that adapts the runtime payload to the new shape.

## Repro

Real example from Confluent's Schema Registry API. `GET /contexts` returns a list of context names directly as a JSON array of strings:

```yaml
paths:
  /contexts:
    get:
      operationId: listContexts
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string
```

Live response from the API:

```json
["default", "prod", "staging"]
```

After provider generation, querying through stackql:

```sql
SELECT * FROM <provider>.schema_registry.contexts;
```

returns zero rows even though the API returned three items. The resource is unqueryable because there's no field path the row projection can latch onto.

In the current Confluent provider this affects 18 SELECT-mapped methods across 4 services:

- `schema_registry`: 9 (`/contexts`, `/exporters`, `/subjects`, `/schemas`, `/schemas/types`, `/schemas/ids/{id}/subjects`, `/schemas/ids/{id}/versions`, `/subjects/{subject}/versions`, `/subjects/{subject}/versions/{version}/referencedby`)
- `catalog`: 4 (business metadata defs, business metadata, tags, tag defs)
- `encryption_keys`: 3 (kek names, dek subjects, dek versions)
- `connect`: 2 (connector tasks, managed connector plugins)

Items in the bare arrays split into three sub-shapes: array of strings, array of integers, array of objects. Each needs slightly different handling.

## Expected behaviour

`normalize` walks every spec, finds operations with `type: array` 200 response schemas, and rewrites them in place:

1. **Synthesise a wrapper schema** under `components.schemas`. Naming heuristic: derive the wrapper key from the operationId (e.g. `listContexts` -> `contexts`) or fall back to a generic `items`. Schema name: `<PascalOpId>Response` (e.g. `ListContextsResponse`).

2. **Rewrite the operation's 200 response** to `$ref: '#/components/schemas/<WrapperName>'`. The wrapper schema looks like:

   ```yaml
   ListContextsResponse:
     type: object
     properties:
       contexts:                    # wrapper key
         type: array
         items:
           type: object              # if original items were scalars
           properties:
             context:                # singular column name
               type: string
   ```

   For object-typed items, the inner `items:` is the original `items:` schema unchanged.

3. **Emit a `transform.body`** on the eventual stackql resource method (this might land in `generate` rather than `normalize` since transforms are stackql-specific extensions). The transform wraps the runtime payload:

   - **Scalar items** (string, integer, boolean): per-item wrap into a single-column row.
     ```
     {{- $wrapped := printf "{\"items\":%s}" . -}}
     {{- $parsed := jsonMapFromString $wrapped -}}
     {{- $items := index $parsed "items" -}}
     {"contexts":[{{- range $i, $v := $items -}}{{- if $i -}},{{- end -}}{"context":"{{- $v -}}"}{{- end -}}]}
     ```
   - **Object items**: just wrap the outer array under the wrapper key.
     ```
     {{- $wrapped := printf "{\"contexts\":%s}" . -}}
     {{- $wrapped -}}
     ```

4. **Set `objectKey: $.<wrapper>`** on the resource method's response block.

This is mechanical and provider-agnostic. The naming heuristics need a sensible default (operationId stem -> wrapper key, plus singular-column fallback), with optional override via a config file if a provider has strong opinions.

## Workaround

A post-generate script reading a config dictionary keyed `service|resource|method`, splicing the right `transform` and adding the wrapper schema. Reference implementation: ~250 lines, three transform-body flavours (scalar/numeric/object), idempotent. Real example: https://github.com/stackql/stackql-provider-confluent/blob/main/provider-dev/scripts/wrap_array_responses.mjs.

The downside of doing this per-provider is the config dictionary has to enumerate every affected method by name. That's tractable for one provider but won't scale across the registry.

## Suggested fix

Land step 1 (synthesise wrapper schema) and step 2 (rewrite response) inside `normalize`. Step 3 (transform.body) and step 4 (objectKey) probably belong in `generate` since they're stackql extensions and live on the resource method, not the OpenAPI operation.

For the naming heuristic, default to:

- **wrapper key**: snake-cased plural noun derived from the operationId (e.g. `listContexts` -> `contexts`, `getKekNames` -> `kek_names`). If the heuristic returns an empty string, fall back to `items`.
- **column name** (scalar items only): singular form of the wrapper key (`contexts` -> `context`, `kek_names` -> `kek_name`). Fall back to `value`.

Optional override via a `--bare-array-overrides FILE.json` flag where providers can supply explicit wrapper/column names per `(service, operationId)` pair.

## Related — possible stackql-core fix

The cleaner long-term solution would be for stackql core to support row projection directly from a bare-array response (treat the array as the row source without needing an object envelope). The normalize-side workaround is the pragmatic near-term path while that's evaluated.

## Environment

- `@stackql/provider-utils` v0.7.1
- Confluent Cloud OpenAPI spec (May 2026)
- StackQL CLI 0.10.426
