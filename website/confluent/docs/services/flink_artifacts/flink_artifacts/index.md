--- 
title: flink_artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - flink_artifacts
  - flink_artifacts
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

Creates, updates, deletes, gets or lists a <code>flink_artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flink_artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.flink_artifacts.flink_artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_artifact_v1_flink_artifact"
    values={[
        { label: 'get_artifact_v1_flink_artifact', value: 'get_artifact_v1_flink_artifact' },
        { label: 'list_artifact_v1_flink_artifacts', value: 'list_artifact_v1_flink_artifacts' }
    ]}
>
<TabItem value="get_artifact_v1_flink_artifact">

Flink Artifact.

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
    <td>Unique name of the Flink Artifact per cloud, region, environment scope.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (artifact/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>Java class or alias for the artifact as provided by developer. Deprecated (pattern: <code>^(([a-zA-Z][a-zA-Z_$0-9]*(\.[a-zA-Z][a-zA-Z_$0-9]*)*)\.)?([a-zA-Z][a-zA-Z_$0-9]*)$</code>, example: io.confluent.example.SumScalarFunction)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Cloud provider where the Flink Artifact archive is uploaded. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="content_format" /></td>
    <td><code>string</code></td>
    <td>Archive format of the Flink Artifact. (example: JAR)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Flink Artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation_link" /></td>
    <td><code>string</code></td>
    <td>Documentation link of the Flink Artifact. (pattern: <code>^$|^(http://|https://).+</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment the Flink Artifact belongs to. (example: env-00000)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (FlinkArtifact)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Cloud provider region the Flink Artifact archive is uploaded. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_language" /></td>
    <td><code>string</code></td>
    <td>Runtime language of the Flink Artifact. (example: JAVA, default: JAVA)</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>Versions associated with this Flink Artifact.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_artifact_v1_flink_artifacts">

Flink Artifact.

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
    <td>Unique name of the Flink Artifact per cloud, region, environment scope.</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (artifact/v1)</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>Java class or alias for the artifact as provided by developer. Deprecated (pattern: <code>^(([a-zA-Z][a-zA-Z_$0-9]*(\.[a-zA-Z][a-zA-Z_$0-9]*)*)\.)?([a-zA-Z][a-zA-Z_$0-9]*)$</code>, example: io.confluent.example.SumScalarFunction)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Cloud provider where the Flink Artifact archive is uploaded. (example: AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="content_format" /></td>
    <td><code>string</code></td>
    <td>Archive format of the Flink Artifact. (example: JAR)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Flink Artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation_link" /></td>
    <td><code>string</code></td>
    <td>Documentation link of the Flink Artifact. (pattern: <code>^$|^(http://|https://).+</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment the Flink Artifact belongs to. (example: env-00000)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (FlinkArtifact)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Cloud provider region the Flink Artifact archive is uploaded. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_language" /></td>
    <td><code>string</code></td>
    <td>Runtime language of the Flink Artifact. (example: JAVA, default: JAVA)</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>Versions associated with this Flink Artifact.</td>
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
    <td><a href="#get_artifact_v1_flink_artifact"><CopyableCode code="get_artifact_v1_flink_artifact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a flink artifact.</td>
</tr>
<tr>
    <td><a href="#list_artifact_v1_flink_artifacts"><CopyableCode code="list_artifact_v1_flink_artifacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environment"><code>environment</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all flink artifacts.</td>
</tr>
<tr>
    <td><a href="#create_artifact_v1_flink_artifact"><CopyableCode code="create_artifact_v1_flink_artifact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-upload_source"><code>upload_source</code></a></td>
    <td></td>
    <td>Make a request to create a flink artifact.</td>
</tr>
<tr>
    <td><a href="#update_artifact_v1_flink_artifact"><CopyableCode code="update_artifact_v1_flink_artifact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a flink artifact.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_artifact_v1_flink_artifact"><CopyableCode code="delete_artifact_v1_flink_artifact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a flink artifact.</td>
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
<tr id="parameter-cloud">
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given cloud. (example: AWS)</td>
</tr>
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given environment. (example: env-00000)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the flink artifact.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Scope the operation to the given region. (example: us-east-1)</td>
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
    defaultValue="get_artifact_v1_flink_artifact"
    values={[
        { label: 'get_artifact_v1_flink_artifact', value: 'get_artifact_v1_flink_artifact' },
        { label: 'list_artifact_v1_flink_artifacts', value: 'list_artifact_v1_flink_artifacts' }
    ]}
>
<TabItem value="get_artifact_v1_flink_artifact">

Make a request to read a flink artifact.

```sql
SELECT
id,
display_name,
api_version,
class,
cloud,
content_format,
description,
documentation_link,
environment,
kind,
metadata,
region,
runtime_language,
versions
FROM confluent.flink_artifacts.flink_artifacts
WHERE cloud = '{{ cloud }}' -- required
AND region = '{{ region }}' -- required
AND environment = '{{ environment }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_artifact_v1_flink_artifacts">

Retrieve a sorted, filtered, paginated list of all flink artifacts.

```sql
SELECT
id,
display_name,
api_version,
class,
cloud,
content_format,
description,
documentation_link,
environment,
kind,
metadata,
region,
runtime_language,
versions
FROM confluent.flink_artifacts.flink_artifacts
WHERE cloud = '{{ cloud }}' -- required
AND region = '{{ region }}' -- required
AND environment = '{{ environment }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_artifact_v1_flink_artifact"
    values={[
        { label: 'create_artifact_v1_flink_artifact', value: 'create_artifact_v1_flink_artifact' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_artifact_v1_flink_artifact">

Make a request to create a flink artifact.

```sql
INSERT INTO confluent.flink_artifacts.flink_artifacts (
cloud,
region,
environment,
display_name,
class,
content_format,
description,
documentation_link,
runtime_language,
upload_source,
cloud,
region
)
SELECT 
'{{ cloud }}' /* required */,
'{{ region }}' /* required */,
'{{ environment }}' /* required */,
'{{ display_name }}' /* required */,
'{{ class }}',
'{{ content_format }}',
'{{ description }}',
'{{ documentation_link }}',
'{{ runtime_language }}',
'{{ upload_source }}' /* required */,
'{{ cloud }}' /* required */,
'{{ region }}' /* required */
RETURNING
id,
display_name,
api_version,
class,
cloud,
content_format,
description,
documentation_link,
environment,
kind,
metadata,
region,
runtime_language,
versions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flink_artifacts
  props:
    - name: cloud
      value: "{{ cloud }}"
      description: Required parameter for the flink_artifacts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flink_artifacts resource.
    - name: cloud
      value: "{{ cloud }}"
      description: |
        Cloud provider where the Flink Artifact archive is uploaded.
    - name: region
      value: "{{ region }}"
      description: |
        The Cloud provider region the Flink Artifact archive is uploaded.
    - name: environment
      value: "{{ environment }}"
      description: |
        Environment the Flink Artifact belongs to.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Unique name of the Flink Artifact per cloud, region, environment scope.
    - name: class
      value: "{{ class }}"
      description: |
        Java class or alias for the artifact as provided by developer. Deprecated
    - name: content_format
      value: "{{ content_format }}"
      description: |
        Archive format of the Flink Artifact.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the Flink Artifact.
    - name: documentation_link
      value: "{{ documentation_link }}"
      description: |
        Documentation link of the Flink Artifact.
    - name: runtime_language
      value: "{{ runtime_language }}"
      description: |
        Runtime language of the Flink Artifact.
      default: JAVA
    - name: upload_source
      description: |
        Upload source of the Flink Artifact source.
      value:
        api_version: "{{ api_version }}"
        kind: "{{ kind }}"
        id: "{{ id }}"
        metadata:
          self: "{{ self }}"
          resource_name: "{{ resource_name }}"
          created_at: "{{ created_at }}"
          updated_at: "{{ updated_at }}"
          deleted_at: "{{ deleted_at }}"
        location: "{{ location }}"
        upload_id: "{{ upload_id }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_artifact_v1_flink_artifact"
    values={[
        { label: 'update_artifact_v1_flink_artifact', value: 'update_artifact_v1_flink_artifact' }
    ]}
>
<TabItem value="update_artifact_v1_flink_artifact">

Make a request to update a flink artifact.<br /><br />

```sql
UPDATE confluent.flink_artifacts.flink_artifacts
SET 
cloud = '{{ cloud }}',
region = '{{ region }}',
environment = '{{ environment }}',
display_name = '{{ display_name }}',
class = '{{ class }}',
content_format = '{{ content_format }}',
description = '{{ description }}',
documentation_link = '{{ documentation_link }}',
runtime_language = '{{ runtime_language }}',
versions = '{{ versions }}'
WHERE 
cloud = '{{ cloud }}' --required
AND region = '{{ region }}' --required
AND environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
class,
cloud,
content_format,
description,
documentation_link,
environment,
kind,
metadata,
region,
runtime_language,
versions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_artifact_v1_flink_artifact"
    values={[
        { label: 'delete_artifact_v1_flink_artifact', value: 'delete_artifact_v1_flink_artifact' }
    ]}
>
<TabItem value="delete_artifact_v1_flink_artifact">

Make a request to delete a flink artifact.

```sql
DELETE FROM confluent.flink_artifacts.flink_artifacts
WHERE cloud = '{{ cloud }}' --required
AND region = '{{ region }}' --required
AND environment = '{{ environment }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
