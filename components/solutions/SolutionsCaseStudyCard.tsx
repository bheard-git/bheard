import Image from "next/image";
import Link from "next/link";
import type { CaseStudyStat } from "@/lib/case-studies/types";

export type SolutionsCaseStudyCardProps = {
  id: string;
  image?: string | null;
  imageAlt: string;
  brandName: string;
  title: string;
  metaStrip: string;
  stats?: CaseStudyStat[];
  href?: string | null;
  className?: string;
};

function CardImage({ image, imageAlt }: { image?: string | null; imageAlt: string }) {
  if (!image) {
    return (
      <figure className="relative aspect-[16/10] overflow-hidden rounded-sm border border-inverse-surface/10 bg-surface-container">
        <div className="flex h-full w-full items-center justify-center px-6">
          <p className="text-center font-label text-label-sm uppercase tracking-[0.18em] text-on-surface-variant">
            Image coming soon
          </p>
        </div>
      </figure>
    );
  }

  return (
    <figure className="relative aspect-[16/10] overflow-hidden rounded-sm">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </figure>
  );
}

function CardBody({
  brandName,
  title,
  metaStrip,
  stats,
}: Pick<SolutionsCaseStudyCardProps, "brandName" | "title" | "metaStrip" | "stats">) {
  return (
    <div className="pt-3">
      <p className="font-label text-label-sm uppercase tracking-[0.18em] text-primary">{brandName}</p>
      <h3 className="mt-2 font-headline text-base font-bold leading-snug tracking-tight text-on-background md:text-lg">
        {title}
      </h3>
      <p className="mt-2 font-label text-label-sm uppercase tracking-[0.18em] text-on-surface-variant">
        {metaStrip}
      </p>
      {stats && stats.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {stats.map((stat) => (
            <li key={`${stat.value}-${stat.label}`} className="flex items-start gap-2.5">
              <span aria-hidden className="mt-[0.62em] h-px w-[25px] shrink-0 bg-primary" />
              <span className="font-body text-sm leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-background">{stat.value}</span> {stat.label}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function SolutionsCaseStudyCard({
  id,
  image,
  imageAlt,
  brandName,
  title,
  metaStrip,
  stats,
  href,
  className = "",
}: SolutionsCaseStudyCardProps) {
  const content = (
    <>
      <CardImage image={image} imageAlt={imageAlt} />
      <CardBody brandName={brandName} title={title} metaStrip={metaStrip} stats={stats} />
    </>
  );

  if (href) {
    return (
      <Link key={id} href={href} className={`group block ${className}`.trim()}>
        {content}
      </Link>
    );
  }

  return (
    <div key={id} className={`block ${className}`.trim()}>
      {content}
    </div>
  );
}
