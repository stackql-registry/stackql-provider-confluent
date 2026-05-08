--- 
title: custom_connect_plugin_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_connect_plugin_versions
  - ccpm
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

Creates, updates, deletes, gets or lists a <code>custom_connect_plugin_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_connect_plugin_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.ccpm.custom_connect_plugin_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ccpm_v1_custom_connect_plugin_version"
    values={[
        { label: 'get_ccpm_v1_custom_connect_plugin_version', value: 'get_ccpm_v1_custom_connect_plugin_version' },
        { label: 'list_ccpm_v1_custom_connect_plugin_versions', value: 'list_ccpm_v1_custom_connect_plugin_versions' }
    ]}
>
<TabItem value="get_ccpm_v1_custom_connect_plugin_version">

Custom Connect Plugin Version.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (ccpm/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CustomConnectPluginVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Custom Connect Plugin Version</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Custom Connect Plugin Version</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ccpm_v1_custom_connect_plugin_versions">

Custom Connect Plugin Version.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (ccpm/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CustomConnectPluginVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Custom Connect Plugin Version</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Custom Connect Plugin Version</td>
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
    <td><a href="#get_ccpm_v1_custom_connect_plugin_version"><CopyableCode code="get_ccpm_v1_custom_connect_plugin_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-plugin_id"><code>plugin_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a custom connect plugin version.</td>
</tr>
<tr>
    <td><a href="#list_ccpm_v1_custom_connect_plugin_versions"><CopyableCode code="list_ccpm_v1_custom_connect_plugin_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-plugin_id"><code>plugin_id</code></a></td>
    <td></td>
    <td>Retrieve a sorted, filtered, paginated list of all custom connect plugin versions.</td>
</tr>
<tr>
    <td><a href="#create_ccpm_v1_custom_connect_plugin_version"><CopyableCode code="create_ccpm_v1_custom_connect_plugin_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-plugin_id"><code>plugin_id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a custom connect plugin version.</td>
</tr>
<tr>
    <td><a href="#delete_ccpm_v1_custom_connect_plugin_version"><CopyableCode code="delete_ccpm_v1_custom_connect_plugin_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-plugin_id"><code>plugin_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a custom connect plugin version.</td>
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
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given environment. (example: env-00000)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom connect plugin version.</td>
</tr>
<tr id="parameter-plugin_id">
    <td><CopyableCode code="plugin_id" /></td>
    <td><code>string</code></td>
    <td>The Plugin</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ccpm_v1_custom_connect_plugin_version"
    values={[
        { label: 'get_ccpm_v1_custom_connect_plugin_version', value: 'get_ccpm_v1_custom_connect_plugin_version' },
        { label: 'list_ccpm_v1_custom_connect_plugin_versions', value: 'list_ccpm_v1_custom_connect_plugin_versions' }
    ]}
>
<TabItem value="get_ccpm_v1_custom_connect_plugin_version">

Make a request to read a custom connect plugin version.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.ccpm.custom_connect_plugin_versions
WHERE environment = '{{ environment }}' -- required
AND plugin_id = '{{ plugin_id }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_ccpm_v1_custom_connect_plugin_versions">

Retrieve a sorted, filtered, paginated list of all custom connect plugin versions.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.ccpm.custom_connect_plugin_versions
WHERE environment = '{{ environment }}' -- required
AND plugin_id = '{{ plugin_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ccpm_v1_custom_connect_plugin_version"
    values={[
        { label: 'create_ccpm_v1_custom_connect_plugin_version', value: 'create_ccpm_v1_custom_connect_plugin_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ccpm_v1_custom_connect_plugin_version">

Make a request to create a custom connect plugin version.

```sql
INSERT INTO confluent.ccpm.custom_connect_plugin_versions (
spec,
plugin_id
)
SELECT 
'{{ spec }}' /* required */,
'{{ plugin_id }}'
RETURNING
id,
api_version,
kind,
metadata,
spec,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_connect_plugin_versions
  props:
    - name: plugin_id
      value: "{{ plugin_id }}"
      description: Required parameter for the custom_connect_plugin_versions resource.
    - name: spec
      description: |
        The desired state of the Custom Connect Plugin Version
      value:
        version: "{{ version }}"
        sensitive_config_properties:
          - "{{ sensitive_config_properties }}"
        documentation_link: "{{ documentation_link }}"
        content_format: "{{ content_format }}"
        connector_classes:
          - class_name: "{{ class_name }}"
            type: "{{ type }}"
        upload_source:
          location: "{{ location }}"
          upload_id: "{{ upload_id }}"
        environment:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ccpm_v1_custom_connect_plugin_version"
    values={[
        { label: 'delete_ccpm_v1_custom_connect_plugin_version', value: 'delete_ccpm_v1_custom_connect_plugin_version' }
    ]}
>
<TabItem value="delete_ccpm_v1_custom_connect_plugin_version">

Make a request to delete a custom connect plugin version.

```sql
DELETE FROM confluent.ccpm.custom_connect_plugin_versions
WHERE environment = '{{ environment }}' --required
AND plugin_id = '{{ plugin_id }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
