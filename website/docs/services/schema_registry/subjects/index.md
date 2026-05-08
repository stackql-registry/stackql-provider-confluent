--- 
title: subjects
hide_title: false
hide_table_of_contents: false
keywords:
  - subjects
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

Creates, updates, deletes, gets or lists a <code>subjects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subjects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.subjects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subjects"
    values={[
        { label: 'get_subjects', value: 'get_subjects' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_subjects">

List of subjects matching the specified parameters.

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
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of subjects matching the specified parameters.

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
    <td><CopyableCode code="item" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_subjects"><CopyableCode code="get_subjects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Retrieves all the subjects associated with a particular schema ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-subjectPrefix"><code>subjectPrefix</code></a>, <a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-deletedOnly"><code>deletedOnly</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Retrieves a list of registered subjects matching specified parameters.</td>
</tr>
<tr>
    <td><a href="#delete_subject"><CopyableCode code="delete_subject" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-permanent"><code>permanent</code></a></td>
    <td>Deletes the specified subject and its associated compatibility level if registered. It is recommended to use this API only when a topic needs to be recycled or in development environment.</td>
</tr>
<tr>
    <td><a href="#look_up_schema_under_subject"><CopyableCode code="look_up_schema_under_subject" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-normalize"><code>normalize</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-deleted"><code>deleted</code></a></td>
    <td>Check if a schema has already been registered under the specified subject. If so, this returns the schema string along with its globally unique identifier, its version under this subject and the subject name.</td>
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
    <td>Subject under which the schema will be registered</td>
</tr>
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to lookup deleted schemas</td>
</tr>
<tr id="parameter-deletedOnly">
    <td><CopyableCode code="deletedOnly" /></td>
    <td><code>boolean</code></td>
    <td>Whether to return deleted subjects only</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Desired output format, dependent on schema type. For AVRO schemas, valid values are: " " (default) or "resolved". For PROTOBUF schemas, valid values are: " " (default), "ignore_extensions", or "serialized" (The parameter does not apply to JSON schemas.)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination size for results. Ignored if negative</td>
</tr>
<tr id="parameter-normalize">
    <td><CopyableCode code="normalize" /></td>
    <td><code>boolean</code></td>
    <td>Whether to lookup the normalized schema</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination offset for results</td>
</tr>
<tr id="parameter-permanent">
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform a permanent delete</td>
</tr>
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Filters results by the respective subject</td>
</tr>
<tr id="parameter-subjectPrefix">
    <td><CopyableCode code="subjectPrefix" /></td>
    <td><code>string</code></td>
    <td>Subject name prefix</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subjects"
    values={[
        { label: 'get_subjects', value: 'get_subjects' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_subjects">

Retrieves all the subjects associated with a particular schema ID.

```sql
SELECT
subject
FROM confluent.schema_registry.subjects
WHERE id = '{{ id }}' -- required
AND subject = '{{ subject }}'
AND format = '{{ format }}'
AND deleted = '{{ deleted }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of registered subjects matching specified parameters.

```sql
SELECT
item
FROM confluent.schema_registry.subjects
WHERE subjectPrefix = '{{ subjectPrefix }}'
AND deleted = '{{ deleted }}'
AND deletedOnly = '{{ deletedOnly }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subject"
    values={[
        { label: 'delete_subject', value: 'delete_subject' }
    ]}
>
<TabItem value="delete_subject">

Deletes the specified subject and its associated compatibility level if registered. It is recommended to use this API only when a topic needs to be recycled or in development environment.

```sql
DELETE FROM confluent.schema_registry.subjects
WHERE subject = '{{ subject }}' --required
AND permanent = '{{ permanent }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="look_up_schema_under_subject"
    values={[
        { label: 'look_up_schema_under_subject', value: 'look_up_schema_under_subject' }
    ]}
>
<TabItem value="look_up_schema_under_subject">

Check if a schema has already been registered under the specified subject. If so, this returns the schema string along with its globally unique identifier, its version under this subject and the subject name.

```sql
EXEC confluent.schema_registry.subjects.look_up_schema_under_subject 
@subject='{{ subject }}' --required, 
@normalize={{ normalize }}, 
@format='{{ format }}', 
@deleted={{ deleted }} 
@@json=
'{
"version": {{ version }}, 
"id": {{ id }}, 
"schemaType": "{{ schemaType }}", 
"references": "{{ references }}", 
"schema": "{{ schema }}", 
"metadata": "{{ metadata }}", 
"ruleSet": "{{ ruleSet }}", 
"schemaTagsToAdd": "{{ schemaTagsToAdd }}", 
"schemaTagsToRemove": "{{ schemaTagsToRemove }}", 
"propagateSchemaTags": {{ propagateSchemaTags }}
}'
;
```
</TabItem>
</Tabs>
