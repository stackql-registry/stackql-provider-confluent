--- 
title: top_level_config
hide_title: false
hide_table_of_contents: false
keywords:
  - top_level_config
  - schema_registry
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

Creates, updates, deletes, gets or lists a <code>top_level_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="top_level_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.top_level_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_top_level_config"
    values={[
        { label: 'get_top_level_config', value: 'get_top_level_config' }
    ]}
>
<TabItem value="get_top_level_config">

The global compatibility level.

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>If alias is specified, then this subject is an alias for the subject named by the alias. That means that any reference to this subject will be replaced by the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="compatibilityGroup" /></td>
    <td><code>string</code></td>
    <td>Only schemas that belong to the same compatibility group will be checked for compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="compatibilityLevel" /></td>
    <td><code>string</code></td>
    <td>Compatibility Level (example: FULL_TRANSITIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultMetadata" /></td>
    <td><code>object</code></td>
    <td>Default value for the metadata to be used during schema registration.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRuleSet" /></td>
    <td><code>object</code></td>
    <td>Default value for the ruleSet to be used during schema registration.</td>
</tr>
<tr>
    <td><CopyableCode code="normalize" /></td>
    <td><code>boolean</code></td>
    <td>If true, then schemas are automatically normalized when registered or when passed during lookups. This means that clients do not have to pass the "normalize" query parameter to have normalization occur.</td>
</tr>
<tr>
    <td><CopyableCode code="overrideMetadata" /></td>
    <td><code>object</code></td>
    <td>Override value for the metadata to be used during schema registration.</td>
</tr>
<tr>
    <td><CopyableCode code="overrideRuleSet" /></td>
    <td><code>object</code></td>
    <td>Override value for the ruleSet to be used during schema registration.</td>
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
    <td><a href="#get_top_level_config"><CopyableCode code="get_top_level_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieves the global compatibility level, compatibility group,<br />normalization, default metadata, and rule set.</td>
</tr>
<tr>
    <td><a href="#update_top_level_config"><CopyableCode code="update_top_level_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Updates the global compatibility level, compatibility group,<br />schema normalization, default metadata, and rule set. On success, echoes the<br />original request back to the client.</td>
</tr>
<tr>
    <td><a href="#delete_top_level_config"><CopyableCode code="delete_top_level_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Deletes the global compatibility level config and reverts to the default.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_top_level_config"
    values={[
        { label: 'get_top_level_config', value: 'get_top_level_config' }
    ]}
>
<TabItem value="get_top_level_config">

Retrieves the global compatibility level, compatibility group,<br />normalization, default metadata, and rule set.

```sql
SELECT
alias,
compatibilityGroup,
compatibilityLevel,
defaultMetadata,
defaultRuleSet,
normalize,
overrideMetadata,
overrideRuleSet
FROM confluent.schema_registry.top_level_config
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_top_level_config"
    values={[
        { label: 'update_top_level_config', value: 'update_top_level_config' }
    ]}
>
<TabItem value="update_top_level_config">

Updates the global compatibility level, compatibility group,<br />schema normalization, default metadata, and rule set. On success, echoes the<br />original request back to the client.

```sql
REPLACE confluent.schema_registry.top_level_config
SET 
alias = '{{ alias }}',
normalize = {{ normalize }},
compatibility = '{{ compatibility }}',
compatibilityGroup = '{{ compatibilityGroup }}',
defaultMetadata = '{{ defaultMetadata }}',
overrideMetadata = '{{ overrideMetadata }}',
defaultRuleSet = '{{ defaultRuleSet }}',
overrideRuleSet = '{{ overrideRuleSet }}'
RETURNING
alias,
compatibility,
compatibilityGroup,
defaultMetadata,
defaultRuleSet,
normalize,
overrideMetadata,
overrideRuleSet;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_top_level_config"
    values={[
        { label: 'delete_top_level_config', value: 'delete_top_level_config' }
    ]}
>
<TabItem value="delete_top_level_config">

Deletes the global compatibility level config and reverts to the default.

```sql
DELETE FROM confluent.schema_registry.top_level_config
;
```
</TabItem>
</Tabs>
