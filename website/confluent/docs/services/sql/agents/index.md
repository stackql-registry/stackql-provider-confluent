--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
  - sql
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_agent"
    values={[
        { label: 'get_sqlv1_agent', value: 'get_sqlv1_agent' },
        { label: 'list_sqlv1_agents', value: 'list_sqlv1_agents' }
    ]}
>
<TabItem value="get_sqlv1_agent">

The requested Agent.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The user-provided name of the agent, unique within this environment. (pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>, example: chat-listener-agent)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Agent)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specifications of the Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Agent.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sqlv1_agents">

A list of Agents.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The user-provided name of the agent, unique within this environment. (pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>, example: chat-listener-agent)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Agent)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specifications of the Agent.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Agent.</td>
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
    <td><a href="#get_sqlv1_agent"><CopyableCode code="get_sqlv1_agent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-agent_name"><code>agent_name</code></a></td>
    <td></td>
    <td>Retrieve a specific Agent by name.<br /></td>
</tr>
<tr>
    <td><a href="#list_sqlv1_agents"><CopyableCode code="list_sqlv1_agents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted and paginated list of all agents.<br /></td>
</tr>
<tr>
    <td><a href="#create_sqlv1_agent"><CopyableCode code="create_sqlv1_agent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-api_version"><code>api_version</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-metadata"><code>metadata</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to create an Agent.<br /></td>
</tr>
<tr>
    <td><a href="#update_sqlv1_agent"><CopyableCode code="update_sqlv1_agent" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-agent_name"><code>agent_name</code></a>, <a href="#parameter-api_version"><code>api_version</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-metadata"><code>metadata</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update an Agent's mutable fields.<br />Mutable fields include: `description`, `model`, `prompt`, and `properties`.<br /></td>
</tr>
<tr>
    <td><a href="#delete_sqlv1_agent"><CopyableCode code="delete_sqlv1_agent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-agent_name"><code>agent_name</code></a></td>
    <td></td>
    <td>Delete a specific Agent by name.<br /></td>
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
<tr id="parameter-agent_name">
    <td><CopyableCode code="agent_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Agent</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr id="parameter-kafka_cluster_id">
    <td><CopyableCode code="kafka_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the database.</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int32)</code></td>
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
    defaultValue="get_sqlv1_agent"
    values={[
        { label: 'get_sqlv1_agent', value: 'get_sqlv1_agent' },
        { label: 'list_sqlv1_agents', value: 'list_sqlv1_agents' }
    ]}
>
<TabItem value="get_sqlv1_agent">

Retrieve a specific Agent by name.<br />

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.agents
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' -- required
AND agent_name = '{{ agent_name }}' -- required
;
```
</TabItem>
<TabItem value="list_sqlv1_agents">

Retrieve a sorted and paginated list of all agents.<br />

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.agents
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sqlv1_agent"
    values={[
        { label: 'create_sqlv1_agent', value: 'create_sqlv1_agent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sqlv1_agent">

Make a request to create an Agent.<br />

```sql
INSERT INTO confluent.sql.agents (
name,
spec,
organization_id,
environment_id,
kafka_cluster_id
)
SELECT 
'{{ name }}' /* required */,
'{{ spec }}' /* required */,
'{{ organization_id }}',
'{{ environment_id }}',
'{{ kafka_cluster_id }}'
RETURNING
name,
environment_id,
organization_id,
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
- name: agents
  props:
    - name: organization_id
      value: "{{ organization_id }}"
      description: Required parameter for the agents resource.
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the agents resource.
    - name: kafka_cluster_id
      value: "{{ kafka_cluster_id }}"
      description: Required parameter for the agents resource.
    - name: name
      value: "{{ name }}"
      description: |
        The user-provided name of the agent, unique within this environment.
    - name: spec
      description: |
        The specifications of the Agent.
      value:
        description: "{{ description }}"
        model: "{{ model }}"
        prompt: "{{ prompt }}"
        tools:
          - "{{ tools }}"
        properties: "{{ properties }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_sqlv1_agent"
    values={[
        { label: 'update_sqlv1_agent', value: 'update_sqlv1_agent' }
    ]}
>
<TabItem value="update_sqlv1_agent">

Make a request to update an Agent's mutable fields.<br />Mutable fields include: `description`, `model`, `prompt`, and `properties`.<br />

```sql
REPLACE confluent.sql.agents
SET 
name = '{{ name }}',
spec = '{{ spec }}'
WHERE 
organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' --required
AND agent_name = '{{ agent_name }}' --required
AND name = '{{ name }}' --required
AND spec = '{{ spec }}' --required
RETURNING
name,
environment_id,
organization_id,
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
    defaultValue="delete_sqlv1_agent"
    values={[
        { label: 'delete_sqlv1_agent', value: 'delete_sqlv1_agent' }
    ]}
>
<TabItem value="delete_sqlv1_agent">

Delete a specific Agent by name.<br />

```sql
DELETE FROM confluent.sql.agents
WHERE organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' --required
AND agent_name = '{{ agent_name }}' --required
;
```
</TabItem>
</Tabs>
