--- 
title: role_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - role_bindings
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

Creates, updates, deletes, gets or lists a <code>role_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_bindings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.role_bindings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_role_binding"
    values={[
        { label: 'get_iam_v2_role_binding', value: 'get_iam_v2_role_binding' },
        { label: 'list_iam_v2_role_bindings', value: 'list_iam_v2_role_bindings' }
    ]}
>
<TabItem value="get_iam_v2_role_binding">

Role Binding.

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
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>The name of the role to bind to the principal (example: CloudClusterAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="crn_pattern" /></td>
    <td><code>string (uri)</code></td>
    <td>A CRN that specifies the scope and resource patterns necessary for the role to bind (pattern: <code>^crn://.+$</code>, example: crn://confluent.cloud/organization=1111aaaa-11aa-11aa-11aa-111111aaaaaa/environment=env-aaa1111/cloud-cluster=lkc-1111aaa)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (RoleBinding)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The principal User to bind the role to (pattern: <code>(^User:.+$)</code>, example: User:u-111aaa)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_role_bindings">

Role Binding.

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
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>The name of the role to bind to the principal (example: CloudClusterAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="crn_pattern" /></td>
    <td><code>string (uri)</code></td>
    <td>A CRN that specifies the scope and resource patterns necessary for the role to bind (pattern: <code>^crn://.+$</code>, example: crn://confluent.cloud/organization=1111aaaa-11aa-11aa-11aa-111111aaaaaa/environment=env-aaa1111/cloud-cluster=lkc-1111aaa)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (RoleBinding)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The principal User to bind the role to (pattern: <code>(^User:.+$)</code>, example: User:u-111aaa)</td>
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
    <td><a href="#get_iam_v2_role_binding"><CopyableCode code="get_iam_v2_role_binding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a role binding.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_role_bindings"><CopyableCode code="list_iam_v2_role_bindings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-crn_pattern"><code>crn_pattern</code></a></td>
    <td><a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-role_name"><code>role_name</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all role bindings.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_role_binding"><CopyableCode code="create_iam_v2_role_binding" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-role_name"><code>role_name</code></a>, <a href="#parameter-crn_pattern"><code>crn_pattern</code></a></td>
    <td></td>
    <td>Make a request to create a role binding.</td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_role_binding"><CopyableCode code="delete_iam_v2_role_binding" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a role binding.</td>
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
<tr id="parameter-crn_pattern">
    <td><CopyableCode code="crn_pattern" /></td>
    <td><code>string</code></td>
    <td>Filter the results by a partial search of crn_pattern. (example: crn://confluent.cloud/organization=1111aaaa-11aa-11aa-11aa-111111aaaaaa/environment=env-aaa1111/cloud-cluster=lkc-1111aaa)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the role binding.</td>
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
<tr id="parameter-principal">
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for principal. (example: User:u-111aaa)</td>
</tr>
<tr id="parameter-role_name">
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for role_name. (example: CloudClusterAdmin)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_iam_v2_role_binding"
    values={[
        { label: 'get_iam_v2_role_binding', value: 'get_iam_v2_role_binding' },
        { label: 'list_iam_v2_role_bindings', value: 'list_iam_v2_role_bindings' }
    ]}
>
<TabItem value="get_iam_v2_role_binding">

Make a request to read a role binding.

```sql
SELECT
id,
role_name,
api_version,
crn_pattern,
kind,
metadata,
principal
FROM confluent.iam.role_bindings
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_role_bindings">

Retrieve a sorted, filtered, paginated list of all role bindings.

```sql
SELECT
id,
role_name,
api_version,
crn_pattern,
kind,
metadata,
principal
FROM confluent.iam.role_bindings
WHERE crn_pattern = '{{ crn_pattern }}' -- required
AND principal = '{{ principal }}'
AND role_name = '{{ role_name }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_role_binding"
    values={[
        { label: 'create_iam_v2_role_binding', value: 'create_iam_v2_role_binding' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_role_binding">

Make a request to create a role binding.

```sql
INSERT INTO confluent.iam.role_bindings (
principal,
role_name,
crn_pattern
)
SELECT 
'{{ principal }}' /* required */,
'{{ role_name }}' /* required */,
'{{ crn_pattern }}' /* required */
RETURNING
id,
role_name,
api_version,
crn_pattern,
kind,
metadata,
principal
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: role_bindings
  props:
    - name: principal
      value: "{{ principal }}"
      description: |
        The principal User to bind the role to
    - name: role_name
      value: "{{ role_name }}"
      description: |
        The name of the role to bind to the principal
    - name: crn_pattern
      value: "{{ crn_pattern }}"
      description: |
        A CRN that specifies the scope and resource patterns necessary for the role to bind
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_role_binding"
    values={[
        { label: 'delete_iam_v2_role_binding', value: 'delete_iam_v2_role_binding' }
    ]}
>
<TabItem value="delete_iam_v2_role_binding">

Make a request to delete a role binding.

```sql
DELETE FROM confluent.iam.role_bindings
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
