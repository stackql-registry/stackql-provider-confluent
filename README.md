# `confluent` and `kafka` providers for [`stackql`](https://github.com/stackql/stackql)

This repository generates and documents **two** StackQL providers from a single upstream OpenAPI document:

- **`confluent`** - Confluent Cloud **control plane**. Org, IAM, environments, managed Kafka clusters, schema registry control, connectors, Flink, networking, billing, etc. Host: `https://api.confluent.cloud`. Auth: org-level Cloud API key (`CONFLUENT_CLOUD_API_KEY` / `CONFLUENT_CLOUD_API_SECRET`).
- **`kafka`** - Kafka REST v3 **dataplane** (topics, consumer groups, ACLs, configs, partitions, records, cluster linking, share groups, streams groups). Host: per-cluster (`https://{kafka_endpoint_id}.{region}.{cloud_provider}.confluent.cloud`). Auth: cluster-scoped Resource API key (`KAFKA_API_KEY` / `KAFKA_API_SECRET`).

The split exists because the two surfaces use different hosts and different credentials. Operations against a cluster's dataplane (topics, ACLs, records) cannot use the org-level Cloud API key, and the per-cluster host pattern cannot share a single static `servers[0].url`.

The `kafka` provider targets the Kafka REST Proxy v3 surface as implemented by Confluent Cloud. The same surface is also implemented by Confluent Platform, Karapace, and (partially) Redpanda's HTTP Proxy - but the current `servers` template only resolves Confluent Cloud per-cluster hosts. Pointing it at self-hosted REST Proxy is a future concern; the path shapes and resources should largely carry over.

The build is driven by [`@stackql/provider-utils`](https://www.npmjs.com/package/@stackql/provider-utils) (v0.7.0+).

## Build pipeline

| Step | Summary | Description |
|------|---------|-------------|
| 1 | [Download spec](#1-download-the-openapi-specification) | Pull the monolithic upstream Confluent Cloud OpenAPI document that feeds both providers. |
| 2 | [Build overrides](#2-rebuild-the-service-name-override-map) | Walk both existing provider trees and the new spec to generate the service-name override map keyed by normalized bucket. |
| 3 | [Split spec](#3-split-into-per-service-specs) | Run the splitter into a flat `_split/` dir, then sort each file into `source/confluent/` or `source/kafka/` based on which provider owns it. |
| 4 | [Normalize specs](#4-normalize-the-split-specs) | Flatten polymorphism, lift path-item parameters, strip operation-level server overrides, and wrap bare array responses. |
| 5 | [Mapping CSVs](#5-generate-the-mapping-csvs) | Analyze each provider's split specs into a per-provider `all_services.<provider>.csv`; curate the `stackql_resource_name` and friends. |
| 6 | [Generate providers](#6-generate-the-providers) | Run `generate-provider` twice — once per provider, each with its own host + auth config — producing the final per-provider OpenAPI trees. |
| 7 | [Test providers](#7-test-the-providers) | Start a local stackql server and walk every documented service / resource through `SHOW METHODS / DESCRIBE` per provider. |
| 8 | [Publish providers](#8-publish-the-providers) | Push each generated provider tree to the StackQL provider registry. |
| 9 | [Generate docs](#9-generate-the-web-docs) | Render each Docusaurus microsite from its provider's OpenAPI tree and post-process to strip MDX-breaking quirks from the upstream spec. |
| 10 | [Test docs](#10-test-the-web-docs-locally) | Build and serve each Docusaurus microsite locally to preview the generated pages. |
| 11 | [Publish docs](#11-publish-web-docs) | Deploy each microsite to Netlify with its own custom domain. |

## Prerequisites

1. A Confluent Cloud account with appropriate API credentials.
2. Cloud API key + secret for `confluent` work (see [API Keys](https://docs.confluent.io/cloud/current/security/authenticate/overview.html#api-keys)).
3. Cluster-scoped Resource API key + secret for `kafka` work (created in the Confluent UI under `Cluster -> API Keys`).
4. StackQL CLI installed (see [StackQL](https://github.com/stackql/stackql)).
5. Node.js >= 16.

Install repo dependencies:

```bash
npm install
```

## 1. Download the OpenAPI specification

Confluent publishes a single monolithic OpenAPI document for the entire Confluent Cloud API surface (control plane + dataplane). Both providers are generated from it.

```bash
mkdir -p provider-dev/downloaded
curl -L https://docs.confluent.io/cloud/current/openapi.yaml -o provider-dev/downloaded/openapi.yaml
```

## 2. (Re)build the service-name override map

The spec uses one OpenAPI tag per API namespace (e.g. `ACL (v3)`, `API Keys (iam/v2)`, `Schemas (v1)`). [provider-dev/scripts/confluent-svc.mjs](provider-dev/scripts/confluent-svc.mjs) reduces each tag to a raw bucket; the splitter then normalizes that name (lowercased; hyphens, spaces and dots converted to underscores) before consulting the override map.

To preserve backward compatibility, normalized buckets that match operations already present in either provider tree are folded back into the matching service file. The map is generated automatically:

```bash
node provider-dev/scripts/build_svc_overrides.mjs
```

This writes [provider-dev/config/svc_name_overrides.json](provider-dev/config/svc_name_overrides.json).

## 3. Split into per-service specs

The splitter writes all per-service YAMLs into a single flat output dir; a follow-up sort step moves each file into the correct provider's source subdir based on which provider owns it.

The `--svc-name-overrides` flag requires single-line JSON, so we read the override map from [provider-dev/config/svc_name_overrides.json](provider-dev/config/svc_name_overrides.json) (written by step 2) and compact it on the fly:

```bash
rm -rf provider-dev/source/confluent provider-dev/source/kafka provider-dev/source/_split
mkdir -p provider-dev/source/_split
npm run split -- \
  --provider-name confluent \
  --api-doc provider-dev/downloaded/openapi.yaml \
  --svc-discriminator function \
  --svc-discriminator-fn provider-dev/scripts/confluent-svc.mjs \
  --output-dir provider-dev/source/_split \
  --svc-name-overrides "$(node -e 'console.log(JSON.stringify(require(\"./provider-dev/config/svc_name_overrides.json\")))')" \
  --overwrite
```

The `--provider-name confluent` flag here only controls the splitter-emitted `info.description` and is corrected for kafka-owned files in the next step. Bucket-to-service routing is driven entirely by the discriminator function and the override map.

Sort the split output into the two provider source dirs. The `kafka` provider owns `kafka.yaml`, `share_group.yaml`, and `streams_group.yaml` (all `/kafka/v3/clusters/{cluster_id}/...` paths); everything else belongs to `confluent`. The sort step also rewrites the splitter-emitted `info.description` for kafka-owned files (from `confluent <svc> API` to `kafka <svc> API`) so the next `generate-provider:kafka` run doesn't leak the wrong provider name into the kafka provider tree.

```bash
npm run sort-split-output
```

The mapping of which files belong to `kafka` lives at the top of [provider-dev/scripts/sort_split_output.mjs](provider-dev/scripts/sort_split_output.mjs) as `KAFKA_FILES`. Add to it if a new dataplane bucket appears in the upstream spec.

## 4. Normalize the split specs

Run normalize against each provider's source dir:

```bash
npm run normalize -- --api-dir provider-dev/source/confluent --verbose
npm run normalize -- --api-dir provider-dev/source/kafka --verbose
```

What this does (per [@stackql/provider-utils](https://www.npmjs.com/package/@stackql/provider-utils)):

- Clobbers polymorphism (`oneOf` / `allOf` flattening) and patches missing `type: object` declarations.
- Lifts path-item-level `parameters` into each operation's `parameters` array.
- Strips non-root `servers:` overrides at the path-item and operation level.
- Wraps bare top-level array responses into a synthesised object envelope.

## 5. Generate the mapping CSVs

Analyze each provider's split specs to produce a fresh mapping CSV. The analyze step always writes to `all_services.csv`, so we run it twice and rename the output after each run:

```bash
npm run generate-mappings -- \
  --input-dir provider-dev/source/confluent \
  --output-dir provider-dev/config
mv provider-dev/config/all_services.csv provider-dev/config/all_services.confluent.csv

npm run generate-mappings -- \
  --input-dir provider-dev/source/kafka \
  --output-dir provider-dev/config
mv provider-dev/config/all_services.csv provider-dev/config/all_services.kafka.csv
```

Edit [provider-dev/config/all_services.confluent.csv](provider-dev/config/all_services.confluent.csv) and [provider-dev/config/all_services.kafka.csv](provider-dev/config/all_services.kafka.csv) to fill in `stackql_resource_name` (and revise the suggested `stackql_method_name` / `stackql_verb` / `stackql_object_key` if needed) for each operation.

## 6. Generate the providers

Two providers, two generate runs. Each reads its host (`--servers`) and auth (`--provider-config`) from a JSON file in [provider-dev/config/](provider-dev/config/) so the package.json scripts stay portable across shells (inline JSON arguments get mangled by cmd.exe on Windows):

- [provider-dev/config/confluent.servers.json](provider-dev/config/confluent.servers.json) - flat `api.confluent.cloud` host.
- [provider-dev/config/confluent.provider-config.json](provider-dev/config/confluent.provider-config.json) - basic auth via `CONFLUENT_CLOUD_API_KEY` / `CONFLUENT_CLOUD_API_SECRET`.
- [provider-dev/config/kafka.servers.json](provider-dev/config/kafka.servers.json) - per-cluster templated host with `kafka_endpoint_id` / `region` / `cloud_provider` variables.
- [provider-dev/config/kafka.provider-config.json](provider-dev/config/kafka.provider-config.json) - basic auth via `KAFKA_API_KEY` / `KAFKA_API_SECRET`.

```bash
rm -rf provider-dev/openapi/src/confluent
npm run generate-provider:confluent
```

```bash
rm -rf provider-dev/openapi/src/kafka
npm run generate-provider:kafka
```

The `kafka` generate step writes per-cluster templated `servers[0]` from the start (sourced from `kafka.servers.json`). The post-generate `replace-kafka-servers` step (below) is a belt-and-braces guard that reports `already in sync` on a clean regen.

### Convenience views

Convenience views live under `views/<service>/views.yaml` and define flattened, parameterised SELECT shapes over the API-derived resources (e.g. `confluent.managed_kafka_clusters.vw_clusters` flattens the cluster envelope so users don't have to write `JSON_EXTRACT`). Each `views.yaml` is a YAML fragment whose top-level keys are view names, indented as if it already lived under `components.x-stackQL-resources` (4-space indent at the resource-key level).

`generate-provider` auto-discovers the `views/` directory in the project root and splices each top-level view entry into the matching service spec under `components.x-stackQL-resources`, as a sibling of the API resources. Pass `--views-dir DIR` to point at a different location. Existing API-derived resources always win on key collisions.

Views are currently only used by the `confluent` provider (`views/managed_kafka_clusters/views.yaml`). The `kafka` provider has no views yet.

### Kafka REST v3 per-cluster server template

Confluent's Kafka REST v3 surface (`/kafka/v3/...`) is a per-cluster dataplane - each cluster lives at its own host (`https://<kafka-endpoint-id>.<region>.<cloud>.confluent.cloud`), not at `api.confluent.cloud`. The upstream spec inherits `https://api.confluent.cloud` for every service, which is wrong for the three dataplane services (`kafka`, `share_group`, `streams_group`).

After `generate-provider:kafka`, run:

```bash
npm run replace-kafka-servers
```

The script swaps each dataplane service's root `servers:` block for a three-variable templated URL:

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
SELECT cluster_id, topic_name FROM kafka.kafka.topics
WHERE cluster_id = 'lkc-50r5wn'
  AND kafka_endpoint_id = 'pkc-ldvj1'
  AND region = 'ap-southeast-2'
  AND cloud_provider = 'aws';
```

Idempotent: re-runs report `already in sync` and exit clean.

## 7. Test the providers

Start a local stackql server backed by the freshly-built registry, then walk every documented service / resource through `SHOW METHODS / DESCRIBE`. Surfaces spec issues that only show up at SQL plan time.

Run from Linux, macOS, or WSL (the bash scripts assume `pgrep` / `ps` and a POSIX shell). `start-server` is argument-less — it starts stackql on tcp/5444 with `--registry` pointing at `./provider-dev/openapi`; `src/` is appended automatically and **both** provider trees (`confluent/`, `kafka/`) are mounted from the same registry, so one server handles both.

```bash
npm run start-server                       # Starts stackql on tcp/5444 with this registry mounted
npm run server-status                      # Check it's up
npm run test-meta-routes -- confluent      # Walk every SHOW METHODS / DESCRIBE route for confluent
npm run test-meta-routes -- kafka          # ... and for kafka
npm run stop-server                        # Tear it down
```

Step 7 does NOT need Confluent or Kafka API credentials — meta routes are answered from the registry, not from a live API call.

### Run live test queries (optional)

These hit the real Confluent / Kafka APIs, so they need real credentials in the env (`CONFLUENT_CLOUD_API_KEY` + `CONFLUENT_CLOUD_API_SECRET` for `confluent.*`; `KAFKA_API_KEY` + `KAFKA_API_SECRET` for `kafka.*`). Open a stackql shell pointed at the local registry:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```

Example `confluent` queries (control plane):

```sql
-- List all environments
SELECT id, display_name
FROM confluent.org.environments;

-- List managed Kafka clusters
SELECT id, spec
FROM confluent.managed_kafka_clusters.clusters
WHERE environment = 'env-216dqo';

-- Use a convenience view
SELECT id, display_name, cloud, region, availability,
       config_kind, phase, kafka_bootstrap_endpoint
FROM confluent.managed_kafka_clusters.vw_clusters
WHERE environment = 'env-216dqo';

SELECT *
FROM confluent.connect.connectors
WHERE environment_id = 'env-216dqo'
  AND kafka_cluster_id = 'lkc-50r5wn';
```

Example `kafka` queries (dataplane):

```sql
-- List topics in a Kafka cluster
SELECT cluster_id, topic_name, authorized_operations, configs,
       is_internal, kind, metadata, partition_reassignments,
       partitions, partitions_count, replication_factor
FROM kafka.kafka.topics
WHERE cluster_id = 'lkc-50r5wn'
  AND cloud_provider = 'aws'
  AND region = 'ap-southeast-2'
  AND kafka_endpoint_id = 'pkc-ldvj1';
```

## 8. Publish the providers

Each provider is published independently to [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry):

- Push `provider-dev/openapi/src/confluent/` under `providers/src/confluent/` in a feature branch.
- Push `provider-dev/openapi/src/kafka/` under `providers/src/kafka/` in a feature branch.

Follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md).

To smoke-test against the dev registry:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
./stackql --registry="${DEV_REG}" shell
```

```sql
REGISTRY PULL confluent;
REGISTRY PULL kafka;
```

## 9. Generate the web docs

Each provider has its own Docusaurus microsite under `website/<provider>/` (own `docusaurus.config.js`, `package.json`, `sidebars.js`, `static/`, build output). The two sites are fully independent — separate `yarn install` / `yarn build` flows, separate publishes, separate custom domains.

```
website/
  confluent/   # confluent-provider.stackql.io
  kafka/       # kafka-provider.stackql.io
```

Header content (frontmatter + intro, Installation + Authentication blocks) is per-provider under [provider-dev/docgen/provider-data/](provider-dev/docgen/provider-data/):

```
provider-dev/docgen/provider-data/
  confluent/
    headerContent1.txt   # frontmatter + intro
    headerContent2.txt   # Installation + Authentication
  kafka/
    headerContent1.txt
    headerContent2.txt
```

Generate docs for each provider:

```bash
rm -rf website/confluent/docs
npm run generate-docs:confluent
```

```bash
rm -rf website/kafka/docs
npm run generate-docs:kafka
```

Each script does two things in sequence:

1. **Render** the Docusaurus pages with `@stackql/provider-utils`' `generate-docs`, scoped to the right provider tree, output dir, and header content.
2. **Post-process** with [provider-dev/scripts/fix_doc_links.mjs](provider-dev/scripts/fix_doc_links.mjs) (`--provider <name>`) — strips upstream-spec quirks that don't survive MDX:
   - img.shields.io badges (Confluent's "Lifecycle Stage" / "Request Access" pills) and their wrapping links.
   - Dead `#section/Versioning/API-Lifecycle-Policy` anchors and a handful of `#operation/...` cross-resource anchors that don't resolve in the Docusaurus surface.
   - Regex char-classes inside `<code>` blocks (e.g. `[-a-z0-9]*[a-z0-9]`) that MDX mis-parses as link references — swapped for `&lsqb;` / `&rsqb;` entities so the browser still renders `[` / `]`.

The fix-script has separate `CONFLUENT_FIXES` and `KAFKA_FIXES` maps; `--provider` picks one. When Docusaurus surfaces a new broken link / anchor after a spec refresh, add an entry under the affected page in the appropriate map and re-run.

Provider-to-output mapping:

- `generate-docs:confluent` -> reads `provider-dev/openapi/src/confluent/v00.00.00000`, writes to `website/confluent/`, uses `provider-dev/docgen/provider-data/confluent/`, fixes against `website/confluent/`.
- `generate-docs:kafka` -> reads `provider-dev/openapi/src/kafka/v00.00.00000`, writes to `website/kafka/`, uses `provider-dev/docgen/provider-data/kafka/`, fixes against `website/kafka/`.

## 10. Test the web docs locally

Each microsite has its own install + build + serve cycle:

```bash
cd website/confluent
yarn
yarn build      # production build
yarn serve      # local dev server
cd ../..
```

```bash
cd website/kafka
yarn
yarn build
yarn serve
cd ../..
```

## 11. Publish web docs

Both microsites are published via Netlify, one site per provider, each with its own custom domain:

| Site | Source Domain |
|------|---------------|
| `website/confluent/` | confluent-provider.stackql.io |
| `website/kafka/`     | kafka-provider.stackql.io     |

Each Netlify site points at the corresponding subdir as its base directory, with `yarn build` as the build command and `build/` as the publish directory. DNS is managed in Netlify.

## License

MIT

## Contributing

Pull requests welcome.
