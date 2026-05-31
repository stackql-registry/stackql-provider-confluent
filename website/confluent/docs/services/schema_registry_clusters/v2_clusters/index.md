--- 
title: v2_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - v2_clusters
  - schema_registry_clusters
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

Creates, updates, deletes, gets or lists a <code>v2_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="v2_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry_clusters.v2_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_srcm_v2_cluster"
    values={[
        { label: 'get_srcm_v2_cluster', value: 'get_srcm_v2_cluster' },
        { label: 'list_srcm_v2_clusters', value: 'list_srcm_v2_clusters' }
    ]}
>
<TabItem value="get_srcm_v2_cluster">

Cluster.

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
    <td>APIVersion defines the schema version of this representation of a resource. (srcm/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Cluster</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Cluster</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_srcm_v2_clusters">

Cluster.

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
    <td>APIVersion defines the schema version of this representation of a resource. (srcm/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Cluster</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Cluster</td>
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
    <td><a href="#get_srcm_v2_cluster"><CopyableCode code="get_srcm_v2_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a cluster.</td>
</tr>
<tr>
    <td><a href="#list_srcm_v2_clusters"><CopyableCode code="list_srcm_v2_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all clusters.</td>
</tr>
<tr>
    <td><a href="#create_srcm_v2_cluster"><CopyableCode code="create_srcm_v2_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a cluster.</td>
</tr>
<tr>
    <td><a href="#update_srcm_v2_cluster"><CopyableCode code="update_srcm_v2_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a cluster.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_srcm_v2_cluster"><CopyableCode code="delete_srcm_v2_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a cluster.</td>
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
    <td>The unique identifier for the cluster.</td>
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
    defaultValue="get_srcm_v2_cluster"
    values={[
        { label: 'get_srcm_v2_cluster', value: 'get_srcm_v2_cluster' },
        { label: 'list_srcm_v2_clusters', value: 'list_srcm_v2_clusters' }
    ]}
>
<TabItem value="get_srcm_v2_cluster">

Make a request to read a cluster.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.schema_registry_clusters.v2_clusters
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_srcm_v2_clusters">

Retrieve a sorted, filtered, paginated list of all clusters.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.schema_registry_clusters.v2_clusters
WHERE environment = '{{ environment }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_srcm_v2_cluster"
    values={[
        { label: 'create_srcm_v2_cluster', value: 'create_srcm_v2_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_srcm_v2_cluster">

Make a request to create a cluster.

```sql
INSERT INTO confluent.schema_registry_clusters.v2_clusters (
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
- name: v2_clusters
  props:
    - name: spec
      description: |
        The desired state of the Cluster
      value:
        display_name: "{{ display_name }}"
        package: "{{ package }}"
        http_endpoint: "{{ http_endpoint }}"
        environment:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
        region:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_srcm_v2_cluster"
    values={[
        { label: 'update_srcm_v2_cluster', value: 'update_srcm_v2_cluster' }
    ]}
>
<TabItem value="update_srcm_v2_cluster">

Make a request to update a cluster.<br /><br />

```sql
UPDATE confluent.schema_registry_clusters.v2_clusters
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
spec,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_srcm_v2_cluster"
    values={[
        { label: 'delete_srcm_v2_cluster', value: 'delete_srcm_v2_cluster' }
    ]}
>
<TabItem value="delete_srcm_v2_cluster">

Make a request to delete a cluster.

```sql
DELETE FROM confluent.schema_registry_clusters.v2_clusters
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
