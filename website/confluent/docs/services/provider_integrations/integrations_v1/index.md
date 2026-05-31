--- 
title: integrations_v1
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations_v1
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

Creates, updates, deletes, gets or lists an <code>integrations_v1</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations_v1" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.provider_integrations.integrations_v1" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pim_v1_integration"
    values={[
        { label: 'get_pim_v1_integration', value: 'get_pim_v1_integration' },
        { label: 'list_pim_v1_integrations', value: 'list_pim_v1_integrations' }
    ]}
>
<TabItem value="get_pim_v1_integration">

Integration.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of Provider Integration. (example: s3_provider_integration)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (pim/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Cloud provider specific configs for provider integration</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment to which this belongs. (x-immutable: true')</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Integration)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Cloud provider to which access is provided through provider integration. (example: AWS, default: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="usages" /></td>
    <td><code>array</code></td>
    <td>List of resource crns where this integration is being used.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pim_v1_integrations">

Integration.

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of Provider Integration. (example: s3_provider_integration)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (pim/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Cloud provider specific configs for provider integration</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td>The environment to which this belongs. (x-immutable: true')</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Integration)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Cloud provider to which access is provided through provider integration. (example: AWS, default: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="usages" /></td>
    <td><code>array</code></td>
    <td>List of resource crns where this integration is being used.</td>
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
    <td><a href="#get_pim_v1_integration"><CopyableCode code="get_pim_v1_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an integration.</td>
</tr>
<tr>
    <td><a href="#list_pim_v1_integrations"><CopyableCode code="list_pim_v1_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all integrations.<br /><br />If no `provider` filter is specified, returns provider integrations from all clouds.<br /></td>
</tr>
<tr>
    <td><a href="#create_pim_v1_integration"><CopyableCode code="create_pim_v1_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-config"><code>config</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td></td>
    <td>Make a request to create an integration.</td>
</tr>
<tr>
    <td><a href="#delete_pim_v1_integration"><CopyableCode code="delete_pim_v1_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an integration.<br /><br />This request fails if existing workloads are using this CSP integration.<br /></td>
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
    <td>The unique identifier for the integration.</td>
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
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Filter the results by exact match for provider. (example: AWS)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pim_v1_integration"
    values={[
        { label: 'get_pim_v1_integration', value: 'get_pim_v1_integration' },
        { label: 'list_pim_v1_integrations', value: 'list_pim_v1_integrations' }
    ]}
>
<TabItem value="get_pim_v1_integration">

Make a request to read an integration.

```sql
SELECT
id,
display_name,
api_version,
config,
environment,
kind,
provider,
usages
FROM confluent.provider_integrations.integrations_v1
WHERE environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_pim_v1_integrations">

Retrieve a sorted, filtered, paginated list of all integrations.<br /><br />If no `provider` filter is specified, returns provider integrations from all clouds.<br />

```sql
SELECT
id,
display_name,
api_version,
config,
environment,
kind,
provider,
usages
FROM confluent.provider_integrations.integrations_v1
WHERE environment = '{{ environment }}' -- required
AND provider = '{{ provider }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pim_v1_integration"
    values={[
        { label: 'create_pim_v1_integration', value: 'create_pim_v1_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pim_v1_integration">

Make a request to create an integration.

```sql
INSERT INTO confluent.provider_integrations.integrations_v1 (
display_name,
provider,
config,
environment
)
SELECT 
'{{ display_name }}',
'{{ provider }}',
'{{ config }}' /* required */,
'{{ environment }}' /* required */
RETURNING
id,
display_name,
api_version,
config,
environment,
kind,
provider,
usages
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations_v1
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Display name of Provider Integration.
    - name: provider
      value: "{{ provider }}"
      description: |
        Cloud provider to which access is provided through provider integration.
      default: AWS
    - name: config
      description: |
        Cloud provider specific configs for provider integration
      value:
        iam_role_arn: "{{ iam_role_arn }}"
        external_id: "{{ external_id }}"
        customer_iam_role_arn: "{{ customer_iam_role_arn }}"
        kind: "{{ kind }}"
    - name: environment
      description: |
        The environment to which this belongs.
      value:
        id: "{{ id }}"
        related: "{{ related }}"
        resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pim_v1_integration"
    values={[
        { label: 'delete_pim_v1_integration', value: 'delete_pim_v1_integration' }
    ]}
>
<TabItem value="delete_pim_v1_integration">

Make a request to delete an integration.<br /><br />This request fails if existing workloads are using this CSP integration.<br />

```sql
DELETE FROM confluent.provider_integrations.integrations_v1
WHERE environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
