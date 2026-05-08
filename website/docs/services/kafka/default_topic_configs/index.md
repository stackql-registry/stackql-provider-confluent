--- 
title: default_topic_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - default_topic_configs
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

Creates, updates, deletes, gets or lists a <code>default_topic_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_topic_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.kafka.default_topic_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_kafka_default_topic_configs"
    values={[
        { label: 'list_kafka_default_topic_configs', value: 'list_kafka_default_topic_configs' }
    ]}
>
<TabItem value="list_kafka_default_topic_configs">

The list of cluster configs.

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
    <td><CopyableCode code="topic_name" /></td>
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
    <td><a href="#list_kafka_default_topic_configs"><CopyableCode code="list_kafka_default_topic_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a></td>
    <td></td>
    <td>List the default configuration parameters used if the topic were to be newly created.</td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The Kafka cluster ID. (example: cluster-1)</td>
</tr>
<tr id="parameter-topic_name">
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td>The topic name. (example: topic-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_kafka_default_topic_configs"
    values={[
        { label: 'list_kafka_default_topic_configs', value: 'list_kafka_default_topic_configs' }
    ]}
>
<TabItem value="list_kafka_default_topic_configs">

List the default configuration parameters used if the topic were to be newly created.

```sql
SELECT
name,
cluster_id,
topic_name,
is_default,
is_read_only,
is_sensitive,
kind,
metadata,
source,
synonyms,
value
FROM confluent.kafka.default_topic_configs
WHERE cluster_id = '{{ cluster_id }}' -- required
AND topic_name = '{{ topic_name }}' -- required
;
```
</TabItem>
</Tabs>
