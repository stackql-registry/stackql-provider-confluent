--- 
title: acls
hide_title: false
hide_table_of_contents: false
keywords:
  - acls
  - kafka
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

Creates, updates, deletes, gets or lists an <code>acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.acls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_acls"
    values={[
        { label: 'get_kafka_acls', value: 'get_kafka_acls' }
    ]}
>
<TabItem value="get_kafka_acls">

The list of ACLs.

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
    <td><CopyableCode code="data" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get_kafka_acls"><CopyableCode code="get_kafka_acls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource_name"><code>resource_name</code></a>, <a href="#parameter-pattern_type"><code>pattern_type</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-host"><code>host</code></a>, <a href="#parameter-operation"><code>operation</code></a>, <a href="#parameter-permission"><code>permission</code></a></td>
    <td>- When calling `/acls` without the `principal` parameter, service<br />  accounts are returned in numeric ID format (e.g., `User:12345`).<br />- To retrieve service accounts in the `sa-xxx` format, use<br />  `/acls?principal=UserV2:*`.<br />- The `principal` parameter supports both legacy `User:` format and<br />  new `UserV2:` format for service accounts.<br />Return a list of ACLs that match the search criteria.</td>
</tr>
<tr>
    <td><a href="#create_kafka_acls"><CopyableCode code="create_kafka_acls" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource_name"><code>resource_name</code></a>, <a href="#parameter-pattern_type"><code>pattern_type</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-host"><code>host</code></a>, <a href="#parameter-operation"><code>operation</code></a>, <a href="#parameter-permission"><code>permission</code></a></td>
    <td></td>
    <td>Create an ACL.</td>
</tr>
<tr>
    <td><a href="#delete_kafka_acls"><CopyableCode code="delete_kafka_acls" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-pattern_type"><code>pattern_type</code></a>, <a href="#parameter-operation"><code>operation</code></a>, <a href="#parameter-permission"><code>permission</code></a></td>
    <td><a href="#parameter-resource_name"><code>resource_name</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-host"><code>host</code></a></td>
    <td>Delete the ACLs that match the search criteria.</td>
</tr>
<tr>
    <td><a href="#batch_create_kafka_acls"><CopyableCode code="batch_create_kafka_acls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create ACLs.</td>
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
<tr id="parameter-operation">
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The ACL operation.</td>
</tr>
<tr id="parameter-pattern_type">
    <td><CopyableCode code="pattern_type" /></td>
    <td><code>string</code></td>
    <td>The ACL pattern type.</td>
</tr>
<tr id="parameter-permission">
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The ACL permission.</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The ACL resource type.</td>
</tr>
<tr id="parameter-host">
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>The ACL host.</td>
</tr>
<tr id="parameter-operation">
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The ACL operation.</td>
</tr>
<tr id="parameter-pattern_type">
    <td><CopyableCode code="pattern_type" /></td>
    <td><code>string</code></td>
    <td>The ACL pattern type.</td>
</tr>
<tr id="parameter-permission">
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The ACL permission.</td>
</tr>
<tr id="parameter-principal">
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The ACL principal. This is the Service Account name or user name. Supports both legacy `User:` format (numeric IDs) and new `UserV2:` format (sa-xxx format) for service accounts. Use `UserV2:*` to retrieve service accounts in the new format.</td>
</tr>
<tr id="parameter-resource_name">
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The ACL resource name.</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The ACL resource type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_acls"
    values={[
        { label: 'get_kafka_acls', value: 'get_kafka_acls' }
    ]}
>
<TabItem value="get_kafka_acls">

- When calling `/acls` without the `principal` parameter, service<br />  accounts are returned in numeric ID format (e.g., `User:12345`).<br />- To retrieve service accounts in the `sa-xxx` format, use<br />  `/acls?principal=UserV2:*`.<br />- The `principal` parameter supports both legacy `User:` format and<br />  new `UserV2:` format for service accounts.<br />Return a list of ACLs that match the search criteria.

```sql
SELECT
data,
kind,
metadata
FROM confluent.kafka.acls
WHERE resource_type = '{{ resource_type }}'
AND resource_name = '{{ resource_name }}'
AND pattern_type = '{{ pattern_type }}'
AND principal = '{{ principal }}'
AND host = '{{ host }}'
AND operation = '{{ operation }}'
AND permission = '{{ permission }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kafka_acls"
    values={[
        { label: 'create_kafka_acls', value: 'create_kafka_acls' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kafka_acls">

Create an ACL.

```sql
INSERT INTO confluent.kafka.acls (
resource_type,
resource_name,
pattern_type,
principal,
host,
operation,
permission
)
SELECT 
'{{ resource_type }}' /* required */,
'{{ resource_name }}' /* required */,
'{{ pattern_type }}' /* required */,
'{{ principal }}' /* required */,
'{{ host }}' /* required */,
'{{ operation }}' /* required */,
'{{ permission }}' /* required */
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acls
  props:
    - name: resource_type
      value: "{{ resource_type }}"
      valid_values: ['UNKNOWN', 'ANY', 'TOPIC', 'GROUP', 'CLUSTER', 'TRANSACTIONAL_ID', 'DELEGATION_TOKEN']
    - name: resource_name
      value: "{{ resource_name }}"
    - name: pattern_type
      value: "{{ pattern_type }}"
    - name: principal
      value: "{{ principal }}"
    - name: host
      value: "{{ host }}"
    - name: operation
      value: "{{ operation }}"
    - name: permission
      value: "{{ permission }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_acls"
    values={[
        { label: 'delete_kafka_acls', value: 'delete_kafka_acls' }
    ]}
>
<TabItem value="delete_kafka_acls">

Delete the ACLs that match the search criteria.

```sql
DELETE FROM confluent.kafka.acls
WHERE resource_type = '{{ resource_type }}' --required
AND pattern_type = '{{ pattern_type }}' --required
AND operation = '{{ operation }}' --required
AND permission = '{{ permission }}' --required
AND resource_name = '{{ resource_name }}'
AND principal = '{{ principal }}'
AND host = '{{ host }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_kafka_acls"
    values={[
        { label: 'batch_create_kafka_acls', value: 'batch_create_kafka_acls' }
    ]}
>
<TabItem value="batch_create_kafka_acls">

Create ACLs.

```sql
EXEC confluent.kafka.acls.batch_create_kafka_acls 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
