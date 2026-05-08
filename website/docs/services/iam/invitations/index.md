--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
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

Creates, updates, deletes, gets or lists an <code>invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_invitation"
    values={[
        { label: 'get_iam_v2_invitation', value: 'get_iam_v2_invitation' },
        { label: 'list_iam_v2_invitations', value: 'list_iam_v2_invitations' }
    ]}
>
<TabItem value="get_iam_v2_invitation">

Invitation.

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
    <td><CopyableCode code="accepted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that the invitation was accepted (example: 2022-07-06T17:21:33.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The user/invitee's authentication type. Note that only the [OrganizationAdmin role](https://docs.confluent.io/cloud/current/access-management/access-control/cloud-rbac.html#organizationadmin) can invite AUTH_TYPE_LOCAL users to SSO organizations. The user's auth_type is set as AUTH_TYPE_SSO by default if the organization has SSO enabled. Otherwise, the user's auth_type is AUTH_TYPE_LOCAL by default.  (example: AUTH_TYPE_SSO)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>The invitation creator</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>The user/invitee's email address (example: johndoe@confluent.io)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that the invitation will expire (example: 2022-07-07T17:22:39.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Invitation)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of invitations (example: INVITE_STATUS_SENT)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The user/invitee</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_invitations">

Invitation.

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
    <td><CopyableCode code="accepted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that the invitation was accepted (example: 2022-07-06T17:21:33.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The user/invitee's authentication type. Note that only the [OrganizationAdmin role](https://docs.confluent.io/cloud/current/access-management/access-control/cloud-rbac.html#organizationadmin) can invite AUTH_TYPE_LOCAL users to SSO organizations. The user's auth_type is set as AUTH_TYPE_SSO by default if the organization has SSO enabled. Otherwise, the user's auth_type is AUTH_TYPE_LOCAL by default.  (example: AUTH_TYPE_SSO)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>The invitation creator</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>The user/invitee's email address (example: johndoe@confluent.io)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that the invitation will expire (example: 2022-07-07T17:22:39.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Invitation)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of invitations (example: INVITE_STATUS_SENT)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The user/invitee</td>
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
    <td><a href="#get_iam_v2_invitation"><CopyableCode code="get_iam_v2_invitation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an invitation.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_invitations"><CopyableCode code="list_iam_v2_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-user"><code>user</code></a>, <a href="#parameter-creator"><code>creator</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all invitations.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_invitation"><CopyableCode code="create_iam_v2_invitation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Make a request to create an invitation.<br /><br />The newly invited user will not have any permissions. Give the user permission by assigning them to one or<br />more roles by creating<br />[role bindings](https://docs.confluent.io/cloud/current/api.html#tag/Role-Bindings-(iamv2))<br />for the created `user`.<br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_invitation"><CopyableCode code="delete_iam_v2_invitation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an invitation.<br /><br />Delete will deactivate the user if the user didn't accept the invitation yet.<br /></td>
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
    <td>The unique identifier for the invitation.</td>
</tr>
<tr id="parameter-creator">
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for creator. (example: u-m2r9o7)</td>
</tr>
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for email. (example: johndoe@confluent.io)</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for status. (example: INVITE_STATUS_SENT)</td>
</tr>
<tr id="parameter-user">
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for user. (example: u-j93dy8)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_iam_v2_invitation"
    values={[
        { label: 'get_iam_v2_invitation', value: 'get_iam_v2_invitation' },
        { label: 'list_iam_v2_invitations', value: 'list_iam_v2_invitations' }
    ]}
>
<TabItem value="get_iam_v2_invitation">

Make a request to read an invitation.

```sql
SELECT
id,
accepted_at,
api_version,
auth_type,
creator,
email,
expires_at,
kind,
metadata,
status,
user
FROM confluent.iam.invitations
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_invitations">

Retrieve a sorted, filtered, paginated list of all invitations.

```sql
SELECT
id,
accepted_at,
api_version,
auth_type,
creator,
email,
expires_at,
kind,
metadata,
status,
user
FROM confluent.iam.invitations
WHERE email = '{{ email }}'
AND status = '{{ status }}'
AND user = '{{ user }}'
AND creator = '{{ creator }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_invitation"
    values={[
        { label: 'create_iam_v2_invitation', value: 'create_iam_v2_invitation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_invitation">

Make a request to create an invitation.<br /><br />The newly invited user will not have any permissions. Give the user permission by assigning them to one or<br />more roles by creating<br />[role bindings](https://docs.confluent.io/cloud/current/api.html#tag/Role-Bindings-(iamv2))<br />for the created `user`.<br />

```sql
INSERT INTO confluent.iam.invitations (
email,
auth_type
)
SELECT 
'{{ email }}' /* required */,
'{{ auth_type }}'
RETURNING
id,
accepted_at,
api_version,
auth_type,
creator,
email,
expires_at,
kind,
metadata,
status,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invitations
  props:
    - name: email
      value: "{{ email }}"
      description: |
        The user/invitee's email address
    - name: auth_type
      value: "{{ auth_type }}"
      description: |
        The user/invitee's authentication type. Note that only the [OrganizationAdmin role](https://docs.confluent.io/cloud/current/access-management/access-control/cloud-rbac.html#organizationadmin)
        can invite AUTH_TYPE_LOCAL users to SSO organizations.
        The user's auth_type is set as AUTH_TYPE_SSO by default if the organization has SSO enabled.
        Otherwise, the user's auth_type is AUTH_TYPE_LOCAL by default.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_invitation"
    values={[
        { label: 'delete_iam_v2_invitation', value: 'delete_iam_v2_invitation' }
    ]}
>
<TabItem value="delete_iam_v2_invitation">

Make a request to delete an invitation.<br /><br />Delete will deactivate the user if the user didn't accept the invitation yet.<br />

```sql
DELETE FROM confluent.iam.invitations
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
