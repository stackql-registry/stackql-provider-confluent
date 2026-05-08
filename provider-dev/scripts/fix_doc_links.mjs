#!/usr/bin/env node
/*
 * Post-doc-gen link-fixer.
 *
 * Walks the FIXES map below, applies each instruction to the named doc file,
 * and writes the file back if anything changed. Designed to be parked: today
 * we mostly delete dead anchors (Confluent's API-Lifecycle-Policy section
 * doesn't exist in our docs), but we can swap to action: 'replace' once we
 * have a destination URL.
 *
 * Map shape:
 *   {
 *     '<doc_path_relative_to_website>': [
 *       {
 *         link: '<broken_link_string_to_match>',
 *         action: 'remove' | 'replace',
 *         replaceWith: '<url>'   // required when action === 'replace'
 *       },
 *       ...
 *     ]
 *   }
 *
 *   - For action 'remove': we delete the markdown link wrapper but keep the
 *     visible text. So `[label](broken-url)` becomes `label`. Bare `[![Badge](badge-img)](broken-url)`
 *     becomes `![Badge](badge-img)`. If `link` matches as a plain anchor token
 *     (e.g. `#section/Versioning/API-Lifecycle-Policy`) we strip every
 *     `]( <link>)` occurrence on every line, leaving the leading `[label]`
 *     untouched, which is the correct unwrap for both shapes.
 *
 *   - For action 'replace': every occurrence of `link` in the file is
 *     replaced with `replaceWith` (string-literal, not regex).
 *
 * Run after `npm run generate-docs`, before `yarn build`.
 *
 * Usage:
 *   node provider-dev/scripts/fix_doc_links.mjs
 *   node provider-dev/scripts/fix_doc_links.mjs --dry-run
 *   node provider-dev/scripts/fix_doc_links.mjs --root website
 */

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const ROOT = (() => {
  const i = args.indexOf('--root');
  return i !== -1 ? args[i + 1] : 'website';
})();

// ---------- FIX MAP ----------

// Shorthand: every per-resource page links to the same dead Confluent doc anchor.
// We unwrap the link (keep the badge image) on every page that has it.
const LIFECYCLE = {
  link: '#section/Versioning/API-Lifecycle-Policy',
  action: 'remove',
};

// Pages where ONLY the lifecycle anchor is broken.
const LIFECYCLE_ONLY_PAGES = [
  'docs/services/billing/costs/index.md',
  'docs/services/catalog/business_metadata_defs/index.md',
  'docs/services/catalog/business_metadata/index.md',
  'docs/services/catalog/entities/index.md',
  'docs/services/catalog/tag_defs/index.md',
  'docs/services/catalog/tags/index.md',
  'docs/services/ccl/custom_code_loggings/index.md',
  'docs/services/ccpm/custom_connect_plugin_versions/index.md',
  'docs/services/ccpm/custom_connect_plugins/index.md',
  'docs/services/ccpm/presigned_urls/index.md',
  'docs/services/connect/connector_config/index.md',
  'docs/services/connect/connector_offsets_requests/index.md',
  'docs/services/connect/connector_offsets/index.md',
  'docs/services/connect/connector_tasks/index.md',
  'docs/services/connect/custom_connector_plugins/index.md',
  'docs/services/connect/custom_connector_runtimes/index.md',
  'docs/services/connect/managed_connector_plugins/index.md',
  'docs/services/connect/presigned_urls/index.md',
  'docs/services/encryption_keys/keys/index.md',
  'docs/services/endpoints/endpoints/index.md',
  'docs/services/flink_artifacts/flink_artifacts/index.md',
  'docs/services/flink_artifacts/presigned_urls/index.md',
  'docs/services/flink_compute_pools/compute_pools/index.md',
  'docs/services/flink_compute_pools/org_compute_pool_configs/index.md',
  'docs/services/flink_compute_pools/regions/index.md',
  'docs/services/iam/api_keys/index.md',
  'docs/services/iam/certificate_authorities/index.md',
  'docs/services/iam/certificate_identity_pools/index.md',
  'docs/services/iam/group_mappings/index.md',
  'docs/services/iam/identity_pools/index.md',
  'docs/services/iam/invitations/index.md',
  'docs/services/iam/ip_filter_summaries/index.md',
  'docs/services/iam/ip_filters/index.md',
  'docs/services/iam/ip_groups/index.md',
  'docs/services/iam/role_bindings/index.md',
  'docs/services/iam/service_accounts/index.md',
  'docs/services/iam/users/index.md',
  'docs/services/kafka/acls/index.md',
  'docs/services/kafka/cluster_configs/index.md',
  'docs/services/kafka/cluster_link_configs/index.md',
  'docs/services/kafka/cluster_links/index.md',
  'docs/services/kafka/clusters/index.md',
  'docs/services/kafka/consumer_groups/index.md',
  'docs/services/kafka/consumers_lag_summary/index.md',
  'docs/services/kafka/consumers_lags/index.md',
  'docs/services/kafka/consumers/index.md',
  'docs/services/kafka/default_topic_configs/index.md',
  'docs/services/kafka/group_configs/index.md',
  'docs/services/kafka/mirror_topics/index.md',
  'docs/services/kafka/records/index.md',
  'docs/services/kafka/topic_configs/index.md',
  'docs/services/kafka/topic_partitions/index.md',
  'docs/services/kafka/topics/index.md',
  'docs/services/ksqldb_clusters/clusters/index.md',
  'docs/services/managed_kafka_clusters/clusters/index.md',
  'docs/services/networking/access_points/index.md',
  'docs/services/networking/dns_forwarders/index.md',
  'docs/services/networking/dns_records/index.md',
  'docs/services/networking/gateways/index.md',
  'docs/services/networking/ip_addresses/index.md',
  'docs/services/networking/network_link_endpoints/index.md',
  'docs/services/networking/network_link_service_associations/index.md',
  'docs/services/networking/network_link_services/index.md',
  'docs/services/networking/networks/index.md',
  'docs/services/networking/peerings/index.md',
  'docs/services/networking/private_link_accesses/index.md',
  'docs/services/networking/private_link_attachment_connections/index.md',
  'docs/services/networking/private_link_attachments/index.md',
  'docs/services/networking/transit_gateway_attachments/index.md',
  'docs/services/notifications/integrations/index.md',
  'docs/services/notifications/notification_types/index.md',
  'docs/services/notifications/resource_preferences/index.md',
  'docs/services/notifications/resource_subscriptions/index.md',
  'docs/services/notifications/subscriptions/index.md',
  'docs/services/org/environments/index.md',
  'docs/services/org/organizations/index.md',
  'docs/services/partner/entitlements/index.md',
  'docs/services/partner/organizations/index.md',
  'docs/services/partner/signups/index.md',
  'docs/services/provider_integrations/integrations_v1/index.md',
  'docs/services/provider_integrations/integrations_v2/index.md',
  'docs/services/provider_integrations/integrations/index.md',
  'docs/services/quotas/applied_quotas/index.md',
  'docs/services/quotas/client_quotas/index.md',
  'docs/services/quotas/scopes/index.md',
  'docs/services/schema_registry_clusters/regions/index.md',
  'docs/services/schema_registry_clusters/v2_clusters/index.md',
  'docs/services/schema_registry_clusters/v3_clusters/index.md',
  'docs/services/share_group/consumer_assignments/index.md',
  'docs/services/share_group/consumers/index.md',
  'docs/services/share_group/share_groups/index.md',
  'docs/services/sql/agents/index.md',
  'docs/services/sql/connections/index.md',
  'docs/services/sql/materialized_table_versions/index.md',
  'docs/services/sql/materialized_tables/index.md',
  'docs/services/sql/statement_exceptions/index.md',
  'docs/services/sql/statement_results/index.md',
  'docs/services/sql/statements/index.md',
  'docs/services/sql/tools/index.md',
  'docs/services/stream_sharing/consumer_shared_resources/index.md',
  'docs/services/stream_sharing/consumer_shares/index.md',
  'docs/services/stream_sharing/opt_ins/index.md',
  'docs/services/stream_sharing/provider_shared_resources/index.md',
  'docs/services/stream_sharing/provider_shares/index.md',
  'docs/services/stream_sharing/shared_resources_network_config/index.md',
  'docs/services/stream_sharing/shared_tokens/index.md',
  'docs/services/streams_group/member_assignment_task_partitions/index.md',
  'docs/services/streams_group/member_assignment_tasks/index.md',
  'docs/services/streams_group/member_assignments/index.md',
  'docs/services/streams_group/member_target_assignment_task_partitions/index.md',
  'docs/services/streams_group/member_target_assignment_tasks/index.md',
  'docs/services/streams_group/member_target_assignments/index.md',
  'docs/services/streams_group/members/index.md',
  'docs/services/streams_group/streams_groups/index.md',
  'docs/services/streams_group/subtopologies/index.md',
  'docs/services/sts/oauth_tokens/index.md',
  'docs/services/tableflow/catalog_integrations/index.md',
  'docs/services/tableflow/regions/index.md',
  'docs/services/tableflow/topics/index.md',
  'docs/services/usm/connect_clusters/index.md',
  'docs/services/usm/kafka_clusters/index.md',
];

const FIXES = {};
for (const p of LIFECYCLE_ONLY_PAGES) FIXES[p] = [LIFECYCLE];

// connectors page has the lifecycle anchor PLUS two cross-resource anchors that
// don't resolve. Unwrap all three; the prose still reads sensibly.
FIXES['docs/services/connect/connectors/index.md'] = [
  LIFECYCLE,
  { link: '#operation/readConnectv1Connector', action: 'remove' },
  { link: '#operation/listConnectv1Connectors', action: 'remove' },
];

// iam/identity_providers has a literal space between `]` and `(` in two
// places: `[Early Access lifecycle stage] (https://...)`. MDX parses the
// trailing `#section/Versioning/...` fragment as an in-page anchor (which
// doesn't exist on this page) instead of treating the whole `(https://...)`
// as the link target. Closing the space turns it into a well-formed external
// link to Confluent's real lifecycle-policy docs.
FIXES['docs/services/iam/identity_providers/index.md'] = [
  {
    action: 'replace',
    link: '[Early Access lifecycle stage] (https://docs.confluent.io/cloud/current/api.html#section/Versioning/API-Lifecycle-Policy)',
    replaceWith: '[Early Access lifecycle stage](https://docs.confluent.io/cloud/current/api.html#section/Versioning/API-Lifecycle-Policy)',
  },
];


// SQL pages where MDX is mis-parsing regex char-classes inside <code> blocks
// as bracketed link refs. The structure `[a-z0-9](...)` looks identical to
// markdown's `[label](link)` syntax, and backslash-escaping the brackets
// inside <code> doesn't help — MDX still treats them as link tokens.
//
// The reliable fix is to swap `[` and `]` for HTML entities `&lsqb;` / `&rsqb;`
// inside the regex literal. Browsers render the entities as `[` and `]`
// inside <code>, but MDX only sees the literal entity strings and stops
// parsing them as link syntax.
//
// Each entry replaces the full pristine <code>...</code> regex literal with
// an entity-encoded variant. Idempotent — once swapped the literal no longer
// matches the find string so re-runs are no-ops.
const SQL_REGEX_FIXES = {
  'docs/services/sql/agents/index.md': [
    {
      action: 'replace',
      link: '<code>[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*</code>',
      replaceWith: '<code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>',
    },
  ],
  'docs/services/sql/connections/index.md': [
    {
      action: 'replace',
      link: '<code>[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*</code>',
      replaceWith: '<code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>',
    },
  ],
  'docs/services/sql/materialized_table_versions/index.md': [
    {
      action: 'replace',
      link: '<code>[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*</code>',
      replaceWith: '<code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>',
    },
  ],
  'docs/services/sql/materialized_tables/index.md': [
    {
      action: 'replace',
      link: '<code>^[a-zA-Z0-9]([a-zA-Z0-9_-]*[a-zA-Z0-9])?$</code>',
      replaceWith: '<code>^&lsqb;a-zA-Z0-9&rsqb;(&lsqb;a-zA-Z0-9_-&rsqb;*&lsqb;a-zA-Z0-9&rsqb;)?$</code>',
    },
  ],
  'docs/services/sql/statements/index.md': [
    {
      action: 'replace',
      link: '<code>[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*</code>',
      replaceWith: '<code>&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?(\\.&lsqb;a-z0-9&rsqb;(&lsqb;-a-z0-9&rsqb;*&lsqb;a-z0-9&rsqb;)?)*</code>',
    },
  ],
  'docs/services/sql/tools/index.md': [
    {
      action: 'replace',
      link: '<code>[a-z0-9_]([-a-z0-9_]*[a-z0-9_])?</code>',
      replaceWith: '<code>&lsqb;a-z0-9_&rsqb;(&lsqb;-a-z0-9_&rsqb;*&lsqb;a-z0-9_&rsqb;)?</code>',
    },
  ],
};
for (const [p, fixes] of Object.entries(SQL_REGEX_FIXES)) {
  FIXES[p] = (FIXES[p] || []).concat(fixes);
}

// ---------- ENGINE ----------

// For action: 'remove' on an anchor link, we want `[label](anchor)` -> `label`.
// We escape regex metacharacters in the link, then match `]\((anchor)\)` and drop
// it along with the matching opening bracket. The opening bracket is harder to
// pin to the right [label] when prose contains nested brackets, so we use a
// non-greedy [^[\]]* run instead — MDX badges and resource cross-refs in this
// codebase don't nest brackets inside the label text.
function escRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Find each `](broken-link)` occurrence and walk back to find the matching
// opening `[` taking nested brackets into account. Replace `[label](broken-link)`
// with just `label` so the visible content is preserved but the link is gone.
// This handles cases like `[![alt](image-url)](broken-link)` where the label
// itself contains an image link.
function unwrapMarkdownLink(content, link) {
  const closeToken = '](' + link + ')';
  let result = '';
  let cursor = 0;
  while (cursor < content.length) {
    const closeIdx = content.indexOf(closeToken, cursor);
    if (closeIdx === -1) {
      result += content.substring(cursor);
      break;
    }
    // Walk back from closeIdx-1 to find the matching `[`. The body up to closeIdx
    // is `...[label_with_maybe_nested_brackets]`; we need to find the `[` whose
    // depth count is balanced relative to the `]` at closeIdx.
    let depth = 1;
    let i = closeIdx - 1;
    let openIdx = -1;
    while (i >= 0) {
      const ch = content[i];
      if (ch === ']') depth++;
      else if (ch === '[') {
        depth--;
        if (depth === 0) { openIdx = i; break; }
      }
      i--;
    }
    if (openIdx === -1) {
      // No matching opener found; emit up to and including the close token unchanged
      // and continue past it to avoid an infinite loop.
      result += content.substring(cursor, closeIdx + closeToken.length);
      cursor = closeIdx + closeToken.length;
      continue;
    }
    // Emit prelude up to (but not including) the opening `[`
    result += content.substring(cursor, openIdx);
    // Emit the label content (between `[` and `]`)
    result += content.substring(openIdx + 1, closeIdx);
    // Skip past the closeToken
    cursor = closeIdx + closeToken.length;
  }
  return result;
}

function replaceLink(content, link, replaceWith) {
  const re = new RegExp('\\(' + escRegex(link) + '\\)', 'g');
  // Replace inside a parenthesised link target only — e.g. `](broken)` -> `](new)`.
  // For replace mode we keep the link alive but point it elsewhere.
  return content.replace(re, '(' + replaceWith + ')');
}

function applyLiteralReplace(content, find, replaceWith) {
  // Used for the regex-bracket fixes — find/replace is a plain string swap.
  const idx = content.indexOf(find);
  if (idx === -1) return content;
  return content.split(find).join(replaceWith);
}

// ---------- BADGE STRIP ----------
// Remove every `![alt](https://img.shields.io/...)` image from every doc page.
// These are Confluent's "Lifecycle Stage" / "Request Access" / "Available in
// dedicated clusters" pills — they bloat tables and add no value in the StackQL
// docs. Also collapses any `<br /><br />` chunks immediately following a removed
// badge so we don't leave stray vertical gaps.
//
// In Confluent's spec the badge is often wrapped in a link to its lifecycle
// section, e.g. `[![Badge](image)](#section/Versioning/API-Lifecycle-Policy)`.
// We match the OUTER link form first (greedy) so that nuking the badge also
// nukes the surrounding link wrapper, otherwise we'd leave behind `[](#anchor)`
// which Docusaurus then flags as a broken anchor.
function stripBadges(content) {
  // 1. Outer-wrapped form: `[![alt](badge-url)](anchor-or-url)<br />*`
  //    Whatever the link target is — anchor, full URL, anything — drop the lot.
  const wrapped = /\[!\[[^\]\n]*\]\(https:\/\/img\.shields\.io\/[^)\n]*\)\]\([^)\n]*\)(\s*<br\s*\/?>\s*)*/g;
  // 2. Bare image: `![alt](badge-url)<br />*`
  const bare = /!\[[^\]\n]*\]\(https:\/\/img\.shields\.io\/[^)\n]*\)(\s*<br\s*\/?>\s*)*/g;
  // 3. Corpses left by an EARLIER badge-strip pass that didn't yet handle the
  //    wrapping link: `[](anchor-or-url)<br />*`. The label is empty because
  //    the image was already removed. Drop these too.
  const empty = /\[\]\([^)\n]*\)(\s*<br\s*\/?>\s*)*/g;
  return content.replace(wrapped, '').replace(bare, '').replace(empty, '');
}

function walkDocs(root) {
  const out = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fp = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fp);
      else if (entry.isFile() && entry.name.endsWith('.md')) out.push(fp);
    }
  }
  walk(root);
  return out;
}

const docsRoot = path.join(ROOT, 'docs');
let cleanupFiles = 0;
let cleanupChunksRemoved = 0;
if (fs.existsSync(docsRoot)) {
  const allDocs = walkDocs(docsRoot);
  for (const fp of allDocs) {
    const before = fs.readFileSync(fp, 'utf8');
    const after = stripBadges(before);
    if (after === before) continue;

    // Count how much was removed for the report (badges + empty-label corpses).
    const badgeMatches = before.match(/!\[[^\]\n]*\]\(https:\/\/img\.shields\.io\/[^)\n]*\)/g);
    const corpseMatches = before.match(/\[\]\([^)\n]*\)/g);
    const removedCount = (badgeMatches ? badgeMatches.length : 0) + (corpseMatches ? corpseMatches.length : 0);

    cleanupFiles++;
    cleanupChunksRemoved += removedCount;
    if (DRY) {
      const rel = path.relative(ROOT, fp);
      console.log(`[dry] would clean ${removedCount} badge/corpse chunk(s) from ${rel}`);
    } else {
      fs.writeFileSync(fp, after);
    }
  }
  console.log(`post-gen cleanup: ${DRY ? 'would touch' : 'touched'} ${cleanupFiles} file(s), removed ${cleanupChunksRemoved} badge/corpse chunk(s)`);
} else {
  console.log(`post-gen cleanup: skipped (${docsRoot} not found)`);
}

// ---------- LINK FIXES ----------

let totalFiles = 0, filesChanged = 0, totalEdits = 0, missing = [];
for (const [rel, instructions] of Object.entries(FIXES)) {
  totalFiles++;
  const fp = path.join(ROOT, rel);
  if (!fs.existsSync(fp)) { missing.push(rel); continue; }
  const before = fs.readFileSync(fp, 'utf8');
  let after = before;
  let edits = 0;
  for (const ins of instructions) {
    const prev = after;
    if (ins.action === 'remove') {
      after = unwrapMarkdownLink(after, ins.link);
    } else if (ins.action === 'replace') {
      // Two flavours: if the link looks like a URL/anchor (starts with # / http / / etc)
      // we treat it as a markdown-link target. Otherwise we treat it as a literal
      // string swap (used for regex-bracket fixes).
      if (/^[#/]|^https?:|^mailto:/.test(ins.link)) {
        if (!ins.replaceWith) { console.warn(`[fix] skipping replace with no replaceWith: ${rel} ${ins.link}`); continue; }
        after = replaceLink(after, ins.link, ins.replaceWith);
      } else {
        if (ins.replaceWith == null) { console.warn(`[fix] skipping replace with no replaceWith: ${rel} ${ins.link}`); continue; }
        after = applyLiteralReplace(after, ins.link, ins.replaceWith);
      }
    } else {
      console.warn(`[fix] unknown action "${ins.action}" for ${rel}`);
      continue;
    }
    if (after !== prev) edits++;
  }
  if (after !== before) {
    filesChanged++;
    totalEdits += edits;
    if (DRY) {
      console.log(`[dry] would update ${rel} (${edits} instruction(s) matched)`);
    } else {
      fs.writeFileSync(fp, after);
      console.log(`updated ${rel} (${edits} instruction(s) matched)`);
    }
  }
}

console.log(`\nfiles in map: ${totalFiles}`);
console.log(`files changed: ${filesChanged}`);
console.log(`total instructions that matched: ${totalEdits}`);
if (missing.length) {
  console.log(`\nFiles in map but not on disk (skipped):`);
  for (const m of missing) console.log(`  ${m}`);
}
if (DRY) console.log('\n(dry-run; no files written)');
