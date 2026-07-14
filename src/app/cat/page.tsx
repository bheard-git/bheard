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
import { Accordion } from "@/components/ui/Accordion";
import { getCoursesByCategory } from "@/data/courses";
import { getFacultyByCategory } from "@/data/faculty";
import { getResultsByCategory } from "@/data/results";
import { getTestimonialsByCategory } from "@/data/testimonials";
import {
  CAT_FAQS,
  CAT_HERO_FEATURES,
  CAT_QUICK_STATS,
  CAT_RESOURCES,
  CAT_RESULT_STATS,
  CAT_TEST_SERIES,
} from "@/data/cat-landing";
import { EXTERNAL_URLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CAT Preparation — Rodha",
  description:
    "Comprehensive CAT preparation with expert mentorship. Live classes, mock tests, and personalized study plans for IIM admissions.",
};

export default function CATPage() {
  const catCourses = getCoursesByCategory("cat");
  const catFaculty = getFacultyByCategory("cat");
  const catResults = getResultsByCategory("cat");
  const catTestimonials = getTestimonialsByCategory("cat");
  const faqLeft = CAT_FAQS.filter((_, i) => i % 2 === 0);
  const faqRight = CAT_FAQS.filter((_, i) => i % 2 === 1);

  return (
    <>
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "CAT" },
          ]}
        />
      </Container>

      <CategoryHeroSection
        categoryName="CAT"
        headline={
          <>
            CAT Preparation That Transforms Aspirants into{" "}
            <span className="text-orange-500 glow-text-orange">Top 1%</span>
          </>
        }
        subtitle="Expert mentorship, proven strategies, and a high-intensity learning system built to help serious aspirants crack CAT and convert top IIMs."
        heroImageSrc="/assets/images/hero/cat-hero.jpg"
        heroImageAlt="CAT aspirant preparing for top B-school admissions"
        features={CAT_HERO_FEATURES}
        quickStats={CAT_QUICK_STATS}
        primaryCta={{ label: "Explore Courses", href: "#courses" }}
        secondaryCta={{
          label: "Explore Test Series",
          href: EXTERNAL_URLS.thinkExam,
          external: true,
        }}
      />

      <section id="courses" className="section-spacing">
        <Container>
          <SectionHeader
            title="Our CAT Courses"
            viewAllHref="/cat#courses"
            viewAllLabel="View All Courses"
            align="left"
          />
          <Carousel>
            {catCourses.map((course) => (
              <div
                key={course.id}
                className="snap-start shrink-0 w-[280px] sm:w-[300px] md:w-[calc(25%-15px)] min-w-[260px]"
              >
                <CourseCard course={course} className="h-full" />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>

      <section id="faculty" className="section-spacing bg-bg-secondary/40">
        <Container>
          <SectionHeader
            title="Star Faculty for CAT"
            viewAllHref="/faculty"
            viewAllLabel="View All Faculty"
            align="left"
          />
          <Carousel>
            {catFaculty.map((member) => (
              <div key={member.id} className="snap-start shrink-0">
                <FacultyCard faculty={member} className="h-full" />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>

      <section id="test-series" className="section-spacing">
        <Container>
          <SectionHeader
            title="CAT Test Series"
            viewAllHref={EXTERNAL_URLS.thinkExam}
            viewAllLabel="View All Test Series"
            align="left"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAT_TEST_SERIES.map((item) => (
              <TestSeriesCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="results" className="section-spacing bg-bg-secondary/40">
        <Container>
          <SectionHeader
            title="Results That Inspire"
            viewAllHref="/cat#results"
            viewAllLabel="View All Results"
            align="left"
          />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
            <ResultsStatsPanel stats={CAT_RESULT_STATS} />
            <div className="flex-1 min-w-0">
              <Carousel>
                {catResults.map((topper) => (
                  <div key={topper.id} className="snap-start shrink-0">
                    <TopperCard topper={topper} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Container>
      </section>

      <section id="testimonials" className="section-spacing">
        <Container>
          <SectionHeader
            title="What Our Students Say"
            subtitle="Real stories from Rodha CAT aspirants"
            align="left"
          />
          <Carousel>
            {catTestimonials.map((item) => (
              <div key={item.id} className="snap-start shrink-0">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>

      <section id="resources" className="section-spacing bg-bg-secondary/40">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAT_RESOURCES.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="faqs" className="section-spacing">
        <Container>
          <SectionHeader
            title="CAT FAQs"
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
        title="Ready to Crack CAT 2026?"
        subtitle="Join thousands of serious aspirants and start your journey today."
        primaryAction={{ label: "Book Free Counselling", href: "/contact" }}
        secondaryAction={{ label: "Explore Courses", href: "/cat#courses" }}
      />
    </>
  );
}
