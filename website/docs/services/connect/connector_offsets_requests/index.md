--- 
title: connector_offsets_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_offsets_requests
  - connect
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

Creates, updates, deletes, gets or lists a <code>connector_offsets_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_offsets_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.connect.connector_offsets_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connectv1_connector_offsets_request_status"
    values={[
        { label: 'get_connectv1_connector_offsets_request_status', value: 'get_connectv1_connector_offsets_request_status' }
    ]}
>
<TabItem value="get_connectv1_connector_offsets_request_status">

Connector Offsets Request Status.

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
    <td><CopyableCode code="applied_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the offsets were applied. The time is in UTC, ISO 8601 format. (example: 2024-02-20T15:14:19.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="previous_offsets" /></td>
    <td><code>array</code></td>
    <td>Array of offsets which are categorised into partitions.</td>
</tr>
<tr>
    <td><CopyableCode code="request" /></td>
    <td><code>object</code></td>
    <td>The request made to alter offsets.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The response of the alter offsets operation.</td>
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
    <td><a href="#get_connectv1_connector_offsets_request_status"><CopyableCode code="get_connectv1_connector_offsets_request_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_name"><code>connector_name</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a></td>
    <td></td>
    <td>Get the status of the previous alter offset request.</td>
</tr>
<tr>
    <td><a href="#alter_connectv1_connector_offsets_request"><CopyableCode code="alter_connectv1_connector_offsets_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-connector_name"><code>connector_name</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Request to alter the offsets of a connector. This supports the ability to PATCH/DELETE the offsets of a connector.<br />Note, you will see momentary downtime as this will internally stop the connector, while the offsets are being altered.<br />You can only make one alter offsets request at a time for a connector.</td>
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
<tr id="parameter-connector_name">
    <td><CopyableCode code="connector_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the connector.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment this resource belongs to.</td>
</tr>
<tr id="parameter-kafka_cluster_id">
    <td><CopyableCode code="kafka_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Kafka cluster.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connectv1_connector_offsets_request_status"
    values={[
        { label: 'get_connectv1_connector_offsets_request_status', value: 'get_connectv1_connector_offsets_request_status' }
    ]}
>
<TabItem value="get_connectv1_connector_offsets_request_status">

Get the status of the previous alter offset request.

```sql
SELECT
applied_at,
previous_offsets,
request,
status
FROM confluent.connect.connector_offsets_requests
WHERE connector_name = '{{ connector_name }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="alter_connectv1_connector_offsets_request"
    values={[
        { label: 'alter_connectv1_connector_offsets_request', value: 'alter_connectv1_connector_offsets_request' }
    ]}
>
<TabItem value="alter_connectv1_connector_offsets_request">

Request to alter the offsets of a connector. This supports the ability to PATCH/DELETE the offsets of a connector.<br />Note, you will see momentary downtime as this will internally stop the connector, while the offsets are being altered.<br />You can only make one alter offsets request at a time for a connector.

```sql
EXEC confluent.connect.connector_offsets_requests.alter_connectv1_connector_offsets_request 
@connector_name='{{ connector_name }}' --required, 
@environment_id='{{ environment_id }}' --required, 
@kafka_cluster_id='{{ kafka_cluster_id }}' --required 
@@json=
'{
"type": "{{ type }}", 
"offsets": "{{ offsets }}"
}'
;
```
</TabItem>
</Tabs>
