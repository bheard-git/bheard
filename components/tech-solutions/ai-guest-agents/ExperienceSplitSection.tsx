import Image from "next/image";
import Link from "next/link";
import { ConciergeBell } from "lucide-react";
import { aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { aiGuestBandY, aiGuestContainer, sectionBgAlt } from "./sectionTheme";

export default function ExperienceSplitSection() {
  const { experience, intro } = aiGuestAgentsContent;
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

        <div className="mt-10 grid gap-8 border-t border-outline-variant/50 pt-10 md:mt-14 md:grid-cols-[minmax(0,0.44fr)_minmax(0,1fr)] md:items-stretch md:gap-10 md:pt-14 lg:gap-12">
          <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-0">
            <Image
              src={intro.chatInterfaceSrc}
              alt={intro.chatInterfaceAlt}
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 100vw, 44vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-body text-lg font-semibold leading-relaxed text-on-background md:text-xl lg:text-[1.35rem] lg:leading-snug">
              {intro.subhead}
            </p>

            <div className="mt-5 space-y-4 md:mt-6">
              {intro.body.map((paragraph, i) => (
                <p key={i} className="font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
