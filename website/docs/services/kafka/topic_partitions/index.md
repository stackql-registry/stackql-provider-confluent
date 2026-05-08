--- 
title: topic_partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_partitions
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

Creates, updates, deletes, gets or lists a <code>topic_partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_partitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.topic_partitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_partition"
    values={[
        { label: 'get_kafka_partition', value: 'get_kafka_partition' },
        { label: 'list_kafka_partitions', value: 'list_kafka_partitions' }
    ]}
>
<TabItem value="get_kafka_partition">

The partition

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
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partition_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="leader" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reassignment" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="replicas" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_partitions">

The list of partitions.

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
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partition_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="leader" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reassignment" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="replicas" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get_kafka_partition"><CopyableCode code="get_kafka_partition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-partition_id"><code>partition_id</code></a></td>
    <td></td>
    <td>Return the partition with the given `partition_id`.</td>
</tr>
<tr>
    <td><a href="#list_kafka_partitions"><CopyableCode code="list_kafka_partitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a></td>
    <td></td>
    <td>Return the list of partitions that belong to the specified topic.</td>
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
<tr id="parameter-partition_id">
    <td><CopyableCode code="partition_id" /></td>
    <td><code>integer</code></td>
    <td>The partition ID. (example: 0)</td>
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
    defaultValue="get_kafka_partition"
    values={[
        { label: 'get_kafka_partition', value: 'get_kafka_partition' },
        { label: 'list_kafka_partitions', value: 'list_kafka_partitions' }
    ]}
>
<TabItem value="get_kafka_partition">

Return the partition with the given `partition_id`.

```sql
SELECT
cluster_id,
partition_id,
topic_name,
kind,
leader,
metadata,
reassignment,
replicas
FROM confluent.kafka.topic_partitions
WHERE cluster_id = '{{ cluster_id }}' -- required
AND topic_name = '{{ topic_name }}' -- required
AND partition_id = '{{ partition_id }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_partitions">

Return the list of partitions that belong to the specified topic.

```sql
SELECT
cluster_id,
partition_id,
topic_name,
kind,
leader,
metadata,
reassignment,
replicas
FROM confluent.kafka.topic_partitions
WHERE cluster_id = '{{ cluster_id }}' -- required
AND topic_name = '{{ topic_name }}' -- required
;
```
</TabItem>
</Tabs>
