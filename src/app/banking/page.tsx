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
import { getCoursesByCategory } from "@/data/courses";
import { getFacultyByCategory } from "@/data/faculty";
import { getResultsByCategory } from "@/data/results";
import { getTestimonialsByCategory } from "@/data/testimonials";
import {
  BANKING_FAQS,
  BANKING_HERO_FEATURES,
  BANKING_QUICK_STATS,
  BANKING_RESOURCES,
  BANKING_RESULT_STATS,
  BANKING_TEST_SERIES,
} from "@/data/banking-landing";
import { EXTERNAL_URLS } from "@/lib/constants";
import { categoryBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Banking & Government Exams — Rodha",
  description:
    "Prepare for banking, SSC, and government exams with expert mentorship, live classes, and high-quality mock tests.",
};

export default function BankingPage() {
  const bankingCourses = getCoursesByCategory("banking");
  const bankingFaculty = getFacultyByCategory("banking");
  const bankingResults = getResultsByCategory("banking");
  const bankingTestimonials = getTestimonialsByCategory("banking");
  const faqLeft = BANKING_FAQS.filter((_, i) => i % 2 === 0);
  const faqRight = BANKING_FAQS.filter((_, i) => i % 2 === 1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoryBreadcrumbJsonLd("banking")),
        }}
      />
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Banking & Government" },
          ]}
        />
      </Container>

      <CategoryHeroSection
        categoryName="Banking"
        headline={
          <>
            Banking & Government Prep That Delivers{" "}
            <span className="text-orange-500 glow-text-orange">Results</span>
          </>
        }
        subtitle="Expert mentorship for IBPS, SBI, RBI, SSC and related government exams — with live classes, focused practice, and exam-ready mocks."
        heroImageSrc="/assets/images/hero/cat-hero.jpg"
        heroImageAlt="Banking and government exam aspirant preparing with Rodha"
        features={BANKING_HERO_FEATURES}
        quickStats={BANKING_QUICK_STATS}
        primaryCta={{ label: "Explore Courses", href: "#courses" }}
        secondaryCta={{
          label: "Explore Test Series",
          href: EXTERNAL_URLS.thinkExam,
          external: true,
        }}
      />

      <section id="results" className="section-spacing relative overflow-hidden">
        <AmbientBackground variant="grid" />
        <Container>
          <SectionHeader
            title="Results That Inspire"
            viewAllHref="/banking#results"
            viewAllLabel="View All Results"
            align="left"
          />
          <RevealGroup>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
              <ResultsStatsPanel
                stats={BANKING_RESULT_STATS}
                className="reveal-child reveal-delay-1"
              />
              <div className="flex-1 min-w-0">
                <Carousel>
                  {bankingResults.map((topper, index) => (
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

      <section id="courses" className="section-spacing bg-bg-secondary/40">
        <Container>
          <SectionHeader
            title="Our Banking & Government Courses"
            viewAllHref="/banking#courses"
            viewAllLabel="View All Courses"
            align="left"
          />
          <RevealGroup>
            <Carousel>
              {bankingCourses.map((course, index) => (
                <div
                  key={course.id}
                  className={`snap-start shrink-0 w-[280px] sm:w-[300px] md:w-[calc(25%-15px)] min-w-[260px] reveal-child reveal-delay-${(index % 4) + 1}`}
                >
                  <CourseCard
                    course={course}
                    className={`h-full shine-delay-${(index % 4) + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </RevealGroup>
        </Container>
      </section>

      <section id="faculty" className="section-spacing">
        <Container>
          <SectionHeader
            title="Star Faculty for Banking & Government"
            viewAllHref="/faculty"
            viewAllLabel="View All Faculty"
            align="left"
          />
          <RevealGroup>
            <Carousel>
              {bankingFaculty.map((member, index) => (
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
            </Carousel>
          </RevealGroup>
        </Container>
      </section>

      <section id="test-series" className="section-spacing bg-bg-secondary/40">
        <Container>
          <SectionHeader
            title="Banking & SSC Test Series"
            viewAllHref={EXTERNAL_URLS.thinkExam}
            viewAllLabel="View All Test Series"
            align="left"
          />
          <RevealGroup>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {BANKING_TEST_SERIES.map((item, index) => (
                <TestSeriesCard
                  key={item.id}
                  item={item}
                  className={`reveal-child reveal-delay-${(index % 4) + 1} shine-delay-${(index % 4) + 1}`}
                />
              ))}
            </div>
          </RevealGroup>
        </Container>
      </section>

      <section id="testimonials" className="section-spacing">
        <Container>
          <SectionHeader
            title="What Our Students Say"
            subtitle="Real stories from Rodha Banking & Government aspirants"
            align="left"
          />
          <RevealGroup>
            <Carousel autoPlay>
              {bankingTestimonials.map((item, index) => (
                <div
                  key={item.id}
                  className={`snap-start shrink-0 reveal-child reveal-delay-${(index % 4) + 1}`}
                >
                  <TestimonialCard testimonial={item} />
                </div>
              ))}
            </Carousel>
          </RevealGroup>
        </Container>
      </section>

      <section id="resources" className="section-spacing bg-bg-secondary/40">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BANKING_RESOURCES.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="faqs" className="section-spacing">
        <Container>
          <SectionHeader
            title="Banking & Government FAQs"
            viewAllHref="/faq"
            viewAllLabel="View All FAQs"
            align="left"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 items-start">
            <Accordion items={faqLeft} iconVariant="plus" />
            <Accordion items={faqRight} iconVariant="plus" />
          </div>
        </Container>
      </section>

      <CTABand
        title="Ready to Crack Banking & Government Exams?"
        subtitle="Join thousands of serious aspirants and start your journey today."
        primaryAction={{ label: "Book Free Counselling", href: "/contact" }}
        secondaryAction={{ label: "Explore Courses", href: "/banking#courses" }}
      />
    </>
  );
}
