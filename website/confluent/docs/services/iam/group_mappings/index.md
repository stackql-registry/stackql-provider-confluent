--- 
title: group_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - group_mappings
  - iam
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

Creates, updates, deletes, gets or lists a <code>group_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.group_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_sso_group_mapping"
    values={[
        { label: 'get_iam_v2_sso_group_mapping', value: 'get_iam_v2_sso_group_mapping' },
        { label: 'list_iam_v2_sso_group_mappings', value: 'list_iam_v2_sso_group_mappings' }
    ]}
>
<TabItem value="get_iam_v2_sso_group_mapping">

Group Mapping.

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
    <td>ID is the "natural identifier" for an object within its scope/namespace; it is normally unique across time but not space. That is, you can assume that the ID will not be reclaimed and reused after an object is deleted ("time"); however, it may collide with IDs for other object `kinds` or objects of the same `kind` within a different scope/namespace ("space"). (example: dlz-f3a90de)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group mapping. (example: Application Developers)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam.v2/sso)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description explaining the purpose and use of the group mapping. (example: Admin access to production environment for Engineering)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>A single group identifier or a condition based on [supported CEL operators](https://docs.confluent.io/cloud/current/access-management/authenticate/sso/group-mapping/overview.html#supported-cel-operators-for-group-mapping) that defines which groups are included. (example: "kafka" in groups && "all" in groups || "everyone" in groups)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (GroupMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The unique federated identity associated with this group mapping. (example: group-a1b2)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the group mapping. (example: ENABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_sso_group_mappings">

Group Mapping.

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
    <td>ID is the "natural identifier" for an object within its scope/namespace; it is normally unique across time but not space. That is, you can assume that the ID will not be reclaimed and reused after an object is deleted ("time"); however, it may collide with IDs for other object `kinds` or objects of the same `kind` within a different scope/namespace ("space"). (example: dlz-f3a90de)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group mapping. (example: Application Developers)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam.v2/sso)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description explaining the purpose and use of the group mapping. (example: Admin access to production environment for Engineering)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>A single group identifier or a condition based on [supported CEL operators](https://docs.confluent.io/cloud/current/access-management/authenticate/sso/group-mapping/overview.html#supported-cel-operators-for-group-mapping) that defines which groups are included. (example: "kafka" in groups && "all" in groups || "everyone" in groups)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (GroupMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The unique federated identity associated with this group mapping. (example: group-a1b2)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the group mapping. (example: ENABLED)</td>
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
    <td><a href="#get_iam_v2_sso_group_mapping"><CopyableCode code="get_iam_v2_sso_group_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a group mapping.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_sso_group_mappings"><CopyableCode code="list_iam_v2_sso_group_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all group mappings.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_sso_group_mapping"><CopyableCode code="create_iam_v2_sso_group_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td></td>
    <td>Make a request to create a group mapping.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_sso_group_mapping"><CopyableCode code="update_iam_v2_sso_group_mapping" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a group mapping.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_sso_group_mapping"><CopyableCode code="delete_iam_v2_sso_group_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a group mapping.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the group mapping.</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer</code></td>
    <td>A pagination size for collection requests.</td>
</tr>
<tr id="parameter-page_token">
    <td><CopyableCode code="page_token" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token for collection requests.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_iam_v2_sso_group_mapping"
    values={[
        { label: 'get_iam_v2_sso_group_mapping', value: 'get_iam_v2_sso_group_mapping' },
        { label: 'list_iam_v2_sso_group_mappings', value: 'list_iam_v2_sso_group_mappings' }
    ]}
>
<TabItem value="get_iam_v2_sso_group_mapping">

Make a request to read a group mapping.

```sql
SELECT
id,
display_name,
api_version,
description,
filter,
kind,
metadata,
principal,
state
FROM confluent.iam.group_mappings
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_sso_group_mappings">

Retrieve a sorted, filtered, paginated list of all group mappings.

```sql
SELECT
id,
display_name,
api_version,
description,
filter,
kind,
metadata,
principal,
state
FROM confluent.iam.group_mappings
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_sso_group_mapping"
    values={[
        { label: 'create_iam_v2_sso_group_mapping', value: 'create_iam_v2_sso_group_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_sso_group_mapping">

Make a request to create a group mapping.

```sql
INSERT INTO confluent.iam.group_mappings (
display_name,
description,
filter
)
SELECT 
'{{ display_name }}' /* required */,
'{{ description }}' /* required */,
'{{ filter }}' /* required */
RETURNING
id,
display_name,
api_version,
description,
filter,
kind,
metadata,
principal,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: group_mappings
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        The name of the group mapping.
    - name: description
      value: "{{ description }}"
      description: |
        A description explaining the purpose and use of the group mapping.
    - name: filter
      value: "{{ filter }}"
      description: |
        A single group identifier or a condition based on [supported CEL operators](https://docs.confluent.io/cloud/current/access-management/authenticate/sso/group-mapping/overview.html#supported-cel-operators-for-group-mapping) that defines which groups are included.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_v2_sso_group_mapping"
    values={[
        { label: 'update_iam_v2_sso_group_mapping', value: 'update_iam_v2_sso_group_mapping' }
    ]}
>
<TabItem value="update_iam_v2_sso_group_mapping">

Make a request to update a group mapping.<br /><br />

```sql
UPDATE confluent.iam.group_mappings
SET 
display_name = '{{ display_name }}',
description = '{{ description }}',
filter = '{{ filter }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
description,
filter,
kind,
metadata,
principal,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_sso_group_mapping"
    values={[
        { label: 'delete_iam_v2_sso_group_mapping', value: 'delete_iam_v2_sso_group_mapping' }
    ]}
>
<TabItem value="delete_iam_v2_sso_group_mapping">

Make a request to delete a group mapping.

```sql
DELETE FROM confluent.iam.group_mappings
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
