--- 
title: consumer_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - consumer_shares
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

Creates, updates, deletes, gets or lists a <code>consumer_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consumer_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.stream_sharing.consumer_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cdx_v1_consumer_share"
    values={[
        { label: 'get_cdx_v1_consumer_share', value: 'get_cdx_v1_consumer_share' },
        { label: 'list_cdx_v1_consumer_shares', value: 'list_cdx_v1_consumer_shares' }
    ]}
>
<TabItem value="get_cdx_v1_consumer_share">

Consumer Share.

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
    <td><CopyableCode code="consumer_organization_name" /></td>
    <td><code>string</code></td>
    <td>Consumer organization name. Deprecated (example: Nasdaq)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the consumer. Deprecated (example: John Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_organization_name" /></td>
    <td><code>string</code></td>
    <td>Provider organization name (example: Nasdaq)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_user_name" /></td>
    <td><code>string</code></td>
    <td>Name or email of the provider user (example: Jane Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_user" /></td>
    <td><code>object</code></td>
    <td>The consumer user/invitee</td>
</tr>
<tr>
    <td><CopyableCode code="invite_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the invitation will expire. Only for invited shares (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ConsumerShare)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Consumer Share</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cdx_v1_consumer_shares">

Consumer Share.

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
    <td><CopyableCode code="consumer_organization_name" /></td>
    <td><code>string</code></td>
    <td>Consumer organization name. Deprecated (example: Nasdaq)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the consumer. Deprecated (example: John Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_organization_name" /></td>
    <td><code>string</code></td>
    <td>Provider organization name (example: Nasdaq)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_user_name" /></td>
    <td><code>string</code></td>
    <td>Name or email of the provider user (example: Jane Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_user" /></td>
    <td><code>object</code></td>
    <td>The consumer user/invitee</td>
</tr>
<tr>
    <td><CopyableCode code="invite_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the invitation will expire. Only for invited shares (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ConsumerShare)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Consumer Share</td>
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
    <td><a href="#get_cdx_v1_consumer_share"><CopyableCode code="get_cdx_v1_consumer_share" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a consumer share.</td>
</tr>
<tr>
    <td><a href="#list_cdx_v1_consumer_shares"><CopyableCode code="list_cdx_v1_consumer_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-shared_resource"><code>shared_resource</code></a>, <a href="#parameter-include_deleted"><code>include_deleted</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all consumer shares.</td>
</tr>
<tr>
    <td><a href="#delete_cdx_v1_consumer_share"><CopyableCode code="delete_cdx_v1_consumer_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a consumer share.</td>
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
    <td>The unique identifier for the consumer share.</td>
</tr>
<tr id="parameter-include_deleted">
    <td><CopyableCode code="include_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Include deactivated shares</td>
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
<tr id="parameter-shared_resource">
    <td><CopyableCode code="shared_resource" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for shared_resource. (example: sr-1234)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cdx_v1_consumer_share"
    values={[
        { label: 'get_cdx_v1_consumer_share', value: 'get_cdx_v1_consumer_share' },
        { label: 'list_cdx_v1_consumer_shares', value: 'list_cdx_v1_consumer_shares' }
    ]}
>
<TabItem value="get_cdx_v1_consumer_share">

Make a request to read a consumer share.

```sql
SELECT
id,
consumer_organization_name,
consumer_user_name,
provider_organization_name,
provider_user_name,
api_version,
consumer_user,
invite_expires_at,
kind,
metadata,
status
FROM confluent.stream_sharing.consumer_shares
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_cdx_v1_consumer_shares">

Retrieve a sorted, filtered, paginated list of all consumer shares.

```sql
SELECT
id,
consumer_organization_name,
consumer_user_name,
provider_organization_name,
provider_user_name,
api_version,
consumer_user,
invite_expires_at,
kind,
metadata,
status
FROM confluent.stream_sharing.consumer_shares
WHERE shared_resource = '{{ shared_resource }}'
AND include_deleted = '{{ include_deleted }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cdx_v1_consumer_share"
    values={[
        { label: 'delete_cdx_v1_consumer_share', value: 'delete_cdx_v1_consumer_share' }
    ]}
>
<TabItem value="delete_cdx_v1_consumer_share">

Make a request to delete a consumer share.

```sql
DELETE FROM confluent.stream_sharing.consumer_shares
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
