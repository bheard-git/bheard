"use client";

import Image from "next/image";
import Link from "next/link";
import { Bot, Send } from "lucide-react";
import { useLeadForm } from "@/components/site/LeadFormProvider";
import { AI_GUEST_AGENTS_PAGE_PATH, aiGuestAgentsContent } from "@/lib/content/ai-guest-agents";
import { heroInset } from "./sectionTheme";

const ctaClassName =
  "inline-flex items-center gap-2 rounded-lg bg-primary px-9 py-4 font-headline text-sm font-bold uppercase tracking-widest text-on-primary shadow-[0_0_48px_-12px_rgba(255,146,62,0.65)] transition-transform hover:scale-[1.02]";

function ChatWidgetHeader() {
  const { chatWidget } = aiGuestAgentsContent;

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Bot className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-headline text-sm font-bold text-on-background">{chatWidget.agentName}</p>
        <p className="flex items-center gap-1.5 font-body text-xs text-on-surface-variant">
          <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
          {chatWidget.status}
        </p>
      </div>
    </div>
  );
}

export default function AiGuestAgentsHero() {
  const { openLeadForm } = useLeadForm();
  const { hero, chatWidget, breadcrumb } = aiGuestAgentsContent;

  return (
    <header className="relative md:min-h-[420px]">
      <div className={`${heroInset} relative z-10`}>
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="md:max-w-[40%] md:pr-4">
            <nav aria-label="Breadcrumb" className="font-body text-sm text-on-surface-variant mb-3 md:mb-4">
              {breadcrumb.map((crumb, i) => (
                <span key={crumb.label}>
                  {i > 0 ? (
                    <span className="mx-2 text-neutral-400" aria-hidden>
                      /
                    </span>
                  ) : null}
                  {"href" in crumb && crumb.href ? (
                    <Link href={crumb.href} className="font-semibold text-primary underline-offset-4 hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-on-background">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <p className="font-label text-label-sm uppercase tracking-[0.15em] text-primary">{hero.eyebrow}</p>

            <h1 className="mt-2 font-headline text-[clamp(2.25rem,5vw,4rem)] font-black uppercase leading-[1.02] tracking-tight text-on-background md:mt-3">
              {hero.headingLine1}
              <br />
              <span className="text-primary">{hero.headingLine2}</span>
              <br />
              {hero.headingLine3}
            </h1>

            <p className="mt-3 max-w-lg font-body text-base font-semibold leading-relaxed text-on-background md:text-lg">
              {hero.subhead}
            </p>

            <p className="mt-2 max-w-lg whitespace-pre-line font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
              {hero.body}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-label text-sm font-bold uppercase tracking-[0.15em] text-on-surface-variant md:text-base">
                {hero.trustedBy.label}
              </span>
              <Link href={hero.trustedBy.href} className="transition-opacity hover:opacity-80">
                <Image
                  src={hero.trustedBy.logoSrc}
                  alt={hero.trustedBy.logoAlt}
                  width={220}
                  height={56}
                  className="h-12 w-auto object-contain md:h-14"
                />
              </Link>
            </div>

            <button
              type="button"
              onClick={() =>
                openLeadForm({
                  sourcePage: AI_GUEST_AGENTS_PAGE_PATH,
                  title: "Book a Demo",
                  subtitle: "Tell us about your property — we'll show you how AI Guest Agents can help.",
                })
              }
              className={`${ctaClassName} mt-5 w-fit`}
            >
              {hero.ctaLabel} <span aria-hidden>→</span>
            </button>
          </div>
          <div className="hidden md:block" aria-hidden />
        </div>
      </div>

      <figure className="relative mt-5 min-h-[260px] overflow-hidden rounded-lg md:absolute md:inset-y-0 md:right-0 md:mt-0 md:min-h-0 md:w-[60%] md:rounded-none md:rounded-bl-[1.25rem]">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white via-white/85 to-transparent"
          aria-hidden
        />

        {/* Mobile: header-only compact chat */}
        <div className="absolute bottom-4 right-4 w-[min(calc(100%-2rem),200px)] rounded-xl border border-outline-variant/60 bg-white p-3 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)] sm:hidden">
          <ChatWidgetHeader />
        </div>

        {/* sm+: full chat widget, bottom-right */}
        <div className="absolute bottom-6 right-4 hidden w-[280px] rounded-xl border border-outline-variant/60 bg-white p-4 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)] sm:block md:bottom-10 md:right-8">
          <div className="border-b border-outline-variant/40 pb-3">
            <ChatWidgetHeader />
          </div>

          <div className="mt-3 space-y-2">
            {chatWidget.messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "guest" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[85%] rounded-2xl px-3 py-2 font-body text-xs leading-relaxed md:text-[13px] ${
                    msg.role === "guest"
                      ? "rounded-br-sm bg-primary text-white"
                      : "rounded-bl-sm bg-surface-container text-on-background"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg border border-outline-variant/60 bg-surface-container-low px-3 py-2.5">
            <span className="flex-1 font-body text-xs text-on-surface-variant">{chatWidget.inputPlaceholder}</span>
            <Send className="h-4 w-4 text-primary" aria-hidden />
          </div>
        </div>
      </figure>
    </header>
  );
}
