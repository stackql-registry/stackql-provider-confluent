--- 
title: cluster_link_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_link_configs
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

Creates, updates, deletes, gets or lists a <code>cluster_link_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_link_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="kafka.kafka.cluster_link_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_link_configs"
    values={[
        { label: 'get_kafka_link_configs', value: 'get_kafka_link_configs' },
        { label: 'list_kafka_link_configs', value: 'list_kafka_link_configs' }
    ]}
>
<TabItem value="get_kafka_link_configs">

Config name and value

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
    <td><CopyableCode code="link_name" /></td>
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
<TabItem value="list_kafka_link_configs">

Config name and value

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
    <td><CopyableCode code="link_name" /></td>
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
    <td><a href="#get_kafka_link_configs"><CopyableCode code="get_kafka_link_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-config_name"><code>config_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list_kafka_link_configs"><CopyableCode code="list_kafka_link_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_link_config"><CopyableCode code="update_kafka_link_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-config_name"><code>config_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_link_config_batch"><CopyableCode code="update_kafka_link_config_batch" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td>Batch Alter Cluster Link Configs</td>
</tr>
<tr>
    <td><a href="#delete_kafka_link_config"><CopyableCode code="delete_kafka_link_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-config_name"><code>config_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-config_name">
    <td><CopyableCode code="config_name" /></td>
    <td><code>string</code></td>
    <td>The link config name (example: consumer.offset.sync.enable)</td>
</tr>
<tr id="parameter-kafka_endpoint_id">
    <td><CopyableCode code="kafka_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>Per-cluster Kafka REST endpoint ID (the pkc-* host prefix from the Confluent UI Cluster -&gt; Overview -&gt; REST endpoint, or extract from confluent.managed_kafka_clusters.clusters spec.http_endpoint). (default: pkc-00000)</td>
</tr>
<tr id="parameter-link_name">
    <td><CopyableCode code="link_name" /></td>
    <td><code>string</code></td>
    <td>The link name (example: link-sb1)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cloud region the cluster runs in, e.g. ap-southeast-2 (from the cluster spec.region). (default: region)</td>
</tr>
<tr id="parameter-validate_only">
    <td><CopyableCode code="validate_only" /></td>
    <td><code>boolean</code></td>
    <td>To validate the action can be performed successfully or not. Default: false (example: false)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_link_configs"
    values={[
        { label: 'get_kafka_link_configs', value: 'get_kafka_link_configs' },
        { label: 'list_kafka_link_configs', value: 'list_kafka_link_configs' }
    ]}
>
<TabItem value="get_kafka_link_configs">



```sql
SELECT
name,
cluster_id,
link_name,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM kafka.kafka.cluster_link_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
AND link_name = '{{ link_name }}' -- required
AND config_name = '{{ config_name }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_link_configs">



```sql
SELECT
name,
cluster_id,
link_name,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM kafka.kafka.cluster_link_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
AND link_name = '{{ link_name }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_kafka_link_config"
    values={[
        { label: 'update_kafka_link_config', value: 'update_kafka_link_config' },
        { label: 'update_kafka_link_config_batch', value: 'update_kafka_link_config_batch' }
    ]}
>
<TabItem value="update_kafka_link_config">



```sql
REPLACE kafka.kafka.cluster_link_configs
SET 
value = '{{ value }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND link_name = '{{ link_name }}' --required
AND config_name = '{{ config_name }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required
AND value = '{{ value }}' --required;
```
</TabItem>
<TabItem value="update_kafka_link_config_batch">

Batch Alter Cluster Link Configs

```sql
REPLACE kafka.kafka.cluster_link_configs
SET 
data = '{{ data }}',
validate_only = {{ validate_only }}
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND link_name = '{{ link_name }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required
AND data = '{{ data }}' --required
AND validate_only = {{ validate_only}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_link_config"
    values={[
        { label: 'delete_kafka_link_config', value: 'delete_kafka_link_config' }
    ]}
>
<TabItem value="delete_kafka_link_config">



```sql
DELETE FROM kafka.kafka.cluster_link_configs
WHERE cluster_id = '{{ cluster_id }}' --required
AND link_name = '{{ link_name }}' --required
AND config_name = '{{ config_name }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required
;
```
</TabItem>
</Tabs>
