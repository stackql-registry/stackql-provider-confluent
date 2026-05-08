--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - org
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.org.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_v2_environment"
    values={[
        { label: 'get_org_v2_environment', value: 'get_org_v2_environment' },
        { label: 'list_org_v2_environments', value: 'list_org_v2_environments' }
    ]}
>
<TabItem value="get_org_v2_environment">

Environment.

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
    <td>A human-readable name for the Environment (example: prod-finance01)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (org/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_governance_config" /></td>
    <td><code>object</code></td>
    <td>Stream Governance configurations for the environment</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_v2_environments">

Environment.

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
    <td>A human-readable name for the Environment (example: prod-finance01)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (org/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_governance_config" /></td>
    <td><code>object</code></td>
    <td>Stream Governance configurations for the environment</td>
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
    <td><a href="#get_org_v2_environment"><CopyableCode code="get_org_v2_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an environment.</td>
</tr>
<tr>
    <td><a href="#list_org_v2_environments"><CopyableCode code="list_org_v2_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all environments.</td>
</tr>
<tr>
    <td><a href="#create_org_v2_environment"><CopyableCode code="create_org_v2_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a></td>
    <td></td>
    <td>Make a request to create an environment.</td>
</tr>
<tr>
    <td><a href="#update_org_v2_environment"><CopyableCode code="update_org_v2_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update an environment.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_org_v2_environment"><CopyableCode code="delete_org_v2_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an environment.<br /><br />If successful, this request will also recursively delete all of the environment's associated resources,<br />including all Kafka clusters, connectors, etc.<br /></td>
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
    <td>The unique identifier for the environment.</td>
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
    defaultValue="get_org_v2_environment"
    values={[
        { label: 'get_org_v2_environment', value: 'get_org_v2_environment' },
        { label: 'list_org_v2_environments', value: 'list_org_v2_environments' }
    ]}
>
<TabItem value="get_org_v2_environment">

Make a request to read an environment.

```sql
SELECT
id,
display_name,
api_version,
kind,
metadata,
stream_governance_config
FROM confluent.org.environments
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_org_v2_environments">

Retrieve a sorted, filtered, paginated list of all environments.

```sql
SELECT
id,
display_name,
api_version,
kind,
metadata,
stream_governance_config
FROM confluent.org.environments
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_org_v2_environment"
    values={[
        { label: 'create_org_v2_environment', value: 'create_org_v2_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_org_v2_environment">

Make a request to create an environment.

```sql
INSERT INTO confluent.org.environments (
display_name,
stream_governance_config
)
SELECT 
'{{ display_name }}' /* required */,
'{{ stream_governance_config }}'
RETURNING
id,
display_name,
api_version,
kind,
metadata,
stream_governance_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        A human-readable name for the Environment
    - name: stream_governance_config
      description: |
        Stream Governance configurations for the environment
      value:
        package: "{{ package }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_v2_environment"
    values={[
        { label: 'update_org_v2_environment', value: 'update_org_v2_environment' }
    ]}
>
<TabItem value="update_org_v2_environment">

Make a request to update an environment.<br /><br />

```sql
UPDATE confluent.org.environments
SET 
display_name = '{{ display_name }}',
stream_governance_config = '{{ stream_governance_config }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
kind,
metadata,
stream_governance_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_org_v2_environment"
    values={[
        { label: 'delete_org_v2_environment', value: 'delete_org_v2_environment' }
    ]}
>
<TabItem value="delete_org_v2_environment">

Make a request to delete an environment.<br /><br />If successful, this request will also recursively delete all of the environment's associated resources,<br />including all Kafka clusters, connectors, etc.<br />

```sql
DELETE FROM confluent.org.environments
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
