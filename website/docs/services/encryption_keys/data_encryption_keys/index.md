--- 
title: data_encryption_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - data_encryption_keys
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

Creates, updates, deletes, gets or lists a <code>data_encryption_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_encryption_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.encryption_keys.data_encryption_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dek"
    values={[
        { label: 'get_dek', value: 'get_dek' },
        { label: 'get_dek_subjects', value: 'get_dek_subjects' }
    ]}
>
<TabItem value="get_dek">

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
<TabItem value="get_dek_subjects">

List of dek subjects

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
    <td><CopyableCode code="dek_subject" /></td>
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
    <td><a href="#get_dek"><CopyableCode code="get_dek" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-algorithm"><code>algorithm</code></a>, <a href="#parameter-deleted"><code>deleted</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#get_dek_subjects"><CopyableCode code="get_dek_subjects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_dek"><CopyableCode code="create_dek" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_dek_versions"><CopyableCode code="delete_dek_versions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-algorithm"><code>algorithm</code></a>, <a href="#parameter-permanent"><code>permanent</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#undelete_dek_versions"><CopyableCode code="undelete_dek_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-subject"><code>subject</code></a></td>
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
    defaultValue="get_dek"
    values={[
        { label: 'get_dek', value: 'get_dek' },
        { label: 'get_dek_subjects', value: 'get_dek_subjects' }
    ]}
>
<TabItem value="get_dek">

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
FROM confluent.encryption_keys.data_encryption_keys
WHERE name = '{{ name }}' -- required
AND subject = '{{ subject }}' -- required
AND algorithm = '{{ algorithm }}'
AND deleted = '{{ deleted }}'
;
```
</TabItem>
<TabItem value="get_dek_subjects">

List of dek subjects

```sql
SELECT
dek_subject
FROM confluent.encryption_keys.data_encryption_keys
WHERE name = '{{ name }}' -- required
AND deleted = '{{ deleted }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dek"
    values={[
        { label: 'create_dek', value: 'create_dek' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dek">

No description available.

```sql
INSERT INTO confluent.encryption_keys.data_encryption_keys (
subject,
version,
algorithm,
encryptedKeyMaterial,
deleted,
name
)
SELECT 
'{{ subject }}',
{{ version }},
'{{ algorithm }}',
'{{ encryptedKeyMaterial }}',
{{ deleted }},
'{{ name }}'
RETURNING
algorithm,
deleted,
encryptedKeyMaterial,
kekName,
keyMaterial,
subject,
ts,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_encryption_keys
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the data_encryption_keys resource.
    - name: subject
      value: "{{ subject }}"
      description: |
        Subject of the dek
    - name: version
      value: {{ version }}
      description: |
        Version of the dek
    - name: algorithm
      value: "{{ algorithm }}"
      description: |
        Algorithm of the dek
      valid_values: ['AES128_GCM', 'AES256_GCM', 'AES256_SIV']
    - name: encryptedKeyMaterial
      value: "{{ encryptedKeyMaterial }}"
      description: |
        Encrypted key material of the dek
    - name: deleted
      value: {{ deleted }}
      description: |
        Whether the dek is deleted
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dek_versions"
    values={[
        { label: 'delete_dek_versions', value: 'delete_dek_versions' }
    ]}
>
<TabItem value="delete_dek_versions">

No description available.

```sql
DELETE FROM confluent.encryption_keys.data_encryption_keys
WHERE name = '{{ name }}' --required
AND subject = '{{ subject }}' --required
AND algorithm = '{{ algorithm }}'
AND permanent = '{{ permanent }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete_dek_versions"
    values={[
        { label: 'undelete_dek_versions', value: 'undelete_dek_versions' }
    ]}
>
<TabItem value="undelete_dek_versions">

No Content

```sql
EXEC confluent.encryption_keys.data_encryption_keys.undelete_dek_versions 
@name='{{ name }}' --required, 
@subject='{{ subject }}' --required, 
@algorithm='{{ algorithm }}'
;
```
</TabItem>
</Tabs>
