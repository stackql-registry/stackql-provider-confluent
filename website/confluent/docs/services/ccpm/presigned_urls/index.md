--- 
title: presigned_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - presigned_urls
  - ccpm
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
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.ccpm.presigned_urls" /></td></tr>
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
    <td><a href="#create_ccpm_v1_presigned_url"><CopyableCode code="create_ccpm_v1_presigned_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-content_format"><code>content_format</code></a>, <a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td>Request a presigned upload URL to upload a Custom Connect Plugin archive.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_ccpm_v1_presigned_url"
    values={[
        { label: 'create_ccpm_v1_presigned_url', value: 'create_ccpm_v1_presigned_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ccpm_v1_presigned_url">

Request a presigned upload URL to upload a Custom Connect Plugin archive.

```sql
INSERT INTO confluent.ccpm.presigned_urls (
content_format,
cloud,
environment
)
SELECT 
'{{ content_format }}' /* required */,
'{{ cloud }}' /* required */,
'{{ environment }}' /* required */
RETURNING
upload_id,
api_version,
cloud,
content_format,
environment,
kind,
upload_form_data,
upload_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: presigned_urls
  props:
    - name: content_format
      value: "{{ content_format }}"
      description: |
        Content format of the Custom Connect Plugin archive.
    - name: cloud
      value: "{{ cloud }}"
      description: |
        Cloud provider where the Custom Connect Plugin archive is uploaded.
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
