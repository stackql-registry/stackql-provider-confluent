--- 
title: shared_resources_network_config
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_resources_network_config
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

Creates, updates, deletes, gets or lists a <code>shared_resources_network_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_resources_network_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.stream_sharing.shared_resources_network_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="network_cdx_v1_consumer_shared_resource"
    values={[
        { label: 'network_cdx_v1_consumer_shared_resource', value: 'network_cdx_v1_consumer_shared_resource' }
    ]}
>
<TabItem value="network_cdx_v1_consumer_shared_resource">

The network information of the shared resource

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
    <td>APIVersion defines the schema version of this representation of a resource. (cdx/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>object</code></td>
    <td>The cloud-specific network details. These will be populated when the network reaches the READY state.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_domain" /></td>
    <td><code>string</code></td>
    <td>The root DNS domain for the network if applicable. (example: 00000.us-east-1.aws.glb.confluent.cloud)</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_bootstrap_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The kafka cluster bootstrap url (example: SASL://pkc-xxxxx.us-west-2.aws.confluent.cloud:9092)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Network)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="zonal_subdomains" /></td>
    <td><code>object</code></td>
    <td>The DNS subdomain for each zone. Present on networks that support PrivateLink. Keys are zones and values are DNS domains. </td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>The 3 availability zones for this network. They can optionally be specified for AWS networks used with PrivateLink. Otherwise, they are automatically chosen by Confluent Cloud.  On AWS, zones are AWS [AZ IDs](https://docs.aws.amazon.com/ram/latest/userguide/working-with-az-ids.html)  (e.g. use1-az3)  On GCP, zones are GCP [zones](https://cloud.google.com/compute/docs/regions-zones)  (e.g. us-central1-c).  On Azure, zones are Confluent-chosen names (e.g. 1, 2, 3) since Azure does not  have universal zone identifiers. </td>
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
    <td><a href="#network_cdx_v1_consumer_shared_resource"><CopyableCode code="network_cdx_v1_consumer_shared_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Returns network information of the shared resource</td>
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
    <td>The unique identifier for the consumer shared resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="network_cdx_v1_consumer_shared_resource"
    values={[
        { label: 'network_cdx_v1_consumer_shared_resource', value: 'network_cdx_v1_consumer_shared_resource' }
    ]}
>
<TabItem value="network_cdx_v1_consumer_shared_resource">

Returns network information of the shared resource

```sql
SELECT
id,
api_version,
cloud,
dns_domain,
kafka_bootstrap_url,
kind,
metadata,
zonal_subdomains,
zones
FROM confluent.stream_sharing.shared_resources_network_config
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
</Tabs>
