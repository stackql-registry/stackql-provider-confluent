--- 
title: service_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_accounts
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

Creates, updates, deletes, gets or lists a <code>service_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.service_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_service_account"
    values={[
        { label: 'get_iam_v2_service_account', value: 'get_iam_v2_service_account' },
        { label: 'list_iam_v2_service_accounts', value: 'list_iam_v2_service_accounts' }
    ]}
>
<TabItem value="get_iam_v2_service_account">

Service Account.

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
    <td>A human-readable name for the Service Account (example: DeLorean_auto_repair)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A free-form description of the Service Account (example: Doc's repair bot for the DeLorean)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ServiceAccount)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_service_accounts">

Service Account.

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
    <td>A human-readable name for the Service Account (example: DeLorean_auto_repair)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A free-form description of the Service Account (example: Doc's repair bot for the DeLorean)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ServiceAccount)</td>
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
    <td><a href="#get_iam_v2_service_account"><CopyableCode code="get_iam_v2_service_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a service account.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_service_accounts"><CopyableCode code="list_iam_v2_service_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all service accounts.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_service_account"><CopyableCode code="create_iam_v2_service_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a></td>
    <td><a href="#parameter-assigned_resource_owner"><code>assigned_resource_owner</code></a></td>
    <td>Make a request to create a service account.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_service_account"><CopyableCode code="update_iam_v2_service_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a service account.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_service_account"><CopyableCode code="delete_iam_v2_service_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a service account.<br /><br />If successful, this request will also recursively delete all of the service account's associated resources,<br />including its cloud and cluster API keys.<br /></td>
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
    <td>The unique identifier for the service account.</td>
</tr>
<tr id="parameter-assigned_resource_owner">
    <td><CopyableCode code="assigned_resource_owner" /></td>
    <td><code>string</code></td>
    <td>The resource_id of the principal who will be assigned resource owner on the created service account. Principal can be group-mapping (group-xxx), user (u-xxx), service-account (sa-xxx) or identity-pool (pool-xxx). (example: u-a83k9b)</td>
</tr>
<tr id="parameter-display_name">
    <td><CopyableCode code="display_name" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for display_name. Pass multiple times to see results matching any of the values. (example: [tf_runner_sa, mySA])</td>
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
    defaultValue="get_iam_v2_service_account"
    values={[
        { label: 'get_iam_v2_service_account', value: 'get_iam_v2_service_account' },
        { label: 'list_iam_v2_service_accounts', value: 'list_iam_v2_service_accounts' }
    ]}
>
<TabItem value="get_iam_v2_service_account">

Make a request to read a service account.

```sql
SELECT
id,
display_name,
api_version,
description,
kind,
metadata
FROM confluent.iam.service_accounts
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_service_accounts">

Retrieve a sorted, filtered, paginated list of all service accounts.

```sql
SELECT
id,
display_name,
api_version,
description,
kind,
metadata
FROM confluent.iam.service_accounts
WHERE display_name = '{{ display_name }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_service_account"
    values={[
        { label: 'create_iam_v2_service_account', value: 'create_iam_v2_service_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_service_account">

Make a request to create a service account.

```sql
INSERT INTO confluent.iam.service_accounts (
display_name,
description,
assigned_resource_owner
)
SELECT 
'{{ display_name }}' /* required */,
'{{ description }}',
'{{ assigned_resource_owner }}'
RETURNING
id,
display_name,
api_version,
description,
kind,
metadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_accounts
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        A human-readable name for the Service Account
    - name: description
      value: "{{ description }}"
      description: |
        A free-form description of the Service Account
    - name: assigned_resource_owner
      value: "{{ assigned_resource_owner }}"
      description: The resource_id of the principal who will be assigned resource owner on the created service account. Principal can be group-mapping (group-xxx), user (u-xxx), service-account (sa-xxx) or identity-pool (pool-xxx). (example: u-a83k9b)
      description: The resource_id of the principal who will be assigned resource owner on the created service account. Principal can be group-mapping (group-xxx), user (u-xxx), service-account (sa-xxx) or identity-pool (pool-xxx). (example: u-a83k9b)
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_v2_service_account"
    values={[
        { label: 'update_iam_v2_service_account', value: 'update_iam_v2_service_account' }
    ]}
>
<TabItem value="update_iam_v2_service_account">

Make a request to update a service account.<br /><br />

```sql
UPDATE confluent.iam.service_accounts
SET 
display_name = '{{ display_name }}',
description = '{{ description }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
description,
kind,
metadata;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_service_account"
    values={[
        { label: 'delete_iam_v2_service_account', value: 'delete_iam_v2_service_account' }
    ]}
>
<TabItem value="delete_iam_v2_service_account">

Make a request to delete a service account.<br /><br />If successful, this request will also recursively delete all of the service account's associated resources,<br />including its cloud and cluster API keys.<br />

```sql
DELETE FROM confluent.iam.service_accounts
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
