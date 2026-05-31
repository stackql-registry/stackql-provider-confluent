--- 
title: cluster_config
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_config
  - schema_registry
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

Creates, updates, deletes, gets or lists a <code>cluster_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.cluster_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_config"
    values={[
        { label: 'get_cluster_config', value: 'get_cluster_config' }
    ]}
>
<TabItem value="get_cluster_config">

The cluster config

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
    <td><CopyableCode code="maxRequestsPerSec" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of allowed requests per second</td>
</tr>
<tr>
    <td><CopyableCode code="maxSchemas" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of registered schemas allowed</td>
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
    <td><a href="#get_cluster_config"><CopyableCode code="get_cluster_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieves cluster config information.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cluster_config"
    values={[
        { label: 'get_cluster_config', value: 'get_cluster_config' }
    ]}
>
<TabItem value="get_cluster_config">

Retrieves cluster config information.

```sql
SELECT
maxRequestsPerSec,
maxSchemas
FROM confluent.schema_registry.cluster_config
;
```
</TabItem>
</Tabs>
