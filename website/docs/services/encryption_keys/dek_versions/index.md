--- 
title: dek_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - dek_versions
  - encryption_keys
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

Creates, updates, deletes, gets or lists a <code>dek_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dek_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.encryption_keys.dek_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dek_by_version"
    values={[
        { label: 'get_dek_by_version', value: 'get_dek_by_version' },
        { label: 'get_dek_versions', value: 'get_dek_versions' }
    ]}
>
<TabItem value="get_dek_by_version">

The dek info

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
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>Algorithm of the dek (AES128_GCM, AES256_GCM, AES256_SIV)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the dek is deleted</td>
</tr>
<tr>
    <td><CopyableCode code="encryptedKeyMaterial" /></td>
    <td><code>string</code></td>
    <td>Encrypted key material of the dek</td>
</tr>
<tr>
    <td><CopyableCode code="kekName" /></td>
    <td><code>string</code></td>
    <td>Kek name of the dek</td>
</tr>
<tr>
    <td><CopyableCode code="keyMaterial" /></td>
    <td><code>string</code></td>
    <td>Raw key material of the dek</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Subject of the dek</td>
</tr>
<tr>
    <td><CopyableCode code="ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Timestamp of the dek</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Version of the dek</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_dek_versions">

List of version numbers for dek

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#get_dek_by_version"><CopyableCode code="get_dek_by_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-algorithm"><code>algorithm</code></a>, <a href="#parameter-deleted"><code>deleted</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#get_dek_versions"><CopyableCode code="get_dek_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-algorithm"><code>algorithm</code></a>, <a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_dek_version"><CopyableCode code="delete_dek_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-algorithm"><code>algorithm</code></a>, <a href="#parameter-permanent"><code>permanent</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#undelete_dek_version"><CopyableCode code="undelete_dek_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-algorithm"><code>algorithm</code></a></td>
    <td></td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the kek</td>
</tr>
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Subject of the dek</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the dek</td>
</tr>
<tr id="parameter-algorithm">
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>Algorithm of the dek</td>
</tr>
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include deleted keys</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Pagination size for results. Ignored if negative</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Pagination offset for results</td>
</tr>
<tr id="parameter-permanent">
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform a permanent delete</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dek_by_version"
    values={[
        { label: 'get_dek_by_version', value: 'get_dek_by_version' },
        { label: 'get_dek_versions', value: 'get_dek_versions' }
    ]}
>
<TabItem value="get_dek_by_version">

The dek info

```sql
SELECT
algorithm,
deleted,
encryptedKeyMaterial,
kekName,
keyMaterial,
subject,
ts,
version
FROM confluent.encryption_keys.dek_versions
WHERE name = '{{ name }}' -- required
AND subject = '{{ subject }}' -- required
AND version = '{{ version }}' -- required
AND algorithm = '{{ algorithm }}'
AND deleted = '{{ deleted }}'
;
```
</TabItem>
<TabItem value="get_dek_versions">

List of version numbers for dek

```sql
SELECT
*
FROM confluent.encryption_keys.dek_versions
WHERE name = '{{ name }}' -- required
AND subject = '{{ subject }}' -- required
AND algorithm = '{{ algorithm }}'
AND deleted = '{{ deleted }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dek_version"
    values={[
        { label: 'delete_dek_version', value: 'delete_dek_version' }
    ]}
>
<TabItem value="delete_dek_version">

No description available.

```sql
DELETE FROM confluent.encryption_keys.dek_versions
WHERE name = '{{ name }}' --required
AND subject = '{{ subject }}' --required
AND version = '{{ version }}' --required
AND algorithm = '{{ algorithm }}'
AND permanent = '{{ permanent }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete_dek_version"
    values={[
        { label: 'undelete_dek_version', value: 'undelete_dek_version' }
    ]}
>
<TabItem value="undelete_dek_version">

No Content

```sql
EXEC confluent.encryption_keys.dek_versions.undelete_dek_version 
@name='{{ name }}' --required, 
@subject='{{ subject }}' --required, 
@version='{{ version }}' --required, 
@algorithm='{{ algorithm }}'
;
```
</TabItem>
</Tabs>
