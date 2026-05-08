--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - endpoints
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.endpoints.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_endpoint_v1_endpoints"
    values={[
        { label: 'list_endpoint_v1_endpoints', value: 'list_endpoint_v1_endpoints' }
    ]}
>
<TabItem value="list_endpoint_v1_endpoints">

Endpoint.

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
    <td><CopyableCode code="access_point" /></td>
    <td><code>object</code></td>
    <td>The access_point to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (endpoint/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_type" /></td>
    <td><code>string</code></td>
    <td>The network connection type. (example: PRIVATE_LINK)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint URL or address. (example: https://lkc-abc123-ap12345.us-west-2.aws.accesspoint.glb.confluent.cloud:443)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The endpoint type enum values: * `REST` - REST API endpoint for HTTP/HTTPS access, used by Kafka/Flink/Schema Registry services. * `BOOTSTRAP` - Kafka native protocol bootstrap servers for direct client connections, used by Kafka only. * `LANGUAGE_SERVICE` - Flink language service endpoint for SQL/Table API, used by Flink only. </td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>object</code></td>
    <td>The gateway to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="is_private" /></td>
    <td><code>boolean</code></td>
    <td>Whether the endpoint is private (true) or public (false).</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Endpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider region in which the resource is located. (example: us-west-2)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource associated with the endpoint. The resource can be one of Kafka Cluster ID (example: lkc-12345), or Schema Registry Cluster ID (example: lsrc-12345). May be null or omitted if not associated with a resource. </td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The Confluent Cloud service. (example: KAFKA)</td>
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
    <td><a href="#list_endpoint_v1_endpoints"><CopyableCode code="list_endpoint_v1_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service"><code>service</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-is_private"><code>is_private</code></a>, <a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all endpoints.</td>
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
    <td>Filter the results by exact match for environment. (example: env-00000)</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for service. (example: KAFKA)</td>
</tr>
<tr id="parameter-cloud">
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for cloud. (example: AWS)</td>
</tr>
<tr id="parameter-is_private">
    <td><CopyableCode code="is_private" /></td>
    <td><code>boolean</code></td>
    <td>Filter the results by whether the endpoint is private (true) or public (false). If not specified, returns both private and public endpoints.  (example: true)</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for region. (example: us-west-2)</td>
</tr>
<tr id="parameter-resource">
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for resource. (example: lkc-abc123)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_endpoint_v1_endpoints"
    values={[
        { label: 'list_endpoint_v1_endpoints', value: 'list_endpoint_v1_endpoints' }
    ]}
>
<TabItem value="list_endpoint_v1_endpoints">

Retrieve a sorted, filtered, paginated list of all endpoints.

```sql
SELECT
id,
access_point,
api_version,
cloud,
connection_type,
endpoint,
endpoint_type,
environment,
gateway,
is_private,
kind,
metadata,
region,
resource,
service
FROM confluent.endpoints.endpoints
WHERE service = '{{ service }}' -- required
AND environment = '{{ environment }}' -- required
AND cloud = '{{ cloud }}'
AND region = '{{ region }}'
AND is_private = '{{ is_private }}'
AND resource = '{{ resource }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
