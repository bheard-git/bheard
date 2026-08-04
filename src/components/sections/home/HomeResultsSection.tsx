import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TopperCardAlternate } from "@/components/cards/TopperCardAlternate";
import { Carousel } from "@/components/ui/Carousel";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Button } from "@/components/ui/Button";

import { resultBanners } from "@/data/results";

export function HomeResultsSection() {
  return (
    <section
      id="results"
      data-home-zone="results"
      className="home-section-spacing home-on-light relative overflow-hidden !py-0"
    >
      <Container>
        <SectionHeader
          title={
            <>
              Results that speak
              <span className="text-orange-500"> for themselves.</span>
            </>
          }
          subtitle="Real students. Real success."
          // viewAllHref="/mba#results"
          // viewAllLabel="View All Results"
          align="center"
        />

        <RevealGroup>
          <Carousel
            itemsPerView={1}
            className="mt-12"
            itemClassName="w-full shrink-0 snap-center"
            autoPlay
            autoPlayInterval={3000}

          >
            {resultBanners.map((banner) => (
              <div
                key={banner.id}
                className="w-full reveal-child"
              >
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    px-8
                    py-8
                    lg:px-12
                    lg:py-10
                    bg-gradient-to-br
                    ${banner.backgroundClass}
                  `}
                >
                  {/* decorative glow */}

                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
                    <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-orange-600/5 blur-[100px]" />
                  </div>

                  <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.2fr] items-center h-full">

                    {/* LEFT */}

                    <div className="max-w-[420px]">

                      <span
                        className={`
                          inline-flex
                          rounded-full
                          bg-white/10
                          border
                          border-white/10
                          px-4
                          py-2
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white/90
                          btn-outlined-premium premium-border-glow glow-accent-${"orange"}
                        `}
                      >
                        {banner.badge}
                      </span>

                      <h3 className="mt-8 text-white leading-[0.95] flex md:items-center gap-3 flex-col sm:flex-row lg:items-start lg:gap-1.5 lg:flex-col">
                        <span className="block text-5xl font-black">
                          {banner.title}
                        </span>

                        <span className="block text-5xl font-black text-orange-500 mt-2">
                          {banner.highlight}
                        </span>
                      </h3>

                      <p className="mt-2 text-xl font-semibold text-white/80">
                        {banner.subtitle}
                      </p>

                      <p className="mt-2 text-base leading-7 text-white/60">
                        {banner.description}
                      </p>

                      <Button
                        className="mt-5"
                      >
                        <Link href={banner.href} className="flex items-center shrink-0">
                          {banner.cta}

                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* RIGHT */}

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 justify-items-center">

                      {banner.toppers.map((topper, index) => (
                        <TopperCardAlternate
                          key={topper.id}
                          topper={topper}
                          variant={
                            index % 2 === 0
                              ? "orange"
                              : "dark"
                          }
                          className="min-w-none w-full h-[250px]"
                        />
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </RevealGroup>
      </Container>
    </section>
  );
}