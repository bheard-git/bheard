import PageBreadcrumb from "@/components/system/PageBreadcrumb";import { splitHeroEyebrow, splitHeroTitle } from "@/components/system/splitHeroTheme";

const HERO_PARAGRAPHS = [
  "Every industry earns growth differently. Understanding that difference is where strategy begins.",
  "From hospitality and travel to consumer, wellness, and education — across India, the US, and Southeast Asia — we build strategies rooted in how people actually buy.",
  "Every strategy we build starts with understanding the people behind the purchase.",
] as const;

export default function IndustriesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 right-[-5%] top-[5%] h-56 w-56 rounded-full bg-primary/20 blur-[100px] md:right-[6%] md:top-[8%] md:h-72 md:w-72"
      />

      <GlowOrb className="right-[2%] top-[28%] hidden h-64 w-64 opacity-70 md:block" />

      <GlowOrb className="right-0 top-0 block h-48 w-48 md:hidden" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <PageBreadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
          className="mb-8 md:mb-10"
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div className="relative">
            <p className={splitHeroEyebrow}>Industries We Serve</p>
            <h1 className={`${splitHeroTitle} max-w-[14ch]`}>
              Built for Industries Where{" "}
              <span className="text-primary">Brand</span> Drives Business
            </h1>
            <span className="mt-5 block h-0.5 w-12 bg-primary" aria-hidden />
          </div>

          <div className="relative flex flex-col justify-center space-y-5 md:pl-4 lg:pl-8">
            {HERO_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="font-body text-[15px] leading-[1.75] text-on-surface-variant md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full bg-primary/20 blur-[100px] ${className}`}
    />
  );
}
