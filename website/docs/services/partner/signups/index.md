--- 
title: signups
hide_title: false
hide_table_of_contents: false
keywords:
  - signups
  - partner
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

Creates, updates, deletes, gets or lists a <code>signups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.partner.signups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#signup"><CopyableCode code="signup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organization"><code>organization</code></a>, <a href="#parameter-entitlement"><code>entitlement</code></a></td>
    <td><a href="#parameter-dry_run"><code>dry_run</code></a></td>
    <td> Create an organization for a customer. You must pass in either an entitlement object reference (a url to <br />a previously created entitlement) or entitlement details. If you pass in an entitlement object reference, we will link with the <br />created entitlement. If you pass in the entitlement details, we will create the entitlement with the organization <br />in a single transaction. If you pass in user details (email, given name, and family name), we will<br />create a user as well. If you do not pass in user details, you MUST call `/partner/v2/signup/activate`<br />with user details to complete signup.</td>
</tr>
<tr>
    <td><a href="#activate_signup"><CopyableCode code="activate_signup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user"><code>user</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a></td>
    <td></td>
    <td> Creates a user in the organization previously created in `/partner/v2/signup`. This completes the signup<br />process if you did not pass in user details to `/partner/v2/signup`. Calling this endpoint if the signup <br />process has been completed will result in a `409 Conflict` error.</td>
</tr>
<tr>
    <td><a href="#signup_partner_v2_link"><CopyableCode code="signup_partner_v2_link" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-token"><code>token</code></a>, <a href="#parameter-organization"><code>organization</code></a>, <a href="#parameter-entitlement"><code>entitlement</code></a></td>
    <td><a href="#parameter-dry_run"><code>dry_run</code></a></td>
    <td> Signup a customer by linking a new entitlement to an existing Confluent Cloud organization.</td>
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
<tr id="parameter-dry_run">
    <td><CopyableCode code="dry_run" /></td>
    <td><code>boolean</code></td>
    <td>If true, only perform validation of signup</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="signup"
    values={[
        { label: 'signup', value: 'signup' },
        { label: 'activate_signup', value: 'activate_signup' },
        { label: 'signup_partner_v2_link', value: 'signup_partner_v2_link' }
    ]}
>
<TabItem value="signup">

 Create an organization for a customer. You must pass in either an entitlement object reference (a url to <br />a previously created entitlement) or entitlement details. If you pass in an entitlement object reference, we will link with the <br />created entitlement. If you pass in the entitlement details, we will create the entitlement with the organization <br />in a single transaction. If you pass in user details (email, given name, and family name), we will<br />create a user as well. If you do not pass in user details, you MUST call `/partner/v2/signup/activate`<br />with user details to complete signup.

```sql
EXEC confluent.partner.signups.signup 
@dry_run={{ dry_run }} 
@@json=
'{
"organization": "{{ organization }}", 
"user": "{{ user }}", 
"entitlement": "{{ entitlement }}"
}'
;
```
</TabItem>
<TabItem value="activate_signup">

 Creates a user in the organization previously created in `/partner/v2/signup`. This completes the signup<br />process if you did not pass in user details to `/partner/v2/signup`. Calling this endpoint if the signup <br />process has been completed will result in a `409 Conflict` error.

```sql
EXEC confluent.partner.signups.activate_signup 
@@json=
'{
"user": "{{ user }}", 
"organization_id": "{{ organization_id }}"
}'
;
```
</TabItem>
<TabItem value="signup_partner_v2_link">

 Signup a customer by linking a new entitlement to an existing Confluent Cloud organization.

```sql
EXEC confluent.partner.signups.signup_partner_v2_link 
@dry_run={{ dry_run }} 
@@json=
'{
"token": "{{ token }}", 
"organization": "{{ organization }}", 
"entitlement": "{{ entitlement }}"
}'
;
```
</TabItem>
</Tabs>
