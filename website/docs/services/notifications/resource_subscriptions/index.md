--- 
title: resource_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_subscriptions
  - notifications
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

Creates, updates, deletes, gets or lists a <code>resource_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.notifications.resource_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notifications_v1_resource_subscription"
    values={[
        { label: 'get_notifications_v1_resource_subscription', value: 'get_notifications_v1_resource_subscription' },
        { label: 'list_notifications_v1_resource_subscriptions_by_filter', value: 'list_notifications_v1_resource_subscriptions_by_filter' }
    ]}
>
<TabItem value="get_notifications_v1_resource_subscription">

Resource Subscription.

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
    <td>APIVersion defines the schema version of this representation of a resource. (notifications/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>string</code></td>
    <td>Denotes the state of the resource preference. When the resource preference is ENABLED, the user will receive notifications for the Confluent Cloud resource. If the resource preference is DISABLED, the user will not receive any notification for the resource. Note that, you will still receive notifications for `REQUIRED` notification type even when it is DISABLED.  (example: ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td>Integrations to which notifications are to be sent.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ResourceSubscription)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_type" /></td>
    <td><code>object</code></td>
    <td>The type of notification to subscribe to.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Denotes the Confluent Cloud resource definition. (example: environment=env-456xy/cloud-cluster=lkc-df123/connector=my_datagen_connector)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Denotes the Confluent Cloud resource type. (example: CONNECTOR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notifications_v1_resource_subscriptions_by_filter">

List of ResourceSubscriptions

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
    <td>APIVersion defines the schema version of this representation of a resource. (notifications/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>string</code></td>
    <td>Denotes the state of the resource preference. When the resource preference is ENABLED, the user will receive notifications for the Confluent Cloud resource. If the resource preference is DISABLED, the user will not receive any notification for the resource. Note that, you will still receive notifications for `REQUIRED` notification type even when it is DISABLED.  (example: ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td>Integrations to which notifications are to be sent.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ResourceSubscription)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_type" /></td>
    <td><code>object</code></td>
    <td>The type of notification to subscribe to.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Denotes the Confluent Cloud resource definition. (example: environment=env-456xy/cloud-cluster=lkc-df123/connector=my_datagen_connector)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Denotes the Confluent Cloud resource type. (example: CONNECTOR)</td>
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
    <td><a href="#get_notifications_v1_resource_subscription"><CopyableCode code="get_notifications_v1_resource_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a resource subscription.</td>
</tr>
<tr>
    <td><a href="#list_notifications_v1_resource_subscriptions_by_filter"><CopyableCode code="list_notifications_v1_resource_subscriptions_by_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Make a request to list_by_filter a resource subscription.</td>
</tr>
<tr>
    <td><a href="#create_notifications_v1_resource_subscription"><CopyableCode code="create_notifications_v1_resource_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-notification_type"><code>notification_type</code></a>, <a href="#parameter-integrations"><code>integrations</code></a></td>
    <td></td>
    <td>Make a request to create a resource subscription.</td>
</tr>
<tr>
    <td><a href="#update_notifications_v1_resource_subscription"><CopyableCode code="update_notifications_v1_resource_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a resource subscription.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_notifications_v1_resource_subscription"><CopyableCode code="delete_notifications_v1_resource_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a resource subscription.</td>
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
    <td>The unique identifier for the resource subscription.</td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Confluent Cloud resource definition</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Confluent Cloud resource type</td>
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
    defaultValue="get_notifications_v1_resource_subscription"
    values={[
        { label: 'get_notifications_v1_resource_subscription', value: 'get_notifications_v1_resource_subscription' },
        { label: 'list_notifications_v1_resource_subscriptions_by_filter', value: 'list_notifications_v1_resource_subscriptions_by_filter' }
    ]}
>
<TabItem value="get_notifications_v1_resource_subscription">

Make a request to read a resource subscription.

```sql
SELECT
id,
api_version,
current_state,
integrations,
kind,
metadata,
notification_type,
resource,
resource_type
FROM confluent.notifications.resource_subscriptions
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_notifications_v1_resource_subscriptions_by_filter">

Make a request to list_by_filter a resource subscription.

```sql
SELECT
id,
api_version,
current_state,
integrations,
kind,
metadata,
notification_type,
resource,
resource_type
FROM confluent.notifications.resource_subscriptions
WHERE resource = '{{ resource }}' -- required
AND resource_type = '{{ resource_type }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notifications_v1_resource_subscription"
    values={[
        { label: 'create_notifications_v1_resource_subscription', value: 'create_notifications_v1_resource_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notifications_v1_resource_subscription">

Make a request to create a resource subscription.

```sql
INSERT INTO confluent.notifications.resource_subscriptions (
resource,
resource_type,
current_state,
notification_type,
integrations
)
SELECT 
'{{ resource }}' /* required */,
'{{ resource_type }}' /* required */,
'{{ current_state }}',
'{{ notification_type }}' /* required */,
'{{ integrations }}' /* required */
RETURNING
id,
api_version,
current_state,
integrations,
kind,
metadata,
notification_type,
resource,
resource_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_subscriptions
  props:
    - name: resource
      value: "{{ resource }}"
      description: |
        Denotes the Confluent Cloud resource definition.
    - name: resource_type
      value: "{{ resource_type }}"
      description: |
        Denotes the Confluent Cloud resource type.
    - name: current_state
      value: "{{ current_state }}"
      description: |
        Denotes the state of the resource preference. When the resource preference is ENABLED, the user will receive
        notifications for the Confluent Cloud resource. If the resource preference is DISABLED, the user will not
        receive any notification for the resource.
        Note that, you will still receive notifications for \`REQUIRED\` notification type even when it is DISABLED.
    - name: notification_type
      description: |
        The type of notification to subscribe to.
      value:
        id: "{{ id }}"
        related: "{{ related }}"
        resource_name: "{{ resource_name }}"
    - name: integrations
      description: |
        Integrations to which notifications are to be sent.
      value:
        - id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notifications_v1_resource_subscription"
    values={[
        { label: 'update_notifications_v1_resource_subscription', value: 'update_notifications_v1_resource_subscription' }
    ]}
>
<TabItem value="update_notifications_v1_resource_subscription">

Make a request to update a resource subscription.<br /><br />

```sql
UPDATE confluent.notifications.resource_subscriptions
SET 
resource = '{{ resource }}',
resource_type = '{{ resource_type }}',
current_state = '{{ current_state }}',
notification_type = '{{ notification_type }}',
integrations = '{{ integrations }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
api_version,
current_state,
integrations,
kind,
metadata,
notification_type,
resource,
resource_type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notifications_v1_resource_subscription"
    values={[
        { label: 'delete_notifications_v1_resource_subscription', value: 'delete_notifications_v1_resource_subscription' }
    ]}
>
<TabItem value="delete_notifications_v1_resource_subscription">

Make a request to delete a resource subscription.

```sql
DELETE FROM confluent.notifications.resource_subscriptions
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
