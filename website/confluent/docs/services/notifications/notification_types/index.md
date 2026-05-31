--- 
title: notification_types
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_types
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

Creates, updates, deletes, gets or lists a <code>notification_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.notifications.notification_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notifications_v1_notification_type"
    values={[
        { label: 'get_notifications_v1_notification_type', value: 'get_notifications_v1_notification_type' },
        { label: 'list_notifications_v1_notification_types', value: 'list_notifications_v1_notification_types' }
    ]}
>
<TabItem value="get_notifications_v1_notification_type">

Notification Type.

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
    <td>Human readable display name of the notification type  (example: Cluster Shrink)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (notifications/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Represents the group with which the notification is associated. Notifications are grouped under certain categories for better organization. - BILLING_LICENSING: All billing, payments or licensing related notifications are grouped here. - SECURITY: All Confluent Cloud and Platform security related notifications are grouped here. - SERVICE: All Confluent services (eg. Kafka, Schema Registry, Connect etc.) related notifications are   grouped here. - ACCOUNT: All Confluent account related notifications are grouped here. For example: Billing, payment or license related notifications are grouped in BILLING_LICENSING category.  (example: BILLING_LICENSING)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Human readable description of the notification type  (example: Cluster shrink operation is completed)</td>
</tr>
<tr>
    <td><CopyableCode code="is_included_in_plan" /></td>
    <td><code>boolean</code></td>
    <td>Whether this notification is available to subscribe or not as per the user's current billing plan. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (NotificationType)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Severity indicates the impact of this notification. - CRITICAL: a high impact notification which needs immediate attention. - WARN: a warning notification which can be addressed now or later. - INFO: an informational notification.  (example: INFO)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_priority" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the notification is auto-subscribed and if the user can opt-out. - REQUIRED: the user is auto-subscribed to this notification and can't opt-out. - RECOMMENDED: the user is auto-subscribed to this notification and can opt-out. - OPTIONAL: the user is not auto-subscribed to this notification but can explicitly subscribe to it.  (example: REQUIRED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notifications_v1_notification_types">

List of Notification Type.

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
    <td>Human readable display name of the notification type  (example: Cluster Shrink)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (notifications/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Represents the group with which the notification is associated. Notifications are grouped under certain categories for better organization. - BILLING_LICENSING: All billing, payments or licensing related notifications are grouped here. - SECURITY: All Confluent Cloud and Platform security related notifications are grouped here. - SERVICE: All Confluent services (eg. Kafka, Schema Registry, Connect etc.) related notifications are   grouped here. - ACCOUNT: All Confluent account related notifications are grouped here. For example: Billing, payment or license related notifications are grouped in BILLING_LICENSING category.  (example: BILLING_LICENSING)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Human readable description of the notification type  (example: Cluster shrink operation is completed)</td>
</tr>
<tr>
    <td><CopyableCode code="is_included_in_plan" /></td>
    <td><code>boolean</code></td>
    <td>Whether this notification is available to subscribe or not as per the user's current billing plan. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (NotificationType)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>Severity indicates the impact of this notification. - CRITICAL: a high impact notification which needs immediate attention. - WARN: a warning notification which can be addressed now or later. - INFO: an informational notification.  (example: INFO)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_priority" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the notification is auto-subscribed and if the user can opt-out. - REQUIRED: the user is auto-subscribed to this notification and can't opt-out. - RECOMMENDED: the user is auto-subscribed to this notification and can opt-out. - OPTIONAL: the user is not auto-subscribed to this notification but can explicitly subscribe to it.  (example: REQUIRED)</td>
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
    <td><a href="#get_notifications_v1_notification_type"><CopyableCode code="get_notifications_v1_notification_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a notification type.</td>
</tr>
<tr>
    <td><a href="#list_notifications_v1_notification_types"><CopyableCode code="list_notifications_v1_notification_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Make a request to list_by_resource_type a notification type.</td>
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
    <td>The unique identifier for the notification type.</td>
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
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Confluent Cloud resource type</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_notifications_v1_notification_type"
    values={[
        { label: 'get_notifications_v1_notification_type', value: 'get_notifications_v1_notification_type' },
        { label: 'list_notifications_v1_notification_types', value: 'list_notifications_v1_notification_types' }
    ]}
>
<TabItem value="get_notifications_v1_notification_type">

Make a request to read a notification type.

```sql
SELECT
id,
display_name,
api_version,
category,
description,
is_included_in_plan,
kind,
metadata,
severity,
subscription_priority
FROM confluent.notifications.notification_types
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_notifications_v1_notification_types">

Make a request to list_by_resource_type a notification type.

```sql
SELECT
id,
display_name,
api_version,
category,
description,
is_included_in_plan,
kind,
metadata,
severity,
subscription_priority
FROM confluent.notifications.notification_types
WHERE resource_type = '{{ resource_type }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
