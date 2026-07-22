import Image from "next/image";
import Link from "next/link";
import { INDUSTRY_VISUALS } from "@/lib/industries/visualAssets";

export type IndustryBlockData = {
  id: string;
  title: string;
  headline: string;
  body: string;
  expertise: readonly string[];
  trustedBy: string;
  work: {
    text: string;
    href: string;
  };
};

type IndustrySectionBlockProps = {
  industry: IndustryBlockData;
  index: number;
};

export default function IndustrySectionBlock({ industry, index }: IndustrySectionBlockProps) {
  const visual = INDUSTRY_VISUALS[industry.id];
  const imageFirst = index % 2 === 0;

  return (
    <article
      id={industry.id}
      className="scroll-mt-28 border-t border-neutral-200/80 py-14 first:border-t-0 first:pt-0 last:pb-8 md:py-20 md:last:pb-10"
    >
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16">
        <div className={imageFirst ? "order-1" : "order-1 md:order-2"}>
          {visual ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src={visual.imageSrc}
                alt={visual.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>

        <div className={imageFirst ? "order-2" : "order-2 md:order-1"}>
          {visual ? (
            <Image
              src={visual.iconSrc}
              alt=""
              width={48}
              height={48}
              className="mb-5 h-12 w-12"
              aria-hidden
            />
          ) : null}

          <h2 className="font-headline text-xl font-black uppercase tracking-tight text-neutral-900 md:text-2xl">
            {industry.title}
          </h2>

          <p className="mt-2 font-body text-lg italic leading-snug text-neutral-800 md:text-xl">
            {industry.headline}
          </p>

          <p className="mt-5 font-body text-[15px] leading-[1.75] text-on-surface-variant md:text-base">
            {industry.body}
          </p>

          <dl className="mt-6 space-y-3 font-body text-[15px] leading-relaxed md:text-base">
            <div>
              <dt className="inline font-bold text-primary">Expertise:</dt>{" "}
              <dd className="inline text-on-surface-variant">{industry.expertise.join(" · ")}</dd>
            </div>
            <div>
              <dt className="inline font-bold text-primary">Trusted by:</dt>{" "}
              <dd className="inline text-on-surface-variant">{industry.trustedBy}</dd>
            </div>
            <div>
              <dt className="inline font-bold text-primary">Work:</dt>{" "}
              <dd className="inline text-on-surface-variant">
                {industry.work.text}{" "}
                <Link
                  href={industry.work.href}
                  className="font-semibold text-neutral-900 underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
                >
                  Explore our work
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
