--- 
title: organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations
  - org
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

Creates, updates, deletes, gets or lists an <code>organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.org.organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_v2_organization"
    values={[
        { label: 'get_org_v2_organization', value: 'get_org_v2_organization' },
        { label: 'list_org_v2_organizations', value: 'list_org_v2_organizations' }
    ]}
>
<TabItem value="get_org_v2_organization">

Organization.

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
    <td>A human-readable name for the Organization (example: Finance Org, pattern: <code>^[^&lt;&gt;#%'*^`&#123;|&#125;~\"]&#123;1,31&#125;$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (org/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="jit_enabled" /></td>
    <td><code>boolean</code></td>
    <td>The flag to toggle Just-In-Time user provisioning for SSO-enabled organization. Available for early access only.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_v2_organizations">

Organization.

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
    <td>A human-readable name for the Organization (example: Finance Org, pattern: <code>^[^&lt;&gt;#%'*^`&#123;|&#125;~\"]&#123;1,31&#125;$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (org/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="jit_enabled" /></td>
    <td><code>boolean</code></td>
    <td>The flag to toggle Just-In-Time user provisioning for SSO-enabled organization. Available for early access only.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
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
    <td><a href="#get_org_v2_organization"><CopyableCode code="get_org_v2_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an organization.</td>
</tr>
<tr>
    <td><a href="#list_org_v2_organizations"><CopyableCode code="list_org_v2_organizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all organizations.</td>
</tr>
<tr>
    <td><a href="#update_org_v2_organization"><CopyableCode code="update_org_v2_organization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update an organization.<br /><br /></td>
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
    <td>The unique identifier for the organization.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_v2_organization"
    values={[
        { label: 'get_org_v2_organization', value: 'get_org_v2_organization' },
        { label: 'list_org_v2_organizations', value: 'list_org_v2_organizations' }
    ]}
>
<TabItem value="get_org_v2_organization">

Make a request to read an organization.

```sql
SELECT
id,
display_name,
api_version,
jit_enabled,
kind,
metadata
FROM confluent.org.organizations
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_org_v2_organizations">

Retrieve a sorted, filtered, paginated list of all organizations.

```sql
SELECT
id,
display_name,
api_version,
jit_enabled,
kind,
metadata
FROM confluent.org.organizations
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_v2_organization"
    values={[
        { label: 'update_org_v2_organization', value: 'update_org_v2_organization' }
    ]}
>
<TabItem value="update_org_v2_organization">

Make a request to update an organization.<br /><br />

```sql
UPDATE confluent.org.organizations
SET 
display_name = '{{ display_name }}',
jit_enabled = {{ jit_enabled }}
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
jit_enabled,
kind,
metadata;
```
</TabItem>
</Tabs>
