import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/layout/Container";
import { ExamCard } from "@/components/cards/ExamCard";
import { ValuePropCard } from "@/components/cards/ValuePropCard";
import { CourseCard } from "@/components/cards/CourseCard";
import { FacultyCard } from "@/components/cards/FacultyCard";
import { TopperCard } from "@/components/cards/TopperCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { Carousel } from "@/components/ui/Carousel";
import { CATEGORIES, VALUE_PROPS, RESULT_STATS } from "@/lib/constants";
import { getFeaturedCourses } from "@/data/courses";
import { faculty } from "@/data/faculty";
import { topResults } from "@/data/results";
import { blogPosts } from "@/data/blog";

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const sidePosts = blogPosts.filter((p) => p.id !== featuredPost.id).slice(0, 4);
  const midPosts = sidePosts.slice(0, 2);
  const rightPosts = sidePosts.slice(2, 4);

  return (
    <>
      <HeroSection />

      <section className="section-spacing">
        <Container>
          <SectionHeader
            title={
              <>
                Choose Your Exam,{" "}
                <span className="text-orange-500">Start Your Journey</span>
              </>
            }
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <ExamCard key={cat.id} category={cat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <SectionHeader
            title={
              <>
                Why Thousands Choose{" "}
                <span className="text-orange-500">Rodha</span>
              </>
            }
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {VALUE_PROPS.map((prop) => (
              <ValuePropCard
                key={prop.id}
                icon={prop.icon}
                title={prop.title}
                description={prop.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <SectionHeader
            title="Featured Courses"
            subtitle="Handpicked for your success"
            viewAllHref="/cat"
            viewAllLabel="View All Courses"
            align="left"
          />
          <Carousel>
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="snap-start shrink-0 w-[280px] sm:w-[300px] md:w-[calc(25%-12px)] min-w-[260px]"
              >
                <CourseCard course={course} className="h-full" />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <SectionHeader
            title="Learn from India's Top Faculty"
            subtitle="Experienced. Dedicated. Result-Oriented."
            viewAllHref="/faculty"
            viewAllLabel="View All Faculty"
            align="left"
          />
          <Carousel>
            {faculty.map((member) => (
              <div key={member.id} className="snap-start shrink-0">
                <FacultyCard faculty={member} className="h-full" />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>

      <section id="results" className="section-spacing">
        <Container>
          <SectionHeader
            title="Our Results Speak for Themselves"
            subtitle="Real students. Real success."
            viewAllHref="/cat#results"
            viewAllLabel="View All Results"
            align="left"
          />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
            <div className="card-base shrink-0 lg:w-[210px] xl:w-[230px] p-5 md:p-6 flex flex-row lg:flex-col gap-5 lg:gap-7 justify-center rounded-[6px] bg-gradient-to-br from-orange-500/25 via-bg-secondary to-bg-tertiary border-orange-500/35">
              {RESULT_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[30px] md:text-[34px] font-bold text-orange-500 leading-none glow-text-orange">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <p className="mt-1.5 text-body text-text-muted">{stat.label}</p>
                  {stat.description && (
                    <p className="mt-0.5 text-caption text-text-dimmed">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex-1 min-w-0">
              <Carousel>
                {topResults.map((topper) => (
                  <div key={topper.id} className="snap-start shrink-0">
                    <TopperCard topper={topper} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <SectionHeader
            title="Insights, Tips & Exam Updates"
            subtitle="Stay Informed and Inspired"
            viewAllHref="/blog"
            viewAllLabel="View All Blogs"
            align="left"
          />
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 items-stretch min-h-[360px] md:min-h-[420px]">
            <div className="lg:col-span-3 h-full min-h-[320px]">
              <BlogCard post={featuredPost} featured className="h-full" />
            </div>
            <div className="lg:col-span-4 grid grid-cols-1 gap-4 h-full">
              {midPosts.map((post) => (
                <BlogCard key={post.id} post={post} className="h-full min-h-[190px]" />
              ))}
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 gap-4 h-full">
              {rightPosts.map((post) => (
                <BlogCard key={post.id} post={post} className="h-full min-h-[190px]" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title="Ready to Achieve Your Dream?"
        subtitle="Join thousands of successful students on their journey to top colleges."
        primaryAction={{ label: "Book Free Counselling", href: "/contact" }}
        secondaryAction={{ label: "Explore Courses", href: "/cat" }}
      />
    </>
  );
}
