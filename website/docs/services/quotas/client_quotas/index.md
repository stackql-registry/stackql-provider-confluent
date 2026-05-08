--- 
title: client_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - client_quotas
  - quotas
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

Creates, updates, deletes, gets or lists a <code>client_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.quotas.client_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_quotas_v1_client_quota"
    values={[
        { label: 'get_kafka_quotas_v1_client_quota', value: 'get_kafka_quotas_v1_client_quota' },
        { label: 'list_kafka_quotas_v1_client_quotas', value: 'list_kafka_quotas_v1_client_quotas' }
    ]}
>
<TabItem value="get_kafka_quotas_v1_client_quota">

Client Quota.

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
    <td>APIVersion defines the schema version of this representation of a resource. (kafka-quotas/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ClientQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Client Quota</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_quotas_v1_client_quotas">

Client Quota.

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
    <td>APIVersion defines the schema version of this representation of a resource. (kafka-quotas/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (ClientQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Client Quota</td>
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
    <td><a href="#get_kafka_quotas_v1_client_quota"><CopyableCode code="get_kafka_quotas_v1_client_quota" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a client quota.</td>
</tr>
<tr>
    <td><a href="#list_kafka_quotas_v1_client_quotas"><CopyableCode code="list_kafka_quotas_v1_client_quotas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-spec.cluster"><code>spec.cluster</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all client quotas.</td>
</tr>
<tr>
    <td><a href="#create_kafka_quotas_v1_client_quota"><CopyableCode code="create_kafka_quotas_v1_client_quota" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Make a request to create a client quota.</td>
</tr>
<tr>
    <td><a href="#update_kafka_quotas_v1_client_quota"><CopyableCode code="update_kafka_quotas_v1_client_quota" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a client quota.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_kafka_quotas_v1_client_quota"><CopyableCode code="delete_kafka_quotas_v1_client_quota" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a client quota.</td>
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
    <td>Filter the results by exact match for environment. (example: env-xxxxx)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the client quota.</td>
</tr>
<tr id="parameter-spec.cluster">
    <td><CopyableCode code="spec.cluster" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for spec.cluster. (example: lkc-xxxxx)</td>
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
    defaultValue="get_kafka_quotas_v1_client_quota"
    values={[
        { label: 'get_kafka_quotas_v1_client_quota', value: 'get_kafka_quotas_v1_client_quota' },
        { label: 'list_kafka_quotas_v1_client_quotas', value: 'list_kafka_quotas_v1_client_quotas' }
    ]}
>
<TabItem value="get_kafka_quotas_v1_client_quota">

Make a request to read a client quota.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.quotas.client_quotas
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_kafka_quotas_v1_client_quotas">

Retrieve a sorted, filtered, paginated list of all client quotas.

```sql
SELECT
id,
api_version,
kind,
metadata,
spec
FROM confluent.quotas.client_quotas
WHERE spec.cluster = '{{ spec.cluster }}' -- required
AND environment = '{{ environment }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kafka_quotas_v1_client_quota"
    values={[
        { label: 'create_kafka_quotas_v1_client_quota', value: 'create_kafka_quotas_v1_client_quota' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kafka_quotas_v1_client_quota">

Make a request to create a client quota.

```sql
INSERT INTO confluent.quotas.client_quotas (

)
SELECT 

RETURNING
id,
api_version,
kind,
metadata,
spec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: client_quotas
  props:
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kafka_quotas_v1_client_quota"
    values={[
        { label: 'update_kafka_quotas_v1_client_quota', value: 'update_kafka_quotas_v1_client_quota' }
    ]}
>
<TabItem value="update_kafka_quotas_v1_client_quota">

Make a request to update a client quota.<br /><br />

```sql
UPDATE confluent.quotas.client_quotas
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
spec;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_quotas_v1_client_quota"
    values={[
        { label: 'delete_kafka_quotas_v1_client_quota', value: 'delete_kafka_quotas_v1_client_quota' }
    ]}
>
<TabItem value="delete_kafka_quotas_v1_client_quota">

Make a request to delete a client quota.

```sql
DELETE FROM confluent.quotas.client_quotas
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
