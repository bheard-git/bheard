import { Container } from "@/components/layout/Container";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  return {
    title: `${slug} — Banking Course — Rodha`,
    description: `Detailed information about our Banking & Government preparation course.`,
  };
}

export default async function BankingCourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;

  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 font-bold">Banking Course Details</h1>
        <p className="mt-4 text-body-lg text-text-muted">Course: {slug}</p>
        <p className="mt-8 text-text-dimmed">Full course details coming soon...</p>
      </Container>
    </section>
  );
}
