--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.notifications.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notifications_v1_integration"
    values={[
        { label: 'get_notifications_v1_integration', value: 'get_notifications_v1_integration' },
        { label: 'list_notifications_v1_integrations', value: 'list_notifications_v1_integrations' }
    ]}
>
<TabItem value="get_notifications_v1_integration">

Integration.

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
    <td>A human readable name for the particular integration  (example: Slack integration)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (notifications/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description for the particular integration  (example: A Slack channel integration)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Integration)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Integration-specific details (integration targets) </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notifications_v1_integrations">

Integration.

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
    <td>A human readable name for the particular integration  (example: Slack integration)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (notifications/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human readable description for the particular integration  (example: A Slack channel integration)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Integration)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Integration-specific details (integration targets) </td>
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
    <td><a href="#get_notifications_v1_integration"><CopyableCode code="get_notifications_v1_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an integration.</td>
</tr>
<tr>
    <td><a href="#list_notifications_v1_integrations"><CopyableCode code="list_notifications_v1_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all integrations.</td>
</tr>
<tr>
    <td><a href="#create_notifications_v1_integration"><CopyableCode code="create_notifications_v1_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td></td>
    <td>Make a request to create an integration.</td>
</tr>
<tr>
    <td><a href="#update_notifications_v1_integration"><CopyableCode code="update_notifications_v1_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update an integration.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_notifications_v1_integration"><CopyableCode code="delete_notifications_v1_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an integration.</td>
</tr>
<tr>
    <td><a href="#test_notifications_v1_integration"><CopyableCode code="test_notifications_v1_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td></td>
    <td>Sends a test notification to validate the integration. This is supported only for Webhook, Slack<br />and MsTeams targets<br /></td>
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
    <td>The unique identifier for the integration.</td>
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
    defaultValue="get_notifications_v1_integration"
    values={[
        { label: 'get_notifications_v1_integration', value: 'get_notifications_v1_integration' },
        { label: 'list_notifications_v1_integrations', value: 'list_notifications_v1_integrations' }
    ]}
>
<TabItem value="get_notifications_v1_integration">

Make a request to read an integration.

```sql
SELECT
id,
display_name,
api_version,
description,
kind,
metadata,
target
FROM confluent.notifications.integrations
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_notifications_v1_integrations">

Retrieve a sorted, filtered, paginated list of all integrations.

```sql
SELECT
id,
display_name,
api_version,
description,
kind,
metadata,
target
FROM confluent.notifications.integrations
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notifications_v1_integration"
    values={[
        { label: 'create_notifications_v1_integration', value: 'create_notifications_v1_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notifications_v1_integration">

Make a request to create an integration.

```sql
INSERT INTO confluent.notifications.integrations (
display_name,
description,
target
)
SELECT 
'{{ display_name }}' /* required */,
'{{ description }}',
'{{ target }}' /* required */
RETURNING
id,
display_name,
api_version,
description,
kind,
metadata,
target
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        A human readable name for the particular integration
    - name: description
      value: "{{ description }}"
      description: |
        A human readable description for the particular integration
    - name: target
      description: |
        Integration-specific details (integration targets)
      value:
        kind: "{{ kind }}"
        webhook_url: "{{ webhook_url }}"
        role_name: "{{ role_name }}"
        user:
          id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
        url: "{{ url }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notifications_v1_integration"
    values={[
        { label: 'update_notifications_v1_integration', value: 'update_notifications_v1_integration' }
    ]}
>
<TabItem value="update_notifications_v1_integration">

Make a request to update an integration.<br /><br />

```sql
UPDATE confluent.notifications.integrations
SET 
display_name = '{{ display_name }}',
description = '{{ description }}',
target = '{{ target }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
description,
kind,
metadata,
target;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notifications_v1_integration"
    values={[
        { label: 'delete_notifications_v1_integration', value: 'delete_notifications_v1_integration' }
    ]}
>
<TabItem value="delete_notifications_v1_integration">

Make a request to delete an integration.

```sql
DELETE FROM confluent.notifications.integrations
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test_notifications_v1_integration"
    values={[
        { label: 'test_notifications_v1_integration', value: 'test_notifications_v1_integration' }
    ]}
>
<TabItem value="test_notifications_v1_integration">

Sends a test notification to validate the integration. This is supported only for Webhook, Slack<br />and MsTeams targets<br />

```sql
EXEC confluent.notifications.integrations.test_notifications_v1_integration 
@@json=
'{
"display_name": "{{ display_name }}", 
"description": "{{ description }}", 
"target": "{{ target }}"
}'
;
```
</TabItem>
</Tabs>
