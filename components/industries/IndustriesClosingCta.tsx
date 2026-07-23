import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectionPageX } from "@/components/system/sectionTheme";

type IndustriesClosingCtaProps = {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function IndustriesClosingCta({
  headline = "Let's Build What's Next",
  body = "If your brand operates in a category where experience, trust, and digital innovation drive growth, we'd love to talk.",
  ctaLabel = "Start a Conversation",
  ctaHref = "/contact",
}: IndustriesClosingCtaProps) {
  return (
    <section className={`relative overflow-hidden bg-primary-container ${sectionPageX} py-14 md:py-16`}>
      <Image
        src="/assets/industries/world-map.svg"
        alt=""
        width={800}
        height={400}
        aria-hidden
        className="pointer-events-none  absolute bottom-0 right-0 hidden w-[min(55vw,520px)] opacity-50 md:block"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-center md:gap-10">
        <div className="md:col-span-4">
          <h2 className="font-headline text-[clamp(1.75rem,4vw,2.75rem)] font-black uppercase leading-[1.02] tracking-tight text-neutral-900">
            {headline}
          </h2>
        </div>

        <div className="md:col-span-5">
          <p className="font-body text-[15px] leading-relaxed text-neutral-900/90 md:text-base">{body}</p>
        </div>

        <div className="md:col-span-3 md:flex md:justify-end">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-headline text-sm font-bold uppercase tracking-widest text-neutral-900 shadow-sm transition-transform hover:scale-[1.02]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
