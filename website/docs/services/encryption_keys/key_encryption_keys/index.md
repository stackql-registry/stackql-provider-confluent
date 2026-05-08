--- 
title: key_encryption_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - key_encryption_keys
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

Creates, updates, deletes, gets or lists a <code>key_encryption_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_encryption_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.encryption_keys.key_encryption_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kek"
    values={[
        { label: 'get_kek', value: 'get_kek' },
        { label: 'get_kek_names', value: 'get_kek_names' }
    ]}
>
<TabItem value="get_kek">

The kek info

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
    <td>Name of the kek</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the kek is deleted</td>
</tr>
<tr>
    <td><CopyableCode code="doc" /></td>
    <td><code>string</code></td>
    <td>Description of the kek</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>KMS key ID of the kek</td>
</tr>
<tr>
    <td><CopyableCode code="kmsProps" /></td>
    <td><code>object</code></td>
    <td>Properties of the kek</td>
</tr>
<tr>
    <td><CopyableCode code="kmsType" /></td>
    <td><code>string</code></td>
    <td>KMS type of the kek</td>
</tr>
<tr>
    <td><CopyableCode code="shared" /></td>
    <td><code>boolean</code></td>
    <td>Whether the kek is shared</td>
</tr>
<tr>
    <td><CopyableCode code="ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Timestamp of the kek</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_kek_names">

List of kek names

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
    <td><a href="#get_kek"><CopyableCode code="get_kek" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-deleted"><code>deleted</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#get_kek_names"><CopyableCode code="get_kek_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-deleted"><code>deleted</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_kek"><CopyableCode code="create_kek" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-testSharing"><code>testSharing</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#put_kek"><CopyableCode code="put_kek" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-testSharing"><code>testSharing</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_kek"><CopyableCode code="delete_kek" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-permanent"><code>permanent</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#undelete_kek"><CopyableCode code="undelete_kek" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#test_kek"><CopyableCode code="test_kek" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
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
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include deleted keys</td>
</tr>
<tr id="parameter-permanent">
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform a permanent delete</td>
</tr>
<tr id="parameter-testSharing">
    <td><CopyableCode code="testSharing" /></td>
    <td><code>boolean</code></td>
    <td>Whether to test kek sharing</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kek"
    values={[
        { label: 'get_kek', value: 'get_kek' },
        { label: 'get_kek_names', value: 'get_kek_names' }
    ]}
>
<TabItem value="get_kek">

The kek info

```sql
SELECT
name,
deleted,
doc,
kmsKeyId,
kmsProps,
kmsType,
shared,
ts
FROM confluent.encryption_keys.key_encryption_keys
WHERE name = '{{ name }}' -- required
AND deleted = '{{ deleted }}'
;
```
</TabItem>
<TabItem value="get_kek_names">

List of kek names

```sql
SELECT
*
FROM confluent.encryption_keys.key_encryption_keys
WHERE deleted = '{{ deleted }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kek"
    values={[
        { label: 'create_kek', value: 'create_kek' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kek">

No description available.

```sql
INSERT INTO confluent.encryption_keys.key_encryption_keys (
name,
kmsType,
kmsKeyId,
kmsProps,
doc,
shared,
deleted,
testSharing
)
SELECT 
'{{ name }}',
'{{ kmsType }}',
'{{ kmsKeyId }}',
'{{ kmsProps }}',
'{{ doc }}',
{{ shared }},
{{ deleted }},
'{{ testSharing }}'
RETURNING
name,
deleted,
doc,
kmsKeyId,
kmsProps,
kmsType,
shared,
ts
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: key_encryption_keys
  props:
    - name: name
      value: "{{ name }}"
      description: |
        Name of the kek
    - name: kmsType
      value: "{{ kmsType }}"
      description: |
        KMS type of the kek
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        KMS key ID of the kek
    - name: kmsProps
      value: "{{ kmsProps }}"
      description: |
        Properties of the kek
    - name: doc
      value: "{{ doc }}"
      description: |
        Description of the kek
    - name: shared
      value: {{ shared }}
      description: |
        Whether the kek is shared
    - name: deleted
      value: {{ deleted }}
      description: |
        Whether the kek is deleted
    - name: testSharing
      value: {{ testSharing }}
      description: Whether to test kek sharing
      description: Whether to test kek sharing
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_kek"
    values={[
        { label: 'put_kek', value: 'put_kek' }
    ]}
>
<TabItem value="put_kek">

No description available.

```sql
REPLACE confluent.encryption_keys.key_encryption_keys
SET 
kmsProps = '{{ kmsProps }}',
doc = '{{ doc }}',
shared = {{ shared }}
WHERE 
name = '{{ name }}' --required
AND testSharing = {{ testSharing}}
RETURNING
name,
deleted,
doc,
kmsKeyId,
kmsProps,
kmsType,
shared,
ts;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kek"
    values={[
        { label: 'delete_kek', value: 'delete_kek' }
    ]}
>
<TabItem value="delete_kek">

No description available.

```sql
DELETE FROM confluent.encryption_keys.key_encryption_keys
WHERE name = '{{ name }}' --required
AND permanent = '{{ permanent }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="undelete_kek"
    values={[
        { label: 'undelete_kek', value: 'undelete_kek' },
        { label: 'test_kek', value: 'test_kek' }
    ]}
>
<TabItem value="undelete_kek">

No Content

```sql
EXEC confluent.encryption_keys.key_encryption_keys.undelete_kek 
@name='{{ name }}' --required
;
```
</TabItem>
<TabItem value="test_kek">

The test response

```sql
EXEC confluent.encryption_keys.key_encryption_keys.test_kek 
@name='{{ name }}' --required
;
```
</TabItem>
</Tabs>
