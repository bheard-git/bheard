import Link from "next/link";
import InnerPageHero from "@/components/system/InnerPageHero";
import { sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";
import { getSitemapCategories } from "@/lib/seo/sitemapData";

export default async function SitemapPageContent() {
  const categories = await getSitemapCategories();
  const totalLinks = categories.reduce((count, category) => count + category.links.length, 0);

  return (
    <>
      <InnerPageHero
        watermark="Sitemap"
        heading="Sitemap"
        subtext="Browse every page on the BHeard website — organized by section for quick navigation."
        size="compact"
      />

      <section className={`bg-surface ${sectionPageX} py-12 md:py-14`}>
        <div className={sectionContentBand}>
          <p className="mb-8 font-body text-xs uppercase tracking-[0.14em] text-on-surface-variant">
            {totalLinks} pages across {categories.length} sections
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="font-headline text-sm font-bold uppercase tracking-[0.16em] text-primary">
                  {category.title}
                </h2>
                <ul className="mt-4 space-y-2.5 border-t border-outline-variant/40 pt-4">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-sm leading-snug text-on-surface-variant transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl border-t border-outline-variant/40 pt-6 font-body text-sm leading-relaxed text-on-surface-variant">
            Search engines use our machine-readable XML sitemap at{" "}
            <Link href="/sitemap.xml" className="font-semibold text-primary hover:underline">
              /sitemap.xml
            </Link>
            . This page is a human-friendly overview of the same site structure.
          </p>
        </div>
      </section>
    </>
  );
}
