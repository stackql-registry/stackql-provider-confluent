--- 
title: ip_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_filters
  - iam
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

Creates, updates, deletes, gets or lists an <code>ip_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.ip_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_ip_filter"
    values={[
        { label: 'get_iam_v2_ip_filter', value: 'get_iam_v2_ip_filter' },
        { label: 'list_iam_v2_ip_filters', value: 'list_iam_v2_ip_filters' }
    ]}
>
<TabItem value="get_iam_v2_ip_filter">

IP Filter.

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
    <td><CopyableCode code="filter_name" /></td>
    <td><code>string</code></td>
    <td>A human readable name for an IP Filter. Can contain any unicode letter or number, the ASCII space character, or any of the following special characters: `[`, `]`, `|`, `&`, `+`, `-`, `_`, `/`, `.`, `,`.  (example: Management API Rules)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_groups" /></td>
    <td><code>array</code></td>
    <td>A list of IP Groups.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IpFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_groups" /></td>
    <td><code>array</code></td>
    <td>Scope of resources covered by this IP filter. Resource group must be set to 'multiple' in order to use this property.During update operations, note that the operation groups passed in will replace the list of existing operation groups (passing in an empty list will remove all operation groups) from the filter (in line with the behavior for ip_groups). </td>
</tr>
<tr>
    <td><CopyableCode code="resource_group" /></td>
    <td><code>string</code></td>
    <td>Scope of resources covered by this IP filter. Available resource groups include "management" and "multiple".  (example: management)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_scope" /></td>
    <td><code>string (uri)</code></td>
    <td>A CRN that specifies the scope of the ip filter, specifically the organization or environment. Without specifying this property, the ip filter would apply to the whole organization.  (example: crn://confluent.cloud/organization=org-123/environment=env-abc, pattern: <code>^crn://.+$</code>)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_ip_filters">

IP Filter.

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
    <td><CopyableCode code="filter_name" /></td>
    <td><code>string</code></td>
    <td>A human readable name for an IP Filter. Can contain any unicode letter or number, the ASCII space character, or any of the following special characters: `[`, `]`, `|`, `&`, `+`, `-`, `_`, `/`, `.`, `,`.  (example: Management API Rules)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_groups" /></td>
    <td><code>array</code></td>
    <td>A list of IP Groups.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IpFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_groups" /></td>
    <td><code>array</code></td>
    <td>Scope of resources covered by this IP filter. Resource group must be set to 'multiple' in order to use this property.During update operations, note that the operation groups passed in will replace the list of existing operation groups (passing in an empty list will remove all operation groups) from the filter (in line with the behavior for ip_groups). </td>
</tr>
<tr>
    <td><CopyableCode code="resource_group" /></td>
    <td><code>string</code></td>
    <td>Scope of resources covered by this IP filter. Available resource groups include "management" and "multiple".  (example: management)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_scope" /></td>
    <td><code>string (uri)</code></td>
    <td>A CRN that specifies the scope of the ip filter, specifically the organization or environment. Without specifying this property, the ip filter would apply to the whole organization.  (example: crn://confluent.cloud/organization=org-123/environment=env-abc, pattern: <code>^crn://.+$</code>)</td>
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
    <td><a href="#get_iam_v2_ip_filter"><CopyableCode code="get_iam_v2_ip_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an IP filter.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_ip_filters"><CopyableCode code="list_iam_v2_ip_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-resource_scope"><code>resource_scope</code></a>, <a href="#parameter-include_parent_scopes"><code>include_parent_scopes</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all IP filters.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_ip_filter"><CopyableCode code="create_iam_v2_ip_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-filter_name"><code>filter_name</code></a>, <a href="#parameter-resource_group"><code>resource_group</code></a>, <a href="#parameter-ip_groups"><code>ip_groups</code></a></td>
    <td></td>
    <td>Make a request to create an IP filter.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_ip_filter"><CopyableCode code="update_iam_v2_ip_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update an IP filter.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_ip_filter"><CopyableCode code="delete_iam_v2_ip_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an IP filter.</td>
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
    <td>The unique identifier for the IP filter.</td>
</tr>
<tr id="parameter-include_parent_scopes">
    <td><CopyableCode code="include_parent_scopes" /></td>
    <td><code>string</code></td>
    <td>If set to true, this includes filters defined at the organization level. The resource scope must also be set to use this parameter.</td>
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
<tr id="parameter-resource_scope">
    <td><CopyableCode code="resource_scope" /></td>
    <td><code>string</code></td>
    <td>Lists all filters belonging to the specified resource scope.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_iam_v2_ip_filter"
    values={[
        { label: 'get_iam_v2_ip_filter', value: 'get_iam_v2_ip_filter' },
        { label: 'list_iam_v2_ip_filters', value: 'list_iam_v2_ip_filters' }
    ]}
>
<TabItem value="get_iam_v2_ip_filter">

Make a request to read an IP filter.

```sql
SELECT
id,
filter_name,
api_version,
ip_groups,
kind,
metadata,
operation_groups,
resource_group,
resource_scope
FROM confluent.iam.ip_filters
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_ip_filters">

Retrieve a sorted, filtered, paginated list of all IP filters.

```sql
SELECT
id,
filter_name,
api_version,
ip_groups,
kind,
metadata,
operation_groups,
resource_group,
resource_scope
FROM confluent.iam.ip_filters
WHERE resource_scope = '{{ resource_scope }}'
AND include_parent_scopes = '{{ include_parent_scopes }}'
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_ip_filter"
    values={[
        { label: 'create_iam_v2_ip_filter', value: 'create_iam_v2_ip_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_ip_filter">

Make a request to create an IP filter.

```sql
INSERT INTO confluent.iam.ip_filters (
filter_name,
resource_group,
resource_scope,
operation_groups,
ip_groups
)
SELECT 
'{{ filter_name }}' /* required */,
'{{ resource_group }}' /* required */,
'{{ resource_scope }}',
'{{ operation_groups }}',
'{{ ip_groups }}' /* required */
RETURNING
id,
filter_name,
api_version,
ip_groups,
kind,
metadata,
operation_groups,
resource_group,
resource_scope
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_filters
  props:
    - name: filter_name
      value: "{{ filter_name }}"
      description: |
        A human readable name for an IP Filter. Can contain any unicode letter or number, the ASCII space character,
        or any of the following special characters: \`[\`, \`]\`, \`|\`, \`&\`, \`+\`, \`-\`, \`_\`, \`/\`, \`.\`, \`,\`.
    - name: resource_group
      value: "{{ resource_group }}"
      description: |
        Scope of resources covered by this IP filter. Available resource groups include "management" and "multiple".
    - name: resource_scope
      value: "{{ resource_scope }}"
      description: |
        A CRN that specifies the scope of the ip filter, specifically the organization
        or environment. Without specifying this property, the ip filter
        would apply to the whole organization.
    - name: operation_groups
      value:
        - "{{ operation_groups }}"
      description: |
        Scope of resources covered by this IP filter. Resource group must be set to 'multiple'
        in order to use this property.During update operations, note that the operation
        groups passed in will replace the list of existing operation groups
        (passing in an empty list will remove all operation groups) from the filter
        (in line with the behavior for ip_groups).
    - name: ip_groups
      description: |
        A list of IP Groups.
      value:
        - id: "{{ id }}"
          related: "{{ related }}"
          resource_name: "{{ resource_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_v2_ip_filter"
    values={[
        { label: 'update_iam_v2_ip_filter', value: 'update_iam_v2_ip_filter' }
    ]}
>
<TabItem value="update_iam_v2_ip_filter">

Make a request to update an IP filter.<br /><br />

```sql
UPDATE confluent.iam.ip_filters
SET 
filter_name = '{{ filter_name }}',
resource_group = '{{ resource_group }}',
resource_scope = '{{ resource_scope }}',
operation_groups = '{{ operation_groups }}',
ip_groups = '{{ ip_groups }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
filter_name,
api_version,
ip_groups,
kind,
metadata,
operation_groups,
resource_group,
resource_scope;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_ip_filter"
    values={[
        { label: 'delete_iam_v2_ip_filter', value: 'delete_iam_v2_ip_filter' }
    ]}
>
<TabItem value="delete_iam_v2_ip_filter">

Make a request to delete an IP filter.

```sql
DELETE FROM confluent.iam.ip_filters
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
