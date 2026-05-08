--- 
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
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

Creates, updates, deletes, gets or lists a <code>topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_topic"
    values={[
        { label: 'get_kafka_topic', value: 'get_kafka_topic' },
        { label: 'list_kafka_topics', value: 'list_kafka_topics' }
    ]}
>
<TabItem value="get_kafka_topic">

The topic.

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
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="authorized_operations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="configs" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_internal" /></td>
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
    <td><CopyableCode code="partition_reassignments" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partitions_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="replication_factor" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_topics">

The list of topics.

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
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="authorized_operations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="configs" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_internal" /></td>
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
    <td><CopyableCode code="partition_reassignments" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partitions_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="replication_factor" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#get_kafka_topic"><CopyableCode code="get_kafka_topic" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-include_authorized_operations"><code>include_authorized_operations</code></a></td>
    <td>Return the topic with the given `topic_name`.</td>
</tr>
<tr>
    <td><a href="#list_kafka_topics"><CopyableCode code="list_kafka_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Return the list of topics that belong to the specified Kafka cluster.</td>
</tr>
<tr>
    <td><a href="#create_kafka_topic"><CopyableCode code="create_kafka_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a></td>
    <td></td>
    <td>Create a topic.<br />Also supports a dry-run mode that only validates whether the topic creation would succeed<br />if the ``validate_only`` request property is explicitly specified and set to true. Note that<br />when dry-run mode is being used the response status would be 200 OK instead of 201 Created.</td>
</tr>
<tr>
    <td><a href="#update_partition_count_kafka_topic"><CopyableCode code="update_partition_count_kafka_topic" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a>, <a href="#parameter-partitions_count"><code>partitions_count</code></a></td>
    <td></td>
    <td>Increase the number of partitions for a topic. To update other topic<br />configurations, see https://docs.confluent.io/cloud/current/api.html#tag/Configs-(v3)/operation/updateKafkaTopicConfig.</td>
</tr>
<tr>
    <td><a href="#delete_kafka_topic"><CopyableCode code="delete_kafka_topic" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Delete the topic with the given `topic_name`.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cloud region the cluster runs in, e.g. ap-southeast-2 (from the cluster spec.region). (default: region)</td>
</tr>
<tr id="parameter-topic_name">
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td>The topic name. (example: topic-1)</td>
</tr>
<tr id="parameter-include_authorized_operations">
    <td><CopyableCode code="include_authorized_operations" /></td>
    <td><code>boolean</code></td>
    <td>Specify if authorized operations should be included in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_topic"
    values={[
        { label: 'get_kafka_topic', value: 'get_kafka_topic' },
        { label: 'list_kafka_topics', value: 'list_kafka_topics' }
    ]}
>
<TabItem value="get_kafka_topic">

Return the topic with the given `topic_name`.

```sql
SELECT
cluster_id,
topic_name,
authorized_operations,
configs,
is_internal,
kind,
metadata,
partition_reassignments,
partitions,
partitions_count,
replication_factor
FROM confluent.kafka.topics
WHERE cluster_id = '{{ cluster_id }}' -- required
AND topic_name = '{{ topic_name }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
AND include_authorized_operations = '{{ include_authorized_operations }}'
;
```
</TabItem>
<TabItem value="list_kafka_topics">

Return the list of topics that belong to the specified Kafka cluster.

```sql
SELECT
cluster_id,
topic_name,
authorized_operations,
configs,
is_internal,
kind,
metadata,
partition_reassignments,
partitions,
partitions_count,
replication_factor
FROM confluent.kafka.topics
WHERE cluster_id = '{{ cluster_id }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kafka_topic"
    values={[
        { label: 'create_kafka_topic', value: 'create_kafka_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kafka_topic">

Create a topic.<br />Also supports a dry-run mode that only validates whether the topic creation would succeed<br />if the ``validate_only`` request property is explicitly specified and set to true. Note that<br />when dry-run mode is being used the response status would be 200 OK instead of 201 Created.

```sql
INSERT INTO confluent.kafka.topics (
topic_name,
partitions_count,
replication_factor,
configs,
validate_only,
cluster_id,
kafka_endpoint_id,
region,
cloud_provider
)
SELECT 
'{{ topic_name }}' /* required */,
{{ partitions_count }},
{{ replication_factor }},
'{{ configs }}',
{{ validate_only }},
'{{ cluster_id }}',
'{{ kafka_endpoint_id }}',
'{{ region }}',
'{{ cloud_provider }}'
RETURNING
cluster_id,
topic_name,
authorized_operations,
configs,
is_internal,
kind,
metadata,
partition_reassignments,
partitions,
partitions_count,
replication_factor
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topics
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the topics resource.
    - name: kafka_endpoint_id
      value: "{{ kafka_endpoint_id }}"
      description: Required parameter for the topics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the topics resource.
    - name: cloud_provider
      value: "{{ cloud_provider }}"
      description: Required parameter for the topics resource.
    - name: topic_name
      value: "{{ topic_name }}"
    - name: partitions_count
      value: {{ partitions_count }}
    - name: replication_factor
      value: {{ replication_factor }}
    - name: configs
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: validate_only
      value: {{ validate_only }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_partition_count_kafka_topic"
    values={[
        { label: 'update_partition_count_kafka_topic', value: 'update_partition_count_kafka_topic' }
    ]}
>
<TabItem value="update_partition_count_kafka_topic">

Increase the number of partitions for a topic. To update other topic<br />configurations, see https://docs.confluent.io/cloud/current/api.html#tag/Configs-(v3)/operation/updateKafkaTopicConfig.

```sql
UPDATE confluent.kafka.topics
SET 
partitions_count = {{ partitions_count }}
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND topic_name = '{{ topic_name }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required
AND partitions_count = '{{ partitions_count }}' --required
RETURNING
cluster_id,
topic_name,
authorized_operations,
configs,
is_internal,
kind,
metadata,
partition_reassignments,
partitions,
partitions_count,
replication_factor;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_topic"
    values={[
        { label: 'delete_kafka_topic', value: 'delete_kafka_topic' }
    ]}
>
<TabItem value="delete_kafka_topic">

Delete the topic with the given `topic_name`.

```sql
DELETE FROM confluent.kafka.topics
WHERE cluster_id = '{{ cluster_id }}' --required
AND topic_name = '{{ topic_name }}' --required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' --required
AND region = '{{ region }}' --required
AND cloud_provider = '{{ cloud_provider }}' --required
;
```
</TabItem>
</Tabs>
