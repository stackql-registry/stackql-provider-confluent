--- 
title: certificate_identity_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_identity_pools
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

Creates, updates, deletes, gets or lists a <code>certificate_identity_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_identity_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.certificate_identity_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_certificate_identity_pool"
    values={[
        { label: 'get_iam_v2_certificate_identity_pool', value: 'get_iam_v2_certificate_identity_pool' },
        { label: 'list_iam_v2_certificate_identity_pools', value: 'list_iam_v2_certificate_identity_pools' }
    ]}
>
<TabItem value="get_iam_v2_certificate_identity_pool">

Certificate Identity Pool.

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
    <td>The name of the `IdentityPool`. (example: My Identity Pool)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of how this `IdentityPool` is used (example: Prod Access to Kafka clusters to Release Engineering)</td>
</tr>
<tr>
    <td><CopyableCode code="external_identifier" /></td>
    <td><code>string</code></td>
    <td>The certificate field that will be used to represent the pool's external identifier for audit logging. (example: UID)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>A filter expression in [Supported Common Expression Language (CEL)](https://docs.confluent.io/cloud/current/access-management/authenticate/mtls/cel-filters.html) that specifies which identities can authenticate using your certificate identity pool (see [CEL filter for mTLS](https://docs.confluent.io/cloud/current/access-management/authenticate/mtls/cel-filters.html) for more details). (example: C=='Canada' && O=='Confluent')</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CertificateIdentityPool)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Represents the federated identity associated with this pool. (example: pool-abc)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the identity pool (example: ENABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_certificate_identity_pools">

Certificate Identity Pool.

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
    <td>The name of the `IdentityPool`. (example: My Identity Pool)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of how this `IdentityPool` is used (example: Prod Access to Kafka clusters to Release Engineering)</td>
</tr>
<tr>
    <td><CopyableCode code="external_identifier" /></td>
    <td><code>string</code></td>
    <td>The certificate field that will be used to represent the pool's external identifier for audit logging. (example: UID)</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>A filter expression in [Supported Common Expression Language (CEL)](https://docs.confluent.io/cloud/current/access-management/authenticate/mtls/cel-filters.html) that specifies which identities can authenticate using your certificate identity pool (see [CEL filter for mTLS](https://docs.confluent.io/cloud/current/access-management/authenticate/mtls/cel-filters.html) for more details). (example: C=='Canada' && O=='Confluent')</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CertificateIdentityPool)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>Represents the federated identity associated with this pool. (example: pool-abc)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the identity pool (example: ENABLED)</td>
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
    <td><a href="#get_iam_v2_certificate_identity_pool"><CopyableCode code="get_iam_v2_certificate_identity_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a certificate identity pool.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_certificate_identity_pools"><CopyableCode code="list_iam_v2_certificate_identity_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all certificate identity pools.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_certificate_identity_pool"><CopyableCode code="create_iam_v2_certificate_identity_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-display_name"><code>display_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-external_identifier"><code>external_identifier</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td><a href="#parameter-assigned_resource_owner"><code>assigned_resource_owner</code></a></td>
    <td>Make a request to create a certificate identity pool.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_certificate_identity_pool"><CopyableCode code="update_iam_v2_certificate_identity_pool" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a certificate identity pool.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_certificate_identity_pool"><CopyableCode code="delete_iam_v2_certificate_identity_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a certificate identity pool.</td>
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
<tr id="parameter-certificate_authority_id">
    <td><CopyableCode code="certificate_authority_id" /></td>
    <td><code>string</code></td>
    <td>The Certificate Authority</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the certificate identity pool.</td>
</tr>
<tr id="parameter-assigned_resource_owner">
    <td><CopyableCode code="assigned_resource_owner" /></td>
    <td><code>string</code></td>
    <td>The resource_id of the principal who will be assigned resource owner on the created certificate identity pool. Principal can be group-mapping (group-xxx), user (u-xxx), service-account (sa-xxx) or identity-pool (pool-xxx). (example: u-a83k9b)</td>
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
    defaultValue="get_iam_v2_certificate_identity_pool"
    values={[
        { label: 'get_iam_v2_certificate_identity_pool', value: 'get_iam_v2_certificate_identity_pool' },
        { label: 'list_iam_v2_certificate_identity_pools', value: 'list_iam_v2_certificate_identity_pools' }
    ]}
>
<TabItem value="get_iam_v2_certificate_identity_pool">

Make a request to read a certificate identity pool.

```sql
SELECT
id,
display_name,
api_version,
description,
external_identifier,
filter,
kind,
metadata,
principal,
state
FROM confluent.iam.certificate_identity_pools
WHERE certificate_authority_id = '{{ certificate_authority_id }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_certificate_identity_pools">

Retrieve a sorted, filtered, paginated list of all certificate identity pools.

```sql
SELECT
id,
display_name,
api_version,
description,
external_identifier,
filter,
kind,
metadata,
principal,
state
FROM confluent.iam.certificate_identity_pools
WHERE certificate_authority_id = '{{ certificate_authority_id }}' -- required
AND page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_certificate_identity_pool"
    values={[
        { label: 'create_iam_v2_certificate_identity_pool', value: 'create_iam_v2_certificate_identity_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_certificate_identity_pool">

Make a request to create a certificate identity pool.

```sql
INSERT INTO confluent.iam.certificate_identity_pools (
display_name,
description,
external_identifier,
filter,
certificate_authority_id,
assigned_resource_owner
)
SELECT 
'{{ display_name }}' /* required */,
'{{ description }}' /* required */,
'{{ external_identifier }}' /* required */,
'{{ filter }}' /* required */,
'{{ certificate_authority_id }}',
'{{ assigned_resource_owner }}'
RETURNING
id,
display_name,
api_version,
description,
external_identifier,
filter,
kind,
metadata,
principal,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificate_identity_pools
  props:
    - name: certificate_authority_id
      value: "{{ certificate_authority_id }}"
      description: Required parameter for the certificate_identity_pools resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        The name of the \`IdentityPool\`.
    - name: description
      value: "{{ description }}"
      description: |
        A description of how this \`IdentityPool\` is used
    - name: external_identifier
      value: "{{ external_identifier }}"
      description: |
        The certificate field that will be used to represent the
        pool's external identifier for audit logging.
    - name: filter
      value: "{{ filter }}"
      description: |
        A filter expression in [Supported Common Expression Language (CEL)](https://docs.confluent.io/cloud/current/access-management/authenticate/mtls/cel-filters.html) that specifies which identities can authenticate using your certificate identity pool (see [CEL filter for mTLS](https://docs.confluent.io/cloud/current/access-management/authenticate/mtls/cel-filters.html) for more details).
    - name: assigned_resource_owner
      value: "{{ assigned_resource_owner }}"
      description: The resource_id of the principal who will be assigned resource owner on the created certificate identity pool. Principal can be group-mapping (group-xxx), user (u-xxx), service-account (sa-xxx) or identity-pool (pool-xxx). (example: u-a83k9b)
      description: The resource_id of the principal who will be assigned resource owner on the created certificate identity pool. Principal can be group-mapping (group-xxx), user (u-xxx), service-account (sa-xxx) or identity-pool (pool-xxx). (example: u-a83k9b)
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_iam_v2_certificate_identity_pool"
    values={[
        { label: 'update_iam_v2_certificate_identity_pool', value: 'update_iam_v2_certificate_identity_pool' }
    ]}
>
<TabItem value="update_iam_v2_certificate_identity_pool">

Make a request to update a certificate identity pool.<br /><br />

```sql
REPLACE confluent.iam.certificate_identity_pools
SET 
display_name = '{{ display_name }}',
description = '{{ description }}',
external_identifier = '{{ external_identifier }}',
filter = '{{ filter }}'
WHERE 
certificate_authority_id = '{{ certificate_authority_id }}' --required
AND id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
description,
external_identifier,
filter,
kind,
metadata,
principal,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_certificate_identity_pool"
    values={[
        { label: 'delete_iam_v2_certificate_identity_pool', value: 'delete_iam_v2_certificate_identity_pool' }
    ]}
>
<TabItem value="delete_iam_v2_certificate_identity_pool">

Make a request to delete a certificate identity pool.

```sql
DELETE FROM confluent.iam.certificate_identity_pools
WHERE certificate_authority_id = '{{ certificate_authority_id }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
