--- 
title: latest_version
hide_title: false
hide_table_of_contents: false
keywords:
  - latest_version
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

Creates, updates, deletes, gets or lists a <code>latest_version</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="latest_version" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.latest_version" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_latest_with_metadata"
    values={[
        { label: 'get_latest_with_metadata', value: 'get_latest_with_metadata' }
    ]}
>
<TabItem value="get_latest_with_metadata">

The schema.

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
    <td><a href="#get_latest_with_metadata"><CopyableCode code="get_latest_with_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-value"><code>value</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-deleted"><code>deleted</code></a></td>
    <td>Retrieve the latest version with the given metadata.</td>
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
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Desired output format, dependent on schema type. For AVRO schemas, valid values are: " " (default) or "resolved". For PROTOBUF schemas, valid values are: " " (default), "ignore_extensions", or "serialized" (The parameter does not apply to JSON schemas.)</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The metadata key. Add "?key=key" at the end of the request to match a metadata key. This query parameter can appear multiple times. Each instance is matched with a corresponding value query parameter, in order.</td>
</tr>
<tr id="parameter-value">
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The metadata value. Add "?value=value" at the end of the request to match a metadata value. This query parameter can appear multiple times. Each instance is matched with a corresponding key query parameter, in order.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_latest_with_metadata"
    values={[
        { label: 'get_latest_with_metadata', value: 'get_latest_with_metadata' }
    ]}
>
<TabItem value="get_latest_with_metadata">

Retrieve the latest version with the given metadata.

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
FROM confluent.schema_registry.latest_version
WHERE subject = '{{ subject }}' -- required
AND key = '{{ key }}'
AND value = '{{ value }}'
AND format = '{{ format }}'
AND deleted = '{{ deleted }}'
;
```
</TabItem>
</Tabs>
