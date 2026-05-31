--- 
title: vw_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - vw_clusters
  - managed_kafka_clusters
  - confluent
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage confluent resources using SQL
custom_edit_url: null
image: /img/stackql-confluent-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>vw_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vw_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>View</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.managed_kafka_clusters.vw_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by this view:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Environment ID used to scope the cluster list (required `WHERE` parameter; echoed back as a column).</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cluster ID (e.g. lkc-50r5wn).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Object kind (always `Cluster`).</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Confluent API version (e.g. `cmk/v2`).</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Human-readable cluster name.</td>
</tr>
<tr>
    <td><CopyableCode code="availability" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cluster availability tier (e.g. LOW, HIGH).</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cloud provider (AWS, GCP, AZURE).</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cloud region the cluster runs in.</td>
</tr>
<tr>
    <td><CopyableCode code="config_kind" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cluster sizing kind (Basic, Standard, Enterprise, Dedicated, Freight).</td>
</tr>
<tr>
    <td><CopyableCode code="max_ecku" /></td>
    <td><CopyableCode code="integer" /></td>
    <td>Maximum eCKU count for elastic clusters.</td>
</tr>
<tr>
    <td><CopyableCode code="api_endpoint" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cluster REST API endpoint URL.</td>
</tr>
<tr>
    <td><CopyableCode code="http_endpoint" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cluster HTTP endpoint URL.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_bootstrap_endpoint" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Kafka bootstrap endpoint URL (SASL_SSL://...).</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><CopyableCode code="string" /></td>
    <td>ID of the environment that owns this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_resource_name" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Confluent Resource Name (CRN) of the owning environment.</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Cluster lifecycle phase (e.g. PROVISIONED).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Timestamp when the cluster was created (ISO 8601).</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Timestamp when the cluster was last updated (ISO 8601).</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Confluent Resource Name (CRN) for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Self-link URL for this cluster.</td>
</tr>
</tbody>
</table>

## Required Parameters

The following parameters are required by this view:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><CopyableCode code="string" /></td>
    <td>Environment ID used to scope the cluster list.</td>
</tr>
</tbody>
</table>

## `SELECT` Examples

```sql
SELECT
  environment,
  id,
  kind,
  api_version,
  display_name,
  availability,
  cloud,
  region,
  config_kind,
  max_ecku,
  api_endpoint,
  http_endpoint,
  kafka_bootstrap_endpoint,
  environment_id,
  environment_resource_name,
  phase,
  created_at,
  updated_at,
  resource_name,
  self
FROM confluent.managed_kafka_clusters.vw_clusters
WHERE environment = '{{ environment }}';
```

## SQL Definition

<Tabs
defaultValue="Sqlite3"
values={[
{ label: 'Sqlite3', value: 'Sqlite3' },
{ label: 'Postgres', value: 'Postgres' }
]}
>
<TabItem value="Sqlite3">

```sql
SELECT
  id,
  kind,
  api_version,
  environment,
  JSON_EXTRACT(spec, '$.display_name') AS display_name,
  JSON_EXTRACT(spec, '$.availability') AS availability,
  JSON_EXTRACT(spec, '$.cloud') AS cloud,
  JSON_EXTRACT(spec, '$.region') AS region,
  JSON_EXTRACT(spec, '$.config.kind') AS config_kind,
  JSON_EXTRACT(spec, '$.config.max_ecku') AS max_ecku,
  JSON_EXTRACT(spec, '$.api_endpoint') AS api_endpoint,
  JSON_EXTRACT(spec, '$.http_endpoint') AS http_endpoint,
  JSON_EXTRACT(spec, '$.kafka_bootstrap_endpoint') AS kafka_bootstrap_endpoint,
  JSON_EXTRACT(spec, '$.environment.id') AS environment_id,
  JSON_EXTRACT(spec, '$.environment.resource_name') AS environment_resource_name,
  JSON_EXTRACT(status, '$.phase') AS phase,
  JSON_EXTRACT(metadata, '$.created_at') AS created_at,
  JSON_EXTRACT(metadata, '$.updated_at') AS updated_at,
  JSON_EXTRACT(metadata, '$.resource_name') AS resource_name,
  JSON_EXTRACT(metadata, '$.self') AS self
FROM confluent.managed_kafka_clusters.clusters
WHERE environment = '{{ environment }}'
```

</TabItem>
<TabItem value="Postgres">

```sql
SELECT
  id,
  kind,
  api_version,
  environment,
  spec->>'display_name' AS display_name,
  spec->>'availability' AS availability,
  spec->>'cloud' AS cloud,
  spec->>'region' AS region,
  spec->'config'->>'kind' AS config_kind,
  (spec->'config'->>'max_ecku')::integer AS max_ecku,
  spec->>'api_endpoint' AS api_endpoint,
  spec->>'http_endpoint' AS http_endpoint,
  spec->>'kafka_bootstrap_endpoint' AS kafka_bootstrap_endpoint,
  spec->'environment'->>'id' AS environment_id,
  spec->'environment'->>'resource_name' AS environment_resource_name,
  status->>'phase' AS phase,
  metadata->>'created_at' AS created_at,
  metadata->>'updated_at' AS updated_at,
  metadata->>'resource_name' AS resource_name,
  metadata->>'self' AS self
FROM confluent.managed_kafka_clusters.clusters
WHERE environment = '{{ environment }}'
```

</TabItem>
</Tabs>
