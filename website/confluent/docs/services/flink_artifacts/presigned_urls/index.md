--- 
title: presigned_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - presigned_urls
  - flink_artifacts
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

Creates, updates, deletes, gets or lists a <code>presigned_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="presigned_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.flink_artifacts.presigned_urls" /></td></tr>
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
    <td><a href="#presigned_upload_url_artifact_v1_presigned_url"><CopyableCode code="presigned_upload_url_artifact_v1_presigned_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-content_format"><code>content_format</code></a>, <a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td>Request a presigned upload URL to upload a Flink Artifact archive.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="presigned_upload_url_artifact_v1_presigned_url"
    values={[
        { label: 'presigned_upload_url_artifact_v1_presigned_url', value: 'presigned_upload_url_artifact_v1_presigned_url' }
    ]}
>
<TabItem value="presigned_upload_url_artifact_v1_presigned_url">

Request a presigned upload URL to upload a Flink Artifact archive.

```sql
EXEC confluent.flink_artifacts.presigned_urls.presigned_upload_url_artifact_v1_presigned_url 
@@json=
'{
"content_format": "{{ content_format }}", 
"cloud": "{{ cloud }}", 
"region": "{{ region }}", 
"environment": "{{ environment }}"
}'
;
```
</TabItem>
</Tabs>
