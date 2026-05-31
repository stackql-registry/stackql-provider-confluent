--- 
title: shared_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_tokens
  - stream_sharing
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

Creates, updates, deletes, gets or lists a <code>shared_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.stream_sharing.shared_tokens" /></td></tr>
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
    <td><a href="#resources_cdx_v1_shared_token"><CopyableCode code="resources_cdx_v1_shared_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Validate and decrypt the shared token and view token's shared resources</td>
</tr>
<tr>
    <td><a href="#redeem_cdx_v1_shared_token"><CopyableCode code="redeem_cdx_v1_shared_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Redeem the shared token for shared topic and cluster access information</td>
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
    defaultValue="resources_cdx_v1_shared_token"
    values={[
        { label: 'resources_cdx_v1_shared_token', value: 'resources_cdx_v1_shared_token' },
        { label: 'redeem_cdx_v1_shared_token', value: 'redeem_cdx_v1_shared_token' }
    ]}
>
<TabItem value="resources_cdx_v1_shared_token">

Validate and decrypt the shared token and view token's shared resources

```sql
EXEC confluent.stream_sharing.shared_tokens.resources_cdx_v1_shared_token 
@@json=
'{
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="redeem_cdx_v1_shared_token">

Redeem the shared token for shared topic and cluster access information

```sql
EXEC confluent.stream_sharing.shared_tokens.redeem_cdx_v1_shared_token 
@@json=
'{
"token": "{{ token }}", 
"aws_account": "{{ aws_account }}", 
"azure_subscription": "{{ azure_subscription }}", 
"gcp_project": "{{ gcp_project }}"
}'
;
```
</TabItem>
</Tabs>
