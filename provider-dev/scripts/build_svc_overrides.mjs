#!/usr/bin/env node
// Build a strict (raw_bucket -> existing_service) override map by walking
// every operationId in the current provider's per-service yamls, locating
// the same operation in the new spec, and applying the discriminator
// function to its tag. Each (raw_bucket -> existing_service) vote is
// recorded; conflicts are reported.
//
// Usage:
//   node provider-dev/scripts/build_svc_overrides.mjs
//   node provider-dev/scripts/build_svc_overrides.mjs --new-spec path/to/spec.yaml
//
// Outputs:
//   - prints summary + conflicts to stdout
//   - writes provider-dev/config/svc_name_overrides.json (overwrites)

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const getArg = (flag, dflt = null) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : dflt;
};

const EXISTING_DIR = getArg('--existing-dir', 'provider-dev/openapi/src/confluent/v00.00.00000/services');
const NEW_SPEC = getArg('--new-spec', 'provider-dev/downloaded/openapi.yaml');
const DISCRIMINATOR_FN = getArg('--discriminator-fn', 'provider-dev/scripts/confluent-svc.mjs');
const OUT = getArg('--out', 'provider-dev/config/svc_name_overrides.json');

const OPS = ['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'trace'];

function loadDoc(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  return yaml.load(text);
}

// Build (operationId -> existing service name) and (path+verb -> existing service name) from the current provider.
function indexExisting(dir) {
  const byOpId = new Map();
  const byPathVerb = new Map();
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.yaml'));
  for (const f of files) {
    const svc = f.replace(/\.yaml$/, '');
    const doc = loadDoc(path.join(dir, f));
    for (const [p, methods] of Object.entries(doc?.paths || {})) {
      for (const [v, op] of Object.entries(methods || {})) {
        if (!OPS.includes(v) || !op) continue;
        if (op.operationId) byOpId.set(op.operationId, svc);
        byPathVerb.set(`${p}\t${v}`, svc);
      }
    }
  }
  return { byOpId, byPathVerb };
}

// Match the splitter's normalizeServiceName (src/providerdev/split.js): the
// raw value returned by the discriminator is lowercased and hyphens, spaces,
// and dots are replaced with underscores BEFORE svcNameOverrides is consulted.
// The override map keys must therefore use this normalized form.
function normalizeServiceName(raw) {
  return String(raw).toLowerCase().replace(/-/g, '_').replace(/ /g, '_').replace(/\./g, '_');
}

// Walk new spec, return array of { path, verb, operationId, tag, rawBucket, normalizedBucket }.
function walkNewSpec(spec, discriminator) {
  const out = [];
  for (const [p, methods] of Object.entries(spec?.paths || {})) {
    for (const [v, op] of Object.entries(methods || {})) {
      if (!OPS.includes(v) || !op) continue;
      const tag = (op.tags && op.tags[0]) || null;
      const rawBucket = discriminator(p, op.operationId, op.tags);
      const normalizedBucket = rawBucket == null ? null : normalizeServiceName(rawBucket);
      out.push({
        path: p,
        verb: v,
        operationId: op.operationId || null,
        tag,
        rawBucket,
        normalizedBucket,
      });
    }
  }
  return out;
}

async function main() {
  // 1. Index current provider
  const { byOpId, byPathVerb } = indexExisting(EXISTING_DIR);
  console.log(`[build-overrides] indexed ${byOpId.size} operationIds across existing provider in ${EXISTING_DIR}`);

  // 2. Load new spec (yaml or json — js-yaml handles both)
  const newSpec = loadDoc(NEW_SPEC);
  console.log(`[build-overrides] loaded new spec from ${NEW_SPEC}`);

  // 3. Load discriminator function
  const fnUrl = pathToFileURL(path.resolve(DISCRIMINATOR_FN)).href;
  const mod = await import(fnUrl);
  const discriminator = mod.default;
  if (typeof discriminator !== 'function') {
    console.error(`[build-overrides] discriminator at ${DISCRIMINATOR_FN} did not export a default function`);
    process.exit(1);
  }

  // 4. Walk new spec, collect ops
  const newOps = walkNewSpec(newSpec, discriminator);
  console.log(`[build-overrides] new spec has ${newOps.length} operations across ${new Set(newOps.map(o => o.normalizedBucket)).size} normalized buckets`);

  // 5. For every op in the new spec, look up existing service.
  //    Vote: normalizedBucket -> existingSvc.
  const votes = new Map(); // normalizedBucket -> Map<existingSvc, count>
  const rawByNorm = new Map(); // normalizedBucket -> Set<rawBucket> (just for reporting)
  let viaOpId = 0, viaPathVerb = 0, unmatched = 0;

  for (const op of newOps) {
    if (op.normalizedBucket == null) continue;
    if (!rawByNorm.has(op.normalizedBucket)) rawByNorm.set(op.normalizedBucket, new Set());
    rawByNorm.get(op.normalizedBucket).add(op.rawBucket);

    let existing = null;
    if (op.operationId && byOpId.has(op.operationId)) {
      existing = byOpId.get(op.operationId);
      viaOpId++;
    } else if (byPathVerb.has(`${op.path}\t${op.verb}`)) {
      existing = byPathVerb.get(`${op.path}\t${op.verb}`);
      viaPathVerb++;
    } else {
      unmatched++;
    }
    if (!existing) continue;
    if (!votes.has(op.normalizedBucket)) votes.set(op.normalizedBucket, new Map());
    const m = votes.get(op.normalizedBucket);
    m.set(existing, (m.get(existing) || 0) + 1);
  }

  console.log(`[build-overrides] matched: ${viaOpId} by operationId, ${viaPathVerb} by path+verb, ${unmatched} unmatched (likely net-new in new spec)`);

  // 6. For each normalized bucket, emit override.
  //    - If a single existing service won every vote -> emit override (skip if bucket === existingSvc).
  //    - If multiple existing services voted for the same bucket -> CONFLICT. Pick the majority
  //      winner but list as a conflict for review.
  //    - If a bucket has no votes (not in current provider at all) -> truly new, no override.
  const overrides = {};
  const conflicts = [];
  const truelyNew = [];
  const allBuckets = new Set(newOps.map(o => o.normalizedBucket).filter(Boolean));
  for (const nb of [...allBuckets].sort()) {
    const v = votes.get(nb);
    if (!v) {
      truelyNew.push(nb);
      continue;
    }
    const sorted = [...v.entries()].sort((a, b) => b[1] - a[1]);
    const winner = sorted[0][0];
    if (sorted.length > 1) {
      conflicts.push({ bucket: nb, votes: sorted });
    }
    if (nb !== winner) {
      overrides[nb] = winner;
    }
  }

  // 7. Print report
  console.log('\n=== Bucket vote breakdown (override key = normalized bucket) ===');
  const w = Math.max(...[...allBuckets].map(s => s.length));
  for (const nb of [...allBuckets].sort()) {
    const v = votes.get(nb);
    const rawSet = [...(rawByNorm.get(nb) || [])].join('|');
    const rawNote = rawSet && rawSet !== nb ? `  (raw: ${rawSet})` : '';
    if (!v) {
      console.log(`${nb.padEnd(w)}  (truly new — no override)${rawNote}`);
      continue;
    }
    const breakdown = [...v.entries()].sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k}=${n}`).join(', ');
    const winner = [...v.entries()].sort((a, b) => b[1] - a[1])[0][0];
    const arrow = nb === winner ? '(identity)' : `-> ${winner}`;
    console.log(`${nb.padEnd(w)}  ${breakdown}  ${arrow}${rawNote}`);
  }

  if (conflicts.length) {
    console.log('\n=== Conflicts (single bucket maps to multiple existing services) ===');
    for (const c of conflicts) {
      console.log(`  ${c.bucket}: ${c.votes.map(([k, n]) => `${k}=${n}`).join(', ')}`);
    }
    console.log('\n  These buckets will be folded into the majority winner. Minority');
    console.log('  resources from the old provider will land in the same service file');
    console.log('  as the majority — this is fine because StackQL resources are scoped');
    console.log('  per service, so e.g. confluent.kafka.cluster_links and');
    console.log('  confluent.kafka.mirror_topics can both live inside kafka.yaml.');
  }

  if (truelyNew.length) {
    console.log('\n=== Genuinely new buckets (no matching ops in current provider) ===');
    for (const t of truelyNew) console.log(`  ${t}`);
  }

  // 8. Write overrides
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(overrides, null, 2) + '\n');
  console.log(`\n[build-overrides] wrote ${Object.keys(overrides).length} overrides -> ${OUT}`);
}

main().catch(e => { console.error(e); process.exit(1); });
