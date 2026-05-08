--- 
title: custom_connect_plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_connect_plugins
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

Creates, updates, deletes, gets or lists a <code>custom_connect_plugins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_connect_plugins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.ccpm.custom_connect_plugins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ccpm_v1_custom_connect_plugin"
    values={[
        { label: 'get_ccpm_v1_custom_connect_plugin', value: 'get_ccpm_v1_custom_connect_plugin' },
        { label: 'list_ccpm_v1_custom_connect_plugins', value: 'list_ccpm_v1_custom_connect_plugins' }
    ]}
>
<TabItem value="get_ccpm_v1_custom_connect_plugin">

Custom Connect Plugin.

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
    <td>Kind defines the object this REST resource represents. (CustomConnectPlugin)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Custom Connect Plugin</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ccpm_v1_custom_connect_plugins">

Custom Connect Plugin.

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
    <td>Kind defines the object this REST resource represents. (CustomConnectPlugin)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Custom Connect Plugin</td>
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
    <td><a href="#get_ccpm_v1_custom_connect_plugin"><CopyableCode code="get_ccpm_v1_custom_connect_plugin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a custom connect plugin.</td>
</tr>
<tr>
    <td><a href="#list_ccpm_v1_custom_connect_plugins"><CopyableCode code="list_ccpm_v1_custom_connect_plugins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-spec.cloud"><code>spec.cloud</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all custom connect plugins.<br /><br />If no `cloud` filter is specified, returns custom connect plugins from all clouds.<br /></td>
</tr>
<tr>
    <td><a href="#create_ccpm_v1_custom_connect_plugin"><CopyableCode code="create_ccpm_v1_custom_connect_plugin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a custom connect plugin.</td>
</tr>
<tr>
    <td><a href="#update_ccpm_v1_custom_connect_plugin"><CopyableCode code="update_ccpm_v1_custom_connect_plugin" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a custom connect plugin.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_ccpm_v1_custom_connect_plugin"><CopyableCode code="delete_ccpm_v1_custom_connect_plugin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a custom connect plugin.</td>
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
    <td>The unique identifier for the custom connect plugin.</td>
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
<tr id="parameter-spec.cloud">
    <td><CopyableCode code="spec.cloud" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.cloud. (example: AWS)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ccpm_v1_custom_connect_plugin"
    values={[
        { label: 'get_ccpm_v1_custom_connect_plugin', value: 'get_ccpm_v1_custom_connect_plugin' },
        { label: 'list_ccpm_v1_custom_connect_plugins', value: 'list_ccpm_v1_custom_connect_plugins' }
    ]}
>
<TabItem value="get_ccpm_v1_custom_connect_plugin">

Make a request to read a custom connect plugin.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.ccpm.custom_connect_plugins
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_ccpm_v1_custom_connect_plugins">

Retrieve a sorted, filtered, paginated list of all custom connect plugins.<br /><br />If no `cloud` filter is specified, returns custom connect plugins from all clouds.<br />

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.ccpm.custom_connect_plugins
WHERE environment = '{{ environment }}' -- required
AND spec.cloud = '{{ spec.cloud }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ccpm_v1_custom_connect_plugin"
    values={[
        { label: 'create_ccpm_v1_custom_connect_plugin', value: 'create_ccpm_v1_custom_connect_plugin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ccpm_v1_custom_connect_plugin">

Make a request to create a custom connect plugin.

```sql
INSERT INTO confluent.ccpm.custom_connect_plugins (
spec
)
SELECT 
'{{ spec }}' /* required */
RETURNING
id,
api_version,
kind,
metadata,
spec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_connect_plugins
  props:
    - name: spec
      description: |
        The desired state of the Custom Connect Plugin
      value:
        cloud: "{{ cloud }}"
        display_name: "{{ display_name }}"
        description: "{{ description }}"
        runtime_language: "{{ runtime_language }}"
        environment:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ccpm_v1_custom_connect_plugin"
    values={[
        { label: 'update_ccpm_v1_custom_connect_plugin', value: 'update_ccpm_v1_custom_connect_plugin' }
    ]}
>
<TabItem value="update_ccpm_v1_custom_connect_plugin">

Make a request to update a custom connect plugin.<br /><br />

```sql
UPDATE confluent.ccpm.custom_connect_plugins
SET 
spec = '{{ spec }}'
WHERE 
id = '{{ id }}' --required
AND spec = '{{ spec }}' --required
RETURNING
id,
api_version,
kind,
metadata,
spec;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ccpm_v1_custom_connect_plugin"
    values={[
        { label: 'delete_ccpm_v1_custom_connect_plugin', value: 'delete_ccpm_v1_custom_connect_plugin' }
    ]}
>
<TabItem value="delete_ccpm_v1_custom_connect_plugin">

Make a request to delete a custom connect plugin.

```sql
DELETE FROM confluent.ccpm.custom_connect_plugins
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
