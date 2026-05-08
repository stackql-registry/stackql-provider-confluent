--- 
title: exporter_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - exporter_configs
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

Creates, updates, deletes, gets or lists an <code>exporter_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exporter_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.exporter_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_exporter_config_by_name"
    values={[
        { label: 'get_exporter_config_by_name', value: 'get_exporter_config_by_name' }
    ]}
>
<TabItem value="get_exporter_config_by_name">

The original request

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
    <td><CopyableCode code="basic.auth.credentials.source" /></td>
    <td><code>string</code></td>
    <td>Config SR Auth (example: USER_INFO)</td>
</tr>
<tr>
    <td><CopyableCode code="basic.auth.user.info" /></td>
    <td><code>string</code></td>
    <td>Config SR User Info</td>
</tr>
<tr>
    <td><CopyableCode code="schema.registry.url" /></td>
    <td><code>string</code></td>
    <td>Config SR URL (example: &lt;Physical SR Endpoint&gt;)</td>
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
    <td><a href="#get_exporter_config_by_name"><CopyableCode code="get_exporter_config_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Retrieves the config of the schema exporter.</td>
</tr>
<tr>
    <td><a href="#update_exporter_config_by_name"><CopyableCode code="update_exporter_config_by_name" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the configuration of the schema exporter.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the exporter</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_exporter_config_by_name"
    values={[
        { label: 'get_exporter_config_by_name', value: 'get_exporter_config_by_name' }
    ]}
>
<TabItem value="get_exporter_config_by_name">

Retrieves the config of the schema exporter.

```sql
SELECT
basic.auth.credentials.source,
basic.auth.user.info,
schema.registry.url
FROM confluent.schema_registry.exporter_configs
WHERE name = '{{ name }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_exporter_config_by_name"
    values={[
        { label: 'update_exporter_config_by_name', value: 'update_exporter_config_by_name' }
    ]}
>
<TabItem value="update_exporter_config_by_name">

Updates the configuration of the schema exporter.

```sql
REPLACE confluent.schema_registry.exporter_configs
SET 
schema.registry.url = '{{ schema.registry.url }}',
basic.auth.credentials.source = '{{ basic.auth.credentials.source }}',
basic.auth.user.info = '{{ basic.auth.user.info }}'
WHERE 
name = '{{ name }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>
