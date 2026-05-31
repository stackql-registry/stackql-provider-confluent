--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - provider_integrations
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.provider_integrations.integrations" /></td></tr>
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
    <td><a href="#update_pim_v2_integration"><CopyableCode code="update_pim_v2_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td> Make a request to update an integration.<br /><br />This request only works for integrations with `DRAFT` status.<br /><br /><br /></td>
</tr>
<tr>
    <td><a href="#validate_pim_v2_integration"><CopyableCode code="validate_pim_v2_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td> Validate the provider integration configuration.<br /></td>
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
    <td>The unique identifier for the integration.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_pim_v2_integration"
    values={[
        { label: 'update_pim_v2_integration', value: 'update_pim_v2_integration' }
    ]}
>
<TabItem value="update_pim_v2_integration">

 Make a request to update an integration.<br /><br />This request only works for integrations with `DRAFT` status.<br /><br /><br />

```sql
UPDATE confluent.provider_integrations.integrations
SET 
display_name = '{{ display_name }}',
provider = '{{ provider }}',
config = '{{ config }}',
environment = '{{ environment }}'
WHERE 
id = '{{ id }}' --required
AND environment = '{{ environment }}' --required
RETURNING
id,
display_name,
api_version,
config,
environment,
kind,
provider,
status,
usages;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_pim_v2_integration"
    values={[
        { label: 'validate_pim_v2_integration', value: 'validate_pim_v2_integration' }
    ]}
>
<TabItem value="validate_pim_v2_integration">

 Validate the provider integration configuration.<br />

```sql
EXEC confluent.provider_integrations.integrations.validate_pim_v2_integration 
@@json=
'{
"id": "{{ id }}", 
"config": "{{ config }}", 
"environment": "{{ environment }}"
}'
;
```
</TabItem>
</Tabs>
