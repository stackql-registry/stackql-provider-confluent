--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - catalog
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.catalog.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tags"
    values={[
        { label: 'get_tags', value: 'get_tags' }
    ]}
>
<TabItem value="get_tags">

The tags

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>string</code></td>
    <td>The tag attributes (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="entityGuid" /></td>
    <td><code>string</code></td>
    <td>The internal entity guid</td>
</tr>
<tr>
    <td><CopyableCode code="entityName" /></td>
    <td><code>string</code></td>
    <td>The qualified name of the entity</td>
</tr>
<tr>
    <td><CopyableCode code="entityStatus" /></td>
    <td><code>string</code></td>
    <td>The entity status (ACTIVE, DELETED, PURGED)</td>
</tr>
<tr>
    <td><CopyableCode code="entityType" /></td>
    <td><code>string</code></td>
    <td>The entity type</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error message of this operation</td>
</tr>
<tr>
    <td><CopyableCode code="propagate" /></td>
    <td><code>boolean</code></td>
    <td>Whether to propagate the tag</td>
</tr>
<tr>
    <td><CopyableCode code="removePropagationsOnEntityDelete" /></td>
    <td><code>boolean</code></td>
    <td>Whether to remove propagations on entity delete</td>
</tr>
<tr>
    <td><CopyableCode code="typeName" /></td>
    <td><code>string</code></td>
    <td>The tag name</td>
</tr>
<tr>
    <td><CopyableCode code="validityPeriods" /></td>
    <td><code>array</code></td>
    <td>The validity periods</td>
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
    <td><a href="#get_tags"><CopyableCode code="get_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-typeName"><code>typeName</code></a>, <a href="#parameter-qualifiedName"><code>qualifiedName</code></a></td>
    <td></td>
    <td>Gets the list of tags for a given entity represented by a qualified name.</td>
</tr>
<tr>
    <td><a href="#create_tags"><CopyableCode code="create_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Bulk API to create multiple tags.</td>
</tr>
<tr>
    <td><a href="#update_tags"><CopyableCode code="update_tags" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Bulk API to update multiple tags.</td>
</tr>
<tr>
    <td><a href="#delete_tag"><CopyableCode code="delete_tag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-typeName"><code>typeName</code></a>, <a href="#parameter-qualifiedName"><code>qualifiedName</code></a>, <a href="#parameter-tagName"><code>tagName</code></a></td>
    <td></td>
    <td>Delete a tag for an entity.</td>
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
<tr id="parameter-qualifiedName">
    <td><CopyableCode code="qualifiedName" /></td>
    <td><code>string</code></td>
    <td>The qualified name of the entity</td>
</tr>
<tr id="parameter-tagName">
    <td><CopyableCode code="tagName" /></td>
    <td><code>string</code></td>
    <td>The name of the tag</td>
</tr>
<tr id="parameter-typeName">
    <td><CopyableCode code="typeName" /></td>
    <td><code>string</code></td>
    <td>The type of the entity</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tags"
    values={[
        { label: 'get_tags', value: 'get_tags' }
    ]}
>
<TabItem value="get_tags">

Gets the list of tags for a given entity represented by a qualified name.

```sql
SELECT
attributes,
entityGuid,
entityName,
entityStatus,
entityType,
error,
propagate,
removePropagationsOnEntityDelete,
typeName,
validityPeriods
FROM confluent.catalog.tags
WHERE typeName = '{{ typeName }}' -- required
AND qualifiedName = '{{ qualifiedName }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tags"
    values={[
        { label: 'create_tags', value: 'create_tags' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tags">

Bulk API to create multiple tags.

```sql
INSERT INTO confluent.catalog.tags (

)
SELECT 

RETURNING
attributes,
entityGuid,
entityName,
entityStatus,
entityType,
error,
propagate,
removePropagationsOnEntityDelete,
typeName,
validityPeriods
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_tags"
    values={[
        { label: 'update_tags', value: 'update_tags' }
    ]}
>
<TabItem value="update_tags">

Bulk API to update multiple tags.

```sql
REPLACE confluent.catalog.tags
SET 
-- No updatable properties
RETURNING
attributes,
entityGuid,
entityName,
entityStatus,
entityType,
error,
propagate,
removePropagationsOnEntityDelete,
typeName,
validityPeriods;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tag"
    values={[
        { label: 'delete_tag', value: 'delete_tag' }
    ]}
>
<TabItem value="delete_tag">

Delete a tag for an entity.

```sql
DELETE FROM confluent.catalog.tags
WHERE typeName = '{{ typeName }}' --required
AND qualifiedName = '{{ qualifiedName }}' --required
AND tagName = '{{ tagName }}' --required
;
```
</TabItem>
</Tabs>
