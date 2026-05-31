--- 
title: ip_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_addresses
  - networking
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

Creates, updates, deletes, gets or lists an <code>ip_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.networking.ip_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_networking_v1_ip_addresses"
    values={[
        { label: 'list_networking_v1_ip_addresses', value: 'list_networking_v1_ip_addresses' }
    ]}
>
<TabItem value="list_networking_v1_ip_addresses">

IP Address.

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
    <td><CopyableCode code="address_type" /></td>
    <td><code>string</code></td>
    <td>Whether the address is used for egress or ingress. (example: EGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (networking/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider in which the address exists. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_prefix" /></td>
    <td><code>string</code></td>
    <td>The IP Address range. (pattern: <code>^\d+\.\d+\.\d+\.\d+/\d+$</code>, example: 10.200.0.0/28)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IpAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region/location where the IP Address is in use. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>The service types that will use the address.</td>
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
    <td><a href="#list_networking_v1_ip_addresses"><CopyableCode code="list_networking_v1_ip_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-services"><code>services</code></a>, <a href="#parameter-address_type"><code>address_type</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Related guide: [Use Public Egress IP addresses on Confluent Cloud](https://docs.confluent.io/cloud/current/networking/static-egress-ip-addresses.html)<br /><br />Retrieve a sorted, filtered, paginated list of all IP Addresses.</td>
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
<tr id="parameter-address_type">
    <td><CopyableCode code="address_type" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for address_type. Pass multiple times to see results matching any of the values. (example: [INGRESS, EGRESS])</td>
</tr>
<tr id="parameter-cloud">
    <td><CopyableCode code="cloud" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for cloud. Pass multiple times to see results matching any of the values. (example: [GCP, AWS])</td>
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
    <td><code>array</code></td>
    <td>Filter the results by exact match for region. Pass multiple times to see results matching any of the values. (example: [us-central1, us-east-1])</td>
</tr>
<tr id="parameter-services">
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>Filter the results by exact match for services. Pass multiple times to see results matching any of the values. (example: [KAFKA, CONNECT])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_networking_v1_ip_addresses"
    values={[
        { label: 'list_networking_v1_ip_addresses', value: 'list_networking_v1_ip_addresses' }
    ]}
>
<TabItem value="list_networking_v1_ip_addresses">

Related guide: [Use Public Egress IP addresses on Confluent Cloud](https://docs.confluent.io/cloud/current/networking/static-egress-ip-addresses.html)<br /><br />Retrieve a sorted, filtered, paginated list of all IP Addresses.

```sql
SELECT
address_type,
api_version,
cloud,
ip_prefix,
kind,
region,
services
FROM confluent.networking.ip_addresses
WHERE cloud = '{{ cloud }}'
AND region = '{{ region }}'
AND services = '{{ services }}'
AND address_type = '{{ address_type }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
