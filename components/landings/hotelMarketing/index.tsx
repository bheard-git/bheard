import Image from "next/image";
import Link from "next/link";
import Megaphone from "@/components/landings/hotelMarketing/Icons/MegaPhone"
import GroupIcon from "@/components/landings/hotelMarketing/Icons/GroupIcon"
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Handshake,
  House,
  Network,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";

import ClientLogos from "@/components/ClientLogos";
import ScrollReveal from "@/components/system/ScrollReveal";

import {
  sectionBandY,
  sectionPageX,
} from "@/components/system";
import StartConversationButton from "./StartConversationButton";
import LandingLeadForm from "@/components/site/HotelMarketingForm";
import { FaQuoteLeft, FaWhatsapp } from "react-icons/fa";
import { image } from "@uiw/react-md-editor";

const primaryCtaClassName =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-headline text-sm font-bold uppercase tracking-widest text-on-primary shadow-[0_0_48px_-12px_rgba(255,146,62,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(255,146,62,0.55)]";

const secondaryCtaClassName =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-white px-6 py-3.5 font-headline text-sm font-bold uppercase tracking-widest text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary";

const HERO_IMAGE =
  "/assets/landings/hotel-marketing/landing-hero-4.jpg";

const RADISSON_IMAGE =
  "/assets/landings/hotel-marketing/radison blue.jpg";

const AI_FEATURES = [
  {
    title: "Guest AI",
    eyebrow: "Guest AI",
    description:
      "Your always-on digital concierge. Answers guest questions, helps guests discover your property and supports enquiries.",
    icon: FaWhatsapp,
  },
  {
    title: "AI Sales Coach",
    eyebrow: "AI Sales Coach",
    description:
      "Analyses sales conversations, identifies gaps and gives hotel sales teams actionable feedback.",
    icon: BarChart3,
  },
  {
    title: "Custom AI",
    eyebrow: "Custom AI",
    description:
      "Build AI agents and automation around the processes that matter most to your hotel.",
    icon: Bot,
  },
];

const CAPABILITIES = [
  {
    eyebrow: "Marketing",
    title: "Get your hotel seen — and generate demand.",
    description:
      "Social media, content and performance marketing built around your property's goals.",
    icon: Megaphone,
    tags: ["Social", "Content", "Performance"],
  },
  {
    eyebrow: "Technology",
    title: "Build digital solutions around your hotel.",
    description:
      "Websites, platforms, integrations and automation built around your requirements.",
    icon: Network,
    tags: ["Digital", "Platforms", "Automation"],
  },
  {
    eyebrow: "AI",
    title: "Put AI to work where it matters.",
    description:
      "Guest AI, AI Sales Coach and custom AI agents built specifically for hospitality.",
    icon: Bot,
    tags: ["Guest AI", "Sales Coach", "Custom AI"],
  },
];

const WHY_BHEARD = [
  {
    title: "Hospitality-first",
    body: "10+ years working across hospitality.",
    icon: GroupIcon,
  },
  {
    title: "Integrated capability",
    body: "Marketing, technology and AI under one roof.",
    icon: BrainCircuit,
  },
  {
    title: "Custom solutions",
    body: "Built around your business problem.",
    icon: Target,
  },
  {
    title: "One partner",
    body: "One team across digital, marketing and technology.",
    icon: Handshake,
  },
];

const TESTIMONIALS = [
  {
    image: "/assets/client-logos/novotel.webp",
    quote:
      "Focused effort during our special events helps increase our sales. Diligent and approachable at all times.",
    name: "Varun Albuquerque",
    role: "Owner, Novotel Goa Dona Sylvia Resort",
  },
  {
    image: "/assets/client-logos/treat-resort.webp",
    quote:
      "From a negligible presence to a real one. Professional, dedicated, timely.",
    name: "Vivek Mundra",
    role: "Managing Director, Treat Resorts",
  },
];

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-primary md:text-xs">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <h2
      className={[
        "mt-3 font-headline text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-neutral-900",
        centered
          ? "mx-auto max-w-[24ch] text-center"
          : "max-w-[20ch]",
      ].join(" ")}
    >
      {children}
    </h2>
  );
}

export default function HotelMarketingView() {
  return (
    <main className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#faf8f5]">
  {/* =========================================================
      HERO BACKGROUND IMAGE
      - Desktop: existing full background treatment
      - Mobile: same image becomes the section background
  ========================================================= */}
  <div className="absolute inset-0">
    <Image
      src={HERO_IMAGE}
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-right lg:object-center"
    />

    {/* Desktop overlay — kept as existing */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#090601e8]
        via-[#180f03a6]
        via-[28%]
        to-transparent
        lg:block
      "
    />

    {/* Mobile overlay
        Keeps the left/content area readable while
        still allowing the hotel image to remain visible.
    */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#090601e8]
        via-[#180f03a6]
        via-[48%]
        to-[#180f03a6]/55
        lg:hidden
      "
    />

    {/* Existing desktop bottom fade */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#faf8f5]/5
        to-transparent
      "
    />

    {/* Additional mobile bottom fade */}
    {/* <div
      className="
        absolute
        inset-x-0
        bottom-0
        h-[45vh]
        bg-gradient-to-t
        from-[#faf8f5]/40
        via-[30%]
        to-transparent
        lg:hidden
      "
    /> */}
  </div>

  {/* =========================================================
      HERO CONTENT
  ========================================================= */}
  <div className={`${sectionPageX} relative z-10`}>
    <div
      className="
        mx-auto
        grid
        min-h-[calc(100dvh-5.55rem)]
        max-w-7xl
        items-center
        gap-8
        py-8
        md:gap-10
        md:py-12
        lg:grid-cols-12
        lg:gap-8
        lg:py-14
      "
    >

      {/* =====================================================
          HERO COPY
          Desktop: left column
          Mobile: first item
      ===================================================== */}
      <ScrollReveal
        className="
          relative
          z-20
          lg:col-span-6
          lg:col-start-1
          lg:row-start-1
        "
      >
        <SectionEyebrow>
          Hospitality · Marketing · Technology · AI
        </SectionEyebrow>

        <h1
          className="
            mt-3
            md:max-w-[12ch]
            font-headline
            text-[clamp(2.75rem,5.5vw,4rem)]
            font-extrabold
            leading-[0.94]
            tracking-tight
            text-white
          "
        >
          Marketing, technology &amp; AI for hotels that want to{" "}
          <span className="text-primary">
            do more.
          </span>
        </h1>

        <div className="mt-5 h-px w-8 bg-primary" />

        <p
          className="
            mt-5
            max-w-xl
            font-body
            text-base
            font-medium
            leading-relaxed
            text-on-secondary-container
            md:text-lg
          "
        >
          One partner for social media, performance marketing,
          digital solutions and custom AI — built specifically for
          hotels and resorts.
        </p>
      </ScrollReveal>


      {/* =====================================================
          LEAD FORM
          Desktop: right column, same position
          Mobile: after title + description
      ===================================================== */}
      <ScrollReveal
        delay={0.12}
        className="
          relative
          z-30
          lg:col-span-6
          lg:col-start-7
          lg:row-span-2
          lg:row-start-1
        "
      >
        <div
          className="
            mx-auto
            max-w-[520px]
            rounded-2xl
            border
            border-white/80
            bg-white/95
            px-4
            py-2.5
            shadow-[0_24px_80px_-28px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            lg:ml-auto
            lg:max-w-[570px]
          "
        >
          <LandingLeadForm />
        </div>
      </ScrollReveal>


      {/* =====================================================
          HERO STATS
          Desktop: below left content
          Mobile: below form + centered
      ===================================================== */}
      <ScrollReveal
        delay={0.18}
        className="
          relative
          z-20
          flex
          justify-center
          lg:col-span-6
          lg:col-start-1
          lg:row-start-2
          lg:justify-start
        "
      >
        <div
          className="
            flex
            w-fit
            max-w-full
            divide-x
            divide-neutral-300
          "
        >

          {/* Stat 1 */}
          <div
            className="
              flex
              items-center
              gap-3
              pr-5
              md:pr-6
            "
          >
            <UsersRound
              className="h-8 w-8 shrink-0 text-primary"
              strokeWidth={1.5}
            />

            <div>
              <p
                className="
                  font-headline
                  text-sm
                  font-bold
                  uppercase
                  tracking-tight
                  text-white/90
                "
              >
                10+ years
              </p>

              <p
                className="
                  mt-1
                  font-body
                  text-xs
                  leading-relaxed
                  text-on-secondary-container/80
                  md:text-sm
                "
              >
                in hospitality
              </p>
            </div>
          </div>


          {/* Stat 2 */}
          <div
            className="
              flex
              items-center
              gap-3
              pl-5
              md:pl-6
            "
          >
            <House
              className="h-8 w-8 shrink-0 text-primary"
              strokeWidth={1.5}
            />

            <div>
              <p
                className="
                  max-w-[180px]
                  font-headline
                  text-sm
                  font-bold
                  uppercase
                  tracking-tight
                  text-white/90
                "
              >
                Marketing + Technology + AI
              </p>

              <p
                className="
                  mt-1
                  font-body
                  text-xs
                  leading-relaxed
                  text-on-secondary-container/80
                  md:text-sm
                "
              >
                in-house
              </p>
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  </div>
</section>


      {/* =========================================================
          CLIENT LOGOS
      ========================================================= */}
      <section className="bg-surface-container-lowest">
        <div className={`${sectionPageX} py-7 md:py-9`}>

          <ScrollReveal className="mx-auto max-w-7xl">
            <SectionEyebrow>
              Trusted by hospitality brands
            </SectionEyebrow>
          </ScrollReveal>

          <ClientLogos
            variant="bare"
            className="!pt-2"
          />

        </div>
      </section>


      {/* =========================================================
          MARKETING / TECHNOLOGY / AI
      ========================================================= */}
      <section
        className={`bg-surface ${sectionPageX} ${sectionBandY}`}
      >
        <div className="mx-auto max-w-7xl">

          <ScrollReveal className="text-center">

            <SectionEyebrow>
              One partner across marketing, technology &amp; AI.
            </SectionEyebrow>

            <SectionTitle centered>
              One partner across marketing, technology &amp; AI.
            </SectionTitle>

            <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
              Marketing creates demand. Technology enables the experience.
              AI helps your teams respond, sell and work smarter.
            </p>

          </ScrollReveal>


          <div className="mt-10 grid gap-4 md:grid-cols-3">

            {CAPABILITIES.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 0.08}
                  className="h-full"
                >
                  <article
                    className="
                      flex
                      h-full
                      flex-col
                      rounded-xl
                      border
                      border-outline-variant/70
                      bg-white
                      p-6
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      md:p-7
                      lg:flex-row
                      lg:items-start
                      lg:gap-5
                    "
                  >

                    <Icon
                      className="
                        h-10
                        w-10
                        shrink-0
                        text-primary
                        lg:mt-1
                      "
                      strokeWidth={1.5}
                    />

                    <div className="mt-5 flex min-w-0 flex-1 flex-col lg:mt-0">

                      <p
                        className="
                          font-body
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-primary
                          lg:text-base
                          lg:tracking-tight
                        "
                      >
                        {item.eyebrow}
                      </p>

                      <h3
                        className="
                          mt-2
                          font-headline
                          text-xl
                          font-bold
                          uppercase
                          leading-tight
                          text-neutral-900
                          md:text-2xl
                          lg:mt-1
                          lg:text-lg
                          lg:normal-case
                        "
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary-container/40 px-3 py-1.5 font-body text-[10px] font-semibold text-neutral-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </article>
                </ScrollReveal>
              );
            })}

          </div>


          <ScrollReveal className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <StartConversationButton
              className={primaryCtaClassName}
            >
              Start a conversation
            </StartConversationButton>

            <a
              href="https://wa.me/917966820782"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryCtaClassName}
            >
              <FaWhatsapp
                className="h-4 w-4 text-[#20b968]"
                aria-hidden
              />

              WhatsApp Us
            </a>

          </ScrollReveal>

        </div>
      </section>


      {/* =========================================================
          AI FOR HOTELS
      ========================================================= */}
      <section
        className={`${sectionPageX} ${sectionBandY} bg-surface-container-lowest`}
      >
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>

            <div className="rounded-2xl border border-outline-variant/50 bg-[#FCF9F7] px-6 py-9 md:px-10 md:py-11">

              <div className="text-center">

                <SectionEyebrow>
                  Built for hospitality
                </SectionEyebrow>

                <h2 className="mt-3 font-headline text-[clamp(2rem,4vw,3.25rem)] font-extrabold uppercase leading-none text-neutral-900">
                  What if your hotel had an AI team?
                </h2>

                <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                  Not another generic AI tool. AI built around the way
                  your hotel actually works.
                </p>

              </div>


              <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-0 md:divide-x md:divide-primary/20">

                {AI_FEATURES.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <ScrollReveal
                      key={item.title}
                      delay={index * 0.08}
                      className="px-5 py-5 md:px-8 md:py-4"
                    >
                      <div className="flex gap-4">

                        <Icon
                          className="mt-1 h-9 w-9 shrink-0 text-primary"
                          strokeWidth={1.5}
                        />

                        <div>

                          <p className="font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                            {item.eyebrow}
                          </p>

                          <h3 className="mt-1 font-headline text-base font-bold uppercase text-neutral-900 md:text-lg">
                            {item.title}
                          </h3>

                          <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                            {item.description}
                          </p>

                        </div>

                      </div>
                    </ScrollReveal>
                  );
                })}

              </div>


              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <StartConversationButton
                  className={primaryCtaClassName}
                >
                  Start a conversation
                </StartConversationButton>

                <a
                  href="https://wa.me/917966820782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryCtaClassName}
                >
                  <FaWhatsapp
                    className="h-4 w-4 text-[#20b968]"
                    aria-hidden
                  />

                  WhatsApp Us
                </a>

              </div>

              <p className="mt-4 text-center font-body text-xs text-on-surface-variant">
                AI solutions can be demonstrated during a conversation.
              </p>

            </div>

          </ScrollReveal>

        </div>
      </section>


      {/* =========================================================
          RADISSON BLU CASE STUDY
      ========================================================= */}
      <section
        className={`${sectionPageX} ${sectionBandY} bg-[#FCF9F7]`}
      >
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>

            <article className="overflow-hidden rounded-2xl border border-outline-variant/60 bg-white shadow-sm">

              <div className="grid lg:grid-cols-12">

                {/* Image */}
                <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:col-span-5 lg:min-h-[460px]">

                  <Image
                    src={RADISSON_IMAGE}
                    alt="Radisson Blu Goa resort"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                </div>


                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-9 lg:col-span-7 lg:p-11">

                  <SectionEyebrow>
                    Marketing · Technology · AI in action
                  </SectionEyebrow>

                  <h2 className="mt-3 font-headline text-[clamp(2rem,4vw,3rem)] font-extrabold uppercase leading-none text-neutral-900">
                    Radisson Blu Goa
                  </h2>

                  <p className="mt-2 font-body text-sm font-semibold text-on-surface-variant">
                    Social Media · Content · Campaigns · Performance Marketing · Guest AI
                  </p>

                  <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                    BHeard combined social media, campaigns, performance
                    marketing and Guest AI to strengthen Radisson Blu
                    Goa&apos;s digital engagement and lead generation.
                  </p>


                  {/* Results */}
                  <div className="mt-7 grid grid-cols-3 divide-x divide-outline-variant/70">

                    <div className="pr-4">
                      <p className="font-headline text-3xl font-bold text-primary md:text-4xl">
                        204%
                      </p>

                      <p className="mt-1 font-body text-xs leading-relaxed text-on-surface-variant">
                        Engagement Growth
                      </p>
                    </div>

                    <div className="px-4">
                      <p className="font-headline text-3xl font-bold text-primary md:text-4xl">
                        2X
                      </p>

                      <p className="mt-1 font-body text-xs leading-relaxed text-on-surface-variant">
                        Lead Growth in 2 Months
                      </p>
                    </div>

                    <div className="pl-4">
                      <p className="font-headline text-2xl font-bold text-primary md:text-3xl">
                        Guest AI
                      </p>

                      <p className="mt-1 font-body text-xs leading-relaxed text-on-surface-variant">
                        AI-led Guest Engagement
                      </p>
                    </div>

                  </div>


                  {/* CTA */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                    <StartConversationButton
                      className={primaryCtaClassName}
                    >
                      Start a conversation
                    </StartConversationButton>

                    <a
                      href="https://wa.me/917966820782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={secondaryCtaClassName}
                    >
                      <FaWhatsapp
                        className="h-4 w-4 text-[#20b968]"
                        aria-hidden
                      />

                      WhatsApp Us
                    </a>

                    <Link
                      href="/work"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-neutral-200
                        px-5
                        py-3.5
                        font-headline
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-neutral-900
                        transition-colors
                        hover:border-primary
                        hover:text-primary
                      "
                    >
                      View case study

                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden
                      />
                    </Link>

                  </div>

                </div>

              </div>

            </article>

          </ScrollReveal>

        </div>
      </section>


      {/* =========================================================
          WHY BHEARD
      ========================================================= */}
      <section
        className={`${sectionPageX} ${sectionBandY} bg-surface-container-lowest`}
      >
        <div className="mx-auto max-w-7xl">

          <ScrollReveal className="text-center">

            <SectionEyebrow>
              Built around hospitality
            </SectionEyebrow>

            <SectionTitle centered>
              Why hotels choose BHeard.
            </SectionTitle>

          </ScrollReveal>


          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">

            {WHY_BHEARD.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 0.07}
                  className="px-2 text-center lg:px-3"
                >

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-5 font-headline text-lg font-bold uppercase tracking-tight text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[24ch] font-body text-sm leading-relaxed text-on-surface-variant">
                    {item.body}
                  </p>

                </ScrollReveal>
              );
            })}

          </div>


          <ScrollReveal className="mt-12 flex justify-center lg:mt-14">

            <StartConversationButton
              className={primaryCtaClassName}
            >
              Start a conversation
            </StartConversationButton>

          </ScrollReveal>

        </div>
      </section>


      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section
        className={`${sectionPageX} ${sectionBandY} bg-surface`}
      >
        <div className="mx-auto max-w-5xl">

          <ScrollReveal className="text-center">

            <SectionTitle centered>
              What our clients say
            </SectionTitle>

          </ScrollReveal>


          <div className="mt-10 grid gap-5 lg:mt-12 md:grid-cols-2">

            {TESTIMONIALS.map((item, index) => (
              <ScrollReveal
                key={item.name}
                delay={index * 0.1}
              >
                <article
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    rounded-2xl
                    justify-between
                    border
                    border-outline-variant/60
                    bg-[#FCF9F7]
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-[0_18px_45px_-25px_rgba(0,0,0,0.3)]
                    md:p-7
                    lg:p-8
                  "
                >
                  <div className="flex gap-2">
                    {/* Quote mark */}
                    <div
                      className="
                        grid
                        place-items-center
                        rounded-full
                        text-primary p-3 w-fit h-fit
                      "
                      aria-hidden="true"
                    >
                      <FaQuoteLeft
                        className="h-6 w-6"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Review */}
                    <blockquote
                      className="
                        mt-6
                        flex-1
                        font-body
                        text-[15px]
                        font-medium
                        leading-[1.7]
                        text-neutral-800
                        md:text-base
                        lg:text-lg
                      "
                    >
                      {item.quote}
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-3
                      border-t
                      border-primary-fixed/40
                      pt-5
                    "
                  >
                    {/* Avatar */}
                    <div
                      className="
                        h-11
                        w-11
                        shrink-0
                        overflow-hidden
                        rounded-full
                        border
                        border-primary-fixed/40
                        bg-white
                      "
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="h-full w-full object-fit"
                      />
                    </div>

                    {/* Author details */}
                    <div className="min-w-0">
                      <p
                        className="
                          font-headline
                          text-sm
                          font-bold
                          uppercase
                          leading-tight
                          tracking-tight
                          text-neutral-900
                        "
                      >
                        {item.name}
                      </p>

                      <p
                        className="
                          mt-1
                          font-body
                          text-xs
                          leading-relaxed
                          text-on-surface-variant
                        "
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        className={`${sectionPageX} ${sectionBandY} bg-primary-container overflow-hidden`}
      >
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <div className="relative z-1 grid gap-8 lg:grid-cols-12 lg:items-center">
              <Image
                src="/assets/industries/world-map.svg"
                alt=""
                width={800}
                height={400}
                aria-hidden
                className="pointer-events-none  absolute bottom-0 right-0 hidden w-[min(75vw,720px)] opacity-50 md:block"
              />
              {/* CTA content */}
              <div className="lg:col-span-7">

                <SectionEyebrow>
                  <p className="text-gray-700">
                  Marketing. Technology. AI.
                  </p>
                </SectionEyebrow>

                <h2 className="mt-3 max-w-xl font-headline text-[clamp(2rem,4.5vw,3.5rem)] font-black uppercase leading-[0.95] text-neutral-900">
                  Have a hospitality problem worth solving?
                </h2>

                <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-neutral-900/85 md:text-base">
                  Tell us what you&apos;re trying to achieve.
                  We&apos;ll figure out where BHeard can help.
                </p>

                <p className="mt-4 font-body text-xs text-neutral-900/75">
                  No hard sell. Just a conversation about your
                  property and what you want to achieve.
                </p>

              </div>


              {/* CTA actions */}
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end relative z-[2]">

                <StartConversationButton
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-white
                    px-6
                    py-3.5
                    font-headline
                    text-sm
                    font-bold
                    uppercase
                    tracking-widest
                    text-neutral-900
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >
                  Start a conversation
                </StartConversationButton>

                <a
                  href="https://wa.me/917966820782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-neutral-900/20
                    bg-neutral-900
                    px-6
                    py-3.5
                    font-headline
                    text-sm
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-neutral-800
                  "
                >
                  <FaWhatsapp
                    className="h-4 w-4 text-[#20b968]"
                    aria-hidden
                  />

                  WhatsApp Us
                </a>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

    </main>
  );
}