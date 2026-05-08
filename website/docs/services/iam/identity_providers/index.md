--- 
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
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

Creates, updates, deletes, gets or lists an <code>identity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.identity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_identity_provider"
    values={[
        { label: 'get_iam_v2_identity_provider', value: 'get_iam_v2_identity_provider' },
        { label: 'list_iam_v2_identity_providers', value: 'list_iam_v2_identity_providers' }
    ]}
>
<TabItem value="get_iam_v2_identity_provider">

Identity Provider.

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
    <td>The human-readable name of the OAuth identity provider. (example: My OIDC Provider)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_claim" /></td>
    <td><code>string</code></td>
    <td>The JSON Web Token (JWT) claim to extract the authenticating identity to Confluent resources from [Registered Claim Names](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1). This appears in audit log records. Note: if the client specifies mapping to one identity pool ID, the identity claim configured with that pool will be used instead. Note - The attribute is in an [Early Access lifecycle stage](https://docs.confluent.io/cloud/current/api.html#section/Versioning/API-Lifecycle-Policy) (example: claims.sub)</td>
</tr>
<tr>
    <td><CopyableCode code="issuer" /></td>
    <td><code>string (uri)</code></td>
    <td>A publicly accessible URL uniquely identifying the OAuth identity provider authorized to issue access tokens. (example: https://login.microsoftonline.com/&#123;tenantid&#125;/v2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="jwks_uri" /></td>
    <td><code>string (uri)</code></td>
    <td>A publicly accessible JSON Web Key Set (JWKS) URI for the OAuth identity provider. JWKS provides a set of crypotgraphic keys used to verify the authenticity and integrity of JSON Web Tokens (JWTs) issued by the OAuth identity provider. (example: https://login.microsoftonline.com/common/discovery/v2.0/keys)</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>The JWKS issued by the OAuth identity provider. Only `kid` (key ID) and `alg` (algorithm) properties for each key set are included.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IdentityProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the identity provider. (example: ENABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_identity_providers">

Identity Provider.

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
    <td>The human-readable name of the OAuth identity provider. (example: My OIDC Provider)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_claim" /></td>
    <td><code>string</code></td>
    <td>The JSON Web Token (JWT) claim to extract the authenticating identity to Confluent resources from [Registered Claim Names](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1). This appears in audit log records. Note: if the client specifies mapping to one identity pool ID, the identity claim configured with that pool will be used instead. Note - The attribute is in an [Early Access lifecycle stage](https://docs.confluent.io/cloud/current/api.html#section/Versioning/API-Lifecycle-Policy) (example: claims.sub)</td>
</tr>
<tr>
    <td><CopyableCode code="issuer" /></td>
    <td><code>string (uri)</code></td>
    <td>A publicly accessible URL uniquely identifying the OAuth identity provider authorized to issue access tokens. (example: https://login.microsoftonline.com/&#123;tenantid&#125;/v2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="jwks_uri" /></td>
    <td><code>string (uri)</code></td>
    <td>A publicly accessible JSON Web Key Set (JWKS) URI for the OAuth identity provider. JWKS provides a set of crypotgraphic keys used to verify the authenticity and integrity of JSON Web Tokens (JWTs) issued by the OAuth identity provider. (example: https://login.microsoftonline.com/common/discovery/v2.0/keys)</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>The JWKS issued by the OAuth identity provider. Only `kid` (key ID) and `alg` (algorithm) properties for each key set are included.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (IdentityProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the identity provider. (example: ENABLED)</td>
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
    <td><a href="#get_iam_v2_identity_provider"><CopyableCode code="get_iam_v2_identity_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read an identity provider.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_identity_providers"><CopyableCode code="list_iam_v2_identity_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all identity providers.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_identity_provider"><CopyableCode code="create_iam_v2_identity_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-issuer"><code>issuer</code></a>, <a href="#parameter-jwks_uri"><code>jwks_uri</code></a></td>
    <td></td>
    <td>Make a request to create an identity provider.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_identity_provider"><CopyableCode code="update_iam_v2_identity_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update an identity provider.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_identity_provider"><CopyableCode code="delete_iam_v2_identity_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete an identity provider.</td>
</tr>
<tr>
    <td><a href="#refresh_iam_v2_json_web_key_set"><CopyableCode code="refresh_iam_v2_json_web_key_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-provider_id"><code>provider_id</code></a></td>
    <td></td>
    <td>Make a request to refresh the provider's JWKS<br /><br /></td>
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
    <td>The unique identifier for the identity provider.</td>
</tr>
<tr id="parameter-provider_id">
    <td><CopyableCode code="provider_id" /></td>
    <td><code>string</code></td>
    <td>The Provider</td>
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
    defaultValue="get_iam_v2_identity_provider"
    values={[
        { label: 'get_iam_v2_identity_provider', value: 'get_iam_v2_identity_provider' },
        { label: 'list_iam_v2_identity_providers', value: 'list_iam_v2_identity_providers' }
    ]}
>
<TabItem value="get_iam_v2_identity_provider">

Make a request to read an identity provider.

```sql
SELECT
id,
display_name,
api_version,
description,
identity_claim,
issuer,
jwks_uri,
keys,
kind,
metadata,
state
FROM confluent.iam.identity_providers
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_identity_providers">

Retrieve a sorted, filtered, paginated list of all identity providers.

```sql
SELECT
id,
display_name,
api_version,
description,
identity_claim,
issuer,
jwks_uri,
keys,
kind,
metadata,
state
FROM confluent.iam.identity_providers
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_identity_provider"
    values={[
        { label: 'create_iam_v2_identity_provider', value: 'create_iam_v2_identity_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_identity_provider">

Make a request to create an identity provider.

```sql
INSERT INTO confluent.iam.identity_providers (
display_name,
description,
identity_claim,
issuer,
jwks_uri
)
SELECT 
'{{ display_name }}' /* required */,
'{{ description }}' /* required */,
'{{ identity_claim }}',
'{{ issuer }}' /* required */,
'{{ jwks_uri }}' /* required */
RETURNING
id,
display_name,
api_version,
description,
identity_claim,
issuer,
jwks_uri,
keys,
kind,
metadata,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_providers
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        The human-readable name of the OAuth identity provider.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the identity provider.
    - name: identity_claim
      value: "{{ identity_claim }}"
      description: |
        The JSON Web Token (JWT) claim to extract the authenticating identity to Confluent resources from
        [Registered Claim Names](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1). This appears
        in audit log records. Note: if the client specifies mapping to one identity pool ID, the identity
        claim configured with that pool will be used instead.
        Note - The attribute is in an [Early Access lifecycle stage]
        (https://docs.confluent.io/cloud/current/api.html#section/Versioning/API-Lifecycle-Policy)
    - name: issuer
      value: "{{ issuer }}"
      description: |
        A publicly accessible URL uniquely identifying the OAuth
        identity provider authorized to issue access tokens.
    - name: jwks_uri
      value: "{{ jwks_uri }}"
      description: |
        A publicly accessible JSON Web Key Set (JWKS) URI for the OAuth
        identity provider. JWKS provides a set of crypotgraphic keys
        used to verify the authenticity and integrity of JSON Web
        Tokens (JWTs) issued by the OAuth identity provider.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_v2_identity_provider"
    values={[
        { label: 'update_iam_v2_identity_provider', value: 'update_iam_v2_identity_provider' }
    ]}
>
<TabItem value="update_iam_v2_identity_provider">

Make a request to update an identity provider.<br /><br />

```sql
UPDATE confluent.iam.identity_providers
SET 
display_name = '{{ display_name }}',
description = '{{ description }}',
identity_claim = '{{ identity_claim }}',
issuer = '{{ issuer }}',
jwks_uri = '{{ jwks_uri }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
description,
identity_claim,
issuer,
jwks_uri,
keys,
kind,
metadata,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_identity_provider"
    values={[
        { label: 'delete_iam_v2_identity_provider', value: 'delete_iam_v2_identity_provider' }
    ]}
>
<TabItem value="delete_iam_v2_identity_provider">

Make a request to delete an identity provider.

```sql
DELETE FROM confluent.iam.identity_providers
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="refresh_iam_v2_json_web_key_set"
    values={[
        { label: 'refresh_iam_v2_json_web_key_set', value: 'refresh_iam_v2_json_web_key_set' }
    ]}
>
<TabItem value="refresh_iam_v2_json_web_key_set">

Make a request to refresh the provider's JWKS<br /><br />

```sql
EXEC confluent.iam.identity_providers.refresh_iam_v2_json_web_key_set 
@provider_id='{{ provider_id }}' --required 
@@json=
'{
"spec": "{{ spec }}"
}'
;
```
</TabItem>
</Tabs>
