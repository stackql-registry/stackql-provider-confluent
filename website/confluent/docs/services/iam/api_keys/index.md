--- 
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
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

Creates, updates, deletes, gets or lists an <code>api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_api_key"
    values={[
        { label: 'get_iam_v2_api_key', value: 'get_iam_v2_api_key' },
        { label: 'list_iam_v2_api_keys', value: 'list_iam_v2_api_keys' }
    ]}
>
<TabItem value="get_iam_v2_api_key">

API Key.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ApiKey)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Api Key</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_api_keys">

API Key.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ApiKey)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Api Key</td>
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
    <td><a href="#get_iam_v2_api_key"><CopyableCode code="get_iam_v2_api_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an API key.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_api_keys"><CopyableCode code="list_iam_v2_api_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-spec.owner"><code>spec.owner</code></a>, <a href="#parameter-spec.resource"><code>spec.resource</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all API keys.<br /><br />This can show all keys for a single owner (across resources - Kafka clusters), or all keys for a single<br />resource (across owners). If no `owner` or `resource` filters are specified, returns all API Keys in the<br />organization. You will only see the keys that are accessible to the account making the API request.<br /></td>
</tr>
<tr>
    <td><a href="#create_iam_v2_api_key"><CopyableCode code="create_iam_v2_api_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create an API key.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_api_key"><CopyableCode code="update_iam_v2_api_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update an API key.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_api_key"><CopyableCode code="delete_iam_v2_api_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an API key.</td>
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
    <td>The unique identifier for the API key.</td>
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
<tr id="parameter-spec.owner">
    <td><CopyableCode code="spec.owner" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.owner.</td>
</tr>
<tr id="parameter-spec.resource">
    <td><CopyableCode code="spec.resource" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_iam_v2_api_key"
    values={[
        { label: 'get_iam_v2_api_key', value: 'get_iam_v2_api_key' },
        { label: 'list_iam_v2_api_keys', value: 'list_iam_v2_api_keys' }
    ]}
>
<TabItem value="get_iam_v2_api_key">

Make a request to read an API key.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.iam.api_keys
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_api_keys">

Retrieve a sorted, filtered, paginated list of all API keys.<br /><br />This can show all keys for a single owner (across resources - Kafka clusters), or all keys for a single<br />resource (across owners). If no `owner` or `resource` filters are specified, returns all API Keys in the<br />organization. You will only see the keys that are accessible to the account making the API request.<br />

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.iam.api_keys
WHERE spec.owner = '{{ spec.owner }}'
AND spec.resource = '{{ spec.resource }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_api_key"
    values={[
        { label: 'create_iam_v2_api_key', value: 'create_iam_v2_api_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_api_key">

Make a request to create an API key.

```sql
INSERT INTO confluent.iam.api_keys (
spec
)
SELECT 
'{{ spec }}' /* required */
RETURNING
id,
api_version,
kind,
metadata,
spec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_keys
  props:
    - name: spec
      description: |
        The desired state of the Api Key
      value:
        secret: "{{ secret }}"
        display_name: "{{ display_name }}"
        description: "{{ description }}"
        owner:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
          api_version: "{{ api_version }}"
          kind: "{{ kind }}"
        resource:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
          api_version: "{{ api_version }}"
          kind: "{{ kind }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_v2_api_key"
    values={[
        { label: 'update_iam_v2_api_key', value: 'update_iam_v2_api_key' }
    ]}
>
<TabItem value="update_iam_v2_api_key">

Make a request to update an API key.<br /><br />

```sql
UPDATE confluent.iam.api_keys
SET 
spec = '{{ spec }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
api_version,
kind,
metadata,
spec;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_api_key"
    values={[
        { label: 'delete_iam_v2_api_key', value: 'delete_iam_v2_api_key' }
    ]}
>
<TabItem value="delete_iam_v2_api_key">

Make a request to delete an API key.

```sql
DELETE FROM confluent.iam.api_keys
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
