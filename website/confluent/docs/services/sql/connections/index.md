--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - sql
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_connection"
    values={[
        { label: 'get_sqlv1_connection', value: 'get_sqlv1_connection' },
        { label: 'list_sqlv1_connections', value: 'list_sqlv1_connections' }
    ]}
>
<TabItem value="get_sqlv1_connection">

Connection.

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
    <td>The user provided name of the resource, unique within this environment. (example: my-openai-connection, pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Connection)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Encapsulates the model provider access details</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Connection</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sqlv1_connections">

Connections.

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
    <td>The user provided name of the resource, unique within this environment. (example: my-openai-connection, pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Connection)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Encapsulates the model provider access details</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Connection</td>
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
    <td><a href="#get_sqlv1_connection"><CopyableCode code="get_sqlv1_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-connection_name"><code>connection_name</code></a></td>
    <td></td>
    <td>Make a request to read a Connection.</td>
</tr>
<tr>
    <td><a href="#list_sqlv1_connections"><CopyableCode code="list_sqlv1_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td><a href="#parameter-spec.connection_type"><code>spec.connection_type</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered and paginated list of all Connections.</td>
</tr>
<tr>
    <td><a href="#create_sqlv1_connection"><CopyableCode code="create_sqlv1_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Make a request to create a Connection.</td>
</tr>
<tr>
    <td><a href="#update_sqlv1_connection"><CopyableCode code="update_sqlv1_connection" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-connection_name"><code>connection_name</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>Make a request to update a connection.</td>
</tr>
<tr>
    <td><a href="#delete_sqlv1_connection"><CopyableCode code="delete_sqlv1_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-connection_name"><code>connection_name</code></a></td>
    <td></td>
    <td>Make a request to delete a statement.</td>
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
<tr id="parameter-connection_name">
    <td><CopyableCode code="connection_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the connection.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
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
<tr id="parameter-spec.connection_type">
    <td><CopyableCode code="spec.connection_type" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.connection_type</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sqlv1_connection"
    values={[
        { label: 'get_sqlv1_connection', value: 'get_sqlv1_connection' },
        { label: 'list_sqlv1_connections', value: 'list_sqlv1_connections' }
    ]}
>
<TabItem value="get_sqlv1_connection">

Make a request to read a Connection.

```sql
SELECT
name,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.connections
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND connection_name = '{{ connection_name }}' -- required
;
```
</TabItem>
<TabItem value="list_sqlv1_connections">

Retrieve a sorted, filtered and paginated list of all Connections.

```sql
SELECT
name,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.connections
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND spec.connection_type = '{{ spec.connection_type }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sqlv1_connection"
    values={[
        { label: 'create_sqlv1_connection', value: 'create_sqlv1_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sqlv1_connection">

Make a request to create a Connection.

```sql
INSERT INTO confluent.sql.connections (
name,
spec,
organization_id,
environment_id
)
SELECT 
'{{ name }}' /* required */,
'{{ spec }}' /* required */,
'{{ organization_id }}',
'{{ environment_id }}'
RETURNING
name,
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
- name: connections
  props:
    - name: organization_id
      value: "{{ organization_id }}"
      description: Required parameter for the connections resource.
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the connections resource.
    - name: name
      value: "{{ name }}"
      description: |
        The user provided name of the resource, unique within this environment.
    - name: spec
      description: |
        Encapsulates the model provider access details
      value:
        connection_type: "{{ connection_type }}"
        endpoint: "{{ endpoint }}"
        auth_data:
          kind: "{{ kind }}"
          data: "{{ data }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_sqlv1_connection"
    values={[
        { label: 'update_sqlv1_connection', value: 'update_sqlv1_connection' }
    ]}
>
<TabItem value="update_sqlv1_connection">

Make a request to update a connection.

```sql
REPLACE confluent.sql.connections
SET 
name = '{{ name }}',
spec = '{{ spec }}'
WHERE 
organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND connection_name = '{{ connection_name }}' --required
AND spec = '{{ spec }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sqlv1_connection"
    values={[
        { label: 'delete_sqlv1_connection', value: 'delete_sqlv1_connection' }
    ]}
>
<TabItem value="delete_sqlv1_connection">

Make a request to delete a statement.

```sql
DELETE FROM confluent.sql.connections
WHERE organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND connection_name = '{{ connection_name }}' --required
;
```
</TabItem>
</Tabs>
