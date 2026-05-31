--- 
title: materialized_table_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - materialized_table_versions
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

Creates, updates, deletes, gets or lists a <code>materialized_table_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="materialized_table_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sql.materialized_table_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sqlv1_materialized_table_version"
    values={[
        { label: 'get_sqlv1_materialized_table_version', value: 'get_sqlv1_materialized_table_version' },
        { label: 'list_sqlv1_materialized_table_versions', value: 'list_sqlv1_materialized_table_versions' }
    ]}
>
<TabItem value="get_sqlv1_materialized_table_version">

The requested Materialized Table Version.

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
    <td>The resource version name, unique within the Kafka cluster. Name conforms to DNS Subdomain (RFC 1123).  (pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>, example: mt-123-v4)</td>
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
    <td>Kind defines the object this REST resource represents. (MaterializedTableVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specifications of the Materialized Table Version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sqlv1_materialized_table_versions">

A list of Materialized Table Versions.

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
    <td>The resource version name, unique within the Kafka cluster. Name conforms to DNS Subdomain (RFC 1123).  (pattern: <code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>, example: mt-123-v4)</td>
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
    <td>Kind defines the object this REST resource represents. (MaterializedTableVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>The specifications of the Materialized Table Version.</td>
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
    <td><a href="#get_sqlv1_materialized_table_version"><CopyableCode code="get_sqlv1_materialized_table_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-table_name"><code>table_name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Retrieve a specific version of a Materialized Table.<br /></td>
</tr>
<tr>
    <td><a href="#list_sqlv1_materialized_table_versions"><CopyableCode code="list_sqlv1_materialized_table_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-kafka_cluster_id"><code>kafka_cluster_id</code></a>, <a href="#parameter-table_name"><code>table_name</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted and paginated list of all versions for a specific Materialized Table.<br /></td>
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
    <td>The unique identifier for the organization.</td>
</tr>
<tr id="parameter-table_name">
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Materialized Table.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>The version number of the Materialized Table.</td>
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
    defaultValue="get_sqlv1_materialized_table_version"
    values={[
        { label: 'get_sqlv1_materialized_table_version', value: 'get_sqlv1_materialized_table_version' },
        { label: 'list_sqlv1_materialized_table_versions', value: 'list_sqlv1_materialized_table_versions' }
    ]}
>
<TabItem value="get_sqlv1_materialized_table_version">

Retrieve a specific version of a Materialized Table.<br />

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec
FROM confluent.sql.materialized_table_versions
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' -- required
AND table_name = '{{ table_name }}' -- required
AND version = '{{ version }}' -- required
;
```
</TabItem>
<TabItem value="list_sqlv1_materialized_table_versions">

Retrieve a sorted and paginated list of all versions for a specific Materialized Table.<br />

```sql
SELECT
name,
environment_id,
organization_id,
api_version,
kind,
metadata,
spec
FROM confluent.sql.materialized_table_versions
WHERE organization_id = '{{ organization_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND kafka_cluster_id = '{{ kafka_cluster_id }}' -- required
AND table_name = '{{ table_name }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
