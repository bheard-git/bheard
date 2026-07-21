/** Encode filename segments so spaces and + work from /public */
export function publicAsset(...parts: string[]) {
  const file = parts[parts.length - 1] ?? "";
  const dirs = parts.slice(0, -1);
  return `/${dirs.join("/")}/${encodeURIComponent(file)}`;
}
