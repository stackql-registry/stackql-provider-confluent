--- 
title: cluster_links
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_links
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

Creates, updates, deletes, gets or lists a <code>cluster_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.cluster_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_link"
    values={[
        { label: 'get_kafka_link', value: 'get_kafka_link' },
        { label: 'list_kafka_links', value: 'list_kafka_links' }
    ]}
>
<TabItem value="get_kafka_link">

Single link name and properties

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
    <td><CopyableCode code="cluster_link_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="destination_cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="remote_cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="category_counts" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_error_message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="topic_names" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_links">

A list of link names and properties

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
    <td><CopyableCode code="cluster_link_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="destination_cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="remote_cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="category_counts" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_error" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_error_message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="link_state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="topic_names" /></td>
    <td><code>array</code></td>
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
    <td><a href="#get_kafka_link"><CopyableCode code="get_kafka_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-include_tasks"><code>include_tasks</code></a></td>
    <td>``link_id`` in ``ListLinksResponseData`` is deprecated and may be removed in a future release. Use the new ``cluster_link_id`` instead.</td>
</tr>
<tr>
    <td><a href="#list_kafka_links"><CopyableCode code="list_kafka_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>``link_id`` in ``ListLinksResponseData`` is deprecated and may be removed in a future release. Use the new ``cluster_link_id`` instead.</td>
</tr>
<tr>
    <td><a href="#create_kafka_link"><CopyableCode code="create_kafka_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-link_name"><code>link_name</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a>, <a href="#parameter-validate_link"><code>validate_link</code></a></td>
    <td>Cluster link creation requires source cluster security configurations in<br />the configs JSON section of the data request payload.</td>
</tr>
<tr>
    <td><a href="#delete_kafka_link"><CopyableCode code="delete_kafka_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-validate_only"><code>validate_only</code></a></td>
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
<tr id="parameter-link_name">
    <td><CopyableCode code="link_name" /></td>
    <td><code>string</code></td>
    <td>The link name (example: link-sb1)</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Force the action. Default: false (example: false)</td>
</tr>
<tr id="parameter-include_tasks">
    <td><CopyableCode code="include_tasks" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include cluster linking tasks in the response. Default: false (example: false)</td>
</tr>
<tr id="parameter-validate_link">
    <td><CopyableCode code="validate_link" /></td>
    <td><code>boolean</code></td>
    <td>To synchronously validate that the source cluster ID is expected and the dest cluster has the permission to read topics in the source cluster. Default: true (example: false)</td>
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
    defaultValue="get_kafka_link"
    values={[
        { label: 'get_kafka_link', value: 'get_kafka_link' },
        { label: 'list_kafka_links', value: 'list_kafka_links' }
    ]}
>
<TabItem value="get_kafka_link">

``link_id`` in ``ListLinksResponseData`` is deprecated and may be removed in a future release. Use the new ``cluster_link_id`` instead.

```sql
SELECT
cluster_link_id,
destination_cluster_id,
link_id,
remote_cluster_id,
source_cluster_id,
link_name,
category_counts,
kind,
link_error,
link_error_message,
link_state,
metadata,
tasks,
topic_names
FROM confluent.kafka.cluster_links
WHERE include_tasks = '{{ include_tasks }}'
;
```
</TabItem>
<TabItem value="list_kafka_links">

``link_id`` in ``ListLinksResponseData`` is deprecated and may be removed in a future release. Use the new ``cluster_link_id`` instead.

```sql
SELECT
cluster_link_id,
destination_cluster_id,
link_id,
remote_cluster_id,
source_cluster_id,
link_name,
category_counts,
kind,
link_error,
link_error_message,
link_state,
metadata,
tasks,
topic_names
FROM confluent.kafka.cluster_links
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kafka_link"
    values={[
        { label: 'create_kafka_link', value: 'create_kafka_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kafka_link">

Cluster link creation requires source cluster security configurations in<br />the configs JSON section of the data request payload.

```sql
INSERT INTO confluent.kafka.cluster_links (
source_cluster_id,
destination_cluster_id,
remote_cluster_id,
cluster_link_id,
configs,
link_name,
validate_only,
validate_link
)
SELECT 
'{{ source_cluster_id }}',
'{{ destination_cluster_id }}',
'{{ remote_cluster_id }}',
'{{ cluster_link_id }}',
'{{ configs }}',
'{{ link_name }}',
'{{ validate_only }}',
'{{ validate_link }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_links
  props:
    - name: link_name
      value: "{{ link_name }}"
      description: Required parameter for the cluster_links resource.
    - name: source_cluster_id
      value: "{{ source_cluster_id }}"
    - name: destination_cluster_id
      value: "{{ destination_cluster_id }}"
    - name: remote_cluster_id
      value: "{{ remote_cluster_id }}"
      description: |
        The expected remote cluster ID.
    - name: cluster_link_id
      value: "{{ cluster_link_id }}"
      description: |
        The expected cluster link ID. Can be provided when creating the second side of a bidirectional link for validating the link ID is as expected. If it's not provided, it's inferred from the remote cluster.
    - name: configs
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: validate_only
      value: {{ validate_only }}
      description: To validate the action can be performed successfully or not. Default: false (example: false)
      description: To validate the action can be performed successfully or not. Default: false (example: false)
    - name: validate_link
      value: {{ validate_link }}
      description: To synchronously validate that the source cluster ID is expected and the dest cluster has the permission to read topics in the source cluster. Default: true (example: false)
      description: To synchronously validate that the source cluster ID is expected and the dest cluster has the permission to read topics in the source cluster. Default: true (example: false)
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_link"
    values={[
        { label: 'delete_kafka_link', value: 'delete_kafka_link' }
    ]}
>
<TabItem value="delete_kafka_link">



```sql
DELETE FROM confluent.kafka.cluster_links
WHERE force = '{{ force }}'
AND validate_only = '{{ validate_only }}'
;
```
</TabItem>
</Tabs>
