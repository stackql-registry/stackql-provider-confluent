--- 
title: managed_connector_plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_connector_plugins
  - connect
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

Creates, updates, deletes, gets or lists a <code>managed_connector_plugins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_connector_plugins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.connect.managed_connector_plugins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connectv1_connector_plugins"
    values={[
        { label: 'list_connectv1_connector_plugins', value: 'list_connectv1_connector_plugins' }
    ]}
>
<TabItem value="list_connectv1_connector_plugins">

Connector Plugin.

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
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>The connector class name. E.g. BigQuerySink.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of connector, sink or source. (sink, source)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version string for the connector available.</td>
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
    <td><a href="#list_connectv1_connector_plugins"><CopyableCode code="list_connectv1_connector_plugins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a></td>
    <td></td>
    <td>Return a list of Managed Connector plugins installed in the Kafka Connect cluster.</td>
</tr>
<tr>
    <td><a href="#validate_connectv1_connector_plugin"><CopyableCode code="validate_connectv1_connector_plugin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-plugin_name"><code>plugin_name</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a></td>
    <td></td>
    <td>Validate the provided configuration values against the configuration definition. This API performs per config validation and returns suggested values and validation error messages.</td>
</tr>
<tr>
    <td><a href="#translate_connectv1_connector_plugin"><CopyableCode code="translate_connectv1_connector_plugin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-plugin_name"><code>plugin_name</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a></td>
    <td><a href="#parameter-mask_sensitive"><code>mask_sensitive</code></a></td>
    <td>Translate the provided Self Managed configuration values. This API performs configuration translation<br />and returns the translated fully managed configuration along with any errors or warnings. <br />Query Parameter `mask_sensitive=true` redacts sensitive config values in response.</td>
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
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment this resource belongs to.</td>
</tr>
<tr id="parameter-kafka_cluster_id">
    <td><CopyableCode code="kafka_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Kafka cluster.</td>
</tr>
<tr id="parameter-plugin_name">
    <td><CopyableCode code="plugin_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the connector plugin.</td>
</tr>
<tr id="parameter-mask_sensitive">
    <td><CopyableCode code="mask_sensitive" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to redact sensitive config values in response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_connectv1_connector_plugins"
    values={[
        { label: 'list_connectv1_connector_plugins', value: 'list_connectv1_connector_plugins' }
    ]}
>
<TabItem value="list_connectv1_connector_plugins">

Return a list of Managed Connector plugins installed in the Kafka Connect cluster.

```sql
SELECT
class,
type,
version
FROM confluent.connect.managed_connector_plugins
WHERE environment_id = '{{ environment_id }}' -- required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_connectv1_connector_plugin"
    values={[
        { label: 'validate_connectv1_connector_plugin', value: 'validate_connectv1_connector_plugin' },
        { label: 'translate_connectv1_connector_plugin', value: 'translate_connectv1_connector_plugin' }
    ]}
>
<TabItem value="validate_connectv1_connector_plugin">

Validate the provided configuration values against the configuration definition. This API performs per config validation and returns suggested values and validation error messages.

```sql
EXEC confluent.connect.managed_connector_plugins.validate_connectv1_connector_plugin 
@plugin_name='{{ plugin_name }}' --required, 
@environment_id='{{ environment_id }}' --required, 
@kafka_cluster_id='{{ kafka_cluster_id }}' --required
;
```
</TabItem>
<TabItem value="translate_connectv1_connector_plugin">

Translate the provided Self Managed configuration values. This API performs configuration translation<br />and returns the translated fully managed configuration along with any errors or warnings. <br />Query Parameter `mask_sensitive=true` redacts sensitive config values in response.

```sql
EXEC confluent.connect.managed_connector_plugins.translate_connectv1_connector_plugin 
@plugin_name='{{ plugin_name }}' --required, 
@environment_id='{{ environment_id }}' --required, 
@kafka_cluster_id='{{ kafka_cluster_id }}' --required, 
@mask_sensitive='{{ mask_sensitive }}'
;
```
</TabItem>
</Tabs>
