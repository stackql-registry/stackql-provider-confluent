--- 
title: mirror_topics
hide_title: false
hide_table_of_contents: false
keywords:
  - mirror_topics
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

Creates, updates, deletes, gets or lists a <code>mirror_topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mirror_topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.mirror_topics" /></td></tr>
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
    <td></td>
    <td><a href="#parameter-include_state_transition_errors"><code>include_state_transition_errors</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list_kafka_mirror_topics_under_link"><CopyableCode code="list_kafka_mirror_topics_under_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-mirror_status"><code>mirror_status</code></a></td>
    <td>List all mirror topics under the link</td>
</tr>
<tr>
    <td><a href="#list_kafka_mirror_topics"><CopyableCode code="list_kafka_mirror_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-mirror_status"><code>mirror_status</code></a></td>
    <td>List all mirror topics in the cluster</td>
</tr>
<tr>
    <td><a href="#create_kafka_mirror_topic"><CopyableCode code="create_kafka_mirror_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-source_topic_name"><code>source_topic_name</code></a></td>
    <td></td>
    <td>Create a topic in the destination cluster mirroring a topic in<br />the source cluster</td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_promote"><CopyableCode code="update_kafka_mirror_topics_promote" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_failover"><CopyableCode code="update_kafka_mirror_topics_failover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_pause"><CopyableCode code="update_kafka_mirror_topics_pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_resume"><CopyableCode code="update_kafka_mirror_topics_resume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_reverse_and_start_mirror"><CopyableCode code="update_kafka_mirror_topics_reverse_and_start_mirror" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_reverse_and_pause_mirror"><CopyableCode code="update_kafka_mirror_topics_reverse_and_pause_mirror" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_kafka_mirror_topics_truncate_and_restore_mirror"><CopyableCode code="update_kafka_mirror_topics_truncate_and_restore_mirror" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
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
FROM confluent.kafka.mirror_topics
WHERE include_state_transition_errors = '{{ include_state_transition_errors }}'
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
FROM confluent.kafka.mirror_topics
WHERE mirror_status = '{{ mirror_status }}'
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
FROM confluent.kafka.mirror_topics
WHERE mirror_status = '{{ mirror_status }}'
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
INSERT INTO confluent.kafka.mirror_topics (
source_topic_name,
mirror_topic_name,
replication_factor,
configs
)
SELECT 
'{{ source_topic_name }}' /* required */,
'{{ mirror_topic_name }}',
{{ replication_factor }},
'{{ configs }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mirror_topics
  props:
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
EXEC confluent.kafka.mirror_topics.update_kafka_mirror_topics_promote 
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
EXEC confluent.kafka.mirror_topics.update_kafka_mirror_topics_failover 
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
EXEC confluent.kafka.mirror_topics.update_kafka_mirror_topics_pause 
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
EXEC confluent.kafka.mirror_topics.update_kafka_mirror_topics_resume 
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
EXEC confluent.kafka.mirror_topics.update_kafka_mirror_topics_reverse_and_start_mirror 
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
EXEC confluent.kafka.mirror_topics.update_kafka_mirror_topics_reverse_and_pause_mirror 
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
EXEC confluent.kafka.mirror_topics.update_kafka_mirror_topics_truncate_and_restore_mirror 
@@json=
'{
"mirror_topic_names": "{{ mirror_topic_names }}", 
"mirror_topic_name_pattern": "{{ mirror_topic_name_pattern }}"
}'
;
```
</TabItem>
</Tabs>
