--- 
title: opt_ins
hide_title: false
hide_table_of_contents: false
keywords:
  - opt_ins
  - stream_sharing
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

Creates, updates, deletes, gets or lists an <code>opt_ins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="opt_ins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.stream_sharing.opt_ins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cdx_v1_opt_in"
    values={[
        { label: 'get_cdx_v1_opt_in', value: 'get_cdx_v1_opt_in' }
    ]}
>
<TabItem value="get_cdx_v1_opt_in">

Opt In.

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
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (OptIn)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_share_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable stream sharing for the organization</td>
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
    <td><a href="#get_cdx_v1_opt_in"><CopyableCode code="get_cdx_v1_opt_in" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns the organization's stream sharing opt-in settings.<br /></td>
</tr>
<tr>
    <td><a href="#update_cdx_v1_opt_in"><CopyableCode code="update_cdx_v1_opt_in" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>Updates the organization's stream sharing opt-in settings.<br /><br /><br /></td>
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
    defaultValue="get_cdx_v1_opt_in"
    values={[
        { label: 'get_cdx_v1_opt_in', value: 'get_cdx_v1_opt_in' }
    ]}
>
<TabItem value="get_cdx_v1_opt_in">

Returns the organization's stream sharing opt-in settings.<br />

```sql
SELECT
api_version,
kind,
stream_share_enabled
FROM confluent.stream_sharing.opt_ins
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cdx_v1_opt_in"
    values={[
        { label: 'update_cdx_v1_opt_in', value: 'update_cdx_v1_opt_in' }
    ]}
>
<TabItem value="update_cdx_v1_opt_in">

Updates the organization's stream sharing opt-in settings.<br /><br /><br />

```sql
UPDATE confluent.stream_sharing.opt_ins
SET 
stream_share_enabled = {{ stream_share_enabled }}
RETURNING
api_version,
kind,
stream_share_enabled;
```
</TabItem>
</Tabs>
