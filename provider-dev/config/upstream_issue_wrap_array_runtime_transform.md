# Title

normalize/generate: bare-array response wrapping is incomplete — schema + objectKey land but no `transform.body` is emitted, so runtime payloads can't be projected

# Body

## Summary

In v0.7.2 `normalize` (or somewhere in the pipeline) gained the bare-array response wrapping behaviour we requested. It correctly:

1. Synthesises a wrapper schema under `components.schemas` (e.g. `ListConnectv1ConnectorsResponse: { type: object, properties: { connectv1_connectors: { type: array, items: ... } } }`).
2. Rewrites the operation's 200 response to `$ref` the wrapper schema.
3. Sets `objectKey: $.<wrapper>` on the resource method's `response` block.

But the **runtime transform** half of the fix is missing. The synthesis says the response is shaped like `{ connectv1_connectors: [...] }` — but the actual API still returns a bare array `["a","b","c"]`. StackQL builds a request, gets the raw array back, tries to dive into `$.connectv1_connectors` per the spec, and the JSONPath evaluation fails because there's no object key — it's an array.

The fix is to also emit a Go-template `transform.body` that wraps the runtime payload to match the spec's claimed shape, on the resource method's `response` block. (Probably belongs in `generate`, not `normalize`, since `transform` is a stackql extension on the resource method, not on the OpenAPI operation itself.)

## Repro

Confluent's `GET /connect/v1/environments/{environment_id}/clusters/{kafka_cluster_id}/connectors` returns a bare array of connector names. After running the provider-utils 0.7.2 pipeline (`split` -> `normalize` -> `analyze` -> `generate`), the spec produced for `confluent.connect.connectors.list_connectv1_connectors` looks like:

```yaml
# components.schemas (synthesised by normalize — good)
ListConnectv1ConnectorsResponse:
  type: object
  properties:
    connectv1_connectors:
      type: array
      items:
        type: string

# operation 200 response (rewritten by normalize — good)
responses:
  '200':
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/ListConnectv1ConnectorsResponse'
        example: ["MyGcsLogsBucketConnector", "MyS3BucketConnector", "MyDatagenConnector"]

# resource method.response block (synthesised by generate — incomplete)
methods:
  list_connectv1_connectors:
    operation:
      $ref: '#/paths/~1connect~1v1~1environments~1{environment_id}~1clusters~1{kafka_cluster_id}~1connectors/get'
    response:
      mediaType: application/json
      openAPIDocKey: '200'
      objectKey: $.connectv1_connectors    # <-- correct
      # NO transform block emitted         # <-- missing
```

Querying through StackQL:

```sql
SELECT * FROM confluent.connect.connectors
WHERE environment_id = 'env-216dqo' AND kafka_cluster_id = 'lkc-50r5wn';
```

returns:

```
error processing response: could not select value, invalid key: expected number but got connectv1_connectors (string)
| connectv1_connector |
```

The error is from the JSONPath evaluator: stackql's row projection tried `$.connectv1_connectors` on the actual API response, but the actual response is `["MyConnector1", "MyConnector2", ...]` — an array, not an object. The path step `connectv1_connectors` (a string key) is invalid against an array (which only accepts integer indices).

The single column header (`connectv1_connector`) was emitted because stackql DID resolve the spec-side schema correctly — it knew there should be a singular `connectv1_connector` column inside each item. The header is right; the rows just never materialise because the transform never wraps the payload.

## What needs to happen

When the bare-array wrap is performed, in addition to the spec-side schema synthesis, the resource method's `response` block needs a `transform` entry that adapts the runtime payload from the bare array shape to the synthesised wrapper shape. Two sub-cases:

**Scalar items** (string/integer/boolean items in the original bare array): wrap each scalar into a single-column row.

```yaml
transform:
  type: golang_template_text_v0.3.0
  body: |-
    {{- $wrapped := printf "{\"items\":%s}" . -}}
    {{- $parsed := jsonMapFromString $wrapped -}}
    {{- $items := index $parsed "items" -}}
    {"connectv1_connectors":[{{- range $i, $v := $items -}}{{- if $i -}},{{- end -}}{"connectv1_connector":"{{- $v -}}"}{{- end -}}]}
```

**Object items**: just wrap the outer array under the wrapper key, items pass through unchanged.

```yaml
transform:
  type: golang_template_text_v0.3.0
  body: |-
    {{- $wrapped := printf "{\"<wrapper>\":%s}" . -}}
    {{- $wrapped -}}
```

The wrapper key (`connectv1_connectors`) and the singular column name (`connectv1_connector`) are already known to the pipeline at the point the wrap was decided — they were the values used to build the synthesised schema and the `objectKey`. Reuse them.

## Reference precedent

A hand-written example of the complete shape (synthesised pre-0.7.2) — the connectors list method in an earlier version of the same provider had a fully-emitted `transform.body` plus the schema and objectKey. The runtime transform is the missing piece in the auto-generated output.

## Suggested fix

Where to land it: `generate`, not `normalize`. The `transform` key is a stackql extension on the resource method's `response` block, not on the OpenAPI operation. `generate` already builds the resource method's response block from the operation's 200 response — when it sees that the wrapper schema + objectKey were synthesised by normalize, it should also emit the matching `transform.body`.

How `generate` knows: either (a) tag wrapped responses on the OpenAPI op with an x-extension flag during normalize so `generate` knows to emit the transform, or (b) detect the case from the shape (response 200 schema is an object with a single array property whose items match the resource's underlying response, AND the runtime payload — known from the original spec — was a bare array). Option (a) is cleaner.

## Environment

- `@stackql/provider-utils` v0.7.2
- StackQL CLI 0.10.426
- Confluent Cloud OpenAPI spec
- Affects 28 bare-array-wrapped methods in this provider; reproducible on any provider that hits the same shape.
