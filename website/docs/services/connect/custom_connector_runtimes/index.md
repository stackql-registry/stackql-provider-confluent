--- 
title: custom_connector_runtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_connector_runtimes
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

Creates, updates, deletes, gets or lists a <code>custom_connector_runtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_connector_runtimes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.connect.custom_connector_runtimes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connect_v1_custom_connector_runtimes"
    values={[
        { label: 'list_connect_v1_custom_connector_runtimes', value: 'list_connect_v1_custom_connector_runtimes' }
    ]}
>
<TabItem value="list_connect_v1_custom_connector_runtimes">

Custom Connector Runtime.

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
    <td><CopyableCode code="custom_connect_plugin_runtime_name" /></td>
    <td><code>string</code></td>
    <td>Name of the runtime that is being used while provisioning a custom connector. This corresponds to the property custom.connect.plugin.runtime in the connector configuration.  (example: 3.9.0)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (connect/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the runtime (example: Custom Connector Plugin runtime using AK 3.9.0 and supporting Java 11 and 17)</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_life_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>End of Life date for the runtime (example: 2006-01-02T15:04:05-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CustomConnectorRuntime)</td>
</tr>
<tr>
    <td><CopyableCode code="product_maturity" /></td>
    <td><code>string</code></td>
    <td>The product maturity phase for the plugin runtime. EA (Early Access), GA (Generally Available), or Preview.  (example: GA)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_ak_version" /></td>
    <td><code>string</code></td>
    <td>The underlying version of Apache Kafka which bundles the connect runtime (example: 3.9.0)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_java_versions" /></td>
    <td><code>array</code></td>
    <td>List of supported Java versions</td>
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
    <td><a href="#list_connect_v1_custom_connector_runtimes"><CopyableCode code="list_connect_v1_custom_connector_runtimes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all custom connector runtimes.</td>
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
    defaultValue="list_connect_v1_custom_connector_runtimes"
    values={[
        { label: 'list_connect_v1_custom_connector_runtimes', value: 'list_connect_v1_custom_connector_runtimes' }
    ]}
>
<TabItem value="list_connect_v1_custom_connector_runtimes">

Retrieve a sorted, filtered, paginated list of all custom connector runtimes.

```sql
SELECT
id,
custom_connect_plugin_runtime_name,
api_version,
description,
end_of_life_at,
kind,
product_maturity,
runtime_ak_version,
supported_java_versions
FROM confluent.connect.custom_connector_runtimes
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
