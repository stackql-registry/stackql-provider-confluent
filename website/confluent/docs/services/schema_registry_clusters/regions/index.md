--- 
title: regions
hide_title: false
hide_table_of_contents: false
keywords:
  - regions
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

Creates, updates, deletes, gets or lists a <code>regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry_clusters.regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_srcm_v2_region"
    values={[
        { label: 'get_srcm_v2_region', value: 'get_srcm_v2_region' },
        { label: 'list_srcm_v2_regions', value: 'list_srcm_v2_regions' }
    ]}
>
<TabItem value="get_srcm_v2_region">

Region.

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
    <td>Kind defines the object this REST resource represents. (Region)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Region</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_srcm_v2_regions">

Region.

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
    <td>Kind defines the object this REST resource represents. (Region)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Region</td>
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
    <td><a href="#get_srcm_v2_region"><CopyableCode code="get_srcm_v2_region" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a region.</td>
</tr>
<tr>
    <td><a href="#list_srcm_v2_regions"><CopyableCode code="list_srcm_v2_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-spec.cloud"><code>spec.cloud</code></a>, <a href="#parameter-spec.region_name"><code>spec.region_name</code></a>, <a href="#parameter-spec.packages"><code>spec.packages</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all regions.</td>
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
    <td>The unique identifier for the region.</td>
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
<tr id="parameter-spec.packages">
    <td><CopyableCode code="spec.packages" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for spec.packages. Pass multiple times to see results matching any of the values. (example: [ESSENTIALS, ADVANCED])</td>
</tr>
<tr id="parameter-spec.region_name">
    <td><CopyableCode code="spec.region_name" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.region_name. (example: us-east-2)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_srcm_v2_region"
    values={[
        { label: 'get_srcm_v2_region', value: 'get_srcm_v2_region' },
        { label: 'list_srcm_v2_regions', value: 'list_srcm_v2_regions' }
    ]}
>
<TabItem value="get_srcm_v2_region">

Make a request to read a region.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.schema_registry_clusters.regions
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_srcm_v2_regions">

Retrieve a sorted, filtered, paginated list of all regions.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.schema_registry_clusters.regions
WHERE spec.cloud = '{{ spec.cloud }}'
AND spec.region_name = '{{ spec.region_name }}'
AND spec.packages = '{{ spec.packages }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
