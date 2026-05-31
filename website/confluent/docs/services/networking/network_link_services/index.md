--- 
title: network_link_services
hide_title: false
hide_table_of_contents: false
keywords:
  - network_link_services
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

Creates, updates, deletes, gets or lists a <code>network_link_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_link_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.networking.network_link_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_networking_v1_network_link_service"
    values={[
        { label: 'get_networking_v1_network_link_service', value: 'get_networking_v1_network_link_service' },
        { label: 'list_networking_v1_network_link_services', value: 'list_networking_v1_network_link_services' }
    ]}
>
<TabItem value="get_networking_v1_network_link_service">

Network Link Service.

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
    <td>Kind defines the object this REST resource represents. (NetworkLinkService)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Network Link Service</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Network Link Service</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networking_v1_network_link_services">

Network Link Service.

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
    <td>Kind defines the object this REST resource represents. (NetworkLinkService)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Network Link Service</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Network Link Service</td>
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
    <td><a href="#get_networking_v1_network_link_service"><CopyableCode code="get_networking_v1_network_link_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a network link service.</td>
</tr>
<tr>
    <td><a href="#list_networking_v1_network_link_services"><CopyableCode code="list_networking_v1_network_link_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-spec.display_name"><code>spec.display_name</code></a>, <a href="#parameter-status.phase"><code>status.phase</code></a>, <a href="#parameter-spec.network"><code>spec.network</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all network link services.</td>
</tr>
<tr>
    <td><a href="#create_networking_v1_network_link_service"><CopyableCode code="create_networking_v1_network_link_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a network link service.</td>
</tr>
<tr>
    <td><a href="#update_networking_v1_network_link_service"><CopyableCode code="update_networking_v1_network_link_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a network link service.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_networking_v1_network_link_service"><CopyableCode code="delete_networking_v1_network_link_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a network link service.</td>
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
    <td>The unique identifier for the network link service.</td>
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
    <td>Filter the results by exact match for spec.display_name. Pass multiple times to see results matching any of the values. (example: [prod-net-1-nls, dev-net-1-nls])</td>
</tr>
<tr id="parameter-spec.network">
    <td><CopyableCode code="spec.network" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for spec.network. Pass multiple times to see results matching any of the values. (example: [n-00000, n-00001])</td>
</tr>
<tr id="parameter-status.phase">
    <td><CopyableCode code="status.phase" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for status.phase. Pass multiple times to see results matching any of the values. (example: [READY])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_networking_v1_network_link_service"
    values={[
        { label: 'get_networking_v1_network_link_service', value: 'get_networking_v1_network_link_service' },
        { label: 'list_networking_v1_network_link_services', value: 'list_networking_v1_network_link_services' }
    ]}
>
<TabItem value="get_networking_v1_network_link_service">

Make a request to read a network link service.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.network_link_services
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_networking_v1_network_link_services">

Retrieve a sorted, filtered, paginated list of all network link services.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.network_link_services
WHERE environment = '{{ environment }}' -- required
AND spec.display_name = '{{ spec.display_name }}'
AND status.phase = '{{ status.phase }}'
AND spec.network = '{{ spec.network }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_networking_v1_network_link_service"
    values={[
        { label: 'create_networking_v1_network_link_service', value: 'create_networking_v1_network_link_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_networking_v1_network_link_service">

Make a request to create a network link service.

```sql
INSERT INTO confluent.networking.network_link_services (
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
- name: network_link_services
  props:
    - name: spec
      description: |
        The desired state of the Network Link Service
      value:
        display_name: "{{ display_name }}"
        description: "{{ description }}"
        accept:
          environments:
            - "{{ environments }}"
          networks:
            - "{{ networks }}"
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
    defaultValue="update_networking_v1_network_link_service"
    values={[
        { label: 'update_networking_v1_network_link_service', value: 'update_networking_v1_network_link_service' }
    ]}
>
<TabItem value="update_networking_v1_network_link_service">

Make a request to update a network link service.<br /><br />

```sql
UPDATE confluent.networking.network_link_services
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
    defaultValue="delete_networking_v1_network_link_service"
    values={[
        { label: 'delete_networking_v1_network_link_service', value: 'delete_networking_v1_network_link_service' }
    ]}
>
<TabItem value="delete_networking_v1_network_link_service">

Make a request to delete a network link service.

```sql
DELETE FROM confluent.networking.network_link_services
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
