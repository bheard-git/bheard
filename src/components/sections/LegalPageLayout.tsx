import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LEGAL_CONTACT, type LegalPageContent } from "@/data/legal";

interface LegalPageLayoutProps {
  content: LegalPageContent;
}

function renderBlock(
  block: string | { type: "list"; items: string[] },
  key: string
) {
  if (typeof block === "string") {
    return (
      <p key={key} className="text-body text-text-secondary leading-relaxed">
        {block}
      </p>
    );
  }

  return (
    <ul key={key} className="space-y-2 pl-1">
      {block.items.map((item) => (
        <li key={item} className="flex gap-3 text-body text-text-secondary leading-relaxed">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalPageLayout({ content }: LegalPageLayoutProps) {
  return (
    <section className="section-spacing pt-8 md:pt-10">
      <Container>
        <header className="border-b border-border-subtle pb-6 mb-8 md:mb-10">
          <h1 className="text-h1 font-bold tracking-tight">{content.title}</h1>
          <p className="mt-3 text-body-lg text-text-muted">
            Last updated: {content.lastUpdated}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <nav
              className="card-base p-4 lg:sticky lg:top-24"
              aria-label="Table of contents"
            >
              <p className="text-body-sm font-semibold text-text-primary mb-3">
                On this page
              </p>
              <ul className="space-y-2 max-h-64 lg:max-h-[70vh] overflow-y-auto">
                {content.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block text-body-sm text-text-muted hover:text-orange-400 transition-colors leading-snug"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9 order-1 lg:order-2 space-y-6">
            <article className="card-base p-5 md:p-8">
              {content.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={
                    index < content.sections.length - 1
                      ? "pb-7 mb-7 border-b border-border-subtle scroll-mt-28"
                      : "scroll-mt-28"
                  }
                >
                  <h2 className="text-h3 font-semibold text-text-primary mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((block, i) =>
                      renderBlock(block, `${section.id}-${i}`)
                    )}
                  </div>
                </section>
              ))}
            </article>

            <div className="rounded-[6px] border border-border-default border-l-4 border-l-orange-500 bg-bg-tertiary p-5 md:p-6">
              <h2 className="text-h4 font-semibold text-text-primary">
                Contact for Grievances
              </h2>
              <p className="mt-2 text-body text-text-muted leading-relaxed">
                For questions or grievances related to this page, reach out to:
              </p>
              <div className="mt-4 space-y-1.5 text-body text-text-secondary">
                <p className="font-medium text-text-primary">
                  {LEGAL_CONTACT.grievanceOfficer}
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${LEGAL_CONTACT.email}`}
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {LEGAL_CONTACT.email}
                  </a>
                </p>
                <p>Phone: {LEGAL_CONTACT.phone}</p>
                <p>Address: {LEGAL_CONTACT.address}</p>
              </div>
              <p className="mt-4 text-body-sm text-text-dimmed">
                Related:{" "}
                <Link
                  href="/privacy-policy"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Privacy
                </Link>
                {" · "}
                <Link
                  href="/terms-and-conditions"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Terms
                </Link>
                {" · "}
                <Link
                  href="/refund-policy"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Refund
                </Link>
                {" · "}
                <Link
                  href="/disclaimer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Disclaimer
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
