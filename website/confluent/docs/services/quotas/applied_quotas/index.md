--- 
title: applied_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - applied_quotas
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

Creates, updates, deletes, gets or lists an <code>applied_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applied_quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.quotas.applied_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_quota_v1_applied_quota"
    values={[
        { label: 'get_service_quota_v1_applied_quota', value: 'get_service_quota_v1_applied_quota' },
        { label: 'list_service_quota_v1_applied_quotas', value: 'list_service_quota_v1_applied_quotas' }
    ]}
>
<TabItem value="get_service_quota_v1_applied_quota">

Applied Quota.

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
    <td>A human-readable name for the quota type name. (example: Kafka Cluster Per Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (service-quota/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="applied_limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>The latest applied service quota value, taking into account any limit adjustments. </td>
</tr>
<tr>
    <td><CopyableCode code="default_limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>The default service quota value. </td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment ID the quota is associated with. </td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster" /></td>
    <td><code>object</code></td>
    <td>The kafka cluster ID the quota is associated with. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (AppliedQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>object</code></td>
    <td>The network ID the quota is associated with. </td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>A unique organization id to associate a specific organization to this quota.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The applied scope that this quota belongs to. (example: ORGANIZATION)</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>integer (int32)</code></td>
    <td>Show the quota usage value if the quota usage is available for this quota. </td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The user associated with this object.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_quota_v1_applied_quotas">

Applied Quota.

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
    <td>A human-readable name for the quota type name. (example: Kafka Cluster Per Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (service-quota/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="applied_limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>The latest applied service quota value, taking into account any limit adjustments. </td>
</tr>
<tr>
    <td><CopyableCode code="default_limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>The default service quota value. </td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment ID the quota is associated with. </td>
</tr>
<tr>
    <td><CopyableCode code="kafka_cluster" /></td>
    <td><code>object</code></td>
    <td>The kafka cluster ID the quota is associated with. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (AppliedQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>object</code></td>
    <td>The network ID the quota is associated with. </td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>A unique organization id to associate a specific organization to this quota.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The applied scope that this quota belongs to. (example: ORGANIZATION)</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>integer (int32)</code></td>
    <td>Show the quota usage value if the quota usage is available for this quota. </td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The user associated with this object.</td>
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
    <td><a href="#get_service_quota_v1_applied_quota"><CopyableCode code="get_service_quota_v1_applied_quota" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-network"><code>network</code></a>, <a href="#parameter-kafka_cluster"><code>kafka_cluster</code></a></td>
    <td>Make a request to read an applied quota.</td>
</tr>
<tr>
    <td><a href="#list_service_quota_v1_applied_quotas"><CopyableCode code="list_service_quota_v1_applied_quotas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-network"><code>network</code></a>, <a href="#parameter-kafka_cluster"><code>kafka_cluster</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all applied quotas.<br /><br />Shows all quotas for a given scope.<br /></td>
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
    <td>The unique identifier for the applied quota.</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The applied scope the quota belongs to.  (example: ORGANIZATION)</td>
</tr>
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment ID the quota is associated with.  (example: env-00000)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The id (quota code) that this quota belongs to.  (example: iam.max_environments.per_org)</td>
</tr>
<tr id="parameter-kafka_cluster">
    <td><CopyableCode code="kafka_cluster" /></td>
    <td><code>string</code></td>
    <td>The kafka cluster ID the quota is associated with.  (example: lkc-00000)</td>
</tr>
<tr id="parameter-network">
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The network ID the quota is associated with.  (example: n-12034)</td>
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
    defaultValue="get_service_quota_v1_applied_quota"
    values={[
        { label: 'get_service_quota_v1_applied_quota', value: 'get_service_quota_v1_applied_quota' },
        { label: 'list_service_quota_v1_applied_quotas', value: 'list_service_quota_v1_applied_quotas' }
    ]}
>
<TabItem value="get_service_quota_v1_applied_quota">

Make a request to read an applied quota.

```sql
SELECT
id,
display_name,
api_version,
applied_limit,
default_limit,
environment,
kafka_cluster,
kind,
metadata,
network,
organization,
scope,
usage,
user
FROM confluent.quotas.applied_quotas
WHERE id = '{{ id }}' -- required
AND environment = '{{ environment }}'
AND network = '{{ network }}'
AND kafka_cluster = '{{ kafka_cluster }}'
;
```
</TabItem>
<TabItem value="list_service_quota_v1_applied_quotas">

Retrieve a sorted, filtered, paginated list of all applied quotas.<br /><br />Shows all quotas for a given scope.<br />

```sql
SELECT
id,
display_name,
api_version,
applied_limit,
default_limit,
environment,
kafka_cluster,
kind,
metadata,
network,
organization,
scope,
usage,
user
FROM confluent.quotas.applied_quotas
WHERE scope = '{{ scope }}' -- required
AND environment = '{{ environment }}'
AND network = '{{ network }}'
AND kafka_cluster = '{{ kafka_cluster }}'
AND id = '{{ id }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
