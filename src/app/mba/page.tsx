import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CategoryHeroSection } from "@/components/sections/CategoryHeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ResultsStatsPanel } from "@/components/sections/ResultsStatsPanel";
import { CTABand } from "@/components/sections/CTABand";
import { CourseCard } from "@/components/cards/CourseCard";
import { FacultyCard } from "@/components/cards/FacultyCard";
import { TopperCard } from "@/components/cards/TopperCard";
import { TestSeriesCard } from "@/components/cards/TestSeriesCard";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Carousel } from "@/components/ui/Carousel";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { Accordion } from "@/components/ui/Accordion";
import { getCoursesByCategory, mbaCourses } from "@/data/courses";
import { getFacultyByCategory } from "@/data/faculty";
import { getResultsByCategory } from "@/data/results";
import { getTestimonialsByCategory } from "@/data/testimonials";
import {
  MBA_FAQS,
  MBA_HERO_FEATURES,
  MBA_QUICK_STATS,
  MBA_RESOURCES,
  MBA_RESULT_STATS,
  MBA_TEST_SERIES,
} from "@/data/mba-landing";
import { EXTERNAL_URLS } from "@/lib/constants";
import { categoryBreadcrumbJsonLd } from "@/lib/structured-data";
import { CategoryHeroSectionV2 } from "@/components/sections/home/HeroSections/CategoryHeroSectionV2";
import Typewritter from "@/components/Typewriter";
import { InfiniteMarquee } from "@/components/ui/infiniteMarquee";
import TestimonialColumn from "@/components/sections/home/Testimonials/TestimonialColumn";
import { HeroVideoEmbed } from "@/components/sections/home/HeroVideoEmbed";
import { YoutubeStoryCard } from "@/components/cards/YoutubeStoryCard";
import { mbaStudentStories } from "@/data/youttube-stories";
import { StoriesModal } from "@/components/layout/VideoModal";
import { CourseCardV2 } from "@/components/cards/CourseCardV2";
import { TestSeriesCardV2 } from "@/components/cards/TestSeriesCardV2";
import { TestimonialCardV2 } from "@/components/sections/home/Testimonials/TestimonialCardV2";

export const metadata: Metadata = {
  title: "MBA Preparation (CAT + GDPI) — Rodha",
  description:
    "Comprehensive MBA preparation covering CAT and GDPI. Live classes, mock tests, and personalized study plans for IIM admissions.",
};

export default function MBAPage() {
  const mbaFaculty = getFacultyByCategory("mba");
  const mbaResults = getResultsByCategory("mba");
  const mbaTestimonials = getTestimonialsByCategory("mba");
  const faqLeft = MBA_FAQS.filter((_, i) => i % 2 === 0);
  const faqRight = MBA_FAQS.filter((_, i) => i % 2 === 1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoryBreadcrumbJsonLd("mba")),
        }}
      />
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "MBA" },
          ]}
        />
      </Container>

      <CategoryHeroSectionV2
        categoryName="MBA"
        headline={
          <>
            MBA Prep That Transforms Aspirants into{" "}
            <span className="text-orange-500 glow-text-orange"><Typewritter words={["Top B school converts.", "99 percentiers.", "The Top 1%.", "IIM Converts."]} /></span>
          </>
        }
        subtitle="Crack CAT with expert guidance, exam-level mock tests, and a structured preparation plan designed to help you secure your dream B-school."
        heroImageSrc="/assets/images/hero/cat-hero.jpg"
        heroImageAlt="MBA aspirant preparing for CAT and top B-school admissions"
        features={MBA_HERO_FEATURES}
        quickStats={MBA_QUICK_STATS}
        primaryCta={{ label: "Explore Courses", href: "#courses" }}
        secondaryCta={{
          label: "Explore Test Series",
          href: EXTERNAL_URLS.thinkExam,
          external: true,
        }}
      />

      <section id="results" className="home-section-spacing relative overflow-hidden light-section-gradient">
        <AmbientBackground variant="grid" />
        <Container>
          <SectionHeader
            title="Results That Inspire"
            viewAllHref="/mba#results"
            viewAllLabel="View All Results"
            align="left"
          />
          <RevealGroup>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
              <ResultsStatsPanel
                stats={MBA_RESULT_STATS}
                className="reveal-child reveal-delay-1"
              />
              <div className="flex-1 min-w-0">
                <Carousel>
                  {mbaResults.map((topper, index) => (
                    <div
                      key={topper.id}
                      className={`snap-start shrink-0 reveal-child reveal-delay-${(index % 4) + 1}`}
                    >
                      <TopperCard topper={topper} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </RevealGroup>
        </Container>
      </section>

      <section id="courses" data-home-zone="courses" className="home-section-spacing home-on-light relative bg-white">
        <Container>
          <SectionHeader
            title="Flagship CAT 2026 Programs"
            subtitle="Pick the track that fits you. Explore what's included in every course."
            align="left"
            viewAllHref="/mba#courses"
            viewAllLabel="View All Courses"
          />
          <RevealGroup>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {mbaCourses?.map((course, index) => (
                  <div
                      key={course.id}
                      className={`reveal-child reveal-delay-${(index % 4) + 1}`}
                  >
                      <CourseCardV2
                          course={course}
                          className="h-full"
                      />
                  </div>
              ))}
          </div>
          </RevealGroup>
        </Container>
      </section>

      <section id="test-series" data-home-zone="test-series" className="home-section-spacing home-on-light relative light-section-gradient bg-white !pt-0">
        <Container>
          <RevealGroup>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
              <div className="lg:col-span-6 reveal-child reveal-delay-1">
                <p className="text-body-sm uppercase tracking-wider text-orange-500 font-semibold mb-2">
                MBA TEST SERIES
                </p>
                <h2 className="text-h2 md:text-h1 font-bold home-light-heading leading-tight">
                Practice like it's 
                  <span className="text-orange-500"> the real exam.</span>
                </h2>
                  <p className="mt-3 text-body home-light-body leading-relaxed mb-6">
                  Identify your strengths, fix your weak areas, and walk into CAT with confidence.
                </p>

              </div>
            </div>
          </RevealGroup>
          <RevealGroup>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {MBA_TEST_SERIES.map((item, index) => (
                <TestSeriesCardV2
                  key={item.id}
                  item={item}
                  className={`reveal-child reveal-delay-${(index % 4) + 1} shine-delay-${(index % 4) + 1}`}
                />
              ))}
            </div>
          </RevealGroup>
        </Container>
      </section>

      <section id="faculty" className="home-section-spacing">
        <Container>
          <SectionHeader
            title="Star Faculty for MBA"
            viewAllHref="/faculty"
            viewAllLabel="View All Faculty"
            align="left"
          />
        </Container>
        <RevealGroup>
          <InfiniteMarquee speed={35} >
            {mbaFaculty.map((member, index) => (
              <div
                key={member.id}
                className={`snap-start shrink-0 reveal-child reveal-delay-${(index % 4) + 1}`}
              >
                <FacultyCard
                  faculty={member}
                  className={`h-full shine-delay-${(index % 4) + 1}`}
                />
              </div>
            ))}
          </InfiniteMarquee>
        </RevealGroup>
      </section>

      <section id="testimonials" className="home-section-spacing !py-0">
        <Container>
          <SectionHeader
            title="What Our Students Say"
            subtitle="Real stories from Rodha MBA aspirants"
            align="left"
          />

          <RevealGroup>
          <div
            className="
              testimonial-marquee
              relative
              mt-12
              lg:h-[480px]
              overflow-hidden
            "
          >
            {/* <div className="pointer-events-none absolute top-0 inset-x-0 z-30 h-36 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0ADD] to-transparent" />
            <div className="pointer-events-none absolute bottom-0 inset-x-0 z-30 h-36 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0ADD] to-transparent" /> */}
              <div className="hidden md:grid h-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialColumn
                  testimonials={mbaTestimonials.filter((_, i) => i % 3 === 0)}
                  direction="down"
                />

                <TestimonialColumn
                  testimonials={mbaTestimonials.filter((_, i) => i % 3 === 1)}
                  direction="up"
                />

                <TestimonialColumn
                  testimonials={mbaTestimonials.filter((_, i) => i % 3 === 2)}
                  direction="down"
                  className="hidden lg:block"
                />
              </div>
              <div className="block md:hidden">
                <InfiniteMarquee speed={35} >
                  {mbaTestimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`snap-start shrink-0 reveal-child reveal-delay-${(index % 4) + 1}`}
                    >
                      <TestimonialCardV2
                        key={testimonial.id}
                        testimonial={testimonial}
                      />
                    </div>
                  ))}
                </InfiniteMarquee>
              </div>
            </div>
          </RevealGroup>
        </Container>
      </section>


      <CTABand
        title="Ready to Crack CAT & Convert GDPI?"
        subtitle="Join thousands of serious aspirants and start your MBA journey today."
        primaryAction={{ label: "Book Free Counselling", href: "/contact" }}
        secondaryAction={{ label: "Explore Courses", href: "/mba#courses" }}
      />

      <section data-home-zone="stories" className="home-section-spacing home-on-light relative light-section-gradient bg-white">
        <Container>
          <RevealGroup>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
              <div className="lg:col-span-5 reveal-child reveal-delay-1">
                <p className="text-body-sm uppercase tracking-wider text-orange-500 font-semibold mb-2">
                Still not convinced?
                </p>
                <h2 className="text-h2 md:text-h1 font-bold home-light-heading leading-tight">
                  Watch how they 
                  <span className="text-orange-500"> Did it.</span>
                </h2>
                  <p className="mt-3 text-body home-light-body leading-relaxed mb-6">
                  They were exactly where you are today — hear their stories, in their own words.
                </p>

              </div>
            </div>
          </RevealGroup>
        </Container>
        <RevealGroup>
          <InfiniteMarquee speed={35} >
          {mbaStudentStories.map((story) => (
            <YoutubeStoryCard
              key={story.id}
              youtubeId={story.youtubeId}
              student={story.student}
              subtitle={story.subtitle}
            />
          ))}
          </InfiniteMarquee>
        </RevealGroup>
      </section>
      <StoriesModal/>
    </>
  );
}
