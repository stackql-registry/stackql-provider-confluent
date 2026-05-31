--- 
title: private_link_attachment_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - private_link_attachment_connections
  - networking
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

Creates, updates, deletes, gets or lists a <code>private_link_attachment_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_link_attachment_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.networking.private_link_attachment_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_networking_v1_private_link_attachment_connection"
    values={[
        { label: 'get_networking_v1_private_link_attachment_connection', value: 'get_networking_v1_private_link_attachment_connection' },
        { label: 'list_networking_v1_private_link_attachment_connections', value: 'list_networking_v1_private_link_attachment_connections' }
    ]}
>
<TabItem value="get_networking_v1_private_link_attachment_connection">

Private Link Attachment Connection.

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
    <td>APIVersion defines the schema version of this representation of a resource. (networking/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (PrivateLinkAttachmentConnection)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Private Link Attachment Connection</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Private Link Attachment Connection</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networking_v1_private_link_attachment_connections">

Private Link Attachment Connection.

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
    <td>APIVersion defines the schema version of this representation of a resource. (networking/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (PrivateLinkAttachmentConnection)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Private Link Attachment Connection</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Private Link Attachment Connection</td>
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
    <td><a href="#get_networking_v1_private_link_attachment_connection"><CopyableCode code="get_networking_v1_private_link_attachment_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a private link attachment connection.</td>
</tr>
<tr>
    <td><a href="#list_networking_v1_private_link_attachment_connections"><CopyableCode code="list_networking_v1_private_link_attachment_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-spec.private_link_attachment"><code>spec.private_link_attachment</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all private link attachment connections.</td>
</tr>
<tr>
    <td><a href="#create_networking_v1_private_link_attachment_connection"><CopyableCode code="create_networking_v1_private_link_attachment_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a private link attachment connection.</td>
</tr>
<tr>
    <td><a href="#update_networking_v1_private_link_attachment_connection"><CopyableCode code="update_networking_v1_private_link_attachment_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a private link attachment connection.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_networking_v1_private_link_attachment_connection"><CopyableCode code="delete_networking_v1_private_link_attachment_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a private link attachment connection.</td>
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
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given environment. (example: env-00000)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the private link attachment connection.</td>
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
<tr id="parameter-spec.private_link_attachment">
    <td><CopyableCode code="spec.private_link_attachment" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.private_link_attachment. (example: platt-00000)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_networking_v1_private_link_attachment_connection"
    values={[
        { label: 'get_networking_v1_private_link_attachment_connection', value: 'get_networking_v1_private_link_attachment_connection' },
        { label: 'list_networking_v1_private_link_attachment_connections', value: 'list_networking_v1_private_link_attachment_connections' }
    ]}
>
<TabItem value="get_networking_v1_private_link_attachment_connection">

Make a request to read a private link attachment connection.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.private_link_attachment_connections
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_networking_v1_private_link_attachment_connections">

Retrieve a sorted, filtered, paginated list of all private link attachment connections.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.private_link_attachment_connections
WHERE environment = '{{ environment }}' -- required
AND spec.private_link_attachment = '{{ spec.private_link_attachment }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_networking_v1_private_link_attachment_connection"
    values={[
        { label: 'create_networking_v1_private_link_attachment_connection', value: 'create_networking_v1_private_link_attachment_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_networking_v1_private_link_attachment_connection">

Make a request to create a private link attachment connection.

```sql
INSERT INTO confluent.networking.private_link_attachment_connections (
spec
)
SELECT 
'{{ spec }}' /* required */
RETURNING
id,
api_version,
kind,
metadata,
spec,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_link_attachment_connections
  props:
    - name: spec
      description: |
        The desired state of the Private Link Attachment Connection
      value:
        display_name: "{{ display_name }}"
        cloud:
          kind: "{{ kind }}"
          vpc_endpoint_id: "{{ vpc_endpoint_id }}"
          private_endpoint_resource_id: "{{ private_endpoint_resource_id }}"
          private_service_connect_connection_id: "{{ private_service_connect_connection_id }}"
        environment:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
          api_version: "{{ api_version }}"
          kind: "{{ kind }}"
        private_link_attachment:
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
    defaultValue="update_networking_v1_private_link_attachment_connection"
    values={[
        { label: 'update_networking_v1_private_link_attachment_connection', value: 'update_networking_v1_private_link_attachment_connection' }
    ]}
>
<TabItem value="update_networking_v1_private_link_attachment_connection">

Make a request to update a private link attachment connection.<br /><br />

```sql
UPDATE confluent.networking.private_link_attachment_connections
SET 
spec = '{{ spec }}'
WHERE 
id = '{{ id }}' --required
AND spec = '{{ spec }}' --required
RETURNING
id,
api_version,
kind,
metadata,
spec,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_networking_v1_private_link_attachment_connection"
    values={[
        { label: 'delete_networking_v1_private_link_attachment_connection', value: 'delete_networking_v1_private_link_attachment_connection' }
    ]}
>
<TabItem value="delete_networking_v1_private_link_attachment_connection">

Make a request to delete a private link attachment connection.

```sql
DELETE FROM confluent.networking.private_link_attachment_connections
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
