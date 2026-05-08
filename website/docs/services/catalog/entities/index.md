--- 
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
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

Creates, updates, deletes, gets or lists an <code>entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.catalog.entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_unique_attributes"
    values={[
        { label: 'get_by_unique_attributes', value: 'get_by_unique_attributes' }
    ]}
>
<TabItem value="get_by_unique_attributes">

The entity

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
    <td><CopyableCode code="entity" /></td>
    <td><code>object</code></td>
    <td>The entity</td>
</tr>
<tr>
    <td><CopyableCode code="referredEntities" /></td>
    <td><code>object</code></td>
    <td>The referred entities</td>
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
    <td><a href="#get_by_unique_attributes"><CopyableCode code="get_by_unique_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-typeName"><code>typeName</code></a>, <a href="#parameter-qualifiedName"><code>qualifiedName</code></a></td>
    <td><a href="#parameter-minExtInfo"><code>minExtInfo</code></a>, <a href="#parameter-ignoreRelationships"><code>ignoreRelationships</code></a></td>
    <td>Fetch complete definition of an entity given its type and unique attribute.</td>
</tr>
<tr>
    <td><a href="#partial_entity_update"><CopyableCode code="partial_entity_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Partially update an entity attribute.</td>
</tr>
<tr>
    <td><a href="#search_using_attribute"><CopyableCode code="search_using_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-attr"><code>attr</code></a>, <a href="#parameter-attrName"><code>attrName</code></a>, <a href="#parameter-attrValuePrefix"><code>attrValuePrefix</code></a>, <a href="#parameter-tag"><code>tag</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Retrieve data for the specified attribute search query.</td>
</tr>
<tr>
    <td><a href="#search_using_basic"><CopyableCode code="search_using_basic" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-attr"><code>attr</code></a>, <a href="#parameter-tag"><code>tag</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Retrieve data for the specified fulltext query.</td>
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
<tr id="parameter-typeName">
    <td><CopyableCode code="typeName" /></td>
    <td><code>string</code></td>
    <td>The type of the entity</td>
</tr>
<tr id="parameter-attr">
    <td><CopyableCode code="attr" /></td>
    <td><code>array</code></td>
    <td>One of more additional attributes to return in the response</td>
</tr>
<tr id="parameter-attrName">
    <td><CopyableCode code="attrName" /></td>
    <td><code>array</code></td>
    <td>The attribute to search</td>
</tr>
<tr id="parameter-attrValuePrefix">
    <td><CopyableCode code="attrValuePrefix" /></td>
    <td><code>array</code></td>
    <td>The prefix for the attribute value to search</td>
</tr>
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include deleted entities</td>
</tr>
<tr id="parameter-ignoreRelationships">
    <td><CopyableCode code="ignoreRelationships" /></td>
    <td><code>boolean</code></td>
    <td>Whether to ignore relationships</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Limit the result set to only include the specified number of entries</td>
</tr>
<tr id="parameter-minExtInfo">
    <td><CopyableCode code="minExtInfo" /></td>
    <td><code>boolean</code></td>
    <td>Whether to populate on header and schema attributes</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Start offset of the result set (useful for pagination)</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The full-text query</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>An attribute to sort by</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Sort order, either ASCENDING (default) or DESCENDING</td>
</tr>
<tr id="parameter-tag">
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>Limit the result to only entities tagged with the given tag</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>array</code></td>
    <td>Limit the result to only entities of specified types</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_by_unique_attributes"
    values={[
        { label: 'get_by_unique_attributes', value: 'get_by_unique_attributes' }
    ]}
>
<TabItem value="get_by_unique_attributes">

Fetch complete definition of an entity given its type and unique attribute.

```sql
SELECT
entity,
referredEntities
FROM confluent.catalog.entities
WHERE typeName = '{{ typeName }}' -- required
AND qualifiedName = '{{ qualifiedName }}' -- required
AND minExtInfo = '{{ minExtInfo }}'
AND ignoreRelationships = '{{ ignoreRelationships }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="partial_entity_update"
    values={[
        { label: 'partial_entity_update', value: 'partial_entity_update' }
    ]}
>
<TabItem value="partial_entity_update">

Partially update an entity attribute.

```sql
REPLACE confluent.catalog.entities
SET 
referredEntities = '{{ referredEntities }}',
entity = '{{ entity }}'
RETURNING
mutatedEntities;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_using_attribute"
    values={[
        { label: 'search_using_attribute', value: 'search_using_attribute' },
        { label: 'search_using_basic', value: 'search_using_basic' }
    ]}
>
<TabItem value="search_using_attribute">

Retrieve data for the specified attribute search query.

```sql
EXEC confluent.catalog.entities.search_using_attribute 
@type='{{ type }}', 
@attr='{{ attr }}', 
@attrName='{{ attrName }}', 
@attrValuePrefix='{{ attrValuePrefix }}', 
@tag='{{ tag }}', 
@sortBy='{{ sortBy }}', 
@sortOrder='{{ sortOrder }}', 
@deleted={{ deleted }}, 
@limit='{{ limit }}', 
@offset='{{ offset }}'
;
```
</TabItem>
<TabItem value="search_using_basic">

Retrieve data for the specified fulltext query.

```sql
EXEC confluent.catalog.entities.search_using_basic 
@query='{{ query }}', 
@type='{{ type }}', 
@attr='{{ attr }}', 
@tag='{{ tag }}', 
@sortBy='{{ sortBy }}', 
@sortOrder='{{ sortOrder }}', 
@deleted={{ deleted }}, 
@limit='{{ limit }}', 
@offset='{{ offset }}'
;
```
</TabItem>
</Tabs>
