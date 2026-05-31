#!/usr/bin/env node
// Post-split sort: takes the flat output from `npm run split` (everything
// written into `provider-dev/source/_split/`) and routes each per-service YAML
// into the correct provider's source subdir.
//
// Why this exists: we generate two providers (`confluent`, `kafka`) from one
// upstream OpenAPI doc and one split pass. The splitter writes a flat dir
// keyed by service name; this script knows which services belong to which
// provider and moves them accordingly. It also rewrites the splitter-emitted
// `info.description` for the kafka-owned files from "confluent <svc> API" to
// "kafka <svc> API" so the next `generate-provider` pass doesn't leak the
// wrong provider name into the kafka provider tree.
//
// The splitter's serviceDesc is `${providerName} ${service} API` and we
// invoke split with --provider-name confluent (because the upstream tag
// discriminator + override map are written for the confluent shape). So
// kafka-owned files come out with "confluent kafka API" etc. This script
// patches that in one place rather than leaving it to manual sed.
//
// Usage:
//   node provider-dev/scripts/sort_split_output.mjs
//   node provider-dev/scripts/sort_split_output.mjs --split-dir DIR --dry-run

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const SPLIT_DIR = (() => { const i = args.indexOf('--split-dir'); return i !== -1 ? args[i + 1] : 'provider-dev/source/_split'; })();
const CONFLUENT_DIR = 'provider-dev/source/confluent';
const KAFKA_DIR = 'provider-dev/source/kafka';

// Service files owned by the kafka provider (Kafka REST v3 dataplane).
// Everything else from the split output goes to confluent.
const KAFKA_FILES = new Set(['kafka.yaml', 'share_group.yaml', 'streams_group.yaml']);

if (!fs.existsSync(SPLIT_DIR)) {
  console.error(`[sort-split-output] split dir not found: ${SPLIT_DIR}`);
  console.error('Run `npm run split` first.');
  process.exit(1);
}

for (const dir of [CONFLUENT_DIR, KAFKA_DIR]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const entries = fs.readdirSync(SPLIT_DIR).filter(f => f.endsWith('.yaml'));
let movedKafka = 0;
let movedConfluent = 0;

for (const file of entries) {
  const src = path.join(SPLIT_DIR, file);
  const isKafka = KAFKA_FILES.has(file);
  const dst = path.join(isKafka ? KAFKA_DIR : CONFLUENT_DIR, file);

  if (isKafka) {
    // Rewrite `info.description` from "confluent <svc> API" -> a kafka-flavored
    // description. Done as a line-anchored regex so we don't accidentally
    // touch payload examples or schema descriptions deeper in the doc.
    const before = fs.readFileSync(src, 'utf8');
    const svcName = file.replace(/\.yaml$/, '');
    // Avoid the awkward "kafka kafka API" by collapsing the duplicate.
    const newDesc = svcName === 'kafka' ? 'Kafka REST v3 dataplane API' : `kafka ${svcName} API`;
    const after = before.replace(/^(\s*description:\s*)confluent \S+ API\s*$/m, `$1${newDesc}`);
    if (DRY) {
      const changed = before !== after ? '(description rewritten)' : '(no description change)';
      console.log(`[dry] kafka <- ${file} ${changed}`);
    } else {
      fs.writeFileSync(dst, after);
      fs.unlinkSync(src);
    }
    movedKafka++;
  } else {
    if (DRY) {
      console.log(`[dry] confluent <- ${file}`);
    } else {
      fs.renameSync(src, dst);
    }
    movedConfluent++;
  }
}

// Clean up empty split dir.
if (!DRY) {
  const remaining = fs.readdirSync(SPLIT_DIR);
  if (remaining.length === 0) fs.rmdirSync(SPLIT_DIR);
}

console.log(`sorted: ${movedConfluent} -> ${CONFLUENT_DIR}, ${movedKafka} -> ${KAFKA_DIR}`);
