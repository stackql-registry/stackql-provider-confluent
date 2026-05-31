--- 
title: mirror_topics
hide_title: false
hide_table_of_contents: false
keywords:
  - mirror_topics
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

Creates, updates, deletes, gets or lists a <code>mirror_topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mirror_topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="kafka.kafka.mirror_topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="read_kafka_mirror_topic"
    values={[
        { label: 'read_kafka_mirror_topic', value: 'read_kafka_mirror_topic' },
        { label: 'list_kafka_mirror_topics_under_link', value: 'list_kafka_mirror_topics_under_link' },
        { label: 'list_kafka_mirror_topics', value: 'list_kafka_mirror_topics' }
    ]}
>
<TabItem value="read_kafka_mirror_topic">

Metadata of the mirror topic

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
    <td><CopyableCode code="link_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_topic_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_topic_name" /></td>
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
    <td><CopyableCode code="mirror_lags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_state_transition_errors" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, FAILED, LINK_FAILED, LINK_PAUSED, PAUSED, PENDING_STOPPED, SOURCE_UNAVAILABLE, STOPPED, PENDING_MIRROR, PENDING_SYNCHRONIZE, PENDING_SETUP_FOR_RESTORE, PENDING_RESTORE)</td>
</tr>
<tr>
    <td><CopyableCode code="mirror_topic_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="num_partitions" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state_time_ms" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_mirror_topics_under_link">

Metadata of mirror topics

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
    <td><CopyableCode code="link_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_topic_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_topic_name" /></td>
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
    <td><CopyableCode code="mirror_lags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_state_transition_errors" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, FAILED, LINK_FAILED, LINK_PAUSED, PAUSED, PENDING_STOPPED, SOURCE_UNAVAILABLE, STOPPED, PENDING_MIRROR, PENDING_SYNCHRONIZE, PENDING_SETUP_FOR_RESTORE, PENDING_RESTORE)</td>
</tr>
<tr>
    <td><CopyableCode code="mirror_topic_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="num_partitions" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state_time_ms" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_mirror_topics">

Metadata of mirror topics

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
    <td><CopyableCode code="link_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_topic_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_topic_name" /></td>
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
    <td><CopyableCode code="mirror_lags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_state_transition_errors" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mirror_status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, FAILED, LINK_FAILED, LINK_PAUSED, PAUSED, PENDING_STOPPED, SOURCE_UNAVAILABLE, STOPPED, PENDING_MIRROR, PENDING_SYNCHRONIZE, PENDING_SETUP_FOR_RESTORE, PENDING_RESTORE)</td>
</tr>
<tr>
    <td><CopyableCode code="mirror_topic_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="num_partitions" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state_time_ms" /></td>
    <td><code>integer (int64)</code></td>
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
    <td><a href="#read_kafka_mirror_topic"><CopyableCode code="read_kafka_mirror_topic" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-mirror_topic_name"><code>mirror_topic_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-include_state_transition_errors"><code>include_state_transition_errors</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list_kafka_mirror_topics_under_link"><CopyableCode code="list_kafka_mirror_topics_under_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-mirror_status"><code>mirror_status</code></a></td>
    <td>List all mirror topics under the link</td>
</tr>
<tr>
    <td><a href="#list_kafka_mirror_topics"><CopyableCode code="list_kafka_mirror_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-mirror_status"><code>mirror_status</code></a></td>
    <td>List all mirror topics in the cluster</td>
</tr>
<tr>
    <td><a href="#create_kafka_mirror_topic"><CopyableCode code="create_kafka_mirror_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a>, <a href="#parameter-source_topic_name"><code>source_topic_name</code></a></td>
    <td></td>
    <td>Create a topic in the destination cluster mirroring a topic in<br />the source cluster</td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_promote"><CopyableCode code="update_kafka_mirror_topics_promote" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_failover"><CopyableCode code="update_kafka_mirror_topics_failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_pause"><CopyableCode code="update_kafka_mirror_topics_pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_resume"><CopyableCode code="update_kafka_mirror_topics_resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_reverse_and_start_mirror"><CopyableCode code="update_kafka_mirror_topics_reverse_and_start_mirror" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_reverse_and_pause_mirror"><CopyableCode code="update_kafka_mirror_topics_reverse_and_pause_mirror" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_truncate_and_restore_mirror"><CopyableCode code="update_kafka_mirror_topics_truncate_and_restore_mirror" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-link_name"><code>link_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td><a href="#parameter-include_partition_level_truncation_data"><code>include_partition_level_truncation_data</code></a>, <a href="#parameter-validate_only"><code>validate_only</code></a></td>
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
<tr id="parameter-mirror_topic_name">
    <td><CopyableCode code="mirror_topic_name" /></td>
    <td><code>string</code></td>
    <td>Cluster Linking mirror topic name (example: topic-1)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cloud region the cluster runs in, e.g. ap-southeast-2 (from the cluster spec.region). (default: region)</td>
</tr>
<tr id="parameter-include_partition_level_truncation_data">
    <td><CopyableCode code="include_partition_level_truncation_data" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include partition level truncation information when truncating and restoring a topic in the response. Default: false (example: false)</td>
</tr>
<tr id="parameter-include_state_transition_errors">
    <td><CopyableCode code="include_state_transition_errors" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include mirror state transition errors in the response. Default: false (example: false)</td>
</tr>
<tr id="parameter-mirror_status">
    <td><CopyableCode code="mirror_status" /></td>
    <td><code>string</code></td>
    <td>The status of the mirror topic. If not specified, all mirror topics will be returned. (example: ACTIVE)</td>
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
    defaultValue="read_kafka_mirror_topic"
    values={[
        { label: 'read_kafka_mirror_topic', value: 'read_kafka_mirror_topic' },
        { label: 'list_kafka_mirror_topics_under_link', value: 'list_kafka_mirror_topics_under_link' },
        { label: 'list_kafka_mirror_topics', value: 'list_kafka_mirror_topics' }
    ]}
>
<TabItem value="read_kafka_mirror_topic">



```sql
SELECT
link_name,
mirror_topic_name,
source_topic_name,
kind,
metadata,
mirror_lags,
mirror_state_transition_errors,
mirror_status,
mirror_topic_error,
num_partitions,
state_time_ms
FROM kafka.kafka.mirror_topics
WHERE cluster_id = '{{ cluster_id }}' -- required
AND link_name = '{{ link_name }}' -- required
AND mirror_topic_name = '{{ mirror_topic_name }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
AND include_state_transition_errors = '{{ include_state_transition_errors }}'
;
```
</TabItem>
<TabItem value="list_kafka_mirror_topics_under_link">

List all mirror topics under the link

```sql
SELECT
link_name,
mirror_topic_name,
source_topic_name,
kind,
metadata,
mirror_lags,
mirror_state_transition_errors,
mirror_status,
mirror_topic_error,
num_partitions,
state_time_ms
FROM kafka.kafka.mirror_topics
WHERE cluster_id = '{{ cluster_id }}' -- required
AND link_name = '{{ link_name }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
AND mirror_status = '{{ mirror_status }}'
;
```
</TabItem>
<TabItem value="list_kafka_mirror_topics">

List all mirror topics in the cluster

```sql
SELECT
link_name,
mirror_topic_name,
source_topic_name,
kind,
metadata,
mirror_lags,
mirror_state_transition_errors,
mirror_status,
mirror_topic_error,
num_partitions,
state_time_ms
FROM kafka.kafka.mirror_topics
WHERE cluster_id = '{{ cluster_id }}' -- required
AND kafka_endpoint_id = '{{ kafka_endpoint_id }}' -- required
AND region = '{{ region }}' -- required
AND cloud_provider = '{{ cloud_provider }}' -- required
AND mirror_status = '{{ mirror_status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kafka_mirror_topic"
    values={[
        { label: 'create_kafka_mirror_topic', value: 'create_kafka_mirror_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kafka_mirror_topic">

Create a topic in the destination cluster mirroring a topic in<br />the source cluster

```sql
INSERT INTO kafka.kafka.mirror_topics (
source_topic_name,
mirror_topic_name,
replication_factor,
configs,
cluster_id,
link_name,
kafka_endpoint_id,
region,
cloud_provider
)
SELECT 
'{{ source_topic_name }}' /* required */,
'{{ mirror_topic_name }}',
{{ replication_factor }},
'{{ configs }}',
'{{ cluster_id }}',
'{{ link_name }}',
'{{ kafka_endpoint_id }}',
'{{ region }}',
'{{ cloud_provider }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mirror_topics
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the mirror_topics resource.
    - name: link_name
      value: "{{ link_name }}"
      description: Required parameter for the mirror_topics resource.
    - name: kafka_endpoint_id
      value: "{{ kafka_endpoint_id }}"
      description: Required parameter for the mirror_topics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mirror_topics resource.
    - name: cloud_provider
      value: "{{ cloud_provider }}"
      description: Required parameter for the mirror_topics resource.
    - name: source_topic_name
      value: "{{ source_topic_name }}"
    - name: mirror_topic_name
      value: "{{ mirror_topic_name }}"
    - name: replication_factor
      value: {{ replication_factor }}
    - name: configs
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_kafka_mirror_topics_promote"
    values={[
        { label: 'update_kafka_mirror_topics_promote', value: 'update_kafka_mirror_topics_promote' },
        { label: 'update_kafka_mirror_topics_failover', value: 'update_kafka_mirror_topics_failover' },
        { label: 'update_kafka_mirror_topics_pause', value: 'update_kafka_mirror_topics_pause' },
        { label: 'update_kafka_mirror_topics_resume', value: 'update_kafka_mirror_topics_resume' },
        { label: 'update_kafka_mirror_topics_reverse_and_start_mirror', value: 'update_kafka_mirror_topics_reverse_and_start_mirror' },
        { label: 'update_kafka_mirror_topics_reverse_and_pause_mirror', value: 'update_kafka_mirror_topics_reverse_and_pause_mirror' },
        { label: 'update_kafka_mirror_topics_truncate_and_restore_mirror', value: 'update_kafka_mirror_topics_truncate_and_restore_mirror' }
    ]}
>
<TabItem value="update_kafka_mirror_topics_promote">



```sql
EXEC kafka.kafka.mirror_topics.update_kafka_mirror_topics_promote 
@cluster_id='{{ cluster_id }}' --required, 
@link_name='{{ link_name }}' --required, 
@kafka_endpoint_id='{{ kafka_endpoint_id }}' --required, 
@region='{{ region }}' --required, 
@cloud_provider='{{ cloud_provider }}' --required, 
@validate_only={{ validate_only }} 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
<TabItem value="update_kafka_mirror_topics_failover">



```sql
EXEC kafka.kafka.mirror_topics.update_kafka_mirror_topics_failover 
@cluster_id='{{ cluster_id }}' --required, 
@link_name='{{ link_name }}' --required, 
@kafka_endpoint_id='{{ kafka_endpoint_id }}' --required, 
@region='{{ region }}' --required, 
@cloud_provider='{{ cloud_provider }}' --required, 
@validate_only={{ validate_only }} 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
<TabItem value="update_kafka_mirror_topics_pause">



```sql
EXEC kafka.kafka.mirror_topics.update_kafka_mirror_topics_pause 
@cluster_id='{{ cluster_id }}' --required, 
@link_name='{{ link_name }}' --required, 
@kafka_endpoint_id='{{ kafka_endpoint_id }}' --required, 
@region='{{ region }}' --required, 
@cloud_provider='{{ cloud_provider }}' --required, 
@validate_only={{ validate_only }} 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
<TabItem value="update_kafka_mirror_topics_resume">



```sql
EXEC kafka.kafka.mirror_topics.update_kafka_mirror_topics_resume 
@cluster_id='{{ cluster_id }}' --required, 
@link_name='{{ link_name }}' --required, 
@kafka_endpoint_id='{{ kafka_endpoint_id }}' --required, 
@region='{{ region }}' --required, 
@cloud_provider='{{ cloud_provider }}' --required, 
@validate_only={{ validate_only }} 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
<TabItem value="update_kafka_mirror_topics_reverse_and_start_mirror">



```sql
EXEC kafka.kafka.mirror_topics.update_kafka_mirror_topics_reverse_and_start_mirror 
@cluster_id='{{ cluster_id }}' --required, 
@link_name='{{ link_name }}' --required, 
@kafka_endpoint_id='{{ kafka_endpoint_id }}' --required, 
@region='{{ region }}' --required, 
@cloud_provider='{{ cloud_provider }}' --required, 
@validate_only={{ validate_only }} 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
<TabItem value="update_kafka_mirror_topics_reverse_and_pause_mirror">



```sql
EXEC kafka.kafka.mirror_topics.update_kafka_mirror_topics_reverse_and_pause_mirror 
@cluster_id='{{ cluster_id }}' --required, 
@link_name='{{ link_name }}' --required, 
@kafka_endpoint_id='{{ kafka_endpoint_id }}' --required, 
@region='{{ region }}' --required, 
@cloud_provider='{{ cloud_provider }}' --required, 
@validate_only={{ validate_only }} 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
<TabItem value="update_kafka_mirror_topics_truncate_and_restore_mirror">



```sql
EXEC kafka.kafka.mirror_topics.update_kafka_mirror_topics_truncate_and_restore_mirror 
@cluster_id='{{ cluster_id }}' --required, 
@link_name='{{ link_name }}' --required, 
@kafka_endpoint_id='{{ kafka_endpoint_id }}' --required, 
@region='{{ region }}' --required, 
@cloud_provider='{{ cloud_provider }}' --required, 
@include_partition_level_truncation_data={{ include_partition_level_truncation_data }}, 
@validate_only={{ validate_only }} 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
</Tabs>
