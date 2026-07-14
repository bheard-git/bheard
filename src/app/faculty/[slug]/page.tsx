import { Container } from "@/components/layout/Container";

interface FacultyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: FacultyDetailPageProps) {
  const { slug } = await params;
  return {
    title: `Faculty — ${slug} — Rodha`,
    description: `Learn more about our expert faculty member.`,
  };
}

export default async function FacultyDetailPage({ params }: FacultyDetailPageProps) {
  const { slug } = await params;

  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-h1 font-bold">Faculty Profile</h1>
        <p className="mt-4 text-body-lg text-text-muted">Profile for: {slug}</p>
        <p className="mt-8 text-text-dimmed">Full faculty profile coming soon...</p>
      </Container>
    </section>
  );
}
