#!/usr/bin/env node
// Replace the root `servers:` block in the generated kafka dataplane service
// specs with a templated URL that resolves per-cluster from values supplied in
// WHERE clauses.
//
// Why this exists: Confluent's Kafka REST v3 surface (`/kafka/v3/...`) is a
// per-cluster dataplane. Each Kafka cluster lives at its own host
// (`https://<kafka-endpoint-id>.<region>.<cloud>.confluent.cloud`) — there's
// no single static base URL. The upstream OpenAPI spec inherits
// `https://api.confluent.cloud` from the root for every service, which is
// wrong for the cluster-scoped dataplane buckets — requests fail (DNS for the
// templated placeholder, 404 for the wrong host on share/streams groups).
//
// Targets:
//   - kafka.yaml          (topics, consumer groups, ACLs, configs, partitions,
//                          records, cluster linking, mirrors, broker configs,
//                          KIP-848 group configs)
//   - share_group.yaml    (KIP-932 share groups)
//   - streams_group.yaml  (KIP-1071 streams groups)
//
// StackQL supports OpenAPI 3 server variables and binds them from the WHERE
// clause when:
//   1. the server URL has a static scheme prefix (so the full URL is
//      parseable before substitution — `{rest_endpoint}` alone fails the
//      path mux's "must start with /" check), AND
//   2. each variable is declared with a `default` and `description` under
//      `servers[0].variables`.
//
// We use three variables so users can paste each piece directly out of the
// Confluent UI (or pull them from confluent.managed_kafka_clusters.clusters):
//   kafka_endpoint_id  (the pkc-* prefix in the cluster's REST endpoint)
//   region             (cluster spec.region, e.g. ap-southeast-2)
//   cloud_provider     (cluster spec.cloud lower-cased: aws|gcp|azure)
//
// Run AFTER `npm run generate-provider:kafka`, BEFORE the test step.
// Idempotent — re-runs are no-ops once the templated servers are in place.
//
// Note: this is a Confluent-Cloud-specific exception. Do NOT generalise into
// stackql-provider-utils — most providers have a single base URL.
//
// Usage:
//   node provider-dev/scripts/replace_kafka_servers.mjs
//   node provider-dev/scripts/replace_kafka_servers.mjs --dry-run

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const ROOT = (() => { const i = args.indexOf('--root'); return i !== -1 ? args[i + 1] : 'provider-dev/openapi/src/kafka/v00.00.00000/services'; })();

const TARGET_FILES = ['kafka.yaml', 'share_group.yaml', 'streams_group.yaml'];

const TEMPLATED_SERVERS = [
  {
    url: 'https://{kafka_endpoint_id}.{region}.{cloud_provider}.confluent.cloud',
    variables: {
      kafka_endpoint_id: {
        default: 'pkc-00000',
        description: 'Per-cluster Kafka REST endpoint ID (the pkc-* host prefix from the Confluent UI Cluster -> Overview -> REST endpoint, or extract from confluent.managed_kafka_clusters.clusters spec.http_endpoint).',
      },
      region: {
        default: 'region',
        description: 'Cloud region the cluster runs in, e.g. ap-southeast-2 (from the cluster spec.region).',
      },
      cloud_provider: {
        default: 'cloud',
        description: 'Cloud provider, lowercase: aws, gcp, or azure (from the cluster spec.cloud).',
      },
    },
  },
];

const expected = yaml.dump(TEMPLATED_SERVERS, { sortKeys: true });

let hadError = false;
for (const file of TARGET_FILES) {
  const target = path.join(ROOT, file);
  if (!fs.existsSync(target)) {
    console.error(`[replace-kafka-servers] target not found: ${target}`);
    console.error('Run `npm run generate-provider:kafka` first.');
    hadError = true;
    continue;
  }

  const before = fs.readFileSync(target, 'utf8');
  const doc = yaml.load(before);

  const actual = yaml.dump(doc.servers, { sortKeys: true });
  if (actual === expected) {
    console.log(`[replace-kafka-servers] already in sync: ${target}`);
    continue;
  }

  doc.servers = TEMPLATED_SERVERS;
  const after = yaml.dump(doc, { noRefs: true, sortKeys: false, lineWidth: -1 });

  if (DRY) {
    console.log(`[dry] would replace servers in ${target}`);
  } else {
    fs.writeFileSync(target, after);
    console.log(`replaced servers in ${target}`);
  }
}

if (hadError) process.exit(1);
