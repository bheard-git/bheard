import { Container } from "@/components/layout/Container";
import { HomeHeroShell } from "@/components/sections/home/HomeHeroShell";
import { HeroVideoEmbed } from "@/components/sections/home/HeroVideoEmbed";
import { HeroCounsellingForm } from "@/components/sections/home/HeroCounsellingForm";
import { HeroFloatingStats } from "@/components/sections/home/HeroFloatingStats";
import { HeroTrustMetrics } from "@/components/sections/home/HeroTrustMetrics";
import Typewritter from "@/components/Typewriter";

/** Shared max width for title, form, and supporting copy */
const HERO_CONTENT_MAX = "max-w-[26rem] sm:max-w-[34rem]";

export function HomeHeroSection() {
  return (
    <HomeHeroShell>
      <Container data-home-zone="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center min-h-[calc(100vh_-_250px)]">
          <div className={`lg:col-span-6 min-h-0 overflow-visible ${HERO_CONTENT_MAX} lg:max-w-none`}>
            <div className={HERO_CONTENT_MAX}>
              <h1 className="text-[32px] sm:text-[38px] md:text-[40px] lg:text-[3.6rem] font-bold leading-[1.4] tracking-tight">
                Expert Mentorship. Proven Strategies.{" "} <br />
                <span className="text-orange-500 glow-text-orange h-4">
                  <Typewritter words={["Real Results", "99 percentiers.", "The Top 1%.", "IIM Converts."]} />
                </span>
              </h1>

              {/* <div className="mt-3 sm:mt-4">
                <HeroCounsellingForm />
              </div> */}

              <p className="mt-3 lg:mt-5 mb-8 lg:mb-14 text-body-lg text-white leading-relaxed">
                Join India&apos;s most trusted platform for CAT, IPMAT, CLAT &amp; more.
                Let&apos;s achieve your dream together.
              </p>
              {/* <HeroTrustMetrics /> */}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center min-h-0 lg:pl-2 xl:pl-4">
            <div className="flex w-full flex-col gap-2.5 sm:gap-3 px-2 sm:px-4 lg:px-6">
              <HeroVideoEmbed />
              {/* <HeroFloatingStats /> */}
            </div>
          </div>
        </div>
      </Container>
    </HomeHeroShell>
  );
}
