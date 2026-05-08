--- 
title: compatibilities
hide_title: false
hide_table_of_contents: false
keywords:
  - compatibilities
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

Creates, updates, deletes, gets or lists a <code>compatibilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compatibilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.compatibilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#test_compatibility_by_subject_name"><CopyableCode code="test_compatibility_by_subject_name" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-normalize"><code>normalize</code></a>, <a href="#parameter-verbose"><code>verbose</code></a></td>
    <td>Test input schema against a particular version of a subject's schema for compatibility. The compatibility level applied for the check is the configured compatibility level for the subject (http:get:: /config/(string: subject)). If this subject's compatibility level was never changed, then the global compatibility level applies (http:get:: /config).</td>
</tr>
<tr>
    <td><a href="#test_compatibility_for_subject"><CopyableCode code="test_compatibility_for_subject" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-verbose"><code>verbose</code></a></td>
    <td>Test input schema against a subject's schemas for compatibility, based on the configured compatibility level of the subject. In other words, it will perform the same compatibility check as register for that subject. The compatibility level applied for the check is the configured compatibility level for the subject (http:get:: /config/(string: subject)). If this subject's compatibility level was never changed, then the global compatibility level applies (http:get:: /config).</td>
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
    <td>Subject of the schema version against which compatibility is to be tested</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the subject's schema against which compatibility is to be tested. Valid values for versionId are between [1,2^31-1] or the string "latest"."latest" checks compatibility of the input schema with the last registered schema under the specified subject</td>
</tr>
<tr id="parameter-normalize">
    <td><CopyableCode code="normalize" /></td>
    <td><code>boolean</code></td>
    <td>Whether to normalize the given schema</td>
</tr>
<tr id="parameter-verbose">
    <td><CopyableCode code="verbose" /></td>
    <td><code>boolean</code></td>
    <td>Whether to return detailed error messages</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="test_compatibility_by_subject_name"
    values={[
        { label: 'test_compatibility_by_subject_name', value: 'test_compatibility_by_subject_name' },
        { label: 'test_compatibility_for_subject', value: 'test_compatibility_for_subject' }
    ]}
>
<TabItem value="test_compatibility_by_subject_name">

Test input schema against a particular version of a subject's schema for compatibility. The compatibility level applied for the check is the configured compatibility level for the subject (http:get:: /config/(string: subject)). If this subject's compatibility level was never changed, then the global compatibility level applies (http:get:: /config).

```sql
EXEC confluent.schema_registry.compatibilities.test_compatibility_by_subject_name 
@subject='{{ subject }}' --required, 
@version='{{ version }}' --required, 
@normalize={{ normalize }}, 
@verbose={{ verbose }} 
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
<TabItem value="test_compatibility_for_subject">

Test input schema against a subject's schemas for compatibility, based on the configured compatibility level of the subject. In other words, it will perform the same compatibility check as register for that subject. The compatibility level applied for the check is the configured compatibility level for the subject (http:get:: /config/(string: subject)). If this subject's compatibility level was never changed, then the global compatibility level applies (http:get:: /config).

```sql
EXEC confluent.schema_registry.compatibilities.test_compatibility_for_subject 
@subject='{{ subject }}' --required, 
@verbose={{ verbose }} 
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
