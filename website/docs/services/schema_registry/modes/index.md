--- 
title: modes
hide_title: false
hide_table_of_contents: false
keywords:
  - modes
  - schema_registry
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

Creates, updates, deletes, gets or lists a <code>modes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.modes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mode"
    values={[
        { label: 'get_mode', value: 'get_mode' },
        { label: 'get_top_level_mode', value: 'get_top_level_mode' }
    ]}
>
<TabItem value="get_mode">

The subject mode.

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
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Schema Registry operating mode (example: READWRITE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_top_level_mode">

The global mode

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
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Schema Registry operating mode (example: READWRITE)</td>
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
    <td><a href="#get_mode"><CopyableCode code="get_mode" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-defaultToGlobal"><code>defaultToGlobal</code></a></td>
    <td>Retrieves the subject mode.</td>
</tr>
<tr>
    <td><a href="#get_top_level_mode"><CopyableCode code="get_top_level_mode" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieves global mode.</td>
</tr>
<tr>
    <td><a href="#update_mode"><CopyableCode code="update_mode" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Update mode for the specified subject. On success, echoes the original request back to the client.</td>
</tr>
<tr>
    <td><a href="#update_top_level_mode"><CopyableCode code="update_top_level_mode" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Update global mode. On success, echoes the original request back to the client.</td>
</tr>
<tr>
    <td><a href="#delete_subject_mode"><CopyableCode code="delete_subject_mode" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td></td>
    <td>Deletes the specified subject-level mode and reverts to the global default.</td>
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
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject</td>
</tr>
<tr id="parameter-defaultToGlobal">
    <td><CopyableCode code="defaultToGlobal" /></td>
    <td><code>boolean</code></td>
    <td>Whether to return the global mode if subject mode not found</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Whether to force update if setting mode to IMPORT and schemas currently exist</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_mode"
    values={[
        { label: 'get_mode', value: 'get_mode' },
        { label: 'get_top_level_mode', value: 'get_top_level_mode' }
    ]}
>
<TabItem value="get_mode">

Retrieves the subject mode.

```sql
SELECT
mode
FROM confluent.schema_registry.modes
WHERE subject = '{{ subject }}' -- required
AND defaultToGlobal = '{{ defaultToGlobal }}'
;
```
</TabItem>
<TabItem value="get_top_level_mode">

Retrieves global mode.

```sql
SELECT
mode
FROM confluent.schema_registry.modes
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_mode"
    values={[
        { label: 'update_mode', value: 'update_mode' },
        { label: 'update_top_level_mode', value: 'update_top_level_mode' }
    ]}
>
<TabItem value="update_mode">

Update mode for the specified subject. On success, echoes the original request back to the client.

```sql
REPLACE confluent.schema_registry.modes
SET 
mode = '{{ mode }}'
WHERE 
subject = '{{ subject }}' --required
AND force = {{ force}}
RETURNING
mode;
```
</TabItem>
<TabItem value="update_top_level_mode">

Update global mode. On success, echoes the original request back to the client.

```sql
REPLACE confluent.schema_registry.modes
SET 
mode = '{{ mode }}'
WHERE 
force = {{ force}}
RETURNING
mode;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subject_mode"
    values={[
        { label: 'delete_subject_mode', value: 'delete_subject_mode' }
    ]}
>
<TabItem value="delete_subject_mode">

Deletes the specified subject-level mode and reverts to the global default.

```sql
DELETE FROM confluent.schema_registry.modes
WHERE subject = '{{ subject }}' --required
;
```
</TabItem>
</Tabs>
