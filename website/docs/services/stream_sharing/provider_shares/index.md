--- 
title: provider_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - provider_shares
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

Creates, updates, deletes, gets or lists a <code>provider_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provider_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.stream_sharing.provider_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cdx_v1_provider_share"
    values={[
        { label: 'get_cdx_v1_provider_share', value: 'get_cdx_v1_provider_share' },
        { label: 'list_cdx_v1_provider_shares', value: 'list_cdx_v1_provider_shares' }
    ]}
>
<TabItem value="get_cdx_v1_provider_share">

Provider Share.

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
    <td>Consumer organization name (example: Nasdaq)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the consumer (example: John Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_user_name" /></td>
    <td><code>string</code></td>
    <td>Name or email of the provider user. Deprecated (example: Jane Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_cluster" /></td>
    <td><code>object</code></td>
    <td>The cloud cluster to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_restriction" /></td>
    <td><code>object</code></td>
    <td>Restrictions on the consumer that can redeem this token</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_method" /></td>
    <td><code>string</code></td>
    <td>Method by which the invite will be delivered (example: EMAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="invite_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the invitation will expire. Only for invited shares (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="invited_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which consumer was invited (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ProviderShare)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_user" /></td>
    <td><code>object</code></td>
    <td>The provider user/inviter</td>
</tr>
<tr>
    <td><CopyableCode code="redeemed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the invite was redeemed (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="service_account" /></td>
    <td><code>object</code></td>
    <td>The service account associated with this object.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Provider Share</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cdx_v1_provider_shares">

Provider Share.

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
    <td>Consumer organization name (example: Nasdaq)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the consumer (example: John Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_user_name" /></td>
    <td><code>string</code></td>
    <td>Name or email of the provider user. Deprecated (example: Jane Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_cluster" /></td>
    <td><code>object</code></td>
    <td>The cloud cluster to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_restriction" /></td>
    <td><code>object</code></td>
    <td>Restrictions on the consumer that can redeem this token</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_method" /></td>
    <td><code>string</code></td>
    <td>Method by which the invite will be delivered (example: EMAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="invite_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the invitation will expire. Only for invited shares (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="invited_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which consumer was invited (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ProviderShare)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_user" /></td>
    <td><code>object</code></td>
    <td>The provider user/inviter</td>
</tr>
<tr>
    <td><CopyableCode code="redeemed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the invite was redeemed (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="service_account" /></td>
    <td><code>object</code></td>
    <td>The service account associated with this object.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Provider Share</td>
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
    <td><a href="#get_cdx_v1_provider_share"><CopyableCode code="get_cdx_v1_provider_share" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a provider share.</td>
</tr>
<tr>
    <td><a href="#list_cdx_v1_provider_shares"><CopyableCode code="list_cdx_v1_provider_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-shared_resource"><code>shared_resource</code></a>, <a href="#parameter-crn"><code>crn</code></a>, <a href="#parameter-include_deleted"><code>include_deleted</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all provider shares.</td>
</tr>
<tr>
    <td><a href="#create_cdx_v1_provider_share"><CopyableCode code="create_cdx_v1_provider_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-delivery_method"><code>delivery_method</code></a>, <a href="#parameter-consumer_restriction"><code>consumer_restriction</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Creates a share based on delivery method.</td>
</tr>
<tr>
    <td><a href="#delete_cdx_v1_provider_share"><CopyableCode code="delete_cdx_v1_provider_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a provider share.</td>
</tr>
<tr>
    <td><a href="#resend_cdx_v1_provider_share"><CopyableCode code="resend_cdx_v1_provider_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Resend provider share</td>
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
    <td>The unique identifier for the provider share.</td>
</tr>
<tr id="parameter-crn">
    <td><CopyableCode code="crn" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for crn. (example: crn://confluent.cloud/cloud-cluster=lkc-111aaa/kafka=lkc-111aaa/topic=my.topic)</td>
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
    defaultValue="get_cdx_v1_provider_share"
    values={[
        { label: 'get_cdx_v1_provider_share', value: 'get_cdx_v1_provider_share' },
        { label: 'list_cdx_v1_provider_shares', value: 'list_cdx_v1_provider_shares' }
    ]}
>
<TabItem value="get_cdx_v1_provider_share">

Make a request to read a provider share.

```sql
SELECT
id,
consumer_organization_name,
consumer_user_name,
provider_user_name,
api_version,
cloud_cluster,
consumer_restriction,
delivery_method,
invite_expires_at,
invited_at,
kind,
metadata,
provider_user,
redeemed_at,
service_account,
status
FROM confluent.stream_sharing.provider_shares
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_cdx_v1_provider_shares">

Retrieve a sorted, filtered, paginated list of all provider shares.

```sql
SELECT
id,
consumer_organization_name,
consumer_user_name,
provider_user_name,
api_version,
cloud_cluster,
consumer_restriction,
delivery_method,
invite_expires_at,
invited_at,
kind,
metadata,
provider_user,
redeemed_at,
service_account,
status
FROM confluent.stream_sharing.provider_shares
WHERE shared_resource = '{{ shared_resource }}'
AND crn = '{{ crn }}'
AND include_deleted = '{{ include_deleted }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cdx_v1_provider_share"
    values={[
        { label: 'create_cdx_v1_provider_share', value: 'create_cdx_v1_provider_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cdx_v1_provider_share">

Creates a share based on delivery method.

```sql
INSERT INTO confluent.stream_sharing.provider_shares (
delivery_method,
consumer_restriction,
resources
)
SELECT 
'{{ delivery_method }}' /* required */,
'{{ consumer_restriction }}' /* required */,
'{{ resources }}' /* required */
RETURNING
id,
consumer_organization_name,
consumer_user_name,
provider_user_name,
api_version,
cloud_cluster,
consumer_restriction,
delivery_method,
invite_expires_at,
invited_at,
kind,
metadata,
provider_user,
redeemed_at,
service_account,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: provider_shares
  props:
    - name: delivery_method
      value: "{{ delivery_method }}"
      description: |
        Method by which the invite will be delivered
    - name: consumer_restriction
      description: |
        Restrictions on the consumer that can redeem this token
      value:
        kind: "{{ kind }}"
        email: "{{ email }}"
    - name: resources
      value:
        - "{{ resources }}"
      description: |
        List of resource crns to be shared
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cdx_v1_provider_share"
    values={[
        { label: 'delete_cdx_v1_provider_share', value: 'delete_cdx_v1_provider_share' }
    ]}
>
<TabItem value="delete_cdx_v1_provider_share">

Make a request to delete a provider share.

```sql
DELETE FROM confluent.stream_sharing.provider_shares
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resend_cdx_v1_provider_share"
    values={[
        { label: 'resend_cdx_v1_provider_share', value: 'resend_cdx_v1_provider_share' }
    ]}
>
<TabItem value="resend_cdx_v1_provider_share">

Resend provider share

```sql
EXEC confluent.stream_sharing.provider_shares.resend_cdx_v1_provider_share 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
