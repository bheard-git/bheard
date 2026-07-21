import Link from "next/link";
import { ConciergeBell } from "lucide-react";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestBandY, aiGuestContainer, sectionBgAlt } from "./sectionTheme";

export default function ExperienceSplitSection() {
  const { experience } = aiGuestAgentsContent;
  const { left, right } = experience;

  return (
    <section className={`${sectionBgAlt} ${aiGuestBandY}`}>
      <div className={aiGuestContainer}>
        <div className="grid md:grid-cols-2 md:gap-0">
          <div className="py-2 md:py-4 md:pr-10 lg:pr-12">
            <p className="font-label text-label-sm uppercase tracking-[0.15em] text-primary">{left.eyebrow}</p>
            <h2 className="mt-2 font-headline text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase leading-tight tracking-tight text-on-background md:mt-3">
              {left.heading}
            </h2>
            <div className="mt-4 space-y-3">
              {left.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="border-t-2 border-primary py-6 md:border-l-2 md:border-t-0 md:py-4 md:pl-10 lg:pl-12">
            <ConciergeBell className="h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden />
            <h2 className="mt-3 font-headline text-[clamp(1.35rem,2.8vw,2rem)] font-black uppercase leading-tight tracking-tight text-on-background">
              {right.heading}
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
              {right.paragraph}{" "}
              <Link href={right.paragraphLink.href} className="font-semibold text-primary underline-offset-4 hover:underline">
                {right.paragraphLink.text}
              </Link>
              . {right.paragraphAfter}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
