--- 
title: statement_results
hide_title: false
hide_table_of_contents: false
keywords:
  - statement_results
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

Creates, updates, deletes, gets or lists a <code>statement_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statement_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.statement_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_statement_result"
    values={[
        { label: 'get_sqlv1_statement_result', value: 'get_sqlv1_statement_result' }
    ]}
>
<TabItem value="get_sqlv1_statement_result">

Statement Result.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (StatementResult)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ListMeta describes metadata that resource collections may have</td>
</tr>
<tr>
    <td><CopyableCode code="results" /></td>
    <td><code>object</code></td>
    <td>A results property that contains a data property that contains an array of results.</td>
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
    <td><a href="#get_sqlv1_statement_result"><CopyableCode code="get_sqlv1_statement_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Read Statement Result.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the statement.</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
</tr>
<tr id="parameter-page_token">
    <td><CopyableCode code="page_token" /></td>
    <td><code>string</code></td>
    <td>It contains the field offset in the CollectSinkFunction protocol. On the first request, it should be unset. The offset is assumed to start at 0.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sqlv1_statement_result"
    values={[
        { label: 'get_sqlv1_statement_result', value: 'get_sqlv1_statement_result' }
    ]}
>
<TabItem value="get_sqlv1_statement_result">

Read Statement Result.

```sql
SELECT
api_version,
kind,
metadata,
results
FROM confluent.sql.statement_results
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND name = '{{ name }}' -- required
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
