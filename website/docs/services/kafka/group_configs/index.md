--- 
title: group_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - group_configs
  - kafka
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

Creates, updates, deletes, gets or lists a <code>group_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.group_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kafka_group_config"
    values={[
        { label: 'get_kafka_group_config', value: 'get_kafka_group_config' },
        { label: 'list_kafka_group_configs', value: 'list_kafka_group_configs' }
    ]}
>
<TabItem value="get_kafka_group_config">

Config name and value for group configuration.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_sensitive" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="synonyms" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kafka_group_configs">

Config name and value for group configurations.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_sensitive" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="synonyms" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_kafka_group_config"><CopyableCode code="get_kafka_group_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the configuration with the specified name for the specified group. This API supports consumer groups, share groups, and streams groups.</td>
</tr>
<tr>
    <td><a href="#list_kafka_group_configs"><CopyableCode code="list_kafka_group_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all configurations for the specified group. This API supports consumer groups, share groups, and streams groups.</td>
</tr>
<tr>
    <td><a href="#update_kafka_group_config"><CopyableCode code="update_kafka_group_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Update the configuration with the specified name for the specified group. This API supports consumer groups, share groups, and streams groups.</td>
</tr>
<tr>
    <td><a href="#delete_kafka_group_config"><CopyableCode code="delete_kafka_group_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete the dynamic configuration override with the specified name for the specified group. After deletion, the default group configuration will be applied. This API supports consumer groups, share groups, and streams groups.</td>
</tr>
<tr>
    <td><a href="#update_kafka_group_config_batch"><CopyableCode code="update_kafka_group_config_batch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-validate_only"><code>validate_only</code></a></td>
    <td>Batch alter configurations for the specified group. This API supports consumer groups, share groups, and streams groups.</td>
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
<tr id="parameter-validate_only">
    <td><CopyableCode code="validate_only" /></td>
    <td><code>boolean</code></td>
    <td>To validate the action can be performed successfully or not. Default: false (example: false)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kafka_group_config"
    values={[
        { label: 'get_kafka_group_config', value: 'get_kafka_group_config' },
        { label: 'list_kafka_group_configs', value: 'list_kafka_group_configs' }
    ]}
>
<TabItem value="get_kafka_group_config">

Get the configuration with the specified name for the specified group. This API supports consumer groups, share groups, and streams groups.

```sql
SELECT
name,
cluster_id,
group_id,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM confluent.kafka.group_configs
;
```
</TabItem>
<TabItem value="list_kafka_group_configs">

List all configurations for the specified group. This API supports consumer groups, share groups, and streams groups.

```sql
SELECT
name,
cluster_id,
group_id,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM confluent.kafka.group_configs
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_kafka_group_config"
    values={[
        { label: 'update_kafka_group_config', value: 'update_kafka_group_config' }
    ]}
>
<TabItem value="update_kafka_group_config">

Update the configuration with the specified name for the specified group. This API supports consumer groups, share groups, and streams groups.

```sql
REPLACE confluent.kafka.group_configs
SET 
value = '{{ value }}'
WHERE 
value = '{{ value }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kafka_group_config"
    values={[
        { label: 'delete_kafka_group_config', value: 'delete_kafka_group_config' }
    ]}
>
<TabItem value="delete_kafka_group_config">

Delete the dynamic configuration override with the specified name for the specified group. After deletion, the default group configuration will be applied. This API supports consumer groups, share groups, and streams groups.

```sql
DELETE FROM confluent.kafka.group_configs
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_kafka_group_config_batch"
    values={[
        { label: 'update_kafka_group_config_batch', value: 'update_kafka_group_config_batch' }
    ]}
>
<TabItem value="update_kafka_group_config_batch">

Batch alter configurations for the specified group. This API supports consumer groups, share groups, and streams groups.

```sql
EXEC confluent.kafka.group_configs.update_kafka_group_config_batch 
@validate_only={{ validate_only }} 
@@json=
'{
"data": "{{ data }}", 
"validate_only": {{ validate_only }}
}'
;
```
</TabItem>
</Tabs>
