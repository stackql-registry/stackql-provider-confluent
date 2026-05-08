--- 
title: consumer_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - consumer_assignments
  - share_group
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

Creates, updates, deletes, gets or lists a <code>consumer_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consumer_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.share_group.consumer_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_kafka_share_group_consumer_assignments"
    values={[
        { label: 'list_kafka_share_group_consumer_assignments', value: 'list_kafka_share_group_consumer_assignments' }
    ]}
>
<TabItem value="list_kafka_share_group_consumer_assignments">

The list of share group assignments.

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
    <td><CopyableCode code="consumer_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
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
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partition" /></td>
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
    <td><a href="#list_kafka_share_group_consumer_assignments"><CopyableCode code="list_kafka_share_group_consumer_assignments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-consumer_id"><code>consumer_id</code></a></td>
    <td></td>
    <td>Return the consumer assignments specified by the ``consumer_id``.</td>
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
<tr id="parameter-consumer_id">
    <td><CopyableCode code="consumer_id" /></td>
    <td><code>string</code></td>
    <td>The consumer ID. (example: consumer-1)</td>
</tr>
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The group ID. (example: group-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_kafka_share_group_consumer_assignments"
    values={[
        { label: 'list_kafka_share_group_consumer_assignments', value: 'list_kafka_share_group_consumer_assignments' }
    ]}
>
<TabItem value="list_kafka_share_group_consumer_assignments">

Return the consumer assignments specified by the ``consumer_id``.

```sql
SELECT
cluster_id,
consumer_id,
group_id,
partition_id,
topic_name,
kind,
metadata,
partition
FROM confluent.share_group.consumer_assignments
WHERE cluster_id = '{{ cluster_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND consumer_id = '{{ consumer_id }}' -- required
;
```
</TabItem>
</Tabs>
