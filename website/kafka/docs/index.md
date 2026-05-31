---
title: kafka
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka
  - confluent
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Kafka dataplane resources (topics, ACLs, consumer groups, configs, cluster linking) using SQL
custom_edit_url: null
image: /img/stackql-kafka-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Kafka REST v3 dataplane for managing topics, partitions, consumer groups, ACLs, configs, records, cluster linking, share groups, and streams groups against a specific Kafka cluster. Targets the Confluent Kafka REST v3 surface as implemented by Confluent Cloud; the same surface is also implemented by Confluent Platform, Karapace, and (partially) Redpanda's HTTP Proxy.

:::tip[Related provider]

This provider covers Kafka **dataplane** operations against a specific Kafka cluster. For Confluent Cloud **control-plane** operations (org, environments, IAM, managed cluster lifecycle, schema registry control, connectors, Flink, networking, billing), see the [`confluent`](https://confluent-provider.stackql.io) provider.

:::


:::info[Provider Summary] 

total services: __3__  
total resources: __31__  

:::

See also:
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * *

## Installation

To pull the latest version of the `kafka` provider, run the following command:

```bash
REGISTRY PULL kafka;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).

## Authentication

The `kafka` provider talks to a per-cluster Kafka REST v3 endpoint, not the Confluent Cloud control plane. It requires a **cluster-scoped Resource API key** (created in the Confluent UI under `Cluster -> API Keys`), which is distinct from the org-level Cloud API key used by the [`confluent`](/providers/confluent) provider.

The following system environment variables are used for authentication by default:

- <CopyableCode code="KAFKA_API_KEY" /> - Cluster-scoped Resource API key (see <a href="https://docs.confluent.io/cloud/current/security/authenticate/overview.html#api-keys">Confluent Cloud API Keys</a>)
- <CopyableCode code="KAFKA_API_SECRET" /> - Cluster-scoped Resource API secret

These variables are sourced at runtime (from the local machine or as CI variables/secrets).

The per-cluster host is supplied at query time as three `WHERE`-clause bindings (`kafka_endpoint_id`, `region`, `cloud_provider`). These can be read out of the cluster's spec in the `confluent` provider:

```sql
SELECT
  spec.http_endpoint,
  spec.region,
  spec.cloud
FROM confluent.managed_kafka_clusters.clusters
WHERE environment = 'env-xxxxx';
```

then passed through to a `kafka` query:

```sql
SELECT cluster_id, topic_name, partitions_count
FROM kafka.kafka.topics
WHERE cluster_id = 'lkc-xxxxx'
  AND kafka_endpoint_id = 'pkc-xxxxx'
  AND region = 'ap-southeast-2'
  AND cloud_provider = 'aws';
```

<details>

<summary>Using different environment variables</summary>

To use different environment variables (instead of the defaults), use the `--auth` flag of the `stackql` program.  For example:

```bash

AUTH='{ "kafka": { "type": "basic", "username_var": "MY_KAFKA_API_KEY_VAR", "password_var": "MY_KAFKA_API_SECRET_VAR" }}'
stackql shell --auth="${AUTH}"

```

or using PowerShell:

```powershell

$Auth = "{ 'kafka': { 'type': 'basic', 'username_var': 'MY_KAFKA_API_KEY_VAR', 'password_var': 'MY_KAFKA_API_SECRET_VAR' }}"
stackql.exe shell --auth=$Auth

```
</details>


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/kafka/">kafka</a><br />
<a href="/services/share_group/">share_group</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/streams_group/">streams_group</a><br />
</div>
</div>
