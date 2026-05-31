--- 
title: costs
hide_title: false
hide_table_of_contents: false
keywords:
  - costs
  - billing
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

Creates, updates, deletes, gets or lists a <code>costs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="costs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.billing.costs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_billing_v1_costs"
    values={[
        { label: 'list_billing_v1_costs', value: 'list_billing_v1_costs' }
    ]}
>
<TabItem value="list_billing_v1_costs">

Cost.

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
    <td><CopyableCode code="amount" /></td>
    <td><code>number (double)</code></td>
    <td>Final amount after deducting discounts.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (billing/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Additional details about promotional offers/credits. (example: KAFKA101)</td>
</tr>
<tr>
    <td><CopyableCode code="discount_amount" /></td>
    <td><code>number (double)</code></td>
    <td>Amount discounted from the original amount in dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date of time period (exclusive) to retrieve billing costs. It is represented in RFC3339 format and is in UTC. (example: 2022-10-15)</td>
</tr>
<tr>
    <td><CopyableCode code="granularity" /></td>
    <td><code>string</code></td>
    <td>Granularity at which each line item is aggregated. (default: DAILY)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Cost)</td>
</tr>
<tr>
    <td><CopyableCode code="line_type" /></td>
    <td><code>string</code></td>
    <td>Type of the line item. (example: KAFKA_NUM_CKUS)</td>
</tr>
<tr>
    <td><CopyableCode code="network_access_type" /></td>
    <td><code>string</code></td>
    <td>Network access type for the cluster. (example: INTERNET)</td>
</tr>
<tr>
    <td><CopyableCode code="original_amount" /></td>
    <td><code>number (double)</code></td>
    <td>Original amount accrued for this line item.</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>number (double)</code></td>
    <td>Price for the line item in dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Product name. (example: KAFKA)</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>number (double)</code></td>
    <td>Quantity of the line item.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource for a given object</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of time period (inclusive) to retrieve billing costs. It is represented in RFC3339 format and is in UTC. (example: 2022-10-12)</td>
</tr>
<tr>
    <td><CopyableCode code="tier_dimensions" /></td>
    <td><code>object</code></td>
    <td>Tier dimensions which exist for tiered pricing cost items only. (x-go-type: map[string]string)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Unit of the line item. (example: GB)</td>
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
    <td><a href="#list_billing_v1_costs"><CopyableCode code="list_billing_v1_costs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-start_date"><code>start_date</code></a>, <a href="#parameter-end_date"><code>end_date</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all costs.</td>
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
<tr id="parameter-end_date">
    <td><CopyableCode code="end_date" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for end_date. (example: 2022-10-15)</td>
</tr>
<tr id="parameter-start_date">
    <td><CopyableCode code="start_date" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for start_date. (example: 2022-10-12)</td>
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
    defaultValue="list_billing_v1_costs"
    values={[
        { label: 'list_billing_v1_costs', value: 'list_billing_v1_costs' }
    ]}
>
<TabItem value="list_billing_v1_costs">

Retrieve a sorted, filtered, paginated list of all costs.

```sql
SELECT
id,
amount,
api_version,
description,
discount_amount,
end_date,
granularity,
kind,
line_type,
network_access_type,
original_amount,
price,
product,
quantity,
resource,
start_date,
tier_dimensions,
unit
FROM confluent.billing.costs
WHERE start_date = '{{ start_date }}' -- required
AND end_date = '{{ end_date }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
