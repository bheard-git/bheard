import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import InnerPageHero from "@/components/system/InnerPageHero";
import { stripLegalMarkdownDuplicateHeading } from "@/lib/content/stripLegalMarkdown";
import { getPageBySlug } from "@/lib/services/page.service";

type LegalPageContentProps = {
  slug: string;
  watermark: string;
  defaultTitle: string;
  subtext: string;
};

const proseClassName =
  "prose prose-neutral max-w-3xl lg:max-w-4xl lg:prose-lg prose-headings:tracking-tight prose-h1:text-3xl prose-h2:mt-12 prose-h2:text-xl prose-h3:text-lg prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-on-background prose-blockquote:border-primary prose-blockquote:text-on-surface-variant prose-li:marker:text-primary prose-hr:border-outline-variant/40 md:prose-h1:text-4xl md:prose-h2:text-2xl md:prose-h3:text-xl";

export default async function LegalPageContent({ slug, watermark, defaultTitle, subtext }: LegalPageContentProps) {
  const page = await getPageBySlug(slug);

  if (!page?.content?.trim()) {
    throw new Error(`Legal page "${slug}" is not available. Please configure it in the CMS.`);
  }

  const title = page.title || defaultTitle;
  const content = stripLegalMarkdownDuplicateHeading(page.content, title);
  const updatedAt = page.updatedAt;
  const updatedLabel = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;

  return (
    <>
      <InnerPageHero watermark={watermark} heading={title} subtext={subtext} size="compact" />

      <section className="bg-surface px-gutter-sm py-12 md:px-gutter md:py-14">
        <div className="mx-auto w-full max-w-content-max">
          {updatedLabel ? (
            <p className="mb-6 font-body text-xs uppercase tracking-[0.14em] text-on-surface-variant">
              Last updated — {updatedLabel}
            </p>
          ) : null}
          <article className={proseClassName}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        </div>
      </section>
    </>
  );
}
