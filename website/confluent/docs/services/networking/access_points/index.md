--- 
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
  - networking
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

Creates, updates, deletes, gets or lists an <code>access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.networking.access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_networking_v1_access_point"
    values={[
        { label: 'get_networking_v1_access_point', value: 'get_networking_v1_access_point' },
        { label: 'list_networking_v1_access_points', value: 'list_networking_v1_access_points' }
    ]}
>
<TabItem value="get_networking_v1_access_point">

Access Point.

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
    <td>APIVersion defines the schema version of this representation of a resource. (networking/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (AccessPoint)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Access Point</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Access Point</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networking_v1_access_points">

Access Point.

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
    <td>APIVersion defines the schema version of this representation of a resource. (networking/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (AccessPoint)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Access Point</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Access Point</td>
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
    <td><a href="#get_networking_v1_access_point"><CopyableCode code="get_networking_v1_access_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an access point.</td>
</tr>
<tr>
    <td><a href="#list_networking_v1_access_points"><CopyableCode code="list_networking_v1_access_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-spec.display_name"><code>spec.display_name</code></a>, <a href="#parameter-spec.gateway"><code>spec.gateway</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all access points.</td>
</tr>
<tr>
    <td><a href="#create_networking_v1_access_point"><CopyableCode code="create_networking_v1_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create an access point.</td>
</tr>
<tr>
    <td><a href="#update_networking_v1_access_point"><CopyableCode code="update_networking_v1_access_point" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update an access point.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_networking_v1_access_point"><CopyableCode code="delete_networking_v1_access_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an access point.</td>
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
    <td>The unique identifier for the access point.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for id. Pass multiple times to see results matching any of the values. (example: [ap-1, ap-2])</td>
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
<tr id="parameter-spec.display_name">
    <td><CopyableCode code="spec.display_name" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for spec.display_name. Pass multiple times to see results matching any of the values. (example: [prod-ap-egress-use1, prod-ap-egress-usw2])</td>
</tr>
<tr id="parameter-spec.gateway">
    <td><CopyableCode code="spec.gateway" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for spec.gateway. Pass multiple times to see results matching any of the values. (example: [gw-00000, gw-00001])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_networking_v1_access_point"
    values={[
        { label: 'get_networking_v1_access_point', value: 'get_networking_v1_access_point' },
        { label: 'list_networking_v1_access_points', value: 'list_networking_v1_access_points' }
    ]}
>
<TabItem value="get_networking_v1_access_point">

Make a request to read an access point.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.access_points
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_networking_v1_access_points">

Retrieve a sorted, filtered, paginated list of all access points.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.access_points
WHERE environment = '{{ environment }}' -- required
AND spec.display_name = '{{ spec.display_name }}'
AND spec.gateway = '{{ spec.gateway }}'
AND id = '{{ id }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_networking_v1_access_point"
    values={[
        { label: 'create_networking_v1_access_point', value: 'create_networking_v1_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_networking_v1_access_point">

Make a request to create an access point.

```sql
INSERT INTO confluent.networking.access_points (
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
- name: access_points
  props:
    - name: spec
      description: |
        The desired state of the Access Point
      value:
        display_name: "{{ display_name }}"
        config:
          kind: "{{ kind }}"
          vpc_endpoint_service_name: "{{ vpc_endpoint_service_name }}"
          enable_high_availability: {{ enable_high_availability }}
          target_system: "{{ target_system }}"
          vpc_endpoint_id: "{{ vpc_endpoint_id }}"
          private_link_service_resource_id: "{{ private_link_service_resource_id }}"
          private_link_subresource_name: "{{ private_link_subresource_name }}"
          private_endpoint_resource_id: "{{ private_endpoint_resource_id }}"
          network_interfaces:
            - "{{ network_interfaces }}"
          account: "{{ account }}"
          egress_routes:
            - "{{ egress_routes }}"
          private_service_connect_endpoint_target: "{{ private_service_connect_endpoint_target }}"
          private_service_connect_connection_id: "{{ private_service_connect_connection_id }}"
        environment:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
          api_version: "{{ api_version }}"
          kind: "{{ kind }}"
        gateway:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
          api_version: "{{ api_version }}"
          kind: "{{ kind }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_networking_v1_access_point"
    values={[
        { label: 'update_networking_v1_access_point', value: 'update_networking_v1_access_point' }
    ]}
>
<TabItem value="update_networking_v1_access_point">

Make a request to update an access point.<br /><br />

```sql
UPDATE confluent.networking.access_points
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
    defaultValue="delete_networking_v1_access_point"
    values={[
        { label: 'delete_networking_v1_access_point', value: 'delete_networking_v1_access_point' }
    ]}
>
<TabItem value="delete_networking_v1_access_point">

Make a request to delete an access point.

```sql
DELETE FROM confluent.networking.access_points
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
