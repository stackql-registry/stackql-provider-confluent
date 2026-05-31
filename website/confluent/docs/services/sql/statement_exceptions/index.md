--- 
title: statement_exceptions
hide_title: false
hide_table_of_contents: false
keywords:
  - statement_exceptions
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

Creates, updates, deletes, gets or lists a <code>statement_exceptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statement_exceptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.statement_exceptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_statement_exceptions"
    values={[
        { label: 'get_sqlv1_statement_exceptions', value: 'get_sqlv1_statement_exceptions' }
    ]}
>
<TabItem value="get_sqlv1_statement_exceptions">

Statement Exceptions.

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
    <td>Name of the SQL statement exception. (example: java.lang.RuntimeException)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (StatementException)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Error message of the statement exception. (example: java.lang.RuntimeException: An error occurred)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the exception occurred. It is represented in RFC3339 format and is in UTC. (example: 2025-11-10T16:20:00Z)</td>
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
    <td><a href="#get_sqlv1_statement_exceptions"><CopyableCode code="get_sqlv1_statement_exceptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-statement_name"><code>statement_name</code></a></td>
    <td></td>
    <td>Retrieve a list of the 10 most recent statement exceptions.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sqlv1_statement_exceptions"
    values={[
        { label: 'get_sqlv1_statement_exceptions', value: 'get_sqlv1_statement_exceptions' }
    ]}
>
<TabItem value="get_sqlv1_statement_exceptions">

Retrieve a list of the 10 most recent statement exceptions.

```sql
SELECT
name,
kind,
message,
timestamp
FROM confluent.sql.statement_exceptions
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND statement_name = '{{ statement_name }}' -- required
;
```
</TabItem>
</Tabs>
