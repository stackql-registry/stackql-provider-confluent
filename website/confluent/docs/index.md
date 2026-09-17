---
title: confluent
hide_title: false
hide_table_of_contents: false
keywords:
  - confluent
  - kafka
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Confluent Cloud resources using SQL
custom_edit_url: null
image: /img/stackql-confluent-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Confluent Cloud for managing Kafka clusters, topics, and streaming services in a scalable cloud environment.

:::tip[Related provider]

This provider covers Confluent Cloud **control-plane** operations (org, environments, IAM, managed cluster lifecycle, schema registry control, connectors, Flink, networking, billing). For Kafka **dataplane** operations against a specific cluster (topics, ACLs, consumer groups, configs, records, cluster linking, share groups, streams groups), see the [`kafka`](https://kafka-provider.stackql.io) provider.

:::


:::info[Provider Summary] 

total services: __25__  
total resources: __140__  

:::

See also:
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * *

## Installation

To pull the latest version of the `confluent` provider, run the following command:

```bash
REGISTRY PULL confluent;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).

## Authentication

The following system environment variables are used for authentication by default:

- <CopyableCode code="CONFLUENT_CLOUD_API_KEY" /> - Confluent Cloud API key (see <a href="https://docs.confluent.io/cloud/current/security/authenticate/overview.html#api-keys">Confluent Cloud API Keys</a>)
- <CopyableCode code="CONFLUENT_CLOUD_API_SECRET" /> - Confluent Cloud API secret (see <a href="https://docs.confluent.io/cloud/current/security/authenticate/overview.html#api-keys">Confluent Cloud API Keys</a>)

These variables are sourced at runtime (from the local machine or as CI variables/secrets).

<details>

<summary>Using different environment variables</summary>

To use different environment variables (instead of the defaults), use the `--auth` flag of the `stackql` program.  For example:

```bash

AUTH='{ "confluent": { "type": "basic", "username_var": "MY_CONFLUENT_CLOUD_API_KEY_VAR", "password_var": "MY_CONFLUENT_CLOUD_API_SECRET_VAR" }}'
stackql shell --auth="${AUTH}"

```

or using PowerShell:

```powershell

$Auth = "{ 'confluent': { 'type': 'basic', 'username_var': 'MY_CONFLUENT_CLOUD_API_KEY_VAR', 'password_var': 'MY_CONFLUENT_CLOUD_API_SECRET_VAR' }}"
stackql.exe shell --auth=$Auth

```
</details>

## Example Queries

Try the following queries using `stackql shell`, or run them from a script or CI pipeline with `stackql exec`.

### Environments

Every environment in the organization, with its Stream Governance package and creation time:

```sql
SELECT id, display_name,
       json_extract(stream_governance_config, '$.package') AS governance_package,
       json_extract(metadata, '$.created_at') AS created_at
FROM confluent.org.environments
ORDER BY display_name;
```

### Kafka clusters in an environment

Cluster name, cloud, region, cluster type, availability and lifecycle phase, read out of the nested `spec` and `status` columns:

```sql
SELECT id,
       json_extract(spec, '$.display_name') AS display_name,
       json_extract(spec, '$.cloud') AS cloud,
       json_extract(spec, '$.region') AS region,
       json_extract(spec, '$.config.kind') AS cluster_type,
       json_extract(spec, '$.availability') AS availability,
       json_extract(status, '$.phase') AS phase
FROM confluent.managed_kafka_clusters.clusters
WHERE environment = 'env-xxxxx'
ORDER BY display_name;
```

The `vw_clusters` view returns the same fields already flattened, including the endpoints a client or the `kafka` provider needs:

```sql
SELECT id, display_name, cloud, region, config_kind, phase,
       http_endpoint, kafka_bootstrap_endpoint
FROM confluent.managed_kafka_clusters.vw_clusters
WHERE environment = 'env-xxxxx';
```

### Service accounts and API keys

Service accounts in the organization:

```sql
SELECT id, display_name, description,
       json_extract(metadata, '$.created_at') AS created_at
FROM confluent.iam.service_accounts
ORDER BY display_name;
```

API keys owned by one service account, with the resource each key is scoped to (`CLOUD` for a Cloud API key, otherwise a cluster ID):

```sql
SELECT id,
       json_extract(spec, '$.display_name') AS key_name,
       json_extract(spec, '$.resource.id') AS resource_id,
       json_extract(metadata, '$.created_at') AS created_at
FROM confluent.iam.api_keys
WHERE json_extract(spec, '$.owner.id') = 'sa-xxxxx'
ORDER BY created_at;
```

### Connectors

Names of the connectors running against a Kafka cluster:

```sql
SELECT connectv1_connector AS connector_name
FROM confluent.connect.connectors
WHERE environment_id = 'env-xxxxx'
  AND kafka_cluster_id = 'lkc-xxxxx';
```

Status of one connector with one row per task, expanding the `tasks` array with `json_each`:

```sql
SELECT s.name, s.type,
       json_extract(s.connector, '$.state') AS connector_state,
       json_extract(t.value, '$.id') AS task_id,
       json_extract(t.value, '$.state') AS task_state
FROM confluent.connect.connector_status s, json_each(s.tasks) t
WHERE s.connector_name = 'my-s3-sink'
  AND s.environment_id = 'env-xxxxx'
  AND s.kafka_cluster_id = 'lkc-xxxxx'
ORDER BY task_id;
```

### Schema Registry clusters

The Schema Registry cluster in an environment, with its package, location, endpoint and phase:

```sql
SELECT id,
       json_extract(spec, '$.display_name') AS display_name,
       json_extract(spec, '$.package') AS package,
       json_extract(spec, '$.cloud') AS cloud,
       json_extract(spec, '$.region') AS region,
       json_extract(spec, '$.http_endpoint') AS http_endpoint,
       json_extract(status, '$.phase') AS phase
FROM confluent.schema_registry_clusters.v3_clusters
WHERE environment = 'env-xxxxx';
```

### ksqlDB clusters

ksqlDB clusters in an environment, with CSU sizing, the Kafka cluster each one is attached to and whether it is paused:

```sql
SELECT id,
       json_extract(spec, '$.display_name') AS display_name,
       json_extract(spec, '$.csu') AS csu,
       json_extract(spec, '$.kafka_cluster.id') AS kafka_cluster_id,
       json_extract(status, '$.phase') AS phase,
       json_extract(status, '$.is_paused') AS is_paused,
       json_extract(status, '$.http_endpoint') AS http_endpoint
FROM confluent.ksqldb_clusters.clusters
WHERE environment = 'env-xxxxx';
```

### Flink compute pools

Compute pools in an environment, with the CFU limit against current CFU usage:

```sql
SELECT id,
       json_extract(spec, '$.display_name') AS display_name,
       json_extract(spec, '$.cloud') AS cloud,
       json_extract(spec, '$.region') AS region,
       json_extract(spec, '$.max_cfu') AS max_cfu,
       json_extract(status, '$.current_cfu') AS current_cfu,
       json_extract(status, '$.phase') AS phase
FROM confluent.flink_compute_pools.compute_pools
WHERE environment = 'env-xxxxx'
ORDER BY current_cfu DESC;
```

### Clusters by cloud provider across environments

Joining environments to clusters gives an organization-wide count of Kafka clusters per cloud provider and cluster type:

```sql
SELECT json_extract(c.spec, '$.cloud') AS cloud,
       json_extract(c.spec, '$.config.kind') AS cluster_type,
       COUNT(*) AS clusters
FROM confluent.org.environments e
JOIN confluent.managed_kafka_clusters.clusters c
  ON c.environment = e.id
GROUP BY cloud, cluster_type
ORDER BY clusters DESC;
```

### Service account lifecycle

Create a service account, update its description, then delete it (deleting a service account also deletes the API keys it owns):

```sql
INSERT INTO confluent.iam.service_accounts (display_name, description)
SELECT 'ci-runner', 'CI pipeline access'
RETURNING id, display_name;

UPDATE confluent.iam.service_accounts
SET description = 'CI pipeline access, rotated 2026-09'
WHERE id = 'sa-xxxxx';

DELETE FROM confluent.iam.service_accounts
WHERE id = 'sa-xxxxx';
```


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/billing/">billing</a><br />
<a href="/services/catalog/">catalog</a><br />
<a href="/services/ccl/">ccl</a><br />
<a href="/services/ccpm/">ccpm</a><br />
<a href="/services/connect/">connect</a><br />
<a href="/services/encryption_keys/">encryption_keys</a><br />
<a href="/services/endpoints/">endpoints</a><br />
<a href="/services/flink_artifacts/">flink_artifacts</a><br />
<a href="/services/flink_compute_pools/">flink_compute_pools</a><br />
<a href="/services/iam/">iam</a><br />
<a href="/services/ksqldb_clusters/">ksqldb_clusters</a><br />
<a href="/services/managed_kafka_clusters/">managed_kafka_clusters</a><br />
<a href="/services/networking/">networking</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/notifications/">notifications</a><br />
<a href="/services/org/">org</a><br />
<a href="/services/partner/">partner</a><br />
<a href="/services/provider_integrations/">provider_integrations</a><br />
<a href="/services/quotas/">quotas</a><br />
<a href="/services/schema_registry/">schema_registry</a><br />
<a href="/services/schema_registry_clusters/">schema_registry_clusters</a><br />
<a href="/services/sql/">sql</a><br />
<a href="/services/stream_sharing/">stream_sharing</a><br />
<a href="/services/sts/">sts</a><br />
<a href="/services/tableflow/">tableflow</a><br />
<a href="/services/usm/">usm</a><br />
</div>
</div>
