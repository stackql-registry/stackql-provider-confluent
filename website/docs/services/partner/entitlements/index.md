--- 
title: entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlements
  - partner
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

Creates, updates, deletes, gets or lists an <code>entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entitlements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.partner.entitlements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_partner_v2_entitlement"
    values={[
        { label: 'get_partner_v2_entitlement', value: 'get_partner_v2_entitlement' },
        { label: 'list_partner_v2_entitlements', value: 'list_partner_v2_entitlements' }
    ]}
>
<TabItem value="get_partner_v2_entitlement">

Entitlement.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the entitlement (example: Acme Prod Entitlement)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The unique external ID of the entitlement (this should be unique to customer) (example: 1111-2222-3333-4444)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_id" /></td>
    <td><code>string</code></td>
    <td>The plan ID the entitlement (example: confluent-cloud-payg-prod)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The product ID of the entitlement (example: confluent-cloud-kafka-service-azure)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the entitlement (example: 1111-2222-3333-4444)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_reporting_id" /></td>
    <td><code>string</code></td>
    <td>The usage reporting ID of the entitlement (if usage reporting uses a different ID, otherwise, same as external_id)  (example: 1111-2222-3333-4444)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (partner/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Entitlement)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>The organization associated with this object.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_partner_v2_entitlements">

Entitlement.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the entitlement (example: Acme Prod Entitlement)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The unique external ID of the entitlement (this should be unique to customer) (example: 1111-2222-3333-4444)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_id" /></td>
    <td><code>string</code></td>
    <td>The plan ID the entitlement (example: confluent-cloud-payg-prod)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The product ID of the entitlement (example: confluent-cloud-kafka-service-azure)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the entitlement (example: 1111-2222-3333-4444)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_reporting_id" /></td>
    <td><code>string</code></td>
    <td>The usage reporting ID of the entitlement (if usage reporting uses a different ID, otherwise, same as external_id)  (example: 1111-2222-3333-4444)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (partner/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Entitlement)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>The organization associated with this object.</td>
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
    <td><a href="#get_partner_v2_entitlement"><CopyableCode code="get_partner_v2_entitlement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-organization.id"><code>organization.id</code></a></td>
    <td> Make a request to read an entitlement.</td>
</tr>
<tr>
    <td><a href="#list_partner_v2_entitlements"><CopyableCode code="list_partner_v2_entitlements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-organization.id"><code>organization.id</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td> Retrieve a sorted, filtered, paginated list of all entitlements.</td>
</tr>
<tr>
    <td><a href="#create_partner_v2_entitlement"><CopyableCode code="create_partner_v2_entitlement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-external_id"><code>external_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-plan_id"><code>plan_id</code></a>, <a href="#parameter-product_id"><code>product_id</code></a></td>
    <td></td>
    <td> Make a request to create an entitlement.</td>
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
    <td>The unique identifier for the entitlement.</td>
</tr>
<tr id="parameter-organization.id">
    <td><CopyableCode code="organization.id" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for organization.id. (example: b3a17773-05cc-4431-9560-433fb4613da8)</td>
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
    defaultValue="get_partner_v2_entitlement"
    values={[
        { label: 'get_partner_v2_entitlement', value: 'get_partner_v2_entitlement' },
        { label: 'list_partner_v2_entitlements', value: 'list_partner_v2_entitlements' }
    ]}
>
<TabItem value="get_partner_v2_entitlement">

 Make a request to read an entitlement.

```sql
SELECT
id,
name,
external_id,
plan_id,
product_id,
resource_id,
usage_reporting_id,
api_version,
kind,
metadata,
organization
FROM confluent.partner.entitlements
WHERE id = '{{ id }}' -- required
AND organization.id = '{{ organization.id }}'
;
```
</TabItem>
<TabItem value="list_partner_v2_entitlements">

 Retrieve a sorted, filtered, paginated list of all entitlements.

```sql
SELECT
id,
name,
external_id,
plan_id,
product_id,
resource_id,
usage_reporting_id,
api_version,
kind,
metadata,
organization
FROM confluent.partner.entitlements
WHERE organization.id = '{{ organization.id }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partner_v2_entitlement"
    values={[
        { label: 'create_partner_v2_entitlement', value: 'create_partner_v2_entitlement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partner_v2_entitlement">

 Make a request to create an entitlement.

```sql
INSERT INTO confluent.partner.entitlements (
external_id,
name,
plan_id,
product_id,
usage_reporting_id,
resource_id,
organization
)
SELECT 
'{{ external_id }}' /* required */,
'{{ name }}' /* required */,
'{{ plan_id }}' /* required */,
'{{ product_id }}' /* required */,
'{{ usage_reporting_id }}',
'{{ resource_id }}',
'{{ organization }}'
RETURNING
id,
name,
external_id,
plan_id,
product_id,
resource_id,
usage_reporting_id,
api_version,
kind,
metadata,
organization
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entitlements
  props:
    - name: external_id
      value: "{{ external_id }}"
      description: |
        The unique external ID of the entitlement (this should be unique to customer)
    - name: name
      value: "{{ name }}"
      description: |
        The name of the entitlement
    - name: plan_id
      value: "{{ plan_id }}"
      description: |
        The plan ID the entitlement
    - name: product_id
      value: "{{ product_id }}"
      description: |
        The product ID of the entitlement
    - name: usage_reporting_id
      value: "{{ usage_reporting_id }}"
      description: |
        The usage reporting ID of the entitlement (if usage reporting uses
        a different ID, otherwise, same as external_id)
    - name: resource_id
      value: "{{ resource_id }}"
      description: |
        The resource ID of the entitlement
    - name: organization
      description: |
        The organization associated with this object.
      value:
        id: "{{ id }}"
        environment: "{{ environment }}"
        related: "{{ related }}"
        resource_name: "{{ resource_name }}"
        api_version: "{{ api_version }}"
        kind: "{{ kind }}"
`}</CodeBlock>

</TabItem>
</Tabs>
