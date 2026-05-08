--- 
title: statements
hide_title: false
hide_table_of_contents: false
keywords:
  - statements
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

Creates, updates, deletes, gets or lists a <code>statements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.statements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_statement"
    values={[
        { label: 'get_sqlv1_statement', value: 'get_sqlv1_statement' },
        { label: 'list_sqlv1_statements', value: 'list_sqlv1_statements' }
    ]}
>
<TabItem value="get_sqlv1_statement">

Statement.

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
    <td>The user provided name of the resource, unique within this environment. (example: sql123, pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Statement)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the statement.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>`Statement Result` represents a resource used to model results of SQL statements. The API allows you to read your SQL statement result.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specs of the Statement</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Statement</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sqlv1_statements">

Statements.

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
    <td>The user provided name of the resource, unique within this environment. (example: sql123, pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Statement)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the statement.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>`Statement Result` represents a resource used to model results of SQL statements. The API allows you to read your SQL statement result.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specs of the Statement</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Statement</td>
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
    <td><a href="#get_sqlv1_statement"><CopyableCode code="get_sqlv1_statement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-statement_name"><code>statement_name</code></a></td>
    <td></td>
    <td>Make a request to read a statement.</td>
</tr>
<tr>
    <td><a href="#list_sqlv1_statements"><CopyableCode code="list_sqlv1_statements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td><a href="#parameter-spec.compute_pool_id"><code>spec.compute_pool_id</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a>, <a href="#parameter-label_selector"><code>label_selector</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all statements.</td>
</tr>
<tr>
    <td><a href="#create_sqlv1_statement"><CopyableCode code="create_sqlv1_statement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Make a request to create a statement.</td>
</tr>
<tr>
    <td><a href="#patch_sqlv1_statement"><CopyableCode code="patch_sqlv1_statement" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-statement_name"><code>statement_name</code></a></td>
    <td></td>
    <td>Make a request to patch a statement.</td>
</tr>
<tr>
    <td><a href="#update_sqlv1_statement"><CopyableCode code="update_sqlv1_statement" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-statement_name"><code>statement_name</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>Make a request to update a statement.<br />The request will fail with a 409 Conflict error if the Statement has changed since it was fetched.<br />In this case, do a GET, reapply the modifications, and try the update again.</td>
</tr>
<tr>
    <td><a href="#delete_sqlv1_statement"><CopyableCode code="delete_sqlv1_statement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-statement_name"><code>statement_name</code></a></td>
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
<tr id="parameter-statement_name">
    <td><CopyableCode code="statement_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the statement.</td>
</tr>
<tr id="parameter-label_selector">
    <td><CopyableCode code="label_selector" /></td>
    <td><code>string</code></td>
    <td>A comma-separated label selector to filter the statements.</td>
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
<tr id="parameter-spec.compute_pool_id">
    <td><CopyableCode code="spec.compute_pool_id" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.compute_pool_id. When creating statements, if compute_pool_id is not specified, the statement will use the default compute pool. The default pool is automatically determined by the system. (example: lfcp-00000)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sqlv1_statement"
    values={[
        { label: 'get_sqlv1_statement', value: 'get_sqlv1_statement' },
        { label: 'list_sqlv1_statements', value: 'list_sqlv1_statements' }
    ]}
>
<TabItem value="get_sqlv1_statement">

Make a request to read a statement.

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
result,
spec,
status
FROM confluent.sql.statements
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND statement_name = '{{ statement_name }}' -- required
;
```
</TabItem>
<TabItem value="list_sqlv1_statements">

Retrieve a sorted, filtered, paginated list of all statements.

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
result,
spec,
status
FROM confluent.sql.statements
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND spec.compute_pool_id = '{{ spec.compute_pool_id }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
AND label_selector = '{{ label_selector }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sqlv1_statement"
    values={[
        { label: 'create_sqlv1_statement', value: 'create_sqlv1_statement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sqlv1_statement">

Make a request to create a statement.

```sql
INSERT INTO confluent.sql.statements (
name,
organization_id,
environment_id,
spec,
result,
organization_id,
environment_id
)
SELECT 
'{{ name }}' /* required */,
'{{ organization_id }}',
'{{ environment_id }}',
'{{ spec }}' /* required */,
'{{ result }}',
'{{ organization_id }}',
'{{ environment_id }}'
RETURNING
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
result,
spec,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: statements
  props:
    - name: organization_id
      value: "{{ organization_id }}"
      description: Required parameter for the statements resource.
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the statements resource.
    - name: name
      value: "{{ name }}"
      description: |
        The user provided name of the resource, unique within this environment.
    - name: organization_id
      value: "{{ organization_id }}"
      description: |
        The unique identifier for the organization.
    - name: environment_id
      value: "{{ environment_id }}"
      description: |
        The unique identifier for the environment.
    - name: spec
      description: |
        The specs of the Statement
      value:
        statement: "{{ statement }}"
        properties: "{{ properties }}"
        compute_pool_id: "{{ compute_pool_id }}"
        principal: "{{ principal }}"
        stopped: {{ stopped }}
        execution_mode: "{{ execution_mode }}"
    - name: result
      description: |
        \`Statement Result\` represents a resource used to model results of SQL statements.
        The API allows you to read your SQL statement result.
      value:
        api_version: "{{ api_version }}"
        kind: "{{ kind }}"
        metadata:
          self: "{{ self }}"
          next: "{{ next }}"
          created_at: "{{ created_at }}"
        results:
          data: "{{ data }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_sqlv1_statement"
    values={[
        { label: 'patch_sqlv1_statement', value: 'patch_sqlv1_statement' }
    ]}
>
<TabItem value="patch_sqlv1_statement">

Make a request to patch a statement.

```sql
UPDATE confluent.sql.statements
SET 
-- No updatable properties
WHERE 
organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND statement_name = '{{ statement_name }}' --required
RETURNING
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
result,
spec,
status;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_sqlv1_statement"
    values={[
        { label: 'update_sqlv1_statement', value: 'update_sqlv1_statement' }
    ]}
>
<TabItem value="update_sqlv1_statement">

Make a request to update a statement.<br />The request will fail with a 409 Conflict error if the Statement has changed since it was fetched.<br />In this case, do a GET, reapply the modifications, and try the update again.

```sql
REPLACE confluent.sql.statements
SET 
name = '{{ name }}',
organization_id = '{{ organization_id }}',
environment_id = '{{ environment_id }}',
spec = '{{ spec }}',
result = '{{ result }}'
WHERE 
organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND statement_name = '{{ statement_name }}' --required
AND spec = '{{ spec }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sqlv1_statement"
    values={[
        { label: 'delete_sqlv1_statement', value: 'delete_sqlv1_statement' }
    ]}
>
<TabItem value="delete_sqlv1_statement">

Make a request to delete a statement.

```sql
DELETE FROM confluent.sql.statements
WHERE organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND statement_name = '{{ statement_name }}' --required
;
```
</TabItem>
</Tabs>
