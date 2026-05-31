--- 
title: materialized_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - materialized_tables
  - sql
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

Creates, updates, deletes, gets or lists a <code>materialized_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="materialized_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.materialized_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_materialized_table"
    values={[
        { label: 'get_sqlv1_materialized_table', value: 'get_sqlv1_materialized_table' },
        { label: 'list_sqlv1_materialized_tables', value: 'list_sqlv1_materialized_tables' }
    ]}
>
<TabItem value="get_sqlv1_materialized_table">

The requested Materialized Table.

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
    <td>The user-provided name of the resource, unique within this environment. (pattern: <code>^&lsqb;a-zA-Z0-9&rsqb;(&lsqb;a-zA-Z0-9_-&rsqb;*&lsqb;a-zA-Z0-9&rsqb;)?$</code>, example: high-value-orders)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (MaterializedTable)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specifications of the Materialized Table.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Materialized Table.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sqlv1_materialized_tables">

A list of Materialized Tables.

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
    <td>The user-provided name of the resource, unique within this environment. (pattern: <code>^&lsqb;a-zA-Z0-9&rsqb;(&lsqb;a-zA-Z0-9_-&rsqb;*&lsqb;a-zA-Z0-9&rsqb;)?$</code>, example: high-value-orders)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (sql/v1) (example: sql/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (MaterializedTable)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specifications of the Materialized Table.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the Materialized Table.</td>
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
    <td><a href="#get_sqlv1_materialized_table"><CopyableCode code="get_sqlv1_materialized_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-table_name"><code>table_name</code></a></td>
    <td></td>
    <td>Retrieve a specific Materialized Table by name.<br /></td>
</tr>
<tr>
    <td><a href="#list_sqlv1_materialized_tables"><CopyableCode code="list_sqlv1_materialized_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted and paginated list of all materialized tables.<br /></td>
</tr>
<tr>
    <td><a href="#create_sqlv1_materialized_table"><CopyableCode code="create_sqlv1_materialized_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-api_version"><code>api_version</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-metadata"><code>metadata</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Create a new Materialized Table.<br /></td>
</tr>
<tr>
    <td><a href="#update_sqlv1_materialized_table"><CopyableCode code="update_sqlv1_materialized_table" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-table_name"><code>table_name</code></a>, <a href="#parameter-api_version"><code>api_version</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-metadata"><code>metadata</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Make a request to update a Materialized Table's mutable fields.<br />Mutable fields include: `query`, `stopped`, `compute_pool_id`, `principal`, `columns`, `watermark`, `constraints` and `table_options`.<br /></td>
</tr>
<tr>
    <td><a href="#delete_sqlv1_materialized_table"><CopyableCode code="delete_sqlv1_materialized_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-table_name"><code>table_name</code></a></td>
    <td></td>
    <td>Delete a specific Materialized Table by name.<br /></td>
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
    <td>The unique identifier for the environment.</td>
</tr>
<tr id="parameter-kafka_cluster_id">
    <td><CopyableCode code="kafka_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the database.</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier for the organization</td>
</tr>
<tr id="parameter-table_name">
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Materialized Table</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int32)</code></td>
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
    defaultValue="get_sqlv1_materialized_table"
    values={[
        { label: 'get_sqlv1_materialized_table', value: 'get_sqlv1_materialized_table' },
        { label: 'list_sqlv1_materialized_tables', value: 'list_sqlv1_materialized_tables' }
    ]}
>
<TabItem value="get_sqlv1_materialized_table">

Retrieve a specific Materialized Table by name.<br />

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.materialized_tables
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' -- required
AND table_name = '{{ table_name }}' -- required
;
```
</TabItem>
<TabItem value="list_sqlv1_materialized_tables">

Retrieve a sorted and paginated list of all materialized tables.<br />

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec,
status
FROM confluent.sql.materialized_tables
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sqlv1_materialized_table"
    values={[
        { label: 'create_sqlv1_materialized_table', value: 'create_sqlv1_materialized_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sqlv1_materialized_table">

Create a new Materialized Table.<br />

```sql
INSERT INTO confluent.sql.materialized_tables (
name,
spec,
organization_id,
environment_id,
kafka_cluster_id
)
SELECT 
'{{ name }}' /* required */,
'{{ spec }}' /* required */,
'{{ organization_id }}',
'{{ environment_id }}',
'{{ kafka_cluster_id }}'
RETURNING
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: materialized_tables
  props:
    - name: organization_id
      value: "{{ organization_id }}"
      description: Required parameter for the materialized_tables resource.
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the materialized_tables resource.
    - name: kafka_cluster_id
      value: "{{ kafka_cluster_id }}"
      description: Required parameter for the materialized_tables resource.
    - name: name
      value: "{{ name }}"
      description: |
        The user-provided name of the resource, unique within this environment.
    - name: spec
      description: |
        The specifications of the Materialized Table.
      value:
        kafka_cluster_id: "{{ kafka_cluster_id }}"
        compute_pool_id: "{{ compute_pool_id }}"
        principal: "{{ principal }}"
        stopped: {{ stopped }}
        table_options: "{{ table_options }}"
        session_options: "{{ session_options }}"
        columns:
          - name: "{{ name }}"
            type:
              type: "{{ type }}"
              nullable: {{ nullable }}
              length: {{ length }}
              precision: {{ precision }}
              scale: {{ scale }}
              key_type:
                type: "{{ type }}"
                nullable: {{ nullable }}
                length: {{ length }}
                precision: {{ precision }}
                scale: {{ scale }}
                key_type: "{{ key_type }}"
                value_type: "{{ value_type }}"
                element_type: "{{ element_type }}"
                fields:
                  - name: "{{ name }}"
                    field_type:
                      type: "{{ type }}"
                      nullable: {{ nullable }}
                      length: {{ length }}
                      precision: {{ precision }}
                      scale: {{ scale }}
                      key_type: "{{ key_type }}"
                      value_type: "{{ value_type }}"
                      element_type: "{{ element_type }}"
                      fields: "{{ fields }}"
                      resolution: "{{ resolution }}"
                      fractional_precision: {{ fractional_precision }}
                      class_name: "{{ class_name }}"
                    description: "{{ description }}"
                resolution: "{{ resolution }}"
                fractional_precision: {{ fractional_precision }}
                class_name: "{{ class_name }}"
              value_type:
                type: "{{ type }}"
                nullable: {{ nullable }}
                length: {{ length }}
                precision: {{ precision }}
                scale: {{ scale }}
                key_type:
                  type: "{{ type }}"
                  nullable: {{ nullable }}
                  length: {{ length }}
                  precision: {{ precision }}
                  scale: {{ scale }}
                  key_type: "{{ key_type }}"
                  value_type: "{{ value_type }}"
                  element_type: "{{ element_type }}"
                  fields: "{{ fields }}"
                  resolution: "{{ resolution }}"
                  fractional_precision: {{ fractional_precision }}
                  class_name: "{{ class_name }}"
                value_type: "{{ value_type }}"
                element_type: "{{ element_type }}"
                fields:
                  - name: "{{ name }}"
                    field_type:
                      type: "{{ type }}"
                      nullable: {{ nullable }}
                      length: {{ length }}
                      precision: {{ precision }}
                      scale: {{ scale }}
                      key_type: "{{ key_type }}"
                      value_type: "{{ value_type }}"
                      element_type: "{{ element_type }}"
                      fields: "{{ fields }}"
                      resolution: "{{ resolution }}"
                      fractional_precision: {{ fractional_precision }}
                      class_name: "{{ class_name }}"
                    description: "{{ description }}"
                resolution: "{{ resolution }}"
                fractional_precision: {{ fractional_precision }}
                class_name: "{{ class_name }}"
              element_type:
                type: "{{ type }}"
                nullable: {{ nullable }}
                length: {{ length }}
                precision: {{ precision }}
                scale: {{ scale }}
                key_type:
                  type: "{{ type }}"
                  nullable: {{ nullable }}
                  length: {{ length }}
                  precision: {{ precision }}
                  scale: {{ scale }}
                  key_type: "{{ key_type }}"
                  value_type: "{{ value_type }}"
                  element_type: "{{ element_type }}"
                  fields: "{{ fields }}"
                  resolution: "{{ resolution }}"
                  fractional_precision: {{ fractional_precision }}
                  class_name: "{{ class_name }}"
                value_type:
                  type: "{{ type }}"
                  nullable: {{ nullable }}
                  length: {{ length }}
                  precision: {{ precision }}
                  scale: {{ scale }}
                  key_type: "{{ key_type }}"
                  value_type: "{{ value_type }}"
                  element_type: "{{ element_type }}"
                  fields: "{{ fields }}"
                  resolution: "{{ resolution }}"
                  fractional_precision: {{ fractional_precision }}
                  class_name: "{{ class_name }}"
                element_type: "{{ element_type }}"
                fields:
                  - name: "{{ name }}"
                    field_type:
                      type: "{{ type }}"
                      nullable: {{ nullable }}
                      length: {{ length }}
                      precision: {{ precision }}
                      scale: {{ scale }}
                      key_type: "{{ key_type }}"
                      value_type: "{{ value_type }}"
                      element_type: "{{ element_type }}"
                      fields: "{{ fields }}"
                      resolution: "{{ resolution }}"
                      fractional_precision: {{ fractional_precision }}
                      class_name: "{{ class_name }}"
                    description: "{{ description }}"
                resolution: "{{ resolution }}"
                fractional_precision: {{ fractional_precision }}
                class_name: "{{ class_name }}"
              fields:
                - name: "{{ name }}"
                  field_type:
                    type: "{{ type }}"
                    nullable: {{ nullable }}
                    length: {{ length }}
                    precision: {{ precision }}
                    scale: {{ scale }}
                    key_type: "{{ key_type }}"
                    value_type: "{{ value_type }}"
                    element_type: "{{ element_type }}"
                    fields: "{{ fields }}"
                    resolution: "{{ resolution }}"
                    fractional_precision: {{ fractional_precision }}
                    class_name: "{{ class_name }}"
                  description: "{{ description }}"
              resolution: "{{ resolution }}"
              fractional_precision: {{ fractional_precision }}
              class_name: "{{ class_name }}"
            comment: "{{ comment }}"
            kind: "{{ kind }}"
            metadata_key: "{{ metadata_key }}"
            virtual: {{ virtual }}
            expression: "{{ expression }}"
        watermark:
          column: "{{ column }}"
          expression: "{{ expression }}"
        constraints:
          - name: "{{ name }}"
            type: "{{ type }}"
            columns: "{{ columns }}"
            enforced: {{ enforced }}
        distribution:
          kind: "{{ kind }}"
          keys:
            - "{{ keys }}"
          bucket_count: {{ bucket_count }}
        query: "{{ query }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_sqlv1_materialized_table"
    values={[
        { label: 'update_sqlv1_materialized_table', value: 'update_sqlv1_materialized_table' }
    ]}
>
<TabItem value="update_sqlv1_materialized_table">

Make a request to update a Materialized Table's mutable fields.<br />Mutable fields include: `query`, `stopped`, `compute_pool_id`, `principal`, `columns`, `watermark`, `constraints` and `table_options`.<br />

```sql
REPLACE confluent.sql.materialized_tables
SET 
name = '{{ name }}',
spec = '{{ spec }}'
WHERE 
organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' --required
AND table_name = '{{ table_name }}' --required
AND name = '{{ name }}' --required
AND spec = '{{ spec }}' --required
RETURNING
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sqlv1_materialized_table"
    values={[
        { label: 'delete_sqlv1_materialized_table', value: 'delete_sqlv1_materialized_table' }
    ]}
>
<TabItem value="delete_sqlv1_materialized_table">

Delete a specific Materialized Table by name.<br />

```sql
DELETE FROM confluent.sql.materialized_tables
WHERE organization_id = '{{ organization_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' --required
AND table_name = '{{ table_name }}' --required
;
```
</TabItem>
</Tabs>
