--- 
title: custom_code_loggings
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_code_loggings
  - ccl
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

Creates, updates, deletes, gets or lists a <code>custom_code_loggings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_code_loggings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.ccl.custom_code_loggings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ccl_v1_custom_code_logging"
    values={[
        { label: 'get_ccl_v1_custom_code_logging', value: 'get_ccl_v1_custom_code_logging' },
        { label: 'list_ccl_v1_custom_code_loggings', value: 'list_ccl_v1_custom_code_loggings' }
    ]}
>
<TabItem value="get_ccl_v1_custom_code_logging">

Custom Code Logging.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (ccl/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Cloud provider where the Custom Code Logging is sent. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_settings" /></td>
    <td><code>object</code></td>
    <td>Destination Settings of the Custom Code Logging.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CustomCodeLogging)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Cloud provider region the Custom Code Logging is sent. (example: us-west-2)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ccl_v1_custom_code_loggings">

Custom Code Logging.

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
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (ccl/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Cloud provider where the Custom Code Logging is sent. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_settings" /></td>
    <td><code>object</code></td>
    <td>Destination Settings of the Custom Code Logging.</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment to which this belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CustomCodeLogging)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Cloud provider region the Custom Code Logging is sent. (example: us-west-2)</td>
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
    <td><a href="#get_ccl_v1_custom_code_logging"><CopyableCode code="get_ccl_v1_custom_code_logging" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td> Make a request to read a custom code logging.</td>
</tr>
<tr>
    <td><a href="#list_ccl_v1_custom_code_loggings"><CopyableCode code="list_ccl_v1_custom_code_loggings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td> Retrieve a sorted, filtered, paginated list of all custom code loggings.</td>
</tr>
<tr>
    <td><a href="#create_ccl_v1_custom_code_logging"><CopyableCode code="create_ccl_v1_custom_code_logging" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destination_settings"><code>destination_settings</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td> Make a request to create a custom code logging.</td>
</tr>
<tr>
    <td><a href="#update_ccl_v1_custom_code_logging"><CopyableCode code="update_ccl_v1_custom_code_logging" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td> Make a request to update a custom code logging.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_ccl_v1_custom_code_logging"><CopyableCode code="delete_ccl_v1_custom_code_logging" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td> Make a request to delete a custom code logging.</td>
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
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given environment. (example: env-00000)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom code logging.</td>
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
    defaultValue="get_ccl_v1_custom_code_logging"
    values={[
        { label: 'get_ccl_v1_custom_code_logging', value: 'get_ccl_v1_custom_code_logging' },
        { label: 'list_ccl_v1_custom_code_loggings', value: 'list_ccl_v1_custom_code_loggings' }
    ]}
>
<TabItem value="get_ccl_v1_custom_code_logging">

 Make a request to read a custom code logging.

```sql
SELECT
id,
api_version,
cloud,
destination_settings,
environment,
kind,
metadata,
region
FROM confluent.ccl.custom_code_loggings
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_ccl_v1_custom_code_loggings">

 Retrieve a sorted, filtered, paginated list of all custom code loggings.

```sql
SELECT
id,
api_version,
cloud,
destination_settings,
environment,
kind,
metadata,
region
FROM confluent.ccl.custom_code_loggings
WHERE environment = '{{ environment }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ccl_v1_custom_code_logging"
    values={[
        { label: 'create_ccl_v1_custom_code_logging', value: 'create_ccl_v1_custom_code_logging' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ccl_v1_custom_code_logging">

 Make a request to create a custom code logging.

```sql
INSERT INTO confluent.ccl.custom_code_loggings (
cloud,
region,
destination_settings,
environment
)
SELECT 
'{{ cloud }}' /* required */,
'{{ region }}' /* required */,
'{{ destination_settings }}' /* required */,
'{{ environment }}' /* required */
RETURNING
id,
api_version,
cloud,
destination_settings,
environment,
kind,
metadata,
region
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_code_loggings
  props:
    - name: cloud
      value: "{{ cloud }}"
      description: |
        Cloud provider where the Custom Code Logging is sent.
    - name: region
      value: "{{ region }}"
      description: |
        The Cloud provider region the Custom Code Logging is sent.
    - name: destination_settings
      description: |
        Destination Settings of the Custom Code Logging.
      value:
        kind: "{{ kind }}"
        cluster_id: "{{ cluster_id }}"
        topic: "{{ topic }}"
        log_level: "{{ log_level }}"
    - name: environment
      description: |
        The environment to which this belongs.
      value:
        id: "{{ id }}"
        environment: "{{ environment }}"
        related: "{{ related }}"
        resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ccl_v1_custom_code_logging"
    values={[
        { label: 'update_ccl_v1_custom_code_logging', value: 'update_ccl_v1_custom_code_logging' }
    ]}
>
<TabItem value="update_ccl_v1_custom_code_logging">

 Make a request to update a custom code logging.<br /><br />

```sql
UPDATE confluent.ccl.custom_code_loggings
SET 
cloud = '{{ cloud }}',
region = '{{ region }}',
destination_settings = '{{ destination_settings }}',
environment = '{{ environment }}'
WHERE 
environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
AND environment = '{{ environment }}' --required
RETURNING
id,
api_version,
cloud,
destination_settings,
environment,
kind,
metadata,
region;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ccl_v1_custom_code_logging"
    values={[
        { label: 'delete_ccl_v1_custom_code_logging', value: 'delete_ccl_v1_custom_code_logging' }
    ]}
>
<TabItem value="delete_ccl_v1_custom_code_logging">

 Make a request to delete a custom code logging.

```sql
DELETE FROM confluent.ccl.custom_code_loggings
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
