--- 
title: connector_config
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_config
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

Creates, updates, deletes, gets or lists a <code>connector_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.connect.connector_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connectv1_connector_config"
    values={[
        { label: 'get_connectv1_connector_config', value: 'get_connectv1_connector_config' }
    ]}
>
<TabItem value="get_connectv1_connector_config">

Connector.

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
    <td>Name or alias of the class (plugin) for this connector. For Custom Connector, it must be the same as connector_name.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud.environment" /></td>
    <td><code>string</code></td>
    <td>The cloud environment type.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud.provider" /></td>
    <td><code>string</code></td>
    <td>The cloud service provider, e.g. aws, azure, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="connector.class" /></td>
    <td><code>string</code></td>
    <td>The connector class name. E.g. BigQuerySink, GcsSink, etc.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka.api.key" /></td>
    <td><code>string</code></td>
    <td>The kafka cluster api key.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka.api.secret" /></td>
    <td><code>string</code></td>
    <td>The kafka cluster api secret key.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka.endpoint" /></td>
    <td><code>string</code></td>
    <td>The kafka cluster endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka.region" /></td>
    <td><code>string</code></td>
    <td>The kafka cluster region.</td>
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
    <td><a href="#get_connectv1_connector_config"><CopyableCode code="get_connectv1_connector_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the configuration for the connector.</td>
</tr>
<tr>
    <td><a href="#create_or_update_connectv1_connector_config"><CopyableCode code="create_or_update_connectv1_connector_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-connector.class"><code>connector.class</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-kafka.api.key"><code>kafka.api.key</code></a>, <a href="#parameter-kafka.api.secret"><code>kafka.api.secret</code></a></td>
    <td></td>
    <td>Create a new connector using the given configuration, or update the configuration for an existing connector. Returns information about the connector after the change has been made.</td>
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
    defaultValue="get_connectv1_connector_config"
    values={[
        { label: 'get_connectv1_connector_config', value: 'get_connectv1_connector_config' }
    ]}
>
<TabItem value="get_connectv1_connector_config">

Get the configuration for the connector.

```sql
SELECT
name,
cloud.environment,
cloud.provider,
connector.class,
kafka.api.key,
kafka.api.secret,
kafka.endpoint,
kafka.region
FROM confluent.connect.connector_config
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="create_or_update_connectv1_connector_config"
    values={[
        { label: 'create_or_update_connectv1_connector_config', value: 'create_or_update_connectv1_connector_config' }
    ]}
>
<TabItem value="create_or_update_connectv1_connector_config">

Create a new connector using the given configuration, or update the configuration for an existing connector. Returns information about the connector after the change has been made.

```sql
REPLACE confluent.connect.connector_config
SET 
connector.class = '{{ connector.class }}',
name = '{{ name }}',
kafka.api.key = '{{ kafka.api.key }}',
kafka.api.secret = '{{ kafka.api.secret }}',
confluent.connector.type = '{{ confluent.connector.type }}',
confluent.custom.plugin.id = '{{ confluent.custom.plugin.id }}',
confluent.custom.connection.endpoints = '{{ confluent.custom.connection.endpoints }}',
confluent.custom.schema.registry.auto = '{{ confluent.custom.schema.registry.auto }}',
confluent.custom.connect.plugin.runtime = '{{ confluent.custom.connect.plugin.runtime }}',
confluent.custom.connect.java.version = '{{ confluent.custom.connect.java.version }}'
WHERE 
connector.class = '{{ connector.class }}' --required
AND name = '{{ name }}' --required
AND kafka.api.key = '{{ kafka.api.key }}' --required
AND kafka.api.secret = '{{ kafka.api.secret }}' --required
RETURNING
name,
config,
tasks,
type;
```
</TabItem>
</Tabs>
