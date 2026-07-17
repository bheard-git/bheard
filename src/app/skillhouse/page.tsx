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
  SKILLHOUSE_FAQS,
  SKILLHOUSE_HERO_FEATURES,
  SKILLHOUSE_QUICK_STATS,
  SKILLHOUSE_RESOURCES,
  SKILLHOUSE_RESULT_STATS,
  SKILLHOUSE_TEST_SERIES,
} from "@/data/skillhouse-landing";
import { EXTERNAL_URLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Skill House — Rodha",
  description:
    "Skill House career-skills programs with expert mentorship, project-based learning, and industry-aligned practice.",
};

export default function SkillHousePage() {
  const skillhouseCourses = getCoursesByCategory("skillhouse");
  const skillhouseFaculty = getFacultyByCategory("skillhouse");
  const skillhouseResults = getResultsByCategory("skillhouse");
  const skillhouseTestimonials = getTestimonialsByCategory("skillhouse");
  const faqLeft = SKILLHOUSE_FAQS.filter((_, i) => i % 2 === 0);
  const faqRight = SKILLHOUSE_FAQS.filter((_, i) => i % 2 === 1);

  return (
    <>
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Skill House" },
          ]}
        />
      </Container>

      <CategoryHeroSection
        categoryName="Skill House"
        headline={
          <>
            Skills That Launch{" "}
            <span className="text-orange-500 glow-text-orange">Careers</span>
          </>
        }
        subtitle="Skill House builds career-ready capabilities with mentorship, projects, and structured practice — so you grow beyond exams into professional impact."
        heroImageSrc="/assets/images/hero/cat-hero.jpg"
        heroImageAlt="Skill House learner building career-ready skills with Rodha"
        features={SKILLHOUSE_HERO_FEATURES}
        quickStats={SKILLHOUSE_QUICK_STATS}
        primaryCta={{ label: "Explore Courses", href: "#courses" }}
        secondaryCta={{
          label: "Explore Assessments",
          href: EXTERNAL_URLS.thinkExam,
          external: true,
        }}
      />

      <section id="results" className="section-spacing">
        <Container>
          <SectionHeader
            title="Results That Inspire"
            viewAllHref="/skillhouse#results"
            viewAllLabel="View All Results"
            align="left"
          />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
            <ResultsStatsPanel stats={SKILLHOUSE_RESULT_STATS} />
            <div className="flex-1 min-w-0">
              <Carousel>
                {skillhouseResults.map((topper) => (
                  <div key={topper.id} className="snap-start shrink-0">
                    <TopperCard topper={topper} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Container>
      </section>

      <section id="courses" className="section-spacing bg-bg-secondary/40">
        <Container>
          <SectionHeader
            title="Our Skill House Courses"
            viewAllHref="/skillhouse#courses"
            viewAllLabel="View All Courses"
            align="left"
          />
          <Carousel>
            {skillhouseCourses.map((course) => (
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

      <section id="faculty" className="section-spacing">
        <Container>
          <SectionHeader
            title="Star Faculty for Skill House"
            viewAllHref="/faculty"
            viewAllLabel="View All Faculty"
            align="left"
          />
          <Carousel>
            {skillhouseFaculty.map((member) => (
              <div key={member.id} className="snap-start shrink-0">
                <FacultyCard faculty={member} className="h-full" />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>

      <section id="test-series" className="section-spacing bg-bg-secondary/40">
        <Container>
          <SectionHeader
            title="Skill House Practice Hub"
            viewAllHref={EXTERNAL_URLS.thinkExam}
            viewAllLabel="View All Assessments"
            align="left"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLHOUSE_TEST_SERIES.map((item) => (
              <TestSeriesCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="testimonials" className="section-spacing">
        <Container>
          <SectionHeader
            title="What Our Students Say"
            subtitle="Real stories from Rodha Skill House learners"
            align="left"
          />
          <Carousel>
            {skillhouseTestimonials.map((item) => (
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
            {SKILLHOUSE_RESOURCES.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="faqs" className="section-spacing">
        <Container>
          <SectionHeader
            title="Skill House FAQs"
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
        title="Ready to Build Career-Ready Skills?"
        subtitle="Join Skill House and start your next chapter with Rodha."
        primaryAction={{ label: "Book Free Counselling", href: "/contact" }}
        secondaryAction={{
          label: "Explore Courses",
          href: "/skillhouse#courses",
        }}
      />
    </>
  );
}
