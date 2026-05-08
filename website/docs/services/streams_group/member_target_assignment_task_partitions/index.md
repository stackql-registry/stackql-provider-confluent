--- 
title: member_target_assignment_task_partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - member_target_assignment_task_partitions
  - streams_group
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

Creates, updates, deletes, gets or lists a <code>member_target_assignment_task_partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="member_target_assignment_task_partitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.streams_group.member_target_assignment_task_partitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_streams_group_member_target_assignment_task_partitions"
    values={[
        { label: 'get_kafka_streams_group_member_target_assignment_task_partitions', value: 'get_kafka_streams_group_member_target_assignment_task_partitions' }
    ]}
>
<TabItem value="get_kafka_streams_group_member_target_assignment_task_partitions">

The partitions of a streams member task.

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
    <td><CopyableCode code="subtopology_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Streams subtopology.</td>
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
    <td><CopyableCode code="partition_ids" /></td>
    <td><code>array</code></td>
    <td>The list of partition IDs assigned to the Streams task.</td>
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
    <td><a href="#get_kafka_streams_group_member_target_assignment_task_partitions"><CopyableCode code="get_kafka_streams_group_member_target_assignment_task_partitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Return the tasks of the member specified by the ``member_id``, and the type ``assignments_type``.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_streams_group_member_target_assignment_task_partitions"
    values={[
        { label: 'get_kafka_streams_group_member_target_assignment_task_partitions', value: 'get_kafka_streams_group_member_target_assignment_task_partitions' }
    ]}
>
<TabItem value="get_kafka_streams_group_member_target_assignment_task_partitions">

Return the tasks of the member specified by the ``member_id``, and the type ``assignments_type``.

```sql
SELECT
subtopology_id,
kind,
metadata,
partition_ids
FROM confluent.streams_group.member_target_assignment_task_partitions
;
```
</TabItem>
</Tabs>
