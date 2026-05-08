--- 
title: oauth_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_tokens
  - sts
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

Creates, updates, deletes, gets or lists an <code>oauth_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.sts.oauth_tokens" /></td></tr>
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
    <td><a href="#exchange_sts_v1_oauth_token"><CopyableCode code="exchange_sts_v1_oauth_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subject_token"><code>subject_token</code></a>, <a href="#parameter-grant_type"><code>grant_type</code></a>, <a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-subject_token_type"><code>subject_token_type</code></a>, <a href="#parameter-requested_token_type"><code>requested_token_type</code></a></td>
    <td></td>
    <td>Use this operation to exchange an access token (JWT) issued by an external identity provider for<br />an access token (JWT) issued by Confluent.This enables the use of external identities<br />to access Confluent Cloud APIs.<br /></td>
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
    defaultValue="exchange_sts_v1_oauth_token"
    values={[
        { label: 'exchange_sts_v1_oauth_token', value: 'exchange_sts_v1_oauth_token' }
    ]}
>
<TabItem value="exchange_sts_v1_oauth_token">

Use this operation to exchange an access token (JWT) issued by an external identity provider for<br />an access token (JWT) issued by Confluent.This enables the use of external identities<br />to access Confluent Cloud APIs.<br />

```sql
EXEC confluent.sts.oauth_tokens.exchange_sts_v1_oauth_token 
@@json=
'{
"grant_type": "{{ grant_type }}", 
"subject_token": "{{ subject_token }}", 
"identity_pool_id": "{{ identity_pool_id }}", 
"subject_token_type": "{{ subject_token_type }}", 
"requested_token_type": "{{ requested_token_type }}", 
"expires_in": {{ expires_in }}
}'
;
```
</TabItem>
</Tabs>
