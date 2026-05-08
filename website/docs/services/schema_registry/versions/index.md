--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.schema_registry.versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema_by_version"
    values={[
        { label: 'get_schema_by_version', value: 'get_schema_by_version' },
        { label: 'get_versions', value: 'get_versions' },
        { label: 'list_versions', value: 'list_versions' }
    ]}
>
<TabItem value="get_schema_by_version">

The schema.

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
    <td><code>integer (int32)</code></td>
    <td>Globally unique identifier of the schema</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>User-defined metadata</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>References to other schemas</td>
</tr>
<tr>
    <td><CopyableCode code="ruleSet" /></td>
    <td><code>object</code></td>
    <td>Schema rule set</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>Schema definition string (example: &#123;"schema": "&#123;"type": "string"&#125;"&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="schemaTags" /></td>
    <td><code>array</code></td>
    <td>Schema tags</td>
</tr>
<tr>
    <td><CopyableCode code="schemaType" /></td>
    <td><code>string</code></td>
    <td>Schema type (example: AVRO)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Version number</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_versions">

List of subject versions matching the specified parameters.

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
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int32)</code></td>
    <td>Version number</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_versions">

List of version numbers matching the specified parameters.

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
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><a href="#get_schema_by_version"><CopyableCode code="get_schema_by_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-format"><code>format</code></a>, <a href="#parameter-deleted"><code>deleted</code></a></td>
    <td>Retrieves a specific version of the schema registered under this subject.</td>
</tr>
<tr>
    <td><a href="#get_versions"><CopyableCode code="get_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Get all the subject-version pairs associated with the input ID.</td>
</tr>
<tr>
    <td><a href="#list_versions"><CopyableCode code="list_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-deleted"><code>deleted</code></a>, <a href="#parameter-deletedOnly"><code>deletedOnly</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Retrieves a list of versions registered under the specified subject.</td>
</tr>
<tr>
    <td><a href="#register"><CopyableCode code="register" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a></td>
    <td><a href="#parameter-normalize"><code>normalize</code></a>, <a href="#parameter-format"><code>format</code></a></td>
    <td>Register a new schema under the specified subject. If successfully registered, this returns the unique identifier of this schema in the registry. The returned identifier should be used to retrieve this schema from the schemas resource and is different from the schema's version which is associated with the subject. If the same schema is registered under a different subject, the same identifier will be returned. However, the version of the schema may be different under different subjects.<br />A schema should be compatible with the previously registered schema or schemas (if there are any) as per the configured compatibility level. The configured compatibility level can be obtained by issuing a GET http:get:: /config/(string: subject). If that returns null, then GET http:get:: /config<br />When there are multiple instances of Schema Registry running in the same cluster, the schema registration request will be forwarded to one of the instances designated as the primary. If the primary is not available, the client will get an error code indicating that the forwarding has failed.</td>
</tr>
<tr>
    <td><a href="#delete_schema_version"><CopyableCode code="delete_schema_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subject"><code>subject</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-permanent"><code>permanent</code></a></td>
    <td>Deletes a specific version of the schema registered under this subject. This only deletes the version and the schema ID remains intact making it still possible to decode data using the schema ID. This API is recommended to be used only in development environments or under extreme circumstances where-in, its required to delete a previously registered schema for compatibility purposes or re-register previously registered schema.</td>
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
    <td><code>integer (int32)</code></td>
    <td>Globally unique identifier of the schema</td>
</tr>
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Name of the subject</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the schema to be returned. Valid values for versionId are between [1,2^31-1] or the string "latest". "latest" returns the last registered schema under the specified subject. Note that there may be a new latest schema that gets registered right after this request is served.</td>
</tr>
<tr id="parameter-deleted">
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include deleted schemas</td>
</tr>
<tr id="parameter-deletedOnly">
    <td><CopyableCode code="deletedOnly" /></td>
    <td><code>boolean</code></td>
    <td>Whether to return deleted schemas only</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Desired output format, dependent on schema type. For AVRO schemas, valid values are: " " (default) or "resolved". For PROTOBUF schemas, valid values are: " " (default), "ignore_extensions", or "serialized" (The parameter does not apply to JSON schemas.)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination size for results. Ignored if negative</td>
</tr>
<tr id="parameter-normalize">
    <td><CopyableCode code="normalize" /></td>
    <td><code>boolean</code></td>
    <td>Whether to register the normalized schema</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination offset for results</td>
</tr>
<tr id="parameter-permanent">
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform a permanent delete</td>
</tr>
<tr id="parameter-subject">
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Filters results by the respective subject</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schema_by_version"
    values={[
        { label: 'get_schema_by_version', value: 'get_schema_by_version' },
        { label: 'get_versions', value: 'get_versions' },
        { label: 'list_versions', value: 'list_versions' }
    ]}
>
<TabItem value="get_schema_by_version">

Retrieves a specific version of the schema registered under this subject.

```sql
SELECT
id,
metadata,
references,
ruleSet,
schema,
schemaTags,
schemaType,
subject,
version
FROM confluent.schema_registry.versions
WHERE subject = '{{ subject }}' -- required
AND version = '{{ version }}' -- required
AND format = '{{ format }}'
AND deleted = '{{ deleted }}'
;
```
</TabItem>
<TabItem value="get_versions">

Get all the subject-version pairs associated with the input ID.

```sql
SELECT
subject,
version
FROM confluent.schema_registry.versions
WHERE id = '{{ id }}' -- required
AND subject = '{{ subject }}'
AND deleted = '{{ deleted }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
<TabItem value="list_versions">

Retrieves a list of versions registered under the specified subject.

```sql
SELECT
version
FROM confluent.schema_registry.versions
WHERE subject = '{{ subject }}' -- required
AND deleted = '{{ deleted }}'
AND deletedOnly = '{{ deletedOnly }}'
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register"
    values={[
        { label: 'register', value: 'register' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register">

Register a new schema under the specified subject. If successfully registered, this returns the unique identifier of this schema in the registry. The returned identifier should be used to retrieve this schema from the schemas resource and is different from the schema's version which is associated with the subject. If the same schema is registered under a different subject, the same identifier will be returned. However, the version of the schema may be different under different subjects.<br />A schema should be compatible with the previously registered schema or schemas (if there are any) as per the configured compatibility level. The configured compatibility level can be obtained by issuing a GET http:get:: /config/(string: subject). If that returns null, then GET http:get:: /config<br />When there are multiple instances of Schema Registry running in the same cluster, the schema registration request will be forwarded to one of the instances designated as the primary. If the primary is not available, the client will get an error code indicating that the forwarding has failed.

```sql
INSERT INTO confluent.schema_registry.versions (
version,
id,
schemaType,
references,
schema,
metadata,
ruleSet,
schemaTagsToAdd,
schemaTagsToRemove,
propagateSchemaTags,
subject,
normalize,
format
)
SELECT 
{{ version }},
{{ id }},
'{{ schemaType }}',
'{{ references }}',
'{{ schema }}',
'{{ metadata }}',
'{{ ruleSet }}',
'{{ schemaTagsToAdd }}',
'{{ schemaTagsToRemove }}',
{{ propagateSchemaTags }},
'{{ subject }}',
'{{ normalize }}',
'{{ format }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: versions
  props:
    - name: subject
      value: "{{ subject }}"
      description: Required parameter for the versions resource.
    - name: version
      value: {{ version }}
      description: |
        Version number
    - name: id
      value: {{ id }}
      description: |
        Globally unique identifier of the schema
    - name: schemaType
      value: "{{ schemaType }}"
      description: |
        Schema type
    - name: references
      description: |
        References to other schemas
      value:
        - name: "{{ name }}"
          subject: "{{ subject }}"
          version: {{ version }}
    - name: schema
      value: "{{ schema }}"
      description: |
        Schema definition string
    - name: metadata
      description: |
        User-defined metadata
      value:
        tags: "{{ tags }}"
        properties: "{{ properties }}"
        sensitive:
          - "{{ sensitive }}"
    - name: ruleSet
      description: |
        Schema rule set
      value:
        migrationRules:
          - name: "{{ name }}"
            doc: "{{ doc }}"
            kind: "{{ kind }}"
            mode: "{{ mode }}"
            type: "{{ type }}"
            tags: "{{ tags }}"
            params: "{{ params }}"
            expr: "{{ expr }}"
            onSuccess: "{{ onSuccess }}"
            onFailure: "{{ onFailure }}"
            disabled: {{ disabled }}
        domainRules:
          - name: "{{ name }}"
            doc: "{{ doc }}"
            kind: "{{ kind }}"
            mode: "{{ mode }}"
            type: "{{ type }}"
            tags: "{{ tags }}"
            params: "{{ params }}"
            expr: "{{ expr }}"
            onSuccess: "{{ onSuccess }}"
            onFailure: "{{ onFailure }}"
            disabled: {{ disabled }}
    - name: schemaTagsToAdd
      value:
        - schemaEntity:
            entityPath: "{{ entityPath }}"
            entityType: "{{ entityType }}"
          tags: "{{ tags }}"
    - name: schemaTagsToRemove
      value:
        - schemaEntity:
            entityPath: "{{ entityPath }}"
            entityType: "{{ entityType }}"
          tags: "{{ tags }}"
    - name: propagateSchemaTags
      value: {{ propagateSchemaTags }}
    - name: normalize
      value: {{ normalize }}
      description: Whether to register the normalized schema
      description: Whether to register the normalized schema
    - name: format
      value: "{{ format }}"
      description: Desired output format, dependent on schema type. For AVRO schemas, valid values are: " " (default) or "resolved". For PROTOBUF schemas, valid values are: " " (default), "ignore_extensions", or "serialized" (The parameter does not apply to JSON schemas.)
      description: Desired output format, dependent on schema type. For AVRO schemas, valid values are: " " (default) or "resolved". For PROTOBUF schemas, valid values are: " " (default), "ignore_extensions", or "serialized" (The parameter does not apply to JSON schemas.)
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schema_version"
    values={[
        { label: 'delete_schema_version', value: 'delete_schema_version' }
    ]}
>
<TabItem value="delete_schema_version">

Deletes a specific version of the schema registered under this subject. This only deletes the version and the schema ID remains intact making it still possible to decode data using the schema ID. This API is recommended to be used only in development environments or under extreme circumstances where-in, its required to delete a previously registered schema for compatibility purposes or re-register previously registered schema.

```sql
DELETE FROM confluent.schema_registry.versions
WHERE subject = '{{ subject }}' --required
AND version = '{{ version }}' --required
AND permanent = '{{ permanent }}'
;
```
</TabItem>
</Tabs>
