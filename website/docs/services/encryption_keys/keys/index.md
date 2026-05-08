--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.encryption_keys.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_byok_v1_key"
    values={[
        { label: 'get_byok_v1_key', value: 'get_byok_v1_key' },
        { label: 'list_byok_v1_keys', value: 'list_byok_v1_keys' }
    ]}
>
<TabItem value="get_byok_v1_key">

Key.

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
    <td><code>string</code></td>
    <td>ID is the "natural identifier" for an object within its scope/namespace; it is normally unique across time but not space. That is, you can assume that the ID will not be reclaimed and reused after an object is deleted ("time"); however, it may collide with IDs for other object `kinds` or objects of the same `kind` within a different scope/namespace ("space"). (example: dlz-f3a90de)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the key object.  (example: Key for billing cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (byok/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>object</code></td>
    <td>The cloud-specific key details.  For AWS, provide the corresponding `key_arn`.  For Azure, provide the corresponding `key_id`.  For GCP, provide the corresponding `key_id`. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Key)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the Key. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the key:    AVAILABLE: key can be used for a Kafka cluster provisioning.    IN_USE: key is already in use by a Kafka cluster provisioning.  (example: IN_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="validation" /></td>
    <td><code>object</code></td>
    <td>The validation details of the key. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_byok_v1_keys">

Key.

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
    <td><code>string</code></td>
    <td>ID is the "natural identifier" for an object within its scope/namespace; it is normally unique across time but not space. That is, you can assume that the ID will not be reclaimed and reused after an object is deleted ("time"); however, it may collide with IDs for other object `kinds` or objects of the same `kind` within a different scope/namespace ("space"). (example: dlz-f3a90de)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the key object.  (example: Key for billing cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (byok/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>object</code></td>
    <td>The cloud-specific key details.  For AWS, provide the corresponding `key_arn`.  For Azure, provide the corresponding `key_id`.  For GCP, provide the corresponding `key_id`. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Key)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider of the Key. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the key:    AVAILABLE: key can be used for a Kafka cluster provisioning.    IN_USE: key is already in use by a Kafka cluster provisioning.  (example: IN_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="validation" /></td>
    <td><code>object</code></td>
    <td>The validation details of the key. </td>
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
    <td><a href="#get_byok_v1_key"><CopyableCode code="get_byok_v1_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a key.</td>
</tr>
<tr>
    <td><a href="#list_byok_v1_keys"><CopyableCode code="list_byok_v1_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-validation_phase"><code>validation_phase</code></a>, <a href="#parameter-validation_region"><code>validation_region</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all keys.</td>
</tr>
<tr>
    <td><a href="#create_byok_v1_key"><CopyableCode code="create_byok_v1_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td></td>
    <td>Make a request to create a key.</td>
</tr>
<tr>
    <td><a href="#update_byok_v1_key"><CopyableCode code="update_byok_v1_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a key.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_byok_v1_key"><CopyableCode code="delete_byok_v1_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a key.</td>
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
    <td><code>string</code></td>
    <td>The unique identifier for the key.</td>
</tr>
<tr id="parameter-display_name">
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Filter the results by a partial search of display_name. (example: Key for billing cluster)</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Filters results by a partial match on the key identifier: key_arn for AWS, key_id for Azure and GCP.  (example: vault-name)</td>
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
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for provider. (example: AWS)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for state. (example: IN_USE)</td>
</tr>
<tr id="parameter-validation_phase">
    <td><CopyableCode code="validation_phase" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for validation_phase.</td>
</tr>
<tr id="parameter-validation_region">
    <td><CopyableCode code="validation_region" /></td>
    <td><code>string</code></td>
    <td>Filter keys by the cloud region where they are deployed.  (example: us-west-2)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_byok_v1_key"
    values={[
        { label: 'get_byok_v1_key', value: 'get_byok_v1_key' },
        { label: 'list_byok_v1_keys', value: 'list_byok_v1_keys' }
    ]}
>
<TabItem value="get_byok_v1_key">

Make a request to read a key.

```sql
SELECT
id,
display_name,
api_version,
key,
kind,
metadata,
provider,
state,
validation
FROM confluent.encryption_keys.keys
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_byok_v1_keys">

Retrieve a sorted, filtered, paginated list of all keys.

```sql
SELECT
id,
display_name,
api_version,
key,
kind,
metadata,
provider,
state,
validation
FROM confluent.encryption_keys.keys
WHERE display_name = '{{ display_name }}'
AND provider = '{{ provider }}'
AND state = '{{ state }}'
AND validation_phase = '{{ validation_phase }}'
AND validation_region = '{{ validation_region }}'
AND key = '{{ key }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_byok_v1_key"
    values={[
        { label: 'create_byok_v1_key', value: 'create_byok_v1_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_byok_v1_key">

Make a request to create a key.

```sql
INSERT INTO confluent.encryption_keys.keys (
key,
display_name
)
SELECT 
'{{ key }}' /* required */,
'{{ display_name }}'
RETURNING
id,
display_name,
api_version,
key,
kind,
metadata,
provider,
state,
validation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: keys
  props:
    - name: key
      description: |
        The cloud-specific key details.
        For AWS, provide the corresponding \`key_arn\`.
        For Azure, provide the corresponding \`key_id\`.
        For GCP, provide the corresponding \`key_id\`.
      value:
        key_arn: "{{ key_arn }}"
        roles:
          - "{{ roles }}"
        kind: "{{ kind }}"
        application_id: "{{ application_id }}"
        key_id: "{{ key_id }}"
        key_vault_id: "{{ key_vault_id }}"
        tenant_id: "{{ tenant_id }}"
        security_group: "{{ security_group }}"
    - name: display_name
      value: "{{ display_name }}"
      description: |
        The human-readable name of the key object.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_byok_v1_key"
    values={[
        { label: 'update_byok_v1_key', value: 'update_byok_v1_key' }
    ]}
>
<TabItem value="update_byok_v1_key">

Make a request to update a key.<br /><br />

```sql
UPDATE confluent.encryption_keys.keys
SET 
key = '{{ key }}',
display_name = '{{ display_name }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
key,
kind,
metadata,
provider,
state,
validation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_byok_v1_key"
    values={[
        { label: 'delete_byok_v1_key', value: 'delete_byok_v1_key' }
    ]}
>
<TabItem value="delete_byok_v1_key">

Make a request to delete a key.

```sql
DELETE FROM confluent.encryption_keys.keys
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
