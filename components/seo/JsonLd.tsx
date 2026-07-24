type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders JSON-LD structured data — not visible UI. */
export default function JsonLd({ data }: JsonLdProps) {
  const json = Array.isArray(data)
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@graph": data.map((node) => {
          const { ["@context"]: _removed, ...rest } = node;
          return rest;
        }),
      })
    : JSON.stringify(data);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
