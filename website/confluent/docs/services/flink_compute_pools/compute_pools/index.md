--- 
title: compute_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_pools
  - flink_compute_pools
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

Creates, updates, deletes, gets or lists a <code>compute_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.flink_compute_pools.compute_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fcpm_v2_compute_pool"
    values={[
        { label: 'get_fcpm_v2_compute_pool', value: 'get_fcpm_v2_compute_pool' },
        { label: 'list_fcpm_v2_compute_pools', value: 'list_fcpm_v2_compute_pools' }
    ]}
>
<TabItem value="get_fcpm_v2_compute_pool">

Compute Pool.

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
    <td>APIVersion defines the schema version of this representation of a resource. (fcpm/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ComputePool)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Compute Pool</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Compute Pool</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fcpm_v2_compute_pools">

Compute Pool.

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
    <td>APIVersion defines the schema version of this representation of a resource. (fcpm/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ComputePool)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Compute Pool</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Compute Pool</td>
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
    <td><a href="#get_fcpm_v2_compute_pool"><CopyableCode code="get_fcpm_v2_compute_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a compute pool.</td>
</tr>
<tr>
    <td><a href="#list_fcpm_v2_compute_pools"><CopyableCode code="list_fcpm_v2_compute_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-spec.region"><code>spec.region</code></a>, <a href="#parameter-spec.network"><code>spec.network</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all compute pools.</td>
</tr>
<tr>
    <td><a href="#create_fcpm_v2_compute_pool"><CopyableCode code="create_fcpm_v2_compute_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a compute pool.</td>
</tr>
<tr>
    <td><a href="#update_fcpm_v2_compute_pool"><CopyableCode code="update_fcpm_v2_compute_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a compute pool.</td>
</tr>
<tr>
    <td><a href="#delete_fcpm_v2_compute_pool"><CopyableCode code="delete_fcpm_v2_compute_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a compute pool.</td>
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
    <td>The unique identifier for the compute pool.</td>
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
<tr id="parameter-spec.network">
    <td><CopyableCode code="spec.network" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.network. (example: n-00000)</td>
</tr>
<tr id="parameter-spec.region">
    <td><CopyableCode code="spec.region" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.region. (example: us-west-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_fcpm_v2_compute_pool"
    values={[
        { label: 'get_fcpm_v2_compute_pool', value: 'get_fcpm_v2_compute_pool' },
        { label: 'list_fcpm_v2_compute_pools', value: 'list_fcpm_v2_compute_pools' }
    ]}
>
<TabItem value="get_fcpm_v2_compute_pool">

Make a request to read a compute pool.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.flink_compute_pools.compute_pools
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_fcpm_v2_compute_pools">

Retrieve a sorted, filtered, paginated list of all compute pools.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.flink_compute_pools.compute_pools
WHERE environment = '{{ environment }}' -- required
AND spec.region = '{{ spec.region }}'
AND spec.network = '{{ spec.network }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fcpm_v2_compute_pool"
    values={[
        { label: 'create_fcpm_v2_compute_pool', value: 'create_fcpm_v2_compute_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fcpm_v2_compute_pool">

Make a request to create a compute pool.

```sql
INSERT INTO confluent.flink_compute_pools.compute_pools (
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
- name: compute_pools
  props:
    - name: spec
      description: |
        The desired state of the Compute Pool
      value:
        display_name: "{{ display_name }}"
        cloud: "{{ cloud }}"
        region: "{{ region }}"
        max_cfu: {{ max_cfu }}
        enable_ai: {{ enable_ai }}
        default_pool: {{ default_pool }}
        environment:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
        network:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fcpm_v2_compute_pool"
    values={[
        { label: 'update_fcpm_v2_compute_pool', value: 'update_fcpm_v2_compute_pool' }
    ]}
>
<TabItem value="update_fcpm_v2_compute_pool">

Make a request to update a compute pool.

```sql
UPDATE confluent.flink_compute_pools.compute_pools
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
    defaultValue="delete_fcpm_v2_compute_pool"
    values={[
        { label: 'delete_fcpm_v2_compute_pool', value: 'delete_fcpm_v2_compute_pool' }
    ]}
>
<TabItem value="delete_fcpm_v2_compute_pool">

Make a request to delete a compute pool.

```sql
DELETE FROM confluent.flink_compute_pools.compute_pools
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
