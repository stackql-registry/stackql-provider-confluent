--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
  - kafka
  - kafka
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage kafka resources using SQL
custom_edit_url: null
image: /img/stackql-kafka-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="kafka.kafka.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#produce_record"><CopyableCode code="produce_record" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-topic_name"><code>topic_name</code></a>, <a href="#parameter-kafka_endpoint_id"><code>kafka_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud_provider"><code>cloud_provider</code></a></td>
    <td></td>
    <td>Produce records to the given topic, returning delivery reports for each<br />record produced. This API can be used in streaming mode by setting<br />"Transfer-Encoding: chunked" header. For as long as the connection is<br />kept open, the server will keep accepting records. Records are streamed<br />to and from the server as Concatenated JSON. For each record sent to the<br />server, the server will asynchronously send back a delivery report, in<br />the same order, each with its own error_code. An error_code of 200<br />indicates success. The HTTP status code will be HTTP 200 OK as long as<br />the connection is successfully established. To identify records that<br />have encountered an error, check the error_code of each delivery report.<br /><br />Note that the cluster_id is validated only when running in Confluent Cloud.<br /><br />This API currently does not support Schema Registry integration. Sending<br />schemas is not supported. Only BINARY, JSON, and STRING formats are<br />supported.</td>
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
<tr id="parameter-cloud_provider">
    <td><CopyableCode code="cloud_provider" /></td>
    <td><code>string</code></td>
    <td>Cloud provider, lowercase: aws, gcp, or azure (from the cluster spec.cloud). (default: cloud)</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The Kafka cluster ID. (example: cluster-1)</td>
</tr>
<tr id="parameter-kafka_endpoint_id">
    <td><CopyableCode code="kafka_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>Per-cluster Kafka REST endpoint ID (the pkc-* host prefix from the Confluent UI Cluster -&gt; Overview -&gt; REST endpoint, or extract from confluent.managed_kafka_clusters.clusters spec.http_endpoint). (default: pkc-00000)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Cloud region the cluster runs in, e.g. ap-southeast-2 (from the cluster spec.region). (default: region)</td>
</tr>
<tr id="parameter-topic_name">
    <td><CopyableCode code="topic_name" /></td>
    <td><code>string</code></td>
    <td>The topic name. (example: topic-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="produce_record"
    values={[
        { label: 'produce_record', value: 'produce_record' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="produce_record">

Produce records to the given topic, returning delivery reports for each<br />record produced. This API can be used in streaming mode by setting<br />"Transfer-Encoding: chunked" header. For as long as the connection is<br />kept open, the server will keep accepting records. Records are streamed<br />to and from the server as Concatenated JSON. For each record sent to the<br />server, the server will asynchronously send back a delivery report, in<br />the same order, each with its own error_code. An error_code of 200<br />indicates success. The HTTP status code will be HTTP 200 OK as long as<br />the connection is successfully established. To identify records that<br />have encountered an error, check the error_code of each delivery report.<br /><br />Note that the cluster_id is validated only when running in Confluent Cloud.<br /><br />This API currently does not support Schema Registry integration. Sending<br />schemas is not supported. Only BINARY, JSON, and STRING formats are<br />supported.

```sql
INSERT INTO kafka.kafka.records (
partition_id,
headers,
key,
value,
timestamp,
cluster_id,
topic_name,
kafka_endpoint_id,
region,
cloud_provider
)
SELECT 
{{ partition_id }},
'{{ headers }}',
'{{ key }}',
'{{ value }}',
'{{ timestamp }}',
'{{ cluster_id }}',
'{{ topic_name }}',
'{{ kafka_endpoint_id }}',
'{{ region }}',
'{{ cloud_provider }}'
RETURNING
cluster_id,
partition_id,
topic_name,
error_code,
key,
message,
offset,
timestamp,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: records
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the records resource.
    - name: topic_name
      value: "{{ topic_name }}"
      description: Required parameter for the records resource.
    - name: kafka_endpoint_id
      value: "{{ kafka_endpoint_id }}"
      description: Required parameter for the records resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the records resource.
    - name: cloud_provider
      value: "{{ cloud_provider }}"
      description: Required parameter for the records resource.
    - name: partition_id
      value: {{ partition_id }}
    - name: headers
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: key
      value:
        type: "{{ type }}"
        data: "{{ data }}"
    - name: value
      value:
        type: "{{ type }}"
        data: "{{ data }}"
    - name: timestamp
      value: "{{ timestamp }}"
`}</CodeBlock>

</TabItem>
</Tabs>
