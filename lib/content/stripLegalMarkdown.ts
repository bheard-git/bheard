/** Remove duplicate title / last-updated lines from CMS legal markdown when the hero already shows them. */
export function stripLegalMarkdownDuplicateHeading(content: string, title: string): string {
  let text = content.trim();

  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  text = text.replace(new RegExp(`^#\\s+${escapedTitle}\\s*\\n+`, "i"), "");
  text = text.replace(/^\*\*Last updated[^*]+\*\*\s*\n+/i, "");
  text = text.replace(/^---\s*\n+/, "");

  return text.trim();
}
