--- 
title: org_compute_pool_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - org_compute_pool_configs
  - flink_compute_pools
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

Creates, updates, deletes, gets or lists an <code>org_compute_pool_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_compute_pool_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.flink_compute_pools.org_compute_pool_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fcpm_v2_org_compute_pool_config"
    values={[
        { label: 'get_fcpm_v2_org_compute_pool_config', value: 'get_fcpm_v2_org_compute_pool_config' }
    ]}
>
<TabItem value="get_fcpm_v2_org_compute_pool_config">

Org Compute Pool Config.

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
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the organization. (example: 9bb441c4-edef-46ac-8a41-c49e44a3fd9a)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (fcpm/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (OrgComputePoolConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The desired state of the organization-level Compute Pool configuration</td>
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
    <td><a href="#get_fcpm_v2_org_compute_pool_config"><CopyableCode code="get_fcpm_v2_org_compute_pool_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Make a request to read an org compute pool config.</td>
</tr>
<tr>
    <td><a href="#update_fcpm_v2_org_compute_pool_config"><CopyableCode code="update_fcpm_v2_org_compute_pool_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>Make a request to update an org compute pool config.</td>
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
    defaultValue="get_fcpm_v2_org_compute_pool_config"
    values={[
        { label: 'get_fcpm_v2_org_compute_pool_config', value: 'get_fcpm_v2_org_compute_pool_config' }
    ]}
>
<TabItem value="get_fcpm_v2_org_compute_pool_config">

Make a request to read an org compute pool config.

```sql
SELECT
organization_id,
api_version,
kind,
spec
FROM confluent.flink_compute_pools.org_compute_pool_configs
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fcpm_v2_org_compute_pool_config"
    values={[
        { label: 'update_fcpm_v2_org_compute_pool_config', value: 'update_fcpm_v2_org_compute_pool_config' }
    ]}
>
<TabItem value="update_fcpm_v2_org_compute_pool_config">

Make a request to update an org compute pool config.

```sql
UPDATE confluent.flink_compute_pools.org_compute_pool_configs
SET 
spec = '{{ spec }}'
RETURNING
organization_id,
api_version,
kind,
spec;
```
</TabItem>
</Tabs>
