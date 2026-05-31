--- 
title: cluster_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_configs
  - kafka
  - kafka
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage kafka resources using SQL
custom_edit_url: null
image: /img/stackql-kafka-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>cluster_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="kafka.kafka.cluster_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_cluster_config"
    values={[
        { label: 'get_kafka_cluster_config', value: 'get_kafka_cluster_config' },
        { label: 'list_kafka_cluster_configs', value: 'list_kafka_cluster_configs' }
    ]}
>
<TabItem value="get_kafka_cluster_config">

The cluster configuration parameter.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="config_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_sensitive" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="synonyms" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_cluster_configs">

The list of cluster configs.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="config_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_sensitive" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="synonyms" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_kafka_cluster_config"><CopyableCode code="get_kafka_cluster_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Return the dynamic cluster-wide broker configuration parameter specified by ``name``.</td>
</tr>
<tr>
    <td><a href="#list_kafka_cluster_configs"><CopyableCode code="list_kafka_cluster_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Return a list of dynamic cluster-wide broker configuration parameters for the specified Kafka<br />cluster. Returns an empty list if there are no dynamic cluster-wide broker configuration parameters.</td>
</tr>
<tr>
    <td><a href="#update_kafka_cluster_config"><CopyableCode code="update_kafka_cluster_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Update the dynamic cluster-wide broker configuration parameter specified by ``name``.</td>
</tr>
<tr>
    <td><a href="#update_kafka_cluster_configs"><CopyableCode code="update_kafka_cluster_configs" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update or delete a set of dynamic cluster-wide broker configuration parameters.</td>
</tr>
<tr>
    <td><a href="#delete_kafka_cluster_config"><CopyableCode code="delete_kafka_cluster_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Reset the configuration parameter specified by ``name`` to its<br />default value by deleting a dynamic cluster-wide configuration.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-cloud_provider">
    <td><CopyableCode code="cloud_provider" /></td>
    <td><code>string</code></td>
    <td>Cloud provider, lowercase: aws, gcp, or azure (from the cluster spec.cloud). (default: cloud)</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The Kafka cluster ID. (example: cluster-1)</td>
</tr>
<tr id="parameter-kafka_endpoint_id">
    <td><CopyableCode code="kafka_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>Per-cluster Kafka REST endpoint ID (the pkc-* host prefix from the Confluent UI Cluster -&gt; Overview -&gt; REST endpoint, or extract from confluent.managed_kafka_clusters.clusters spec.http_endpoint). (default: pkc-00000)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The configuration parameter name. (example: compression.type)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cloud region the cluster runs in, e.g. ap-southeast-2 (from the cluster spec.region). (default: region)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_cluster_config"
    values={[
        { label: 'get_kafka_cluster_config', value: 'get_kafka_cluster_config' },
        { label: 'list_kafka_cluster_configs', value: 'list_kafka_cluster_configs' }
    ]}
>
<TabItem value="get_kafka_cluster_config">

Return the dynamic cluster-wide broker configuration parameter specified by ``name``.

```sql
SELECT
name,
cluster_id,
config_type,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM kafka.kafka.cluster_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
AND name = '{{ name }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_cluster_configs">

Return a list of dynamic cluster-wide broker configuration parameters for the specified Kafka<br />cluster. Returns an empty list if there are no dynamic cluster-wide broker configuration parameters.

```sql
SELECT
name,
cluster_id,
config_type,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM kafka.kafka.cluster_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_kafka_cluster_config"
    values={[
        { label: 'update_kafka_cluster_config', value: 'update_kafka_cluster_config' },
        { label: 'update_kafka_cluster_configs', value: 'update_kafka_cluster_configs' }
    ]}
>
<TabItem value="update_kafka_cluster_config">

Update the dynamic cluster-wide broker configuration parameter specified by ``name``.

```sql
REPLACE kafka.kafka.cluster_configs
SET 
value = '{{ value }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND name = '{{ name }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required;
```
</TabItem>
<TabItem value="update_kafka_cluster_configs">

Update or delete a set of dynamic cluster-wide broker configuration parameters.

```sql
REPLACE kafka.kafka.cluster_configs
SET 
data = '{{ data }}',
validate_only = {{ validate_only }}
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_cluster_config"
    values={[
        { label: 'delete_kafka_cluster_config', value: 'delete_kafka_cluster_config' }
    ]}
>
<TabItem value="delete_kafka_cluster_config">

Reset the configuration parameter specified by ``name`` to its<br />default value by deleting a dynamic cluster-wide configuration.

```sql
DELETE FROM kafka.kafka.cluster_configs
WHERE cluster_id = '{{ cluster_id }}' --required
AND name = '{{ name }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required
;
```
</TabItem>
</Tabs>
