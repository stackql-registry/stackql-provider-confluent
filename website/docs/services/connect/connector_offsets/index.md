--- 
title: connector_offsets
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_offsets
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

Creates, updates, deletes, gets or lists a <code>connector_offsets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_offsets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.connect.connector_offsets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connectv1_connector_offsets"
    values={[
        { label: 'get_connectv1_connector_offsets', value: 'get_connectv1_connector_offsets' }
    ]}
>
<TabItem value="get_connectv1_connector_offsets">

Connector Offsets.

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
    <td><code>string</code></td>
    <td>The ID of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata of the connector offset.</td>
</tr>
<tr>
    <td><CopyableCode code="offsets" /></td>
    <td><code>array</code></td>
    <td>Array of offsets which are categorised into partitions.</td>
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
    <td><a href="#get_connectv1_connector_offsets"><CopyableCode code="get_connectv1_connector_offsets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the current offsets for the connector. The offsets provide information on the point in the source system, <br />from which the connector is pulling in data. The offsets of a connector are continuously observed periodically and are queryable via this API.</td>
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
    defaultValue="get_connectv1_connector_offsets"
    values={[
        { label: 'get_connectv1_connector_offsets', value: 'get_connectv1_connector_offsets' }
    ]}
>
<TabItem value="get_connectv1_connector_offsets">

Get the current offsets for the connector. The offsets provide information on the point in the source system, <br />from which the connector is pulling in data. The offsets of a connector are continuously observed periodically and are queryable via this API.

```sql
SELECT
id,
name,
metadata,
offsets
FROM confluent.connect.connector_offsets
;
```
</TabItem>
</Tabs>
