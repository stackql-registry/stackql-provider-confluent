--- 
title: subject_level_config
hide_title: false
hide_table_of_contents: false
keywords:
  - subject_level_config
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

Creates, updates, deletes, gets or lists a <code>subject_level_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subject_level_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.subject_level_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subject_level_config"
    values={[
        { label: 'get_subject_level_config', value: 'get_subject_level_config' }
    ]}
>
<TabItem value="get_subject_level_config">

The subject compatibility level.

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
    <td><a href="#get_subject_level_config"><CopyableCode code="get_subject_level_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-defaultToGlobal"><code>defaultToGlobal</code></a></td>
    <td>Retrieves compatibility level, compatibility group, normalization,<br />default metadata, and rule set for a subject.</td>
</tr>
<tr>
    <td><a href="#update_subject_level_config"><CopyableCode code="update_subject_level_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td></td>
    <td>Update compatibility level, compatibility group, normalization,<br />default metadata, and rule set for the specified subject. On success,<br />echoes the original request back to the client.</td>
</tr>
<tr>
    <td><a href="#delete_subject_config"><CopyableCode code="delete_subject_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td></td>
    <td>Deletes the specified subject-level compatibility level config and reverts to the global default.</td>
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
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject</td>
</tr>
<tr id="parameter-defaultToGlobal">
    <td><CopyableCode code="defaultToGlobal" /></td>
    <td><code>boolean</code></td>
    <td>Whether to return the global compatibility level  if subject compatibility level not found</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subject_level_config"
    values={[
        { label: 'get_subject_level_config', value: 'get_subject_level_config' }
    ]}
>
<TabItem value="get_subject_level_config">

Retrieves compatibility level, compatibility group, normalization,<br />default metadata, and rule set for a subject.

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
FROM confluent.schema_registry.subject_level_config
WHERE subject = '{{ subject }}' -- required
AND defaultToGlobal = '{{ defaultToGlobal }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_subject_level_config"
    values={[
        { label: 'update_subject_level_config', value: 'update_subject_level_config' }
    ]}
>
<TabItem value="update_subject_level_config">

Update compatibility level, compatibility group, normalization,<br />default metadata, and rule set for the specified subject. On success,<br />echoes the original request back to the client.

```sql
REPLACE confluent.schema_registry.subject_level_config
SET 
alias = '{{ alias }}',
normalize = {{ normalize }},
compatibility = '{{ compatibility }}',
compatibilityGroup = '{{ compatibilityGroup }}',
defaultMetadata = '{{ defaultMetadata }}',
overrideMetadata = '{{ overrideMetadata }}',
defaultRuleSet = '{{ defaultRuleSet }}',
overrideRuleSet = '{{ overrideRuleSet }}'
WHERE 
subject = '{{ subject }}' --required
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
    defaultValue="delete_subject_config"
    values={[
        { label: 'delete_subject_config', value: 'delete_subject_config' }
    ]}
>
<TabItem value="delete_subject_config">

Deletes the specified subject-level compatibility level config and reverts to the global default.

```sql
DELETE FROM confluent.schema_registry.subject_level_config
WHERE subject = '{{ subject }}' --required
;
```
</TabItem>
</Tabs>
