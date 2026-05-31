--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_user"
    values={[
        { label: 'get_iam_v2_user', value: 'get_iam_v2_user' },
        { label: 'list_iam_v2_users', value: 'list_iam_v2_users' }
    ]}
>
<TabItem value="get_iam_v2_user">

User.

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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>The user's full name (example: Marty McFly)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The user's authentication method (example: AUTH_TYPE_SSO)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>The user's email address (example: marty.mcfly@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (User)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_users">

User.

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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>The user's full name (example: Marty McFly)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The user's authentication method (example: AUTH_TYPE_SSO)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>The user's email address (example: marty.mcfly@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (User)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
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
    <td><a href="#get_iam_v2_user"><CopyableCode code="get_iam_v2_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a user.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_users"><CopyableCode code="list_iam_v2_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all users.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_user"><CopyableCode code="update_iam_v2_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a user.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_user"><CopyableCode code="delete_iam_v2_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a user.<br /><br />If successful, this request will also recursively delete all of the user's associated resources,<br />including its cloud and cluster API keys.<br /></td>
</tr>
<tr>
    <td><a href="#update_auth_type_iam_v2_user"><CopyableCode code="update_auth_type_iam_v2_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Update the auth type of a user</td>
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
    <td>The unique identifier for the user.</td>
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
    defaultValue="get_iam_v2_user"
    values={[
        { label: 'get_iam_v2_user', value: 'get_iam_v2_user' },
        { label: 'list_iam_v2_users', value: 'list_iam_v2_users' }
    ]}
>
<TabItem value="get_iam_v2_user">

Make a request to read a user.

```sql
SELECT
id,
full_name,
api_version,
auth_type,
email,
kind,
metadata
FROM confluent.iam.users
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_users">

Retrieve a sorted, filtered, paginated list of all users.

```sql
SELECT
id,
full_name,
api_version,
auth_type,
email,
kind,
metadata
FROM confluent.iam.users
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_v2_user"
    values={[
        { label: 'update_iam_v2_user', value: 'update_iam_v2_user' }
    ]}
>
<TabItem value="update_iam_v2_user">

Make a request to update a user.<br /><br />

```sql
UPDATE confluent.iam.users
SET 
email = '{{ email }}',
full_name = '{{ full_name }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
full_name,
api_version,
auth_type,
email,
kind,
metadata;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_user"
    values={[
        { label: 'delete_iam_v2_user', value: 'delete_iam_v2_user' }
    ]}
>
<TabItem value="delete_iam_v2_user">

Make a request to delete a user.<br /><br />If successful, this request will also recursively delete all of the user's associated resources,<br />including its cloud and cluster API keys.<br />

```sql
DELETE FROM confluent.iam.users
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_auth_type_iam_v2_user"
    values={[
        { label: 'update_auth_type_iam_v2_user', value: 'update_auth_type_iam_v2_user' }
    ]}
>
<TabItem value="update_auth_type_iam_v2_user">

Update the auth type of a user

```sql
EXEC confluent.iam.users.update_auth_type_iam_v2_user 
@id='{{ id }}' --required 
@@json=
'{
"auth_type": "{{ auth_type }}"
}'
;
```
</TabItem>
</Tabs>
