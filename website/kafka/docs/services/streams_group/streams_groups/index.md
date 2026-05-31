--- 
title: streams_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - streams_groups
  - streams_group
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

Creates, updates, deletes, gets or lists a <code>streams_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="kafka.streams_group.streams_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_streams_group"
    values={[
        { label: 'get_kafka_streams_group', value: 'get_kafka_streams_group' },
        { label: 'list_kafka_streams_groups', value: 'list_kafka_streams_groups' }
    ]}
>
<TabItem value="get_kafka_streams_group">

The streams group.

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
    <td>The unique identifier of the Kafka cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_epoch" /></td>
    <td><code>integer</code></td>
    <td>The epoch of the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="member_count" /></td>
    <td><code>integer</code></td>
    <td>The number of members in the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="subtopologies" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subtopology_count" /></td>
    <td><code>integer</code></td>
    <td>The number of subtopologies in the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="target_assignment_epoch" /></td>
    <td><code>integer</code></td>
    <td>The epoch of the target assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="topology_epoch" /></td>
    <td><code>integer</code></td>
    <td>The epoch of the Streams topology.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_streams_groups">

The list of streams groups.

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
    <td>The unique identifier of the Kafka cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_epoch" /></td>
    <td><code>integer</code></td>
    <td>The epoch of the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="member_count" /></td>
    <td><code>integer</code></td>
    <td>The number of members in the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="subtopologies" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subtopology_count" /></td>
    <td><code>integer</code></td>
    <td>The number of subtopologies in the Streams group.</td>
</tr>
<tr>
    <td><CopyableCode code="target_assignment_epoch" /></td>
    <td><code>integer</code></td>
    <td>The epoch of the target assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="topology_epoch" /></td>
    <td><code>integer</code></td>
    <td>The epoch of the Streams topology.</td>
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
    <td><a href="#get_kafka_streams_group"><CopyableCode code="get_kafka_streams_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Return the streams group specified by the ``group_id``.</td>
</tr>
<tr>
    <td><a href="#list_kafka_streams_groups"><CopyableCode code="list_kafka_streams_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Return the list of streams groups that belong to the specified Kafka cluster</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The group ID. (example: group-1)</td>
</tr>
<tr id="parameter-kafka_endpoint_id">
    <td><CopyableCode code="kafka_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>Per-cluster Kafka REST endpoint ID (the pkc-* host prefix from the Confluent UI Cluster -&gt; Overview -&gt; REST endpoint, or extract from confluent.managed_kafka_clusters.clusters spec.http_endpoint). (default: pkc-00000)</td>
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
    defaultValue="get_kafka_streams_group"
    values={[
        { label: 'get_kafka_streams_group', value: 'get_kafka_streams_group' },
        { label: 'list_kafka_streams_groups', value: 'list_kafka_streams_groups' }
    ]}
>
<TabItem value="get_kafka_streams_group">

Return the streams group specified by the ``group_id``.

```sql
SELECT
cluster_id,
group_id,
group_epoch,
kind,
member_count,
members,
metadata,
state,
subtopologies,
subtopology_count,
target_assignment_epoch,
topology_epoch
FROM kafka.streams_group.streams_groups
WHERE cluster_id = '{{ cluster_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_streams_groups">

Return the list of streams groups that belong to the specified Kafka cluster

```sql
SELECT
cluster_id,
group_id,
group_epoch,
kind,
member_count,
members,
metadata,
state,
subtopologies,
subtopology_count,
target_assignment_epoch,
topology_epoch
FROM kafka.streams_group.streams_groups
WHERE cluster_id = '{{ cluster_id }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
</Tabs>
