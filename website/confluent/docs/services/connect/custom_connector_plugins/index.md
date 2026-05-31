--- 
title: custom_connector_plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_connector_plugins
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

Creates, updates, deletes, gets or lists a <code>custom_connector_plugins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_connector_plugins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.connect.custom_connector_plugins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connect_v1_custom_connector_plugin"
    values={[
        { label: 'get_connect_v1_custom_connector_plugin', value: 'get_connect_v1_custom_connector_plugin' },
        { label: 'list_connect_v1_custom_connector_plugins', value: 'list_connect_v1_custom_connector_plugins' }
    ]}
>
<TabItem value="get_connect_v1_custom_connector_plugin">

Custom Connector Plugin.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of Custom Connector Plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (connect/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Cloud provider where the Custom Connector Plugin archive is uploaded. (example: AWS, default: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_class" /></td>
    <td><code>string</code></td>
    <td>Java class or alias for connector. You can get connector class from connector documentation provided by developer. (pattern: <code>^(([a-zA-Z][a-zA-Z_$0-9]*(\.[a-zA-Z][a-zA-Z_$0-9]*)*)\.)?([a-zA-Z][a-zA-Z_$0-9]*)$</code>, example: io.confluent.kafka.connect.datagen.DatagenConnector)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_type" /></td>
    <td><code>string</code></td>
    <td>Custom Connector type.  (example: SOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="content_format" /></td>
    <td><code>string</code></td>
    <td>Archive format of Custom Connector Plugin. (example: ZIP)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of Custom Connector Plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation_link" /></td>
    <td><code>string</code></td>
    <td>Document link of Custom Connector Plugin. (pattern: <code>^$|^(http://|https://).+</code>, example: https://github.com/confluentinc/kafka-connect-datagen)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CustomConnectorPlugin)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_language" /></td>
    <td><code>string</code></td>
    <td>Runtime language of Custom Connector Plugin. (example: JAVA, default: JAVA)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive_config_properties" /></td>
    <td><code>array</code></td>
    <td>A sensitive property is a connector configuration property that must be hidden after a user enters property value when setting up connector. </td>
</tr>
<tr>
    <td><CopyableCode code="upload_source" /></td>
    <td><code>object</code></td>
    <td>Upload source of Custom Connector Plugin. Only required in `create` request, will be ignored in `read`, `update` or `list`.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connect_v1_custom_connector_plugins">

Custom Connector Plugin.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of Custom Connector Plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (connect/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Cloud provider where the Custom Connector Plugin archive is uploaded. (example: AWS, default: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_class" /></td>
    <td><code>string</code></td>
    <td>Java class or alias for connector. You can get connector class from connector documentation provided by developer. (pattern: <code>^(([a-zA-Z][a-zA-Z_$0-9]*(\.[a-zA-Z][a-zA-Z_$0-9]*)*)\.)?([a-zA-Z][a-zA-Z_$0-9]*)$</code>, example: io.confluent.kafka.connect.datagen.DatagenConnector)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_type" /></td>
    <td><code>string</code></td>
    <td>Custom Connector type.  (example: SOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="content_format" /></td>
    <td><code>string</code></td>
    <td>Archive format of Custom Connector Plugin. (example: ZIP)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of Custom Connector Plugin.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation_link" /></td>
    <td><code>string</code></td>
    <td>Document link of Custom Connector Plugin. (pattern: <code>^$|^(http://|https://).+</code>, example: https://github.com/confluentinc/kafka-connect-datagen)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CustomConnectorPlugin)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_language" /></td>
    <td><code>string</code></td>
    <td>Runtime language of Custom Connector Plugin. (example: JAVA, default: JAVA)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive_config_properties" /></td>
    <td><code>array</code></td>
    <td>A sensitive property is a connector configuration property that must be hidden after a user enters property value when setting up connector. </td>
</tr>
<tr>
    <td><CopyableCode code="upload_source" /></td>
    <td><code>object</code></td>
    <td>Upload source of Custom Connector Plugin. Only required in `create` request, will be ignored in `read`, `update` or `list`.</td>
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
    <td><a href="#get_connect_v1_custom_connector_plugin"><CopyableCode code="get_connect_v1_custom_connector_plugin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a custom connector plugin.</td>
</tr>
<tr>
    <td><a href="#list_connect_v1_custom_connector_plugins"><CopyableCode code="list_connect_v1_custom_connector_plugins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all custom connector plugins.<br /><br />If no `cloud` filter is specified, returns custom connector plugins from all clouds.<br /></td>
</tr>
<tr>
    <td><a href="#create_connect_v1_custom_connector_plugin"><CopyableCode code="create_connect_v1_custom_connector_plugin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-connector_class"><code>connector_class</code></a>, <a href="#parameter-connector_type"><code>connector_type</code></a>, <a href="#parameter-upload_source"><code>upload_source</code></a></td>
    <td></td>
    <td>Make a request to create a custom connector plugin.</td>
</tr>
<tr>
    <td><a href="#update_connect_v1_custom_connector_plugin"><CopyableCode code="update_connect_v1_custom_connector_plugin" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a custom connector plugin.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_connect_v1_custom_connector_plugin"><CopyableCode code="delete_connect_v1_custom_connector_plugin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a custom connector plugin.</td>
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
    <td>The unique identifier for the custom connector plugin.</td>
</tr>
<tr id="parameter-cloud">
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for cloud. (example: AWS)</td>
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
    defaultValue="get_connect_v1_custom_connector_plugin"
    values={[
        { label: 'get_connect_v1_custom_connector_plugin', value: 'get_connect_v1_custom_connector_plugin' },
        { label: 'list_connect_v1_custom_connector_plugins', value: 'list_connect_v1_custom_connector_plugins' }
    ]}
>
<TabItem value="get_connect_v1_custom_connector_plugin">

Make a request to read a custom connector plugin.

```sql
SELECT
id,
display_name,
api_version,
cloud,
connector_class,
connector_type,
content_format,
description,
documentation_link,
kind,
metadata,
runtime_language,
sensitive_config_properties,
upload_source
FROM confluent.connect.custom_connector_plugins
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_connect_v1_custom_connector_plugins">

Retrieve a sorted, filtered, paginated list of all custom connector plugins.<br /><br />If no `cloud` filter is specified, returns custom connector plugins from all clouds.<br />

```sql
SELECT
id,
display_name,
api_version,
cloud,
connector_class,
connector_type,
content_format,
description,
documentation_link,
kind,
metadata,
runtime_language,
sensitive_config_properties,
upload_source
FROM confluent.connect.custom_connector_plugins
WHERE cloud = '{{ cloud }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connect_v1_custom_connector_plugin"
    values={[
        { label: 'create_connect_v1_custom_connector_plugin', value: 'create_connect_v1_custom_connector_plugin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connect_v1_custom_connector_plugin">

Make a request to create a custom connector plugin.

```sql
INSERT INTO confluent.connect.custom_connector_plugins (
display_name,
description,
documentation_link,
connector_class,
connector_type,
cloud,
sensitive_config_properties,
upload_source,
runtime_language
)
SELECT 
'{{ display_name }}' /* required */,
'{{ description }}',
'{{ documentation_link }}',
'{{ connector_class }}' /* required */,
'{{ connector_type }}' /* required */,
'{{ cloud }}',
'{{ sensitive_config_properties }}',
'{{ upload_source }}' /* required */,
'{{ runtime_language }}'
RETURNING
id,
display_name,
api_version,
cloud,
connector_class,
connector_type,
content_format,
description,
documentation_link,
kind,
metadata,
runtime_language,
sensitive_config_properties,
upload_source
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_connector_plugins
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Display name of Custom Connector Plugin.
    - name: description
      value: "{{ description }}"
      description: |
        Description of Custom Connector Plugin.
    - name: documentation_link
      value: "{{ documentation_link }}"
      description: |
        Document link of Custom Connector Plugin.
    - name: connector_class
      value: "{{ connector_class }}"
      description: |
        Java class or alias for connector. You can get connector class from connector documentation provided by developer.
    - name: connector_type
      value: "{{ connector_type }}"
      description: |
        Custom Connector type.
    - name: cloud
      value: "{{ cloud }}"
      description: |
        Cloud provider where the Custom Connector Plugin archive is uploaded.
      default: AWS
    - name: sensitive_config_properties
      value:
        - "{{ sensitive_config_properties }}"
      description: |
        A sensitive property is a connector configuration property that must be hidden after a user enters property
        value when setting up connector.
    - name: upload_source
      description: |
        Upload source of Custom Connector Plugin. Only required in \`create\` request, will be ignored in \`read\`, \`update\` or \`list\`.
      value:
        location: "{{ location }}"
        upload_id: "{{ upload_id }}"
    - name: runtime_language
      value: "{{ runtime_language }}"
      description: |
        Runtime language of Custom Connector Plugin.
      default: JAVA
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connect_v1_custom_connector_plugin"
    values={[
        { label: 'update_connect_v1_custom_connector_plugin', value: 'update_connect_v1_custom_connector_plugin' }
    ]}
>
<TabItem value="update_connect_v1_custom_connector_plugin">

Make a request to update a custom connector plugin.<br /><br />

```sql
UPDATE confluent.connect.custom_connector_plugins
SET 
display_name = '{{ display_name }}',
description = '{{ description }}',
documentation_link = '{{ documentation_link }}',
connector_class = '{{ connector_class }}',
connector_type = '{{ connector_type }}',
cloud = '{{ cloud }}',
sensitive_config_properties = '{{ sensitive_config_properties }}',
upload_source = '{{ upload_source }}',
runtime_language = '{{ runtime_language }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
cloud,
connector_class,
connector_type,
content_format,
description,
documentation_link,
kind,
metadata,
runtime_language,
sensitive_config_properties,
upload_source;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connect_v1_custom_connector_plugin"
    values={[
        { label: 'delete_connect_v1_custom_connector_plugin', value: 'delete_connect_v1_custom_connector_plugin' }
    ]}
>
<TabItem value="delete_connect_v1_custom_connector_plugin">

Make a request to delete a custom connector plugin.

```sql
DELETE FROM confluent.connect.custom_connector_plugins
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
