import { Container } from "@/components/layout/Container";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return {
    title: `${slug} — Rodha Blog`,
    description: `Read this article on Rodha Blog.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <article className="section-spacing">
      <Container>
        <h1 className="text-h1 md:text-hero font-bold">Blog Post</h1>
        <p className="mt-4 text-body-lg text-text-muted">Article: {slug}</p>
        <p className="mt-8 text-text-dimmed">Full blog post coming soon...</p>
      </Container>
    </article>
  );
}
