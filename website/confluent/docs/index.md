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
