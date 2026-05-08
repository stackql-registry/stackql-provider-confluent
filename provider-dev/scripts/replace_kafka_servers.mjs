#!/usr/bin/env node
// Replace the root `servers:` block in the generated kafka service spec with a
// templated URL that resolves per-cluster from values supplied in WHERE clauses.
//
// Why this exists: Confluent's Kafka REST v3 surface (`/kafka/v3/...`) is a
// per-cluster dataplane. Each Kafka cluster lives at its own host
// (`https://<kafka-endpoint-id>.<region>.<cloud>.confluent.cloud`) — there's
// no single static base URL. The OpenAPI spec ships a placeholder
// `pkc-00000.region.provider.confluent.cloud` that is not a real host, so
// requests fail DNS as soon as the user runs a query.
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
// Run AFTER `npm run generate-provider`, BEFORE the test step. Idempotent —
// re-runs are no-ops once the templated servers are in place.
//
// Note: this is a Confluent-specific exception. Do NOT generalise into
// stackql-provider-utils — Confluent's per-cluster dataplane shape is
// unusual; most providers have a single base URL.
//
// Usage:
//   node provider-dev/scripts/replace_kafka_servers.mjs
//   node provider-dev/scripts/replace_kafka_servers.mjs --dry-run

import fs from 'node:fs';
import yaml from 'js-yaml';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const TARGET = (() => { const i = args.indexOf('--target'); return i !== -1 ? args[i + 1] : 'provider-dev/openapi/src/confluent/v00.00.00000/services/kafka.yaml'; })();

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

if (!fs.existsSync(TARGET)) {
  console.error(`[replace-kafka-servers] target not found: ${TARGET}`);
  console.error('Run `npm run generate-provider` first.');
  process.exit(1);
}

const before = fs.readFileSync(TARGET, 'utf8');
const doc = yaml.load(before);

// Idempotency: if doc.servers already matches the templated shape (deep-equal
// after canonical YAML serialisation), exit clean.
const expected = yaml.dump(TEMPLATED_SERVERS, { sortKeys: true });
const actual = yaml.dump(doc.servers, { sortKeys: true });
if (actual === expected) {
  console.log(`[replace-kafka-servers] already in sync: ${TARGET}`);
  process.exit(0);
}

doc.servers = TEMPLATED_SERVERS;
const after = yaml.dump(doc, { noRefs: true, sortKeys: false, lineWidth: -1 });

if (DRY) {
  console.log(`[dry] would replace servers in ${TARGET}`);
  console.log('new servers:');
  console.log(yaml.dump(TEMPLATED_SERVERS));
} else {
  fs.writeFileSync(TARGET, after);
  console.log(`replaced servers in ${TARGET}`);
}
