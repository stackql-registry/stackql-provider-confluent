--- 
title: ip_filter_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_filter_summaries
  - iam
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

Creates, updates, deletes, gets or lists an <code>ip_filter_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_filter_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.ip_filter_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_ip_filter_summary"
    values={[
        { label: 'get_iam_v2_ip_filter_summary', value: 'get_iam_v2_ip_filter_summary' }
    ]}
>
<TabItem value="get_iam_v2_ip_filter_summary">

IP Filter Summary.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Summary of the operation groups and IP filters created in those operation groups. </td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IpFilterSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope associated with this object.</td>
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
    <td><a href="#get_iam_v2_ip_filter_summary"><CopyableCode code="get_iam_v2_ip_filter_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Make a request to read an IP filter summary.</td>
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
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given scope. (example: crn://confluent.cloud/organization=org-123/environment=env-abc)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_iam_v2_ip_filter_summary"
    values={[
        { label: 'get_iam_v2_ip_filter_summary', value: 'get_iam_v2_ip_filter_summary' }
    ]}
>
<TabItem value="get_iam_v2_ip_filter_summary">

Make a request to read an IP filter summary.

```sql
SELECT
api_version,
categories,
kind,
scope
FROM confluent.iam.ip_filter_summaries
WHERE scope = '{{ scope }}' -- required
;
```
</TabItem>
</Tabs>
