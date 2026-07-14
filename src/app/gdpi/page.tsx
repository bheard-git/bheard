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
  GDPI_FAQS,
  GDPI_HERO_FEATURES,
  GDPI_QUICK_STATS,
  GDPI_RESOURCES,
  GDPI_RESULT_STATS,
  GDPI_TEST_SERIES,
} from "@/data/gdpi-landing";
import { EXTERNAL_URLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GDPI Preparation — Rodha",
  description:
    "GDPI preparation to ace your B-school selection process. Mock GDs, interview practice, and expert feedback.",
};

export default function GDPIPage() {
  const gdpiCourses = getCoursesByCategory("gdpi");
  const gdpiFaculty = getFacultyByCategory("gdpi");
  const gdpiResults = getResultsByCategory("gdpi");
  const gdpiTestimonials = getTestimonialsByCategory("gdpi");
  const faqLeft = GDPI_FAQS.filter((_, i) => i % 2 === 0);
  const faqRight = GDPI_FAQS.filter((_, i) => i % 2 === 1);

  return (
    <>
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "GDPI" },
          ]}
        />
      </Container>

      <CategoryHeroSection
        categoryName="GDPI"
        headline={
          <>
            Convert Your Interview Calls into{" "}
            <span className="text-orange-500 glow-text-orange">Dream Offers</span>
          </>
        }
        subtitle="Master Group Discussions, Personal Interviews, and WAT with mock sessions, expert panel feedback, and proven frameworks for top B-school conversions."
        heroImageSrc="/assets/images/hero/cat-hero.jpg"
        heroImageAlt="GDPI aspirant preparing for B-school interviews"
        features={GDPI_HERO_FEATURES}
        quickStats={GDPI_QUICK_STATS}
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
            title="Our GDPI Courses"
            viewAllHref="/gdpi#courses"
            viewAllLabel="View All Courses"
            align="left"
          />
          <Carousel>
            {gdpiCourses.map((course) => (
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
            title="Star Faculty for GDPI"
            viewAllHref="/faculty"
            viewAllLabel="View All Faculty"
            align="left"
          />
          <Carousel>
            {gdpiFaculty.map((member) => (
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
            title="GDPI Practice Series"
            viewAllHref={EXTERNAL_URLS.thinkExam}
            viewAllLabel="View All Test Series"
            align="left"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GDPI_TEST_SERIES.map((item) => (
              <TestSeriesCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="results" className="section-spacing bg-bg-secondary/40">
        <Container>
          <SectionHeader
            title="Results That Inspire"
            viewAllHref="/gdpi#results"
            viewAllLabel="View All Results"
            align="left"
          />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
            <ResultsStatsPanel stats={GDPI_RESULT_STATS} />
            <div className="flex-1 min-w-0">
              <Carousel>
                {gdpiResults.map((topper) => (
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
            subtitle="Real stories from Rodha GDPI aspirants"
            align="left"
          />
          <Carousel>
            {gdpiTestimonials.map((item) => (
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
            {GDPI_RESOURCES.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="faqs" className="section-spacing">
        <Container>
          <SectionHeader
            title="GDPI FAQs"
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
        title="Ready to Ace Your GDPI 2026?"
        subtitle="Join thousands of serious aspirants and convert your calls into dream B-school offers."
        primaryAction={{ label: "Book Free Counselling", href: "/contact" }}
        secondaryAction={{ label: "Explore Courses", href: "/gdpi#courses" }}
      />
    </>
  );
}
