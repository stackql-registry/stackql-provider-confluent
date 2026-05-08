// confluent-svc.mjs
export default function confluentSvc(path, operationId, tags) {
  const tag = tags && tags[0];
  if (!tag) return null;

  // "API Keys (iam/v2)"  -> "iam"
  // "Schemas (v1)"       -> "schemas"
  const m = tag.match(/\(([^)]+)\)\s*$/);
  if (m) {
    const inside = m[1];
    const slash = inside.indexOf('/');
    return slash >= 0 ? inside.slice(0, slash) : tag.replace(/\s*\([^)]*\)\s*$/, '');
  }
  return tag;
}