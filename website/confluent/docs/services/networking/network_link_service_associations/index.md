--- 
title: network_link_service_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - network_link_service_associations
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

Creates, updates, deletes, gets or lists a <code>network_link_service_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_link_service_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.networking.network_link_service_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_networking_v1_network_link_service_association"
    values={[
        { label: 'get_networking_v1_network_link_service_association', value: 'get_networking_v1_network_link_service_association' },
        { label: 'list_networking_v1_network_link_service_associations', value: 'list_networking_v1_network_link_service_associations' }
    ]}
>
<TabItem value="get_networking_v1_network_link_service_association">

Network Link Service Association.

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
    <td>Kind defines the object this REST resource represents. (NetworkLinkServiceAssociation)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Network Link Service Association</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Network Link Service Association</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networking_v1_network_link_service_associations">

Network Link Service Association.

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
    <td>Kind defines the object this REST resource represents. (NetworkLinkServiceAssociation)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Network Link Service Association</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Network Link Service Association</td>
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
    <td><a href="#get_networking_v1_network_link_service_association"><CopyableCode code="get_networking_v1_network_link_service_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-spec.network_link_service"><code>spec.network_link_service</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a network link service association.</td>
</tr>
<tr>
    <td><a href="#list_networking_v1_network_link_service_associations"><CopyableCode code="list_networking_v1_network_link_service_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-spec.network_link_service"><code>spec.network_link_service</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-status.phase"><code>status.phase</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all network link service associations.</td>
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
    <td>Filter the results by exact match for environment. (example: env-00000)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the network link service association.</td>
</tr>
<tr id="parameter-spec.network_link_service">
    <td><CopyableCode code="spec.network_link_service" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.network_link_service. (example: nls-abcde)</td>
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
<tr id="parameter-status.phase">
    <td><CopyableCode code="status.phase" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for status.phase. Pass multiple times to see results matching any of the values. (example: [READY, PENDING_ACCEPT])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_networking_v1_network_link_service_association"
    values={[
        { label: 'get_networking_v1_network_link_service_association', value: 'get_networking_v1_network_link_service_association' },
        { label: 'list_networking_v1_network_link_service_associations', value: 'list_networking_v1_network_link_service_associations' }
    ]}
>
<TabItem value="get_networking_v1_network_link_service_association">

Make a request to read a network link service association.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.network_link_service_associations
WHERE spec.network_link_service = '{{ spec.network_link_service }}' -- required
AND environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_networking_v1_network_link_service_associations">

Retrieve a sorted, filtered, paginated list of all network link service associations.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.networking.network_link_service_associations
WHERE spec.network_link_service = '{{ spec.network_link_service }}' -- required
AND environment = '{{ environment }}' -- required
AND status.phase = '{{ status.phase }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
