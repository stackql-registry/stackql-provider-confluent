--- 
title: ip_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_groups
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

Creates, updates, deletes, gets or lists an <code>ip_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.ip_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_ip_group"
    values={[
        { label: 'get_iam_v2_ip_group', value: 'get_iam_v2_ip_group' },
        { label: 'list_iam_v2_ip_groups', value: 'list_iam_v2_ip_groups' }
    ]}
>
<TabItem value="get_iam_v2_ip_group">

IP Group.

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
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>A human readable name for an IP Group. Can contain any unicode letter or number, the ASCII space character, or any of the following special characters: `[`, `]`, `|`, `&`, `+`, `-`, `_`, `/`, `.`, `,`.  (example: CorpNet)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_blocks" /></td>
    <td><code>array</code></td>
    <td>A list of CIDRs.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IpGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_ip_groups">

IP Group.

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
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>A human readable name for an IP Group. Can contain any unicode letter or number, the ASCII space character, or any of the following special characters: `[`, `]`, `|`, `&`, `+`, `-`, `_`, `/`, `.`, `,`.  (example: CorpNet)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_blocks" /></td>
    <td><code>array</code></td>
    <td>A list of CIDRs.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IpGroup)</td>
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
    <td><a href="#get_iam_v2_ip_group"><CopyableCode code="get_iam_v2_ip_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an IP group.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_ip_groups"><CopyableCode code="list_iam_v2_ip_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all IP groups.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_ip_group"><CopyableCode code="create_iam_v2_ip_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-cidr_blocks"><code>cidr_blocks</code></a></td>
    <td></td>
    <td>Make a request to create an IP group.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_ip_group"><CopyableCode code="update_iam_v2_ip_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update an IP group.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_ip_group"><CopyableCode code="delete_iam_v2_ip_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an IP group.</td>
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
    <td>The unique identifier for the IP group.</td>
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
    defaultValue="get_iam_v2_ip_group"
    values={[
        { label: 'get_iam_v2_ip_group', value: 'get_iam_v2_ip_group' },
        { label: 'list_iam_v2_ip_groups', value: 'list_iam_v2_ip_groups' }
    ]}
>
<TabItem value="get_iam_v2_ip_group">

Make a request to read an IP group.

```sql
SELECT
id,
group_name,
api_version,
cidr_blocks,
kind,
metadata
FROM confluent.iam.ip_groups
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_ip_groups">

Retrieve a sorted, filtered, paginated list of all IP groups.

```sql
SELECT
id,
group_name,
api_version,
cidr_blocks,
kind,
metadata
FROM confluent.iam.ip_groups
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_ip_group"
    values={[
        { label: 'create_iam_v2_ip_group', value: 'create_iam_v2_ip_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_ip_group">

Make a request to create an IP group.

```sql
INSERT INTO confluent.iam.ip_groups (
group_name,
cidr_blocks
)
SELECT 
'{{ group_name }}' /* required */,
'{{ cidr_blocks }}' /* required */
RETURNING
id,
group_name,
api_version,
cidr_blocks,
kind,
metadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_groups
  props:
    - name: group_name
      value: "{{ group_name }}"
      description: |
        A human readable name for an IP Group. Can contain any unicode letter or number, the ASCII space character, or
        any of the following special characters: \`[\`, \`]\`, \`|\`, \`&\`, \`+\`, \`-\`, \`_\`, \`/\`, \`.\`, \`,\`.
    - name: cidr_blocks
      value:
        - "{{ cidr_blocks }}"
      description: |
        A list of CIDRs.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_v2_ip_group"
    values={[
        { label: 'update_iam_v2_ip_group', value: 'update_iam_v2_ip_group' }
    ]}
>
<TabItem value="update_iam_v2_ip_group">

Make a request to update an IP group.<br /><br />

```sql
UPDATE confluent.iam.ip_groups
SET 
group_name = '{{ group_name }}',
cidr_blocks = '{{ cidr_blocks }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
group_name,
api_version,
cidr_blocks,
kind,
metadata;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_ip_group"
    values={[
        { label: 'delete_iam_v2_ip_group', value: 'delete_iam_v2_ip_group' }
    ]}
>
<TabItem value="delete_iam_v2_ip_group">

Make a request to delete an IP group.

```sql
DELETE FROM confluent.iam.ip_groups
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
