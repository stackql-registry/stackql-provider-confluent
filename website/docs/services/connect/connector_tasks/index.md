--- 
title: connector_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_tasks
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

Creates, updates, deletes, gets or lists a <code>connector_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.connect.connector_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connectv1_connector_tasks"
    values={[
        { label: 'list_connectv1_connector_tasks', value: 'list_connectv1_connector_tasks' }
    ]}
>
<TabItem value="list_connectv1_connector_tasks">

Connector Task.

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
    <td><CopyableCode code="id" /></td>
    <td><code>object</code></td>
    <td>The ID of task.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for the connector. These configurations are the minimum set of key-value pairs (KVP) which can be used to define how the connector connects Kafka to the external system. Some of these KVPs are common to all the connectors, such as connection parameters to Kafka, connector metadata, etc. The list of common connector configurations is as follows    - cloud.environment   - cloud.provider   - connector.class   - kafka.api.key   - kafka.api.secret   - kafka.endpoint   - kafka.region   - name  A specific connector such as `GcsSink` would have additional parameters such as `gcs.bucket.name`, `flush.size`, etc.</td>
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
    <td><a href="#list_connectv1_connector_tasks"><CopyableCode code="list_connectv1_connector_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get a list of tasks currently running for the connector.</td>
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
    defaultValue="list_connectv1_connector_tasks"
    values={[
        { label: 'list_connectv1_connector_tasks', value: 'list_connectv1_connector_tasks' }
    ]}
>
<TabItem value="list_connectv1_connector_tasks">

Get a list of tasks currently running for the connector.

```sql
SELECT
id,
config
FROM confluent.connect.connector_tasks
;
```
</TabItem>
</Tabs>
