--- 
title: topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topics
  - tableflow
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
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.tableflow.topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tableflow_v1_tableflow_topic"
    values={[
        { label: 'get_tableflow_v1_tableflow_topic', value: 'get_tableflow_v1_tableflow_topic' },
        { label: 'list_tableflow_v1_tableflow_topics', value: 'list_tableflow_v1_tableflow_topics' }
    ]}
>
<TabItem value="get_tableflow_v1_tableflow_topic">

Tableflow Topic.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (tableflow/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (TableflowTopic)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Tableflow Topic</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Tableflow Topic</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tableflow_v1_tableflow_topics">

Tableflow Topic.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (tableflow/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (TableflowTopic)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Tableflow Topic</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Tableflow Topic</td>
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
    <td><a href="#get_tableflow_v1_tableflow_topic"><CopyableCode code="get_tableflow_v1_tableflow_topic" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-spec.kafka_cluster"><code>spec.kafka_cluster</code></a>, <a href="#parameter-display_name"><code>display_name</code></a></td>
    <td></td>
    <td>Make a request to read a tableflow topic.</td>
</tr>
<tr>
    <td><a href="#list_tableflow_v1_tableflow_topics"><CopyableCode code="list_tableflow_v1_tableflow_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-spec.kafka_cluster"><code>spec.kafka_cluster</code></a></td>
    <td><a href="#parameter-spec.table_formats"><code>spec.table_formats</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all tableflow topics.</td>
</tr>
<tr>
    <td><a href="#create_tableflow_v1_tableflow_topic"><CopyableCode code="create_tableflow_v1_tableflow_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a tableflow topic.</td>
</tr>
<tr>
    <td><a href="#update_tableflow_v1_tableflow_topic"><CopyableCode code="update_tableflow_v1_tableflow_topic" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a tableflow topic.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_tableflow_v1_tableflow_topic"><CopyableCode code="delete_tableflow_v1_tableflow_topic" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-spec.kafka_cluster"><code>spec.kafka_cluster</code></a>, <a href="#parameter-display_name"><code>display_name</code></a></td>
    <td></td>
    <td>Make a request to delete a tableflow topic.</td>
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
<tr id="parameter-display_name">
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Kafka topic for which Tableflow is enabled.</td>
</tr>
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given environment. (example: env-00000)</td>
</tr>
<tr id="parameter-spec.kafka_cluster">
    <td><CopyableCode code="spec.kafka_cluster" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given spec.kafka_cluster. (example: lkc-00000)</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer</code></td>
    <td>A pagination size for collection requests.</td>
</tr>
<tr id="parameter-page_token">
    <td><CopyableCode code="page_token" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token for collection requests.</td>
</tr>
<tr id="parameter-spec.table_formats">
    <td><CopyableCode code="spec.table_formats" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for spec.table_formats. Pass multiple times to see results matching any of the values. (example: [DELTA, ICEBERG])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tableflow_v1_tableflow_topic"
    values={[
        { label: 'get_tableflow_v1_tableflow_topic', value: 'get_tableflow_v1_tableflow_topic' },
        { label: 'list_tableflow_v1_tableflow_topics', value: 'list_tableflow_v1_tableflow_topics' }
    ]}
>
<TabItem value="get_tableflow_v1_tableflow_topic">

Make a request to read a tableflow topic.

```sql
SELECT
api_version,
kind,
metadata,
spec,
status
FROM confluent.tableflow.topics
WHERE environment = '{{ environment }}' -- required
AND spec.kafka_cluster = '{{ spec.kafka_cluster }}' -- required
AND display_name = '{{ display_name }}' -- required
;
```
</TabItem>
<TabItem value="list_tableflow_v1_tableflow_topics">

Retrieve a sorted, filtered, paginated list of all tableflow topics.

```sql
SELECT
api_version,
kind,
metadata,
spec,
status
FROM confluent.tableflow.topics
WHERE environment = '{{ environment }}' -- required
AND spec.kafka_cluster = '{{ spec.kafka_cluster }}' -- required
AND spec.table_formats = '{{ spec.table_formats }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tableflow_v1_tableflow_topic"
    values={[
        { label: 'create_tableflow_v1_tableflow_topic', value: 'create_tableflow_v1_tableflow_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tableflow_v1_tableflow_topic">

Make a request to create a tableflow topic.

```sql
INSERT INTO confluent.tableflow.topics (
spec
)
SELECT 
'{{ spec }}' /* required */
RETURNING
api_version,
kind,
metadata,
spec,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topics
  props:
    - name: spec
      description: |
        The desired state of the Tableflow Topic
      value:
        display_name: "{{ display_name }}"
        suspended: {{ suspended }}
        config:
          enable_compaction: {{ enable_compaction }}
          enable_partitioning: {{ enable_partitioning }}
          retention_ms: "{{ retention_ms }}"
          data_retention_ms: "{{ data_retention_ms }}"
          record_failure_strategy: "{{ record_failure_strategy }}"
          error_handling:
            mode: "{{ mode }}"
            target: "{{ target }}"
        storage:
          kind: "{{ kind }}"
          bucket_name: "{{ bucket_name }}"
          bucket_region: "{{ bucket_region }}"
          provider_integration_id: "{{ provider_integration_id }}"
          table_path: "{{ table_path }}"
          storage_account_name: "{{ storage_account_name }}"
          container_name: "{{ container_name }}"
          storage_region: "{{ storage_region }}"
        table_formats:
          - "{{ table_formats }}"
        environment:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
        kafka_cluster:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tableflow_v1_tableflow_topic"
    values={[
        { label: 'update_tableflow_v1_tableflow_topic', value: 'update_tableflow_v1_tableflow_topic' }
    ]}
>
<TabItem value="update_tableflow_v1_tableflow_topic">

Make a request to update a tableflow topic.<br /><br />

```sql
UPDATE confluent.tableflow.topics
SET 
spec = '{{ spec }}'
WHERE 
display_name = '{{ display_name }}' --required
AND spec = '{{ spec }}' --required
RETURNING
api_version,
kind,
metadata,
spec,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tableflow_v1_tableflow_topic"
    values={[
        { label: 'delete_tableflow_v1_tableflow_topic', value: 'delete_tableflow_v1_tableflow_topic' }
    ]}
>
<TabItem value="delete_tableflow_v1_tableflow_topic">

Make a request to delete a tableflow topic.

```sql
DELETE FROM confluent.tableflow.topics
WHERE environment = '{{ environment }}' --required
AND spec.kafka_cluster = '{{ spec.kafka_cluster }}' --required
AND display_name = '{{ display_name }}' --required
;
```
</TabItem>
</Tabs>
