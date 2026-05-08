# `confluent` provider for [`stackql`](https://github.com/stackql/stackql)

This repository is used to generate and document the `confluent` provider for StackQL, allowing you to query and manage Confluent Cloud resources using SQL-like syntax. The provider is built using the [`@stackql/provider-utils`](https://www.npmjs.com/package/@stackql/provider-utils) package (v0.7.0+), which provides tools for converting OpenAPI specifications into StackQL-compatible provider schemas.

## Prerequisites

To use the Confluent provider with StackQL, you'll need:

1. A Confluent Cloud account with appropriate API credentials
2. A Confluent Cloud API key and secret with sufficient permissions for the resources you want to access (see [API Keys](https://docs.confluent.io/cloud/current/security/authenticate/overview.html#api-keys))
3. StackQL CLI installed on your system (see [StackQL](https://github.com/stackql/stackql))
4. Node.js >= 16 (the regeneration pipeline uses scripts shipped by `@stackql/provider-utils`)

Install repo dependencies:

```bash
npm install
```

## 1. Download the OpenAPI specification

Confluent publishes a single, monolithic OpenAPI document for the entire Confluent Cloud API surface. The current spec was downloaded from:

- https://docs.confluent.io/cloud/current/api.html (download link inside the page)

and saved to `provider-dev/downloaded/openapi.yaml`. The downstream tooling reads YAML directly — no JSON conversion is needed. To refresh:

```bash
mkdir -p provider-dev/downloaded
curl -L https://docs.confluent.io/cloud/current/openapi.yaml -o provider-dev/downloaded/openapi.yaml
```

## 2. (Re)build the service-name override map

The spec uses one OpenAPI tag per API namespace (e.g. `ACL (v3)`, `API Keys (iam/v2)`, `Schemas (v1)`). The discriminator function in `provider-dev/scripts/confluent-svc.mjs` reduces each tag to a raw bucket name; the splitter then normalizes that name (lowercased; hyphens, spaces and dots converted to underscores) before consulting the override map. Examples:

- `API Keys (iam/v2)` -> raw `iam` -> normalized `iam`
- `Schemas (v1)` -> raw `Schemas` -> normalized `schemas`
- `Cluster Linking (v3)` -> raw `Cluster Linking` -> normalized `cluster_linking`
- `kafka-quotas` -> normalized `kafka_quotas`

The override map keys must be the **normalized** form.

To preserve backward compatibility with the existing provider, normalized buckets that match operations already present in `provider-dev/openapi/src/confluent/v00.00.00000/services/` are folded back into the same service file. The map is generated automatically by walking every operation in the current provider, finding the same operation in the new spec (by `operationId`, falling back to `path+verb`), running the discriminator + normalization on its tag, and recording `normalizedBucket -> existing_service`:

```bash
node provider-dev/scripts/build_svc_overrides.mjs
```

This writes `provider-dev/config/svc_name_overrides.json`. Genuinely-new buckets (no operations in the current provider) are listed in the run output and intentionally left out of the map — they will become their own services unless you add an explicit override.

## 3. Split into per-service specs

`--svcNameOverrides` takes an inline JSON string. Pass the contents of `provider-dev/config/svc_name_overrides.json` via shell substitution:

```bash
rm -rf provider-dev/source/*
npm run split -- \
  --provider-name confluent \
  --api-doc provider-dev/downloaded/openapi.yaml \
  --svc-discriminator function \
  --svc-discriminator-fn provider-dev/scripts/confluent-svc.mjs \
  --output-dir provider-dev/source \
  --svc-name-overrides '{
    "acl":"kafka",
    "artifact":"flink_artifacts",
    "byok":"encryption_keys",
    "cdx":"stream_sharing",
    "cluster":"kafka",
    "cluster_linking":"kafka",
    "cmk":"managed_kafka_clusters",
    "compatibility":"schema_registry",
    "config":"schema_registry",
    "configs":"kafka",
    "consumer_group":"kafka",
    "contexts":"schema_registry",
    "data_encryption_keys":"encryption_keys",
    "endpoint": "endpoints",
    "entity":"catalog",
    "exporters":"schema_registry",
    "fcpm":"flink_compute_pools",
    "kafka_quotas":"quotas",
    "key_encryption_keys":"encryption_keys",
    "ksqldbcm":"ksqldb_clusters",
    "modes":"schema_registry",
    "partition":"kafka",
    "pim":"provider_integrations",
    "records":"kafka",
    "schemas":"schema_registry",
    "search":"catalog",
    "service_quota":"quotas",
    "srcm":"schema_registry_clusters",
    "subjects":"schema_registry",
    "topic":"kafka",
    "types":"catalog"
  }' \
  --overwrite
```

## 4. Normalize the split specs

This pass does several mechanical fixups to make the source well-formed for the analyze and generate passes that follow:

- Clobbers polymorphism (`oneOf` / `allOf` flattening) and patches missing `type: object` declarations.
- Lifts path-item-level `parameters` into each operation's `parameters` array (so path templates like `{environment_id}` actually substitute when StackQL builds the request URL).
- Strips non-root `servers:` overrides at the path-item and operation level (they're often placeholder hosts that fail DNS).
- Wraps bare top-level array responses (e.g. `["a","b"]`) into a synthesised object envelope so StackQL's row projection has an `objectKey` to latch onto. The wrapper key is derived from the operationId; pass `--bare-array-overrides FILE.json` to override the naming on a per-op basis if the heuristic picks a poor name.

```bash
npm run normalize -- \
  --api-dir provider-dev/source \
  --verbose
```

## 5. Generate the mapping CSV

Analyze the split specs to produce a fresh `all_services.csv` with one row per `(file, path, verb)`. The analyzer pre-fills `stackql_method_name` and `stackql_verb` from the operationId/HTTP verb but leaves `stackql_resource_name` blank.

```bash
npm run generate-mappings -- \
  --input-dir provider-dev/source \
  --output-dir provider-dev/config
```

Edit `provider-dev/config/all_services.csv` and fill in `stackql_resource_name` (and revise the suggested `stackql_method_name` / `stackql_verb` / `stackql_object_key` if needed) for each operation.

## 6. Generate the provider

```bash
rm -rf provider-dev/openapi/*
npm run generate-provider -- \
  --provider-name confluent \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/confluent \
  --config-path provider-dev/config/all_services.csv \
  --servers '[{"url": "https://api.confluent.cloud"}]' \
  --provider-config '{"auth": {"type": "basic", "username_var": "CONFLUENT_CLOUD_API_KEY", "password_var": "CONFLUENT_CLOUD_API_SECRET"}}' \
  --naive-req-body-translate \
  --overwrite
```

The auth block matches the existing `provider.yaml` (`CONFLUENT_CLOUD_API_KEY` / `CONFLUENT_CLOUD_API_SECRET`).

### Convenience views

Convenience views live under `views/<service>/views.yaml` and define flattened, parameterised SELECT shapes over the API-derived resources (e.g. `confluent.managed_kafka_clusters.vw_clusters` flattens the cluster envelope so users don't have to write `JSON_EXTRACT`). Each `views.yaml` is a YAML fragment whose top-level keys are view names, indented as if it already lived under `components.x-stackQL-resources` (4-space indent at the resource-key level).

`generate-provider` auto-discovers the `views/` directory in the project root and splices each top-level view entry into the matching service spec under `components.x-stackQL-resources`, as a sibling of the API resources. Pass `--views-dir DIR` to point at a different location. Existing API-derived resources always win on key collisions.

### Kafka REST v3 per-cluster server template

Confluent's Kafka REST v3 surface (`/kafka/v3/...`) is a per-cluster dataplane — each cluster lives at its own host (`https://<kafka-endpoint-id>.<region>.<cloud>.confluent.cloud`), not at `api.confluent.cloud`. The OpenAPI spec ships a placeholder host (`pkc-00000.region.provider.confluent.cloud`) that is not a real DNS name; queries against it fail DNS.

After `generate-provider`, run:

```bash
npm run replace-kafka-servers
```

The script swaps `kafka.yaml`'s root `servers:` block for a three-variable templated URL:

```yaml
servers:
  - url: https://{kafka_endpoint_id}.{region}.{cloud_provider}.confluent.cloud
    variables:
      kafka_endpoint_id: { default: pkc-00000, ... }
      region:            { default: region,    ... }
      cloud_provider:    { default: cloud,     ... }
```

StackQL binds these variables from the `WHERE` clause at query time, so users supply the cluster coordinates per query:

```sql
SELECT cluster_id, topic_name FROM confluent.kafka.topics
WHERE cluster_id = 'lkc-50r5wn'
  AND kafka_endpoint_id = 'pkc-ldvj1'
  AND region = 'ap-southeast-2'
  AND cloud_provider = 'aws';
```

Idempotent: re-runs after the first apply report `already in sync` and exit clean. Confluent-specific exception — do not generalise upstream.

> Note: the per-cluster Kafka REST v3 endpoints require a **cluster-scoped Resource API key** (generated in the Confluent UI under `Cluster -> API Keys`), not the org-level Cloud API key used for control-plane resources. Auth wiring for this is a separate concern — the `replace-kafka-servers` step only fixes URL routing.

## 7. Test the provider


### Start the StackQL server

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
npm run start-server -- --provider confluent --registry $PROVIDER_REGISTRY_ROOT_DIR
```

### Run meta-route tests

```bash
npm run test-meta-routes -- confluent --verbose
```

Stop the server when finished:

```bash
npm run stop-server
```

Server status:

```bash
npm run server-status
```

### Run test queries

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```

Example queries:

```sql
-- List all environments
SELECT
id, display_name
FROM confluent.org.environments;

-- Get an environment
SELECT
id, display_name
FROM confluent.org.environments
WHERE id = 'env-216dqo';

-- List managed Kafka clusters
SELECT
  id,
  spec
FROM confluent.managed_kafka_clusters.clusters
WHERE environment = 'env-216dqo';

-- Use view
SELECT
  id,
  display_name,
  cloud,
  region,
  availability,
  config_kind,
  phase,
  kafka_bootstrap_endpoint
FROM confluent.managed_kafka_clusters.vw_clusters
WHERE environment = 'env-216dqo';

SELECT
*
FROM confluent.connect.connectors
WHERE environment_id = 'env-216dqo'
AND
kafka_cluster_id = 'lkc-50r5wn';

-- List topics in a Kafka cluster (change creds)
SELECT
cluster_id,
topic_name,
authorized_operations,
configs,
is_internal,
kind,
metadata,
partition_reassignments,
partitions,
partitions_count,
replication_factor
FROM confluent.kafka.topics
WHERE cluster_id = 'lkc-50r5wn'
AND cloud_provider = 'aws'
AND region = 'ap-southeast-2'
AND kafka_endpoint_id = 'pkc-ldvj1'
;
```

## 8. Publish the provider

Push the generated `confluent` directory under `providers/src` in a feature branch of [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md).

To smoke-test against the dev registry:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
./stackql --registry="${DEV_REG}" shell
```

```sql
REGISTRY PULL confluent;
```

## 9. Generate the web docs

Provider doc microsites are built with Docusaurus and published via GitHub Pages.

a. Header content lives in `provider-dev/docgen/provider-data/headerContent1.txt` (frontmatter + intro) and `headerContent2.txt` (Installation + Authentication). Update them if the provider description or auth details change.

b. The Docusaurus config is in `website/docusaurus.config.js`:

```js
const providerName = "confluent";
const providerTitle = "Confluent";
```

c. Generate docs:

```bash
rm -rf website/docs/*
npm run generate-docs -- \
  --provider-name confluent \
  --provider-dir ./provider-dev/openapi/src/confluent/v00.00.00000 \
  --output-dir ./website \
  --provider-data-dir ./provider-dev/docgen/provider-data
```

d. Fix broken links in the generated pages.

The Confluent OpenAPI spec embeds anchors (e.g. `#section/Versioning/API-Lifecycle-Policy`, `#operation/readConnectv1Connector`) and a few regex fragments inside `<code>` blocks (e.g. `[-a-z0-9]*[a-z0-9]`) that Docusaurus flags as broken links / mis-parses as link references. The post-doc-gen script `provider-dev/scripts/fix_doc_links.mjs` rewrites the affected pages from a curated map.

```bash
node provider-dev/scripts/fix_doc_links.mjs
```

The map at the top of the script lists every fix as `{ link, action, replaceWith? }`:

- `action: 'remove'` unwraps `[label](broken)` to `label`. Used for dead anchors today (Confluent's lifecycle-policy page doesn't exist in our docs surface). Badge images inside the label still render.
- `action: 'replace'` swaps the broken target for `replaceWith`. Use this once a real destination URL is available, or for literal-string substitutions like the regex-bracket escapes.

When Docusaurus surfaces new broken links/anchors after a spec refresh, add an entry under the affected page in the `FIXES` map and re-run.

## 10. Test the web docs locally

```bash
cd website
yarn install
yarn build      # production build
yarn start      # local dev server
```

## 11. Publish web docs to GitHub Pages

Under **Pages** in the repo settings, set **Source** to **GitHub Actions**. In Netlify DNS:

| Source Domain | Record Type | Target |
|---------------|-------------|--------|
| confluent-provider.stackql.io | CNAME | stackql.github.io. |

## License

MIT

## Contributing

Pull requests welcome.
