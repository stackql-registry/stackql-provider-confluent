--- 
title: business_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - business_metadata
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

Creates, updates, deletes, gets or lists a <code>business_metadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="business_metadata" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.catalog.business_metadata" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_business_metadata"
    values={[
        { label: 'get_business_metadata', value: 'get_business_metadata' }
    ]}
>
<TabItem value="get_business_metadata">

The business metadata

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
    <td>The business metadata attributes (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="entityName" /></td>
    <td><code>string</code></td>
    <td>The qualified name of the entity</td>
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
    <td><CopyableCode code="typeName" /></td>
    <td><code>string</code></td>
    <td>The business metadata name</td>
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
    <td><a href="#get_business_metadata"><CopyableCode code="get_business_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-typeName"><code>typeName</code></a>, <a href="#parameter-qualifiedName"><code>qualifiedName</code></a></td>
    <td></td>
    <td>Gets the list of business metadata for a given entity represented<br />by a qualified name.</td>
</tr>
<tr>
    <td><a href="#create_business_metadata"><CopyableCode code="create_business_metadata" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Bulk API to create multiple business metadata.</td>
</tr>
<tr>
    <td><a href="#update_business_metadata"><CopyableCode code="update_business_metadata" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Bulk API to update multiple business metadata.</td>
</tr>
<tr>
    <td><a href="#delete_business_metadata"><CopyableCode code="delete_business_metadata" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-typeName"><code>typeName</code></a>, <a href="#parameter-qualifiedName"><code>qualifiedName</code></a>, <a href="#parameter-bmName"><code>bmName</code></a></td>
    <td></td>
    <td>Delete a business metadata on an entity.</td>
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
<tr id="parameter-bmName">
    <td><CopyableCode code="bmName" /></td>
    <td><code>string</code></td>
    <td>The name of the business metadata</td>
</tr>
<tr id="parameter-qualifiedName">
    <td><CopyableCode code="qualifiedName" /></td>
    <td><code>string</code></td>
    <td>The qualified name of the entity</td>
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
    defaultValue="get_business_metadata"
    values={[
        { label: 'get_business_metadata', value: 'get_business_metadata' }
    ]}
>
<TabItem value="get_business_metadata">

Gets the list of business metadata for a given entity represented<br />by a qualified name.

```sql
SELECT
attributes,
entityName,
entityType,
error,
typeName
FROM confluent.catalog.business_metadata
WHERE typeName = '{{ typeName }}' -- required
AND qualifiedName = '{{ qualifiedName }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_business_metadata"
    values={[
        { label: 'create_business_metadata', value: 'create_business_metadata' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_business_metadata">

Bulk API to create multiple business metadata.

```sql
INSERT INTO confluent.catalog.business_metadata (

)
SELECT 

RETURNING
attributes,
entityName,
entityType,
error,
typeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: business_metadata
  props:
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_business_metadata"
    values={[
        { label: 'update_business_metadata', value: 'update_business_metadata' }
    ]}
>
<TabItem value="update_business_metadata">

Bulk API to update multiple business metadata.

```sql
REPLACE confluent.catalog.business_metadata
SET 
-- No updatable properties
RETURNING
attributes,
entityName,
entityType,
error,
typeName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_business_metadata"
    values={[
        { label: 'delete_business_metadata', value: 'delete_business_metadata' }
    ]}
>
<TabItem value="delete_business_metadata">

Delete a business metadata on an entity.

```sql
DELETE FROM confluent.catalog.business_metadata
WHERE typeName = '{{ typeName }}' --required
AND qualifiedName = '{{ qualifiedName }}' --required
AND bmName = '{{ bmName }}' --required
;
```
</TabItem>
</Tabs>
