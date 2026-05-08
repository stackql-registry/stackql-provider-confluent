--- 
title: consumer_shared_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - consumer_shared_resources
  - stream_sharing
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

Creates, updates, deletes, gets or lists a <code>consumer_shared_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consumer_shared_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.stream_sharing.consumer_shared_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cdx_v1_consumer_shared_resource"
    values={[
        { label: 'get_cdx_v1_consumer_shared_resource', value: 'get_cdx_v1_consumer_shared_resource' },
        { label: 'list_cdx_v1_consumer_shared_resources', value: 'list_cdx_v1_consumer_shared_resources' }
    ]}
>
<TabItem value="get_cdx_v1_consumer_shared_resource">

Consumer Shared Resource.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Consumer resource display name (example: Stock Trades)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>Shared resource's organization name (example: ABC Corp)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider of the provider shared cluster. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of consumer resource (example: This topic provides realtime data for the orders placed through the website)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ConsumerSharedResource)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string (uri)</code></td>
    <td>Resource logo url (example: https://confluent.cloud/api/cdx/v1/consumer-shared-resources/sr-123/images/logo)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="network_connection_types" /></td>
    <td><code>array</code></td>
    <td>The network connection types of the provider shared cluster. If the shared cluster is on public internet, then the list will be empty </td>
</tr>
<tr>
    <td><CopyableCode code="organization_contact" /></td>
    <td><code>string (email)</code></td>
    <td>Email of the shared resource's organization contact (example: jane.doe@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_description" /></td>
    <td><code>string</code></td>
    <td>Shared resource's organization description (example: ABC Corp is the biggest online retailer)</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>List of schemas in JSON format. This field is work in progress and subject to changes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>list of tags</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cdx_v1_consumer_shared_resources">

Consumer Shared Resource.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Consumer resource display name (example: Stock Trades)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>Shared resource's organization name (example: ABC Corp)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider of the provider shared cluster. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of consumer resource (example: This topic provides realtime data for the orders placed through the website)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ConsumerSharedResource)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string (uri)</code></td>
    <td>Resource logo url (example: https://confluent.cloud/api/cdx/v1/consumer-shared-resources/sr-123/images/logo)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="network_connection_types" /></td>
    <td><code>array</code></td>
    <td>The network connection types of the provider shared cluster. If the shared cluster is on public internet, then the list will be empty </td>
</tr>
<tr>
    <td><CopyableCode code="organization_contact" /></td>
    <td><code>string (email)</code></td>
    <td>Email of the shared resource's organization contact (example: jane.doe@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_description" /></td>
    <td><code>string</code></td>
    <td>Shared resource's organization description (example: ABC Corp is the biggest online retailer)</td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>array</code></td>
    <td>List of schemas in JSON format. This field is work in progress and subject to changes.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>list of tags</td>
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
    <td><a href="#get_cdx_v1_consumer_shared_resource"><CopyableCode code="get_cdx_v1_consumer_shared_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a consumer shared resource.</td>
</tr>
<tr>
    <td><a href="#list_cdx_v1_consumer_shared_resources"><CopyableCode code="list_cdx_v1_consumer_shared_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-stream_share"><code>stream_share</code></a>, <a href="#parameter-include_deleted"><code>include_deleted</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all consumer shared resources.</td>
</tr>
<tr>
    <td><a href="#image_cdx_v1_consumer_shared_resource"><CopyableCode code="image_cdx_v1_consumer_shared_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-file_name"><code>file_name</code></a></td>
    <td></td>
    <td>Returns the image file for the shared resource</td>
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
<tr id="parameter-file_name">
    <td><CopyableCode code="file_name" /></td>
    <td><code>string</code></td>
    <td>The File Name</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the consumer shared resource.</td>
</tr>
<tr id="parameter-include_deleted">
    <td><CopyableCode code="include_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Include deactivated shared resources</td>
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
<tr id="parameter-stream_share">
    <td><CopyableCode code="stream_share" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for stream_share. (example: ss-1234)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cdx_v1_consumer_shared_resource"
    values={[
        { label: 'get_cdx_v1_consumer_shared_resource', value: 'get_cdx_v1_consumer_shared_resource' },
        { label: 'list_cdx_v1_consumer_shared_resources', value: 'list_cdx_v1_consumer_shared_resources' }
    ]}
>
<TabItem value="get_cdx_v1_consumer_shared_resource">

Make a request to read a consumer shared resource.

```sql
SELECT
id,
display_name,
organization_name,
api_version,
cloud,
description,
kind,
logo_url,
metadata,
network_connection_types,
organization_contact,
organization_description,
schemas,
tags
FROM confluent.stream_sharing.consumer_shared_resources
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_cdx_v1_consumer_shared_resources">

Retrieve a sorted, filtered, paginated list of all consumer shared resources.

```sql
SELECT
id,
display_name,
organization_name,
api_version,
cloud,
description,
kind,
logo_url,
metadata,
network_connection_types,
organization_contact,
organization_description,
schemas,
tags
FROM confluent.stream_sharing.consumer_shared_resources
WHERE stream_share = '{{ stream_share }}'
AND include_deleted = '{{ include_deleted }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="image_cdx_v1_consumer_shared_resource"
    values={[
        { label: 'image_cdx_v1_consumer_shared_resource', value: 'image_cdx_v1_consumer_shared_resource' }
    ]}
>
<TabItem value="image_cdx_v1_consumer_shared_resource">

Returns the image file for the shared resource

```sql
EXEC confluent.stream_sharing.consumer_shared_resources.image_cdx_v1_consumer_shared_resource 
@id='{{ id }}' --required, 
@file_name='{{ file_name }}' --required
;
```
</TabItem>
</Tabs>
