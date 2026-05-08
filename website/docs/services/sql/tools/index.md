--- 
title: tools
hide_title: false
hide_table_of_contents: false
keywords:
  - tools
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

Creates, updates, deletes, gets or lists a <code>tools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.tools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_tool"
    values={[
        { label: 'get_sqlv1_tool', value: 'get_sqlv1_tool' },
        { label: 'list_sqlv1_tools', value: 'list_sqlv1_tools' }
    ]}
>
<TabItem value="get_sqlv1_tool">

Tool.

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
    <td>The user provided name of the tool, unique within this environment. (example: linear-mcp-tool, pattern: <code>&lsqb;a-z0-9_&rsqb;(&lsqb;-a-z0-9_&rsqb;*&lsqb;a-z0-9_&rsqb;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Tool)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The spec of the Tool. A tool must reference either a `connection` (for MCP or A2A tools) or a `function` (for function-based tools), but not both.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Tool</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sqlv1_tools">

Tools.

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
    <td>The user provided name of the tool, unique within this environment. (example: linear-mcp-tool, pattern: <code>&lsqb;a-z0-9_&rsqb;(&lsqb;-a-z0-9_&rsqb;*&lsqb;a-z0-9_&rsqb;)?</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Tool)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The spec of the Tool. A tool must reference either a `connection` (for MCP or A2A tools) or a `function` (for function-based tools), but not both.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Tool</td>
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
    <td><a href="#get_sqlv1_tool"><CopyableCode code="get_sqlv1_tool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-tool_name"><code>tool_name</code></a></td>
    <td></td>
    <td>Make a request to read a Tool.</td>
</tr>
<tr>
    <td><a href="#list_sqlv1_tools"><CopyableCode code="list_sqlv1_tools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all Tools.</td>
</tr>
<tr>
    <td><a href="#create_sqlv1_tool"><CopyableCode code="create_sqlv1_tool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a Tool.</td>
</tr>
<tr>
    <td><a href="#delete_sqlv1_tool"><CopyableCode code="delete_sqlv1_tool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-tool_name"><code>tool_name</code></a></td>
    <td></td>
    <td>Make a request to delete a Tool.</td>
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
<tr id="parameter-database_name">
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database.</td>
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
<tr id="parameter-tool_name">
    <td><CopyableCode code="tool_name" /></td>
    <td><code>string</code></td>
    <td>The user provided name of the Tool.</td>
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
    defaultValue="get_sqlv1_tool"
    values={[
        { label: 'get_sqlv1_tool', value: 'get_sqlv1_tool' },
        { label: 'list_sqlv1_tools', value: 'list_sqlv1_tools' }
    ]}
>
<TabItem value="get_sqlv1_tool">

Make a request to read a Tool.

```sql
SELECT
name,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.tools
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND database_name = '{{ database_name }}' -- required
AND tool_name = '{{ tool_name }}' -- required
;
```
</TabItem>
<TabItem value="list_sqlv1_tools">

Retrieve a sorted, filtered, paginated list of all Tools.

```sql
SELECT
name,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.tools
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND database_name = '{{ database_name }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sqlv1_tool"
    values={[
        { label: 'create_sqlv1_tool', value: 'create_sqlv1_tool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sqlv1_tool">

Make a request to create a Tool.

```sql
INSERT INTO confluent.sql.tools (
name,
spec,
organization_id,
environment_id,
database_name
)
SELECT 
'{{ name }}' /* required */,
'{{ spec }}' /* required */,
'{{ organization_id }}',
'{{ environment_id }}',
'{{ database_name }}'
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
- name: tools
  props:
    - name: organization_id
      value: "{{ organization_id }}"
      description: Required parameter for the tools resource.
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the tools resource.
    - name: database_name
      value: "{{ database_name }}"
      description: Required parameter for the tools resource.
    - name: name
      value: "{{ name }}"
      description: |
        The user provided name of the tool, unique within this environment.
    - name: spec
      description: |
        The spec of the Tool. A tool must reference either a \`connection\` (for MCP or A2A tools)
        or a \`function\` (for function-based tools), but not both.
      value:
        connection: "{{ connection }}"
        function: "{{ function }}"
        comment: "{{ comment }}"
        options: "{{ options }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sqlv1_tool"
    values={[
        { label: 'delete_sqlv1_tool', value: 'delete_sqlv1_tool' }
    ]}
>
<TabItem value="delete_sqlv1_tool">

Make a request to delete a Tool.

```sql
DELETE FROM confluent.sql.tools
WHERE organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND database_name = '{{ database_name }}' --required
AND tool_name = '{{ tool_name }}' --required
;
```
</TabItem>
</Tabs>
