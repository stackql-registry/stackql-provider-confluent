--- 
title: network_link_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - network_link_endpoints
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

Creates, updates, deletes, gets or lists a <code>network_link_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_link_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.networking.network_link_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_networking_v1_network_link_endpoint"
    values={[
        { label: 'get_networking_v1_network_link_endpoint', value: 'get_networking_v1_network_link_endpoint' },
        { label: 'list_networking_v1_network_link_endpoints', value: 'list_networking_v1_network_link_endpoints' }
    ]}
>
<TabItem value="get_networking_v1_network_link_endpoint">

Network Link Endpoint.

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
    <td>Kind defines the object this REST resource represents. (NetworkLinkEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Network Link Endpoint</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Network Link Endpoint</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networking_v1_network_link_endpoints">

Network Link Endpoint.

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
    <td>Kind defines the object this REST resource represents. (NetworkLinkEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Network Link Endpoint</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Network Link Endpoint</td>
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
    <td><a href="#get_networking_v1_network_link_endpoint"><CopyableCode code="get_networking_v1_network_link_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a network link endpoint.</td>
</tr>
<tr>
    <td><a href="#list_networking_v1_network_link_endpoints"><CopyableCode code="list_networking_v1_network_link_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-spec.display_name"><code>spec.display_name</code></a>, <a href="#parameter-status.phase"><code>status.phase</code></a>, <a href="#parameter-spec.network"><code>spec.network</code></a>, <a href="#parameter-spec.network_link_service"><code>spec.network_link_service</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all network link endpoints.</td>
</tr>
<tr>
    <td><a href="#create_networking_v1_network_link_endpoint"><CopyableCode code="create_networking_v1_network_link_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create a network link endpoint.</td>
</tr>
<tr>
    <td><a href="#update_networking_v1_network_link_endpoint"><CopyableCode code="update_networking_v1_network_link_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a network link endpoint.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_networking_v1_network_link_endpoint"><CopyableCode code="delete_networking_v1_network_link_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a network link endpoint.</td>
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
    <td>The unique identifier for the network link endpoint.</td>
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
    <td>Filter the results by exact match for spec.display_name. Pass multiple times to see results matching any of the values. (example: [prod-net-1-nle, dev-net-1-nle])</td>
</tr>
<tr id="parameter-spec.network">
    <td><CopyableCode code="spec.network" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for spec.network. Pass multiple times to see results matching any of the values. (example: [n-00000, n-00001])</td>
</tr>
<tr id="parameter-spec.network_link_service">
    <td><CopyableCode code="spec.network_link_service" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for spec.network_link_service. Pass multiple times to see results matching any of the values. (example: [nls-abcde, nls-00000])</td>
</tr>
<tr id="parameter-status.phase">
    <td><CopyableCode code="status.phase" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for status.phase. Pass multiple times to see results matching any of the values. (example: [READY, PENDING_ACCEPT])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_networking_v1_network_link_endpoint"
    values={[
        { label: 'get_networking_v1_network_link_endpoint', value: 'get_networking_v1_network_link_endpoint' },
        { label: 'list_networking_v1_network_link_endpoints', value: 'list_networking_v1_network_link_endpoints' }
    ]}
>
<TabItem value="get_networking_v1_network_link_endpoint">

Make a request to read a network link endpoint.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.network_link_endpoints
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_networking_v1_network_link_endpoints">

Retrieve a sorted, filtered, paginated list of all network link endpoints.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.network_link_endpoints
WHERE environment = '{{ environment }}' -- required
AND spec.display_name = '{{ spec.display_name }}'
AND status.phase = '{{ status.phase }}'
AND spec.network = '{{ spec.network }}'
AND spec.network_link_service = '{{ spec.network_link_service }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_networking_v1_network_link_endpoint"
    values={[
        { label: 'create_networking_v1_network_link_endpoint', value: 'create_networking_v1_network_link_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_networking_v1_network_link_endpoint">

Make a request to create a network link endpoint.

```sql
INSERT INTO confluent.networking.network_link_endpoints (
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
- name: network_link_endpoints
  props:
    - name: spec
      description: |
        The desired state of the Network Link Endpoint
      value:
        display_name: "{{ display_name }}"
        description: "{{ description }}"
        environment:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
        network:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
        network_link_service:
          id: "{{ id }}"
          environment: "{{ environment }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_networking_v1_network_link_endpoint"
    values={[
        { label: 'update_networking_v1_network_link_endpoint', value: 'update_networking_v1_network_link_endpoint' }
    ]}
>
<TabItem value="update_networking_v1_network_link_endpoint">

Make a request to update a network link endpoint.<br /><br />

```sql
UPDATE confluent.networking.network_link_endpoints
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
    defaultValue="delete_networking_v1_network_link_endpoint"
    values={[
        { label: 'delete_networking_v1_network_link_endpoint', value: 'delete_networking_v1_network_link_endpoint' }
    ]}
>
<TabItem value="delete_networking_v1_network_link_endpoint">

Make a request to delete a network link endpoint.

```sql
DELETE FROM confluent.networking.network_link_endpoints
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
