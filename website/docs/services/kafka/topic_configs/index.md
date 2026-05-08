--- 
title: topic_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_configs
  - kafka
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

Creates, updates, deletes, gets or lists a <code>topic_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.topic_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_topic_config"
    values={[
        { label: 'get_kafka_topic_config', value: 'get_kafka_topic_config' },
        { label: 'list_kafka_topic_configs', value: 'list_kafka_topic_configs' },
        { label: 'list_kafka_all_topic_configs', value: 'list_kafka_all_topic_configs' }
    ]}
>
<TabItem value="get_kafka_topic_config">

The topic configuration parameter.

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
    <td><CopyableCode code="topic_name" /></td>
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
<TabItem value="list_kafka_topic_configs">

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
    <td><CopyableCode code="topic_name" /></td>
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
<TabItem value="list_kafka_all_topic_configs">

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
    <td><CopyableCode code="topic_name" /></td>
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
    <td><a href="#get_kafka_topic_config"><CopyableCode code="get_kafka_topic_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Return the configuration parameter with the given `name`.</td>
</tr>
<tr>
    <td><a href="#list_kafka_topic_configs"><CopyableCode code="list_kafka_topic_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a></td>
    <td></td>
    <td>Return the list of configuration parameters that belong to the specified topic.</td>
</tr>
<tr>
    <td><a href="#list_kafka_all_topic_configs"><CopyableCode code="list_kafka_all_topic_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a></td>
    <td></td>
    <td>Return the list of configuration parameters for all topics hosted by the specified<br />cluster.</td>
</tr>
<tr>
    <td><a href="#update_kafka_topic_config"><CopyableCode code="update_kafka_topic_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update the configuration parameter with given `name`. To update the<br />number of partitions, see<br />https://docs.confluent.io/cloud/current/api.html#tag/Topic-(v3)/operation/updatePartitionCountKafkaTopic.</td>
</tr>
<tr>
    <td><a href="#update_kafka_topic_config_batch"><CopyableCode code="update_kafka_topic_config_batch" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update or delete a set of topic configuration parameters.<br />Also supports a dry-run mode that only validates whether the operation would succeed if the<br />``validate_only`` request property is explicitly specified and set to true.</td>
</tr>
<tr>
    <td><a href="#delete_kafka_topic_config"><CopyableCode code="delete_kafka_topic_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Reset the configuration parameter with given `name` to its default value.</td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The Kafka cluster ID. (example: cluster-1)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The configuration parameter name. (example: compression.type)</td>
</tr>
<tr id="parameter-topic_name">
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td>The topic name. (example: topic-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_topic_config"
    values={[
        { label: 'get_kafka_topic_config', value: 'get_kafka_topic_config' },
        { label: 'list_kafka_topic_configs', value: 'list_kafka_topic_configs' },
        { label: 'list_kafka_all_topic_configs', value: 'list_kafka_all_topic_configs' }
    ]}
>
<TabItem value="get_kafka_topic_config">

Return the configuration parameter with the given `name`.

```sql
SELECT
name,
cluster_id,
topic_name,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM confluent.kafka.topic_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
AND topic_name = '{{ topic_name }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_topic_configs">

Return the list of configuration parameters that belong to the specified topic.

```sql
SELECT
name,
cluster_id,
topic_name,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM confluent.kafka.topic_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
AND topic_name = '{{ topic_name }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_all_topic_configs">

Return the list of configuration parameters for all topics hosted by the specified<br />cluster.

```sql
SELECT
name,
cluster_id,
topic_name,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM confluent.kafka.topic_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_kafka_topic_config"
    values={[
        { label: 'update_kafka_topic_config', value: 'update_kafka_topic_config' },
        { label: 'update_kafka_topic_config_batch', value: 'update_kafka_topic_config_batch' }
    ]}
>
<TabItem value="update_kafka_topic_config">

Update the configuration parameter with given `name`. To update the<br />number of partitions, see<br />https://docs.confluent.io/cloud/current/api.html#tag/Topic-(v3)/operation/updatePartitionCountKafkaTopic.

```sql
REPLACE confluent.kafka.topic_configs
SET 
value = '{{ value }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND topic_name = '{{ topic_name }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
<TabItem value="update_kafka_topic_config_batch">

Update or delete a set of topic configuration parameters.<br />Also supports a dry-run mode that only validates whether the operation would succeed if the<br />``validate_only`` request property is explicitly specified and set to true.

```sql
REPLACE confluent.kafka.topic_configs
SET 
data = '{{ data }}',
validate_only = {{ validate_only }}
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND topic_name = '{{ topic_name }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_topic_config"
    values={[
        { label: 'delete_kafka_topic_config', value: 'delete_kafka_topic_config' }
    ]}
>
<TabItem value="delete_kafka_topic_config">

Reset the configuration parameter with given `name` to its default value.

```sql
DELETE FROM confluent.kafka.topic_configs
WHERE cluster_id = '{{ cluster_id }}' --required
AND topic_name = '{{ topic_name }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
