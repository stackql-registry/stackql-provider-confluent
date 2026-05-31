--- 
title: subtopologies
hide_title: false
hide_table_of_contents: false
keywords:
  - subtopologies
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

Creates, updates, deletes, gets or lists a <code>subtopologies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subtopologies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="kafka.streams_group.subtopologies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_streams_group_subtopology"
    values={[
        { label: 'get_kafka_streams_group_subtopology', value: 'get_kafka_streams_group_subtopology' },
        { label: 'list_kafka_streams_group_subtopologies', value: 'list_kafka_streams_group_subtopologies' }
    ]}
>
<TabItem value="get_kafka_streams_group_subtopology">

The streams group subtopology.

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
    <td><CopyableCode code="source_topics" /></td>
    <td><code>array</code></td>
    <td>The list of source topics for the subtopology.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_streams_group_subtopologies">

The list of subtoplogies of the streams group

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
    <td><CopyableCode code="source_topics" /></td>
    <td><code>array</code></td>
    <td>The list of source topics for the subtopology.</td>
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
    <td><a href="#get_kafka_streams_group_subtopology"><CopyableCode code="get_kafka_streams_group_subtopology" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-subtopology_id"><code>subtopology_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Return the subtopology specified by the ``subtopology_id``.</td>
</tr>
<tr>
    <td><a href="#list_kafka_streams_group_subtopologies"><CopyableCode code="list_kafka_streams_group_subtopologies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Return a list of subtopologies that belong to the specified streams group.</td>
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
<tr id="parameter-subtopology_id">
    <td><CopyableCode code="subtopology_id" /></td>
    <td><code>string</code></td>
    <td>The streams subtopology ID. (example: subtopology-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_streams_group_subtopology"
    values={[
        { label: 'get_kafka_streams_group_subtopology', value: 'get_kafka_streams_group_subtopology' },
        { label: 'list_kafka_streams_group_subtopologies', value: 'list_kafka_streams_group_subtopologies' }
    ]}
>
<TabItem value="get_kafka_streams_group_subtopology">

Return the subtopology specified by the ``subtopology_id``.

```sql
SELECT
cluster_id,
group_id,
subtopology_id,
kind,
metadata,
source_topics
FROM kafka.streams_group.subtopologies
WHERE cluster_id = '{{ cluster_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND subtopology_id = '{{ subtopology_id }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_streams_group_subtopologies">

Return a list of subtopologies that belong to the specified streams group.

```sql
SELECT
cluster_id,
group_id,
subtopology_id,
kind,
metadata,
source_topics
FROM kafka.streams_group.subtopologies
WHERE cluster_id = '{{ cluster_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
</Tabs>
