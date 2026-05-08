--- 
title: exporters
hide_title: false
hide_table_of_contents: false
keywords:
  - exporters
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

Creates, updates, deletes, gets or lists an <code>exporters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exporters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.exporters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_exporter_info_by_name"
    values={[
        { label: 'get_exporter_info_by_name', value: 'get_exporter_info_by_name' },
        { label: 'list_exporters', value: 'list_exporters' }
    ]}
>
<TabItem value="get_exporter_info_by_name">

The original request.

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
    <td>Name of the exporter (example: test-exporter)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The map containing exporter's configurations</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td>Customized context of the exporter if contextType equals CUSTOM. (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="contextType" /></td>
    <td><code>string</code></td>
    <td>Context type of the exporter. One of CUSTOM, NONE or AUTO (default) (example: CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="kekRenameFormat" /></td>
    <td><code>string</code></td>
    <td>Format string for the KEK name in the destination cluster, which may contain $&#123;kek&#125; as a placeholder for the originating KEK name. For example, dc_$&#123;kek&#125; for the KEK aws_key will map to the destination KEK name dc_aws_key.</td>
</tr>
<tr>
    <td><CopyableCode code="subjectRenameFormat" /></td>
    <td><code>string</code></td>
    <td>Format string for the subject name in the destination cluster, which may contain $&#123;subject&#125; as a placeholder for the originating subject name. For example, dc_$&#123;subject&#125; for the subject orders will map to the destination subject name dc_orders.</td>
</tr>
<tr>
    <td><CopyableCode code="subjects" /></td>
    <td><code>array</code></td>
    <td>Name of each exporter subject</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_exporters">

Name of the exporter

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
    <td><a href="#get_exporter_info_by_name"><CopyableCode code="get_exporter_info_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Retrieves the information of the schema exporter.</td>
</tr>
<tr>
    <td><a href="#list_exporters"><CopyableCode code="list_exporters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieves a list of schema exporters that have been created.</td>
</tr>
<tr>
    <td><a href="#register_exporter"><CopyableCode code="register_exporter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a new schema exporter. All attributes in request body are optional except config.</td>
</tr>
<tr>
    <td><a href="#update_exporter_info"><CopyableCode code="update_exporter_info" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the information or configurations of the schema exporter. All attributes in request body are optional.</td>
</tr>
<tr>
    <td><a href="#delete_exporter"><CopyableCode code="delete_exporter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Deletes the schema exporter.</td>
</tr>
<tr>
    <td><a href="#pause_exporter_by_name"><CopyableCode code="pause_exporter_by_name" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Pauses the state of the schema exporter.</td>
</tr>
<tr>
    <td><a href="#reset_exporter_by_name"><CopyableCode code="reset_exporter_by_name" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Reset the state of the schema exporter.</td>
</tr>
<tr>
    <td><a href="#resume_exporter_by_name"><CopyableCode code="resume_exporter_by_name" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Resume running of the schema exporter.</td>
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
    <td>Name of the exporter</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_exporter_info_by_name"
    values={[
        { label: 'get_exporter_info_by_name', value: 'get_exporter_info_by_name' },
        { label: 'list_exporters', value: 'list_exporters' }
    ]}
>
<TabItem value="get_exporter_info_by_name">

Retrieves the information of the schema exporter.

```sql
SELECT
name,
config,
context,
contextType,
kekRenameFormat,
subjectRenameFormat,
subjects
FROM confluent.schema_registry.exporters
WHERE name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list_exporters">

Retrieves a list of schema exporters that have been created.

```sql
SELECT
*
FROM confluent.schema_registry.exporters
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_exporter"
    values={[
        { label: 'register_exporter', value: 'register_exporter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_exporter">

Creates a new schema exporter. All attributes in request body are optional except config.

```sql
INSERT INTO confluent.schema_registry.exporters (
name,
contextType,
context,
subjects,
kekRenameFormat,
subjectRenameFormat,
config
)
SELECT 
'{{ name }}',
'{{ contextType }}',
'{{ context }}',
'{{ subjects }}',
'{{ kekRenameFormat }}',
'{{ subjectRenameFormat }}',
'{{ config }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exporters
  props:
    - name: name
      value: "{{ name }}"
      description: |
        Name of the exporter
    - name: contextType
      value: "{{ contextType }}"
      description: |
        Context type of the exporter. One of CUSTOM, NONE or AUTO (default)
    - name: context
      value: "{{ context }}"
      description: |
        Customized context of the exporter if contextType equals CUSTOM.
    - name: subjects
      value:
        - "{{ subjects }}"
      description: |
        Name of each exporter subject
    - name: kekRenameFormat
      value: "{{ kekRenameFormat }}"
      description: |
        Format string for the KEK name in the destination cluster, which may contain \${kek} as a placeholder for the originating KEK name. For example, dc_\${kek} for the KEK aws_key will map to the destination KEK name dc_aws_key.
    - name: subjectRenameFormat
      value: "{{ subjectRenameFormat }}"
      description: |
        Format string for the subject name in the destination cluster, which may contain \${subject} as a placeholder for the originating subject name. For example, dc_\${subject} for the subject orders will map to the destination subject name dc_orders.
    - name: config
      value: "{{ config }}"
      description: |
        The map containing exporter's configurations
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_exporter_info"
    values={[
        { label: 'update_exporter_info', value: 'update_exporter_info' }
    ]}
>
<TabItem value="update_exporter_info">

Updates the information or configurations of the schema exporter. All attributes in request body are optional.

```sql
REPLACE confluent.schema_registry.exporters
SET 
contextType = '{{ contextType }}',
context = '{{ context }}',
subjects = '{{ subjects }}',
kekRenameFormat = '{{ kekRenameFormat }}',
subjectRenameFormat = '{{ subjectRenameFormat }}',
config = '{{ config }}'
WHERE 
name = '{{ name }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_exporter"
    values={[
        { label: 'delete_exporter', value: 'delete_exporter' }
    ]}
>
<TabItem value="delete_exporter">

Deletes the schema exporter.

```sql
DELETE FROM confluent.schema_registry.exporters
WHERE name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="pause_exporter_by_name"
    values={[
        { label: 'pause_exporter_by_name', value: 'pause_exporter_by_name' },
        { label: 'reset_exporter_by_name', value: 'reset_exporter_by_name' },
        { label: 'resume_exporter_by_name', value: 'resume_exporter_by_name' }
    ]}
>
<TabItem value="pause_exporter_by_name">

Pauses the state of the schema exporter.

```sql
EXEC confluent.schema_registry.exporters.pause_exporter_by_name 
@name='{{ name }}' --required
;
```
</TabItem>
<TabItem value="reset_exporter_by_name">

Reset the state of the schema exporter.

```sql
EXEC confluent.schema_registry.exporters.reset_exporter_by_name 
@name='{{ name }}' --required
;
```
</TabItem>
<TabItem value="resume_exporter_by_name">

Resume running of the schema exporter.

```sql
EXEC confluent.schema_registry.exporters.resume_exporter_by_name 
@name='{{ name }}' --required
;
```
</TabItem>
</Tabs>
