--- 
title: certificate_authorities
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authorities
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

Creates, updates, deletes, gets or lists a <code>certificate_authorities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_authorities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="confluent.iam.certificate_authorities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_v2_certificate_authority"
    values={[
        { label: 'get_iam_v2_certificate_authority', value: 'get_iam_v2_certificate_authority' },
        { label: 'list_iam_v2_certificate_authorities', value: 'list_iam_v2_certificate_authorities' }
    ]}
>
<TabItem value="get_iam_v2_certificate_authority">

Certificate Authority.

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
    <td>The human-readable name of the certificate authority. (example: My Certificate Authority)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_chain_filename" /></td>
    <td><code>string</code></td>
    <td>The file name of the uploaded pem file for this certificate authority. (example: certificate.pem)</td>
</tr>
<tr>
    <td><CopyableCode code="crl_source" /></td>
    <td><code>string</code></td>
    <td>The source specifies whether the Certificate Revocation List (CRL) is updated from either local file uploaded (LOCAL) or from url of CRL (URL). (example: LOCAL)</td>
</tr>
<tr>
    <td><CopyableCode code="crl_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when CRL was last updated. (example: 2017-07-21T17:32:28.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="crl_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The url from which to fetch the CRL for the certificate authority if crl_source is URL.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the certificate authority. (example: Sample description text)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_dates" /></td>
    <td><code>array</code></td>
    <td>The expiration dates of certificates in the chain.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprints" /></td>
    <td><code>array</code></td>
    <td>The fingerprints for each certificate in the certificate chain. These are SHA-1 encoded strings that act as unique identifiers for the certificates in the chain.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CertificateAuthority)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="serial_numbers" /></td>
    <td><code>array</code></td>
    <td>The serial numbers for each certificate in the certificate chain.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the certificate authority. (example: ENABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_v2_certificate_authorities">

Certificate Authority.

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
    <td>The human-readable name of the certificate authority. (example: My Certificate Authority)</td>
</tr>
<tr>
    <td><CopyableCode code="api_version" /></td>
    <td><code>string</code></td>
    <td>APIVersion defines the schema version of this representation of a resource. (iam/v2)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_chain_filename" /></td>
    <td><code>string</code></td>
    <td>The file name of the uploaded pem file for this certificate authority. (example: certificate.pem)</td>
</tr>
<tr>
    <td><CopyableCode code="crl_source" /></td>
    <td><code>string</code></td>
    <td>The source specifies whether the Certificate Revocation List (CRL) is updated from either local file uploaded (LOCAL) or from url of CRL (URL). (example: LOCAL)</td>
</tr>
<tr>
    <td><CopyableCode code="crl_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when CRL was last updated. (example: 2017-07-21T17:32:28.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="crl_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The url from which to fetch the CRL for the certificate authority if crl_source is URL.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the certificate authority. (example: Sample description text)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_dates" /></td>
    <td><code>array</code></td>
    <td>The expiration dates of certificates in the chain.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprints" /></td>
    <td><code>array</code></td>
    <td>The fingerprints for each certificate in the certificate chain. These are SHA-1 encoded strings that act as unique identifiers for the certificates in the chain.</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Kind defines the object this REST resource represents. (CertificateAuthority)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.</td>
</tr>
<tr>
    <td><CopyableCode code="serial_numbers" /></td>
    <td><code>array</code></td>
    <td>The serial numbers for each certificate in the certificate chain.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the certificate authority. (example: ENABLED)</td>
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
    <td><a href="#get_iam_v2_certificate_authority"><CopyableCode code="get_iam_v2_certificate_authority" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to read a certificate authority.</td>
</tr>
<tr>
    <td><a href="#list_iam_v2_certificate_authorities"><CopyableCode code="list_iam_v2_certificate_authorities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Retrieve a sorted, filtered, paginated list of all certificate authorities.</td>
</tr>
<tr>
    <td><a href="#create_iam_v2_certificate_authority"><CopyableCode code="create_iam_v2_certificate_authority" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Make a request to create a certificate authority.</td>
</tr>
<tr>
    <td><a href="#update_iam_v2_certificate_authority"><CopyableCode code="update_iam_v2_certificate_authority" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to update a certificate authority.<br /><br /></td>
</tr>
<tr>
    <td><a href="#delete_iam_v2_certificate_authority"><CopyableCode code="delete_iam_v2_certificate_authority" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Make a request to delete a certificate authority.</td>
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
    <td>The unique identifier for the certificate authority.</td>
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
    defaultValue="get_iam_v2_certificate_authority"
    values={[
        { label: 'get_iam_v2_certificate_authority', value: 'get_iam_v2_certificate_authority' },
        { label: 'list_iam_v2_certificate_authorities', value: 'list_iam_v2_certificate_authorities' }
    ]}
>
<TabItem value="get_iam_v2_certificate_authority">

Make a request to read a certificate authority.

```sql
SELECT
id,
display_name,
api_version,
certificate_chain_filename,
crl_source,
crl_updated_at,
crl_url,
description,
expiration_dates,
fingerprints,
kind,
metadata,
serial_numbers,
state
FROM confluent.iam.certificate_authorities
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_v2_certificate_authorities">

Retrieve a sorted, filtered, paginated list of all certificate authorities.

```sql
SELECT
id,
display_name,
api_version,
certificate_chain_filename,
crl_source,
crl_updated_at,
crl_url,
description,
expiration_dates,
fingerprints,
kind,
metadata,
serial_numbers,
state
FROM confluent.iam.certificate_authorities
WHERE page_size = '{{ page_size }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_v2_certificate_authority"
    values={[
        { label: 'create_iam_v2_certificate_authority', value: 'create_iam_v2_certificate_authority' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_v2_certificate_authority">

Make a request to create a certificate authority.

```sql
INSERT INTO confluent.iam.certificate_authorities (
display_name,
description,
certificate_chain,
certificate_chain_filename,
crl_url,
crl_chain
)
SELECT 
'{{ display_name }}',
'{{ description }}',
'{{ certificate_chain }}',
'{{ certificate_chain_filename }}',
'{{ crl_url }}',
'{{ crl_chain }}'
RETURNING
id,
display_name,
api_version,
certificate_chain_filename,
crl_source,
crl_updated_at,
crl_url,
description,
expiration_dates,
fingerprints,
kind,
metadata,
serial_numbers,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificate_authorities
  props:
    - name: display_name
      value: "{{ display_name }}"
      description: |
        The human-readable name of the certificate authority.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the certificate authority.
    - name: certificate_chain
      value: "{{ certificate_chain }}"
      description: |
        The PEM encoded string containing the signing certificate chain
        used to validate client certs.
    - name: certificate_chain_filename
      value: "{{ certificate_chain_filename }}"
      description: |
        The name of the certificate file.
    - name: crl_url
      value: "{{ crl_url }}"
      description: |
        The url from which to fetch the CRL for the certificate authority if crl_source is URL.
    - name: crl_chain
      value: "{{ crl_chain }}"
      description: |
        The PEM encoded string containing the CRL for this certificate authority.
        Defaults to this over \`crl_url\` if available.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_iam_v2_certificate_authority"
    values={[
        { label: 'update_iam_v2_certificate_authority', value: 'update_iam_v2_certificate_authority' }
    ]}
>
<TabItem value="update_iam_v2_certificate_authority">

Make a request to update a certificate authority.<br /><br />

```sql
REPLACE confluent.iam.certificate_authorities
SET 
display_name = '{{ display_name }}',
description = '{{ description }}',
certificate_chain = '{{ certificate_chain }}',
certificate_chain_filename = '{{ certificate_chain_filename }}',
crl_url = '{{ crl_url }}',
crl_chain = '{{ crl_chain }}'
WHERE 
id = '{{ id }}' --required
RETURNING
id,
display_name,
api_version,
certificate_chain_filename,
crl_source,
crl_updated_at,
crl_url,
description,
expiration_dates,
fingerprints,
kind,
metadata,
serial_numbers,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_v2_certificate_authority"
    values={[
        { label: 'delete_iam_v2_certificate_authority', value: 'delete_iam_v2_certificate_authority' }
    ]}
>
<TabItem value="delete_iam_v2_certificate_authority">

Make a request to delete a certificate authority.

```sql
DELETE FROM confluent.iam.certificate_authorities
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
