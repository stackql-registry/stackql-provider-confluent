--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - schema_registry
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' },
        { label: 'get_schemas', value: 'get_schemas' }
    ]}
>
<TabItem value="get_schema">

The schema string.

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
    <td><CopyableCode code="maxId" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum ID</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>User-defined metadata</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>References to other schemas</td>
</tr>
<tr>
    <td><CopyableCode code="ruleSet" /></td>
    <td><code>object</code></td>
    <td>Schema rule set</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>Schema string identified by the ID (example: &#123;"schema": "&#123;"type": "string"&#125;"&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="schemaTags" /></td>
    <td><code>array</code></td>
    <td>Schema tags</td>
</tr>
<tr>
    <td><CopyableCode code="schemaType" /></td>
    <td><code>string</code></td>
    <td>Schema type (example: AVRO)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_schemas">

List of schemas matching the specified parameters.

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
    <td><code>integer (int32)</code></td>
    <td>Globally unique identifier of the schema</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>User-defined metadata</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>References to other schemas</td>
</tr>
<tr>
    <td><CopyableCode code="ruleSet" /></td>
    <td><code>object</code></td>
    <td>Schema rule set</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>Schema definition string (example: &#123;"schema": "&#123;"type": "string"&#125;"&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="schemaTags" /></td>
    <td><code>array</code></td>
    <td>Schema tags</td>
</tr>
<tr>
    <td><CopyableCode code="schemaType" /></td>
    <td><code>string</code></td>
    <td>Schema type (example: AVRO)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Version number</td>
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
    <td><a href="#get_schema"><CopyableCode code="get_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-format"><code>format</code></a></td>
    <td>Retrieves the schema string identified by the input ID.</td>
</tr>
<tr>
    <td><a href="#get_schemas"><CopyableCode code="get_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-subjectPrefix"><code>subjectPrefix</code></a>, <a href="#parameter-aliases"><code>aliases</code></a>, <a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-latestOnly"><code>latestOnly</code></a>, <a href="#parameter-ruleType"><code>ruleType</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Get the schemas matching the specified parameters.</td>
</tr>
<tr>
    <td><a href="#get_schema_only"><CopyableCode code="get_schema_only" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-format"><code>format</code></a></td>
    <td>Retrieves the schema identified by the input ID.</td>
</tr>
<tr>
    <td><a href="#get_schema_only_1"><CopyableCode code="get_schema_only_1" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-deleted"><code>deleted</code></a></td>
    <td>Retrieves the schema for the specified version of this subject. Only the unescaped schema string is returned.</td>
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
    <td><code>integer (int32)</code></td>
    <td>Globally unique identifier of the schema</td>
</tr>
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the schema to be returned. Valid values for versionId are between [1,2^31-1] or the string "latest". "latest" returns the last registered schema under the specified subject. Note that there may be a new latest schema that gets registered right after this request is served.</td>
</tr>
<tr id="parameter-aliases">
    <td><CopyableCode code="aliases" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include aliases in the search</td>
</tr>
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include deleted schema</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Desired output format, dependent on schema type. For AVRO schemas, valid values are: " " (default) or "resolved". For PROTOBUF schemas, valid values are: " " (default), "ignore_extensions", or "serialized" (The parameter does not apply to JSON schemas.)</td>
</tr>
<tr id="parameter-latestOnly">
    <td><CopyableCode code="latestOnly" /></td>
    <td><code>boolean</code></td>
    <td>Whether to return latest schema versions only for each matching subject</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination size for results. Ignored if negative</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination offset for results</td>
</tr>
<tr id="parameter-ruleType">
    <td><CopyableCode code="ruleType" /></td>
    <td><code>string</code></td>
    <td>Filters results by the given rule type</td>
</tr>
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject</td>
</tr>
<tr id="parameter-subjectPrefix">
    <td><CopyableCode code="subjectPrefix" /></td>
    <td><code>string</code></td>
    <td>Filters results by the respective subject prefix</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' },
        { label: 'get_schemas', value: 'get_schemas' }
    ]}
>
<TabItem value="get_schema">

Retrieves the schema string identified by the input ID.

```sql
SELECT
maxId,
metadata,
references,
ruleSet,
schema,
schemaTags,
schemaType
FROM confluent.schema_registry.schemas
WHERE id = '{{ id }}' -- required
AND subject = '{{ subject }}'
AND format = '{{ format }}'
;
```
</TabItem>
<TabItem value="get_schemas">

Get the schemas matching the specified parameters.

```sql
SELECT
id,
metadata,
references,
ruleSet,
schema,
schemaTags,
schemaType,
subject,
version
FROM confluent.schema_registry.schemas
WHERE subjectPrefix = '{{ subjectPrefix }}'
AND aliases = '{{ aliases }}'
AND deleted = '{{ deleted }}'
AND latestOnly = '{{ latestOnly }}'
AND ruleType = '{{ ruleType }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_schema_only"
    values={[
        { label: 'get_schema_only', value: 'get_schema_only' },
        { label: 'get_schema_only_1', value: 'get_schema_only_1' }
    ]}
>
<TabItem value="get_schema_only">

Retrieves the schema identified by the input ID.

```sql
EXEC confluent.schema_registry.schemas.get_schema_only 
@id='{{ id }}' --required, 
@subject='{{ subject }}', 
@format='{{ format }}'
;
```
</TabItem>
<TabItem value="get_schema_only_1">

Retrieves the schema for the specified version of this subject. Only the unescaped schema string is returned.

```sql
EXEC confluent.schema_registry.schemas.get_schema_only_1 
@subject='{{ subject }}' --required, 
@version='{{ version }}' --required, 
@deleted={{ deleted }}
;
```
</TabItem>
</Tabs>
