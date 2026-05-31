--- 
title: kafka_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - kafka_clusters
  - usm
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

Creates, updates, deletes, gets or lists a <code>kafka_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kafka_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.usm.kafka_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usm_v1_kafka_cluster"
    values={[
        { label: 'get_usm_v1_kafka_cluster', value: 'get_usm_v1_kafka_cluster' },
        { label: 'list_usm_v1_kafka_clusters', value: 'list_usm_v1_kafka_clusters' }
    ]}
>
<TabItem value="get_usm_v1_kafka_cluster">

Kafka Cluster.

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
    <td><CopyableCode code="confluent_platform_kafka_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Kafka cluster within the Confluent Platform environment. (example: 4k0R9d1GTS5tI9f4Y2xZ0Q)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the Confluent Platform Kafka cluster. (example: My-Prod-CP-Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (usm/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider where the metadata for the Kafka Cluster should be stored. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (KafkaCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The home region of the Confluent Platform Kafka cluster where the metadata should be stored. (example: us-east-1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_usm_v1_kafka_clusters">

Kafka Cluster.

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
    <td><CopyableCode code="confluent_platform_kafka_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Kafka cluster within the Confluent Platform environment. (example: 4k0R9d1GTS5tI9f4Y2xZ0Q)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the Confluent Platform Kafka cluster. (example: My-Prod-CP-Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (usm/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider where the metadata for the Kafka Cluster should be stored. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (KafkaCluster)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The home region of the Confluent Platform Kafka cluster where the metadata should be stored. (example: us-east-1)</td>
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
    <td><a href="#get_usm_v1_kafka_cluster"><CopyableCode code="get_usm_v1_kafka_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a kafka cluster.</td>
</tr>
<tr>
    <td><a href="#list_usm_v1_kafka_clusters"><CopyableCode code="list_usm_v1_kafka_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all kafka clusters.</td>
</tr>
<tr>
    <td><a href="#create_usm_v1_kafka_cluster"><CopyableCode code="create_usm_v1_kafka_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-confluent_platform_kafka_cluster_id"><code>confluent_platform_kafka_cluster_id</code></a>, <a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td>Make a request to create a kafka cluster.</td>
</tr>
<tr>
    <td><a href="#delete_usm_v1_kafka_cluster"><CopyableCode code="delete_usm_v1_kafka_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a kafka cluster.</td>
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
    <td>Scope the operation to the given environment. (example: env-00000)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the kafka cluster.</td>
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
    defaultValue="get_usm_v1_kafka_cluster"
    values={[
        { label: 'get_usm_v1_kafka_cluster', value: 'get_usm_v1_kafka_cluster' },
        { label: 'list_usm_v1_kafka_clusters', value: 'list_usm_v1_kafka_clusters' }
    ]}
>
<TabItem value="get_usm_v1_kafka_cluster">

Make a request to read a kafka cluster.

```sql
SELECT
id,
confluent_platform_kafka_cluster_id,
display_name,
api_version,
cloud,
environment,
kind,
region
FROM confluent.usm.kafka_clusters
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_usm_v1_kafka_clusters">

Retrieve a sorted, filtered, paginated list of all kafka clusters.

```sql
SELECT
id,
confluent_platform_kafka_cluster_id,
display_name,
api_version,
cloud,
environment,
kind,
region
FROM confluent.usm.kafka_clusters
WHERE environment = '{{ environment }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_usm_v1_kafka_cluster"
    values={[
        { label: 'create_usm_v1_kafka_cluster', value: 'create_usm_v1_kafka_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_usm_v1_kafka_cluster">

Make a request to create a kafka cluster.

```sql
INSERT INTO confluent.usm.kafka_clusters (
display_name,
confluent_platform_kafka_cluster_id,
cloud,
region,
environment
)
SELECT 
'{{ display_name }}' /* required */,
'{{ confluent_platform_kafka_cluster_id }}' /* required */,
'{{ cloud }}' /* required */,
'{{ region }}' /* required */,
'{{ environment }}' /* required */
RETURNING
id,
confluent_platform_kafka_cluster_id,
display_name,
api_version,
cloud,
environment,
kind,
region
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kafka_clusters
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        A human-readable name for the Confluent Platform Kafka cluster.
    - name: confluent_platform_kafka_cluster_id
      value: "{{ confluent_platform_kafka_cluster_id }}"
      description: |
        The unique identifier of the Kafka cluster within the Confluent Platform environment.
    - name: cloud
      value: "{{ cloud }}"
      description: |
        The cloud service provider where the metadata for the Kafka Cluster should be stored.
    - name: region
      value: "{{ region }}"
      description: |
        The home region of the Confluent Platform Kafka cluster where the metadata should be stored.
    - name: environment
      description: |
        The environment to which this belongs.
      value:
        id: "{{ id }}"
        environment: "{{ environment }}"
        related: "{{ related }}"
        resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_usm_v1_kafka_cluster"
    values={[
        { label: 'delete_usm_v1_kafka_cluster', value: 'delete_usm_v1_kafka_cluster' }
    ]}
>
<TabItem value="delete_usm_v1_kafka_cluster">

Make a request to delete a kafka cluster.

```sql
DELETE FROM confluent.usm.kafka_clusters
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
