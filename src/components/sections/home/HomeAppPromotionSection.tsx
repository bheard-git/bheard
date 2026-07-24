import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { RevealGroup } from "@/components/ui/RevealGroup";

const APP_MOCKUP_SRC = "/assets/app promotion/app mockup.png";

export function HomeAppPromotionSection() {
  return (
    <section data-home-zone="app-promo" className="home-section-spacing relative">
      <Container>
        <RevealGroup>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="reveal-child reveal-delay-1 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src={APP_MOCKUP_SRC}
                  alt="Rodha mobile app showing login, profile, and doubts dashboard screens"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>

            <div className="reveal-child reveal-delay-2">
              <p className="text-body-sm uppercase tracking-wider text-orange-400 font-semibold mb-2">
                Access. Learn. Succeed.
              </p>
              <h2 className="text-h2 md:text-h1 font-bold text-text-primary leading-tight">
                Learn Anytime, Anywhere with the{" "}
                <span className="text-orange-500">Rodha App</span>
              </h2>
              <p className="mt-4 text-body text-text-muted leading-relaxed max-w-lg">
                Live classes, test series, performance analysis and personalised
                mentorship — all in your pocket.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] border border-white/20 bg-bg-secondary/60 text-body-sm font-semibold text-text-primary hover:bg-bg-hover transition-colors"
                  aria-label="Get it on Google Play — coming soon"
                >
                  <Image
                    src="/assets/icons/playstore-svgrepo-com.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Get it on Google Play
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] border border-white/20 bg-bg-secondary/60 text-body-sm font-semibold text-text-primary hover:bg-bg-hover transition-colors"
                  aria-label="Download on the App Store — coming soon"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on the App Store
                </a>
              </div>
            </div>
          </div>
        </RevealGroup>
      </Container>
    </section>
  );
}
