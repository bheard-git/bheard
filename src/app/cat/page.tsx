import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CategoryHeroSection } from "@/components/sections/CategoryHeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";
import { CourseCard } from "@/components/cards/CourseCard";
import { FacultyCard } from "@/components/cards/FacultyCard";
import { TopperCard } from "@/components/cards/TopperCard";
import { TestSeriesCard } from "@/components/cards/TestSeriesCard";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { Carousel } from "@/components/ui/Carousel";
import { Accordion } from "@/components/ui/Accordion";
import { getCoursesByCategory } from "@/data/courses";
import { getFacultyByCategory } from "@/data/faculty";
import { getResultsByCategory } from "@/data/results";
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
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
            <div className="card-base shrink-0 lg:w-[220px] xl:w-[240px] p-6 md:p-7 flex flex-row lg:flex-col gap-6 lg:gap-8 justify-center rounded-[6px] bg-linear-to-br from-orange-500/25 via-bg-secondary to-bg-tertiary border-orange-500/35">
              {CAT_RESULT_STATS.map((stat) => {
                const iconSrc =
                  stat.label === "Selections"
                    ? "/assets/images/icons/selection.png"
                    : "/assets/images/icons/rank.png";

                return (
                  <div key={stat.label} className="flex items-start gap-3">
                    <Image
                      src={iconSrc}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-[28px] md:text-[32px] font-bold text-orange-500 leading-none glow-text-orange">
                        {stat.value}
                        {stat.suffix}
                      </div>
                      <p className="mt-2 text-body text-text-muted">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

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

      <section id="resources" className="section-spacing">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAT_RESOURCES.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section id="faqs" className="section-spacing bg-bg-secondary/40">
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
