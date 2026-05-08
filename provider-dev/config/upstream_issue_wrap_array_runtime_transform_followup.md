# Follow-up: 0.7.3 emits `transform.body` but is missing `overrideMediaType` and `schema_override`

The runtime-transform fix landed in 0.7.3 — `method.response.transform.body` is now emitted with the correct Go-template body. But the transform is **inert at query time** because two structural keys are missing from the `method.response` block:

- `overrideMediaType: application/json`
- `schema_override: { $ref: '#/components/schemas/<WrapperSchemaName>' }`

Without these, stackql's response pipeline doesn't fire the transform — the row projection step runs against the original bare-array payload and fails with:

```
error processing response: could not select value, invalid key: expected number but got <wrapper> (string)
```

## Repro (same provider as the parent issue)

After `split` -> `normalize` -> `analyze` -> `generate` with v0.7.3, `confluent.connect.connectors.list_connectv1_connectors` produces:

```yaml
methods:
  list_connectv1_connectors:
    operation:
      $ref: '#/paths/~1connect~1v1~1environments~1{environment_id}~1clusters~1{kafka_cluster_id}~1connectors/get'
    response:
      mediaType: application/json
      openAPIDocKey: '200'
      objectKey: $.connectv1_connectors
      transform:
        type: golang_template_text_v0.3.0
        body: |-
          {{- $wrapped := printf "{\"items\":%s}" . -}}
          {{- $parsed := jsonMapFromString $wrapped -}}
          {{- $items := index $parsed "items" -}}
          {"connectv1_connectors":[{{- range $i, $v := $items -}}{{- if $i -}},{{- end -}}{"connectv1_connector":"{{- $v -}}"}{{- end -}}]}
```

`SELECT *` errors out as above.

After hand-adding the two missing keys:

```yaml
    response:
      mediaType: application/json
      openAPIDocKey: '200'
      objectKey: $.connectv1_connectors
      overrideMediaType: application/json                              # <-- added
      schema_override:                                                 # <-- added
        $ref: '#/components/schemas/ListConnectv1ConnectorsResponse'
      transform:
        type: golang_template_text_v0.3.0
        body: |-
          (same body as above)
```

…the same `SELECT *` returns rows correctly.

## Suggested fix

When `generate` emits `transform` for a wrapped bare-array response, it should also emit:

- `overrideMediaType: application/json` (or whatever media type the underlying op declared).
- `schema_override: { $ref: '#/components/schemas/<WrapperName>' }` pointing at the wrapper schema that `normalize` already synthesised.

Both values are already known to `generate` at the point it decides to emit the transform — `overrideMediaType` matches `mediaType`, and the wrapper schema name was determined when `normalize` rewrote the op's 200 response.

## Environment

- `@stackql/provider-utils` v0.7.3
- StackQL CLI 0.10.426
- 28 wrapped-array methods in this provider; all need the same two-key addition.
