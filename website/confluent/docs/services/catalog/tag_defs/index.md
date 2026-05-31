--- 
title: tag_defs
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_defs
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

Creates, updates, deletes, gets or lists a <code>tag_defs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_defs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.catalog.tag_defs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tag_def_by_name"
    values={[
        { label: 'get_tag_def_by_name', value: 'get_tag_def_by_name' },
        { label: 'get_all_tag_defs', value: 'get_all_tag_defs' }
    ]}
>
<TabItem value="get_tag_def_by_name">

The tag definition

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name</td>
</tr>
<tr>
    <td><CopyableCode code="attributeDefs" /></td>
    <td><code>array</code></td>
    <td>The attribute definitions</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category (PRIMITIVE, OBJECT_ID_TYPE, ENUM, STRUCT, CLASSIFICATION, ENTITY, ARRAY, MAP, RELATIONSHIP, BUSINESS_METADATA)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The create time</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The creator</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description</td>
</tr>
<tr>
    <td><CopyableCode code="entityTypes" /></td>
    <td><code>array</code></td>
    <td>The entity types</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>The internal guid</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>The options</td>
</tr>
<tr>
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The service type</td>
</tr>
<tr>
    <td><CopyableCode code="subTypes" /></td>
    <td><code>array</code></td>
    <td>The subtypes</td>
</tr>
<tr>
    <td><CopyableCode code="superTypes" /></td>
    <td><code>array</code></td>
    <td>The supertypes</td>
</tr>
<tr>
    <td><CopyableCode code="typeVersion" /></td>
    <td><code>string</code></td>
    <td>The type version</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The update time</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The updater</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>The version</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_tag_defs">

The tag definitions

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name</td>
</tr>
<tr>
    <td><CopyableCode code="attributeDefs" /></td>
    <td><code>array</code></td>
    <td>The attribute definitions</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category (PRIMITIVE, OBJECT_ID_TYPE, ENUM, STRUCT, CLASSIFICATION, ENTITY, ARRAY, MAP, RELATIONSHIP, BUSINESS_METADATA)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The create time</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The creator</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description</td>
</tr>
<tr>
    <td><CopyableCode code="entityTypes" /></td>
    <td><code>array</code></td>
    <td>The entity types</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error message of this operation</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>The internal guid</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>The options</td>
</tr>
<tr>
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The service type</td>
</tr>
<tr>
    <td><CopyableCode code="subTypes" /></td>
    <td><code>array</code></td>
    <td>The subtypes</td>
</tr>
<tr>
    <td><CopyableCode code="superTypes" /></td>
    <td><code>array</code></td>
    <td>The supertypes</td>
</tr>
<tr>
    <td><CopyableCode code="typeVersion" /></td>
    <td><code>string</code></td>
    <td>The type version</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The update time</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The updater</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>The version</td>
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
    <td><a href="#get_tag_def_by_name"><CopyableCode code="get_tag_def_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tagName"><code>tagName</code></a></td>
    <td></td>
    <td>Get the tag definition with the given name.</td>
</tr>
<tr>
    <td><a href="#get_all_tag_defs"><CopyableCode code="get_all_tag_defs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>Bulk retrieval API for retrieving tag definitions.</td>
</tr>
<tr>
    <td><a href="#create_tag_defs"><CopyableCode code="create_tag_defs" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Bulk create API for tag definitions.</td>
</tr>
<tr>
    <td><a href="#update_tag_defs"><CopyableCode code="update_tag_defs" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Bulk update API for tag definitions.</td>
</tr>
<tr>
    <td><a href="#delete_tag_def"><CopyableCode code="delete_tag_def" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tagName"><code>tagName</code></a></td>
    <td></td>
    <td>Delete API for tag definition identified by its name.</td>
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
<tr id="parameter-tagName">
    <td><CopyableCode code="tagName" /></td>
    <td><code>string</code></td>
    <td>The name of the tag definition</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of a tag definition name</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tag_def_by_name"
    values={[
        { label: 'get_tag_def_by_name', value: 'get_tag_def_by_name' },
        { label: 'get_all_tag_defs', value: 'get_all_tag_defs' }
    ]}
>
<TabItem value="get_tag_def_by_name">

Get the tag definition with the given name.

```sql
SELECT
name,
attributeDefs,
category,
createTime,
createdBy,
description,
entityTypes,
guid,
options,
serviceType,
subTypes,
superTypes,
typeVersion,
updateTime,
updatedBy,
version
FROM confluent.catalog.tag_defs
WHERE tagName = '{{ tagName }}' -- required
;
```
</TabItem>
<TabItem value="get_all_tag_defs">

Bulk retrieval API for retrieving tag definitions.

```sql
SELECT
name,
attributeDefs,
category,
createTime,
createdBy,
description,
entityTypes,
error,
guid,
options,
serviceType,
subTypes,
superTypes,
typeVersion,
updateTime,
updatedBy,
version
FROM confluent.catalog.tag_defs
WHERE prefix = '{{ prefix }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag_defs"
    values={[
        { label: 'create_tag_defs', value: 'create_tag_defs' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag_defs">

Bulk create API for tag definitions.

```sql
INSERT INTO confluent.catalog.tag_defs (

)
SELECT 

RETURNING
name,
attributeDefs,
category,
createTime,
createdBy,
description,
entityTypes,
error,
guid,
options,
serviceType,
subTypes,
superTypes,
typeVersion,
updateTime,
updatedBy,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tag_defs
  props:
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_tag_defs"
    values={[
        { label: 'update_tag_defs', value: 'update_tag_defs' }
    ]}
>
<TabItem value="update_tag_defs">

Bulk update API for tag definitions.

```sql
REPLACE confluent.catalog.tag_defs
SET 
-- No updatable properties
RETURNING
name,
attributeDefs,
category,
createTime,
createdBy,
description,
entityTypes,
error,
guid,
options,
serviceType,
subTypes,
superTypes,
typeVersion,
updateTime,
updatedBy,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tag_def"
    values={[
        { label: 'delete_tag_def', value: 'delete_tag_def' }
    ]}
>
<TabItem value="delete_tag_def">

Delete API for tag definition identified by its name.

```sql
DELETE FROM confluent.catalog.tag_defs
WHERE tagName = '{{ tagName }}' --required
;
```
</TabItem>
</Tabs>
