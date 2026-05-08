--- 
title: consumers
hide_title: false
hide_table_of_contents: false
keywords:
  - consumers
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

Creates, updates, deletes, gets or lists a <code>consumers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consumers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.consumers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_consumer"
    values={[
        { label: 'get_kafka_consumer', value: 'get_kafka_consumer' },
        { label: 'list_kafka_consumers', value: 'list_kafka_consumers' }
    ]}
>
<TabItem value="get_kafka_consumer">

The consumer.

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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="consumer_group_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="consumer_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="assignments" /></td>
    <td><code>object</code></td>
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
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_consumers">

The list of consumers.

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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="consumer_group_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="consumer_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="assignments" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get_kafka_consumer"><CopyableCode code="get_kafka_consumer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-consumer_group_id"><code>consumer_group_id</code></a>, <a href="#parameter-consumer_id"><code>consumer_id</code></a></td>
    <td></td>
    <td>Return the consumer specified by the ``consumer_id``.</td>
</tr>
<tr>
    <td><a href="#list_kafka_consumers"><CopyableCode code="list_kafka_consumers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-consumer_group_id"><code>consumer_group_id</code></a></td>
    <td></td>
    <td>Return a list of consumers that belong to the specified consumer<br />group.</td>
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
<tr id="parameter-consumer_group_id">
    <td><CopyableCode code="consumer_group_id" /></td>
    <td><code>string</code></td>
    <td>The consumer group ID. (example: consumer-group-1)</td>
</tr>
<tr id="parameter-consumer_id">
    <td><CopyableCode code="consumer_id" /></td>
    <td><code>string</code></td>
    <td>The consumer ID. (example: consumer-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_consumer"
    values={[
        { label: 'get_kafka_consumer', value: 'get_kafka_consumer' },
        { label: 'list_kafka_consumers', value: 'list_kafka_consumers' }
    ]}
>
<TabItem value="get_kafka_consumer">

Return the consumer specified by the ``consumer_id``.

```sql
SELECT
client_id,
cluster_id,
consumer_group_id,
consumer_id,
instance_id,
assignments,
kind,
metadata
FROM confluent.kafka.consumers
WHERE cluster_id = '{{ cluster_id }}' -- required
AND consumer_group_id = '{{ consumer_group_id }}' -- required
AND consumer_id = '{{ consumer_id }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_consumers">

Return a list of consumers that belong to the specified consumer<br />group.

```sql
SELECT
client_id,
cluster_id,
consumer_group_id,
consumer_id,
instance_id,
assignments,
kind,
metadata
FROM confluent.kafka.consumers
WHERE cluster_id = '{{ cluster_id }}' -- required
AND consumer_group_id = '{{ consumer_group_id }}' -- required
;
```
</TabItem>
</Tabs>
