--- 
title: catalog_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_integrations
  - tableflow
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

Creates, updates, deletes, gets or lists a <code>catalog_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.tableflow.catalog_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tableflow_v1_catalog_integration"
    values={[
        { label: 'get_tableflow_v1_catalog_integration', value: 'get_tableflow_v1_catalog_integration' },
        { label: 'list_tableflow_v1_catalog_integrations', value: 'list_tableflow_v1_catalog_integrations' }
    ]}
>
<TabItem value="get_tableflow_v1_catalog_integration">

Catalog Integration.

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
    <td>APIVersion defines the schema version of this representation of a resource. (tableflow/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CatalogIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Catalog Integration</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Catalog Integration</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tableflow_v1_catalog_integrations">

Catalog Integration.

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
    <td>APIVersion defines the schema version of this representation of a resource. (tableflow/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CatalogIntegration)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Catalog Integration</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Catalog Integration</td>
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
    <td><a href="#get_tableflow_v1_catalog_integration"><CopyableCode code="get_tableflow_v1_catalog_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-spec.kafka_cluster"><code>spec.kafka_cluster</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a catalog integration.</td>
</tr>
<tr>
    <td><a href="#list_tableflow_v1_catalog_integrations"><CopyableCode code="list_tableflow_v1_catalog_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-spec.kafka_cluster"><code>spec.kafka_cluster</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all catalog integrations.</td>
</tr>
<tr>
    <td><a href="#create_tableflow_v1_catalog_integration"><CopyableCode code="create_tableflow_v1_catalog_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a catalog integration.</td>
</tr>
<tr>
    <td><a href="#update_tableflow_v1_catalog_integration"><CopyableCode code="update_tableflow_v1_catalog_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a catalog integration.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_tableflow_v1_catalog_integration"><CopyableCode code="delete_tableflow_v1_catalog_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-spec.kafka_cluster"><code>spec.kafka_cluster</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a catalog integration.</td>
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
    <td>The unique identifier for the catalog integration.</td>
</tr>
<tr id="parameter-spec.kafka_cluster">
    <td><CopyableCode code="spec.kafka_cluster" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given spec.kafka_cluster. (example: lkc-00000)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tableflow_v1_catalog_integration"
    values={[
        { label: 'get_tableflow_v1_catalog_integration', value: 'get_tableflow_v1_catalog_integration' },
        { label: 'list_tableflow_v1_catalog_integrations', value: 'list_tableflow_v1_catalog_integrations' }
    ]}
>
<TabItem value="get_tableflow_v1_catalog_integration">

Make a request to read a catalog integration.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.tableflow.catalog_integrations
WHERE environment = '{{ environment }}' -- required
AND spec.kafka_cluster = '{{ spec.kafka_cluster }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_tableflow_v1_catalog_integrations">

Retrieve a sorted, filtered, paginated list of all catalog integrations.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.tableflow.catalog_integrations
WHERE environment = '{{ environment }}' -- required
AND spec.kafka_cluster = '{{ spec.kafka_cluster }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tableflow_v1_catalog_integration"
    values={[
        { label: 'create_tableflow_v1_catalog_integration', value: 'create_tableflow_v1_catalog_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tableflow_v1_catalog_integration">

Make a request to create a catalog integration.

```sql
INSERT INTO confluent.tableflow.catalog_integrations (
spec
)
SELECT 
'{{ spec }}' /* required */
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
- name: catalog_integrations
  props:
    - name: spec
      description: |
        The desired state of the Catalog Integration
      value:
        display_name: "{{ display_name }}"
        suspended: {{ suspended }}
        config:
          kind: "{{ kind }}"
          provider_integration_id: "{{ provider_integration_id }}"
          endpoint: "{{ endpoint }}"
          client_id: "{{ client_id }}"
          client_secret: "{{ client_secret }}"
          warehouse: "{{ warehouse }}"
          allowed_scope: "{{ allowed_scope }}"
          workspace_endpoint: "{{ workspace_endpoint }}"
          catalog_name: "{{ catalog_name }}"
        environment:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
        kafka_cluster:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tableflow_v1_catalog_integration"
    values={[
        { label: 'update_tableflow_v1_catalog_integration', value: 'update_tableflow_v1_catalog_integration' }
    ]}
>
<TabItem value="update_tableflow_v1_catalog_integration">

Make a request to update a catalog integration.<br /><br />

```sql
UPDATE confluent.tableflow.catalog_integrations
SET 
spec = '{{ spec }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
api_version,
kind,
metadata,
spec,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tableflow_v1_catalog_integration"
    values={[
        { label: 'delete_tableflow_v1_catalog_integration', value: 'delete_tableflow_v1_catalog_integration' }
    ]}
>
<TabItem value="delete_tableflow_v1_catalog_integration">

Make a request to delete a catalog integration.

```sql
DELETE FROM confluent.tableflow.catalog_integrations
WHERE environment = '{{ environment }}' --required
AND spec.kafka_cluster = '{{ spec.kafka_cluster }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
