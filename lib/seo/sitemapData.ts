import { listPublishedBlogPosts } from "@/lib/services/blog.service";
import { listPublishedStories } from "@/lib/services/stories.service";

export type SitemapLink = {
  label: string;
  href: string;
};

export type SitemapCategory = {
  title: string;
  links: SitemapLink[];
};

export async function getSitemapCategories(): Promise<SitemapCategory[]> {
  const workLinks: SitemapLink[] = [{ label: "All Case Studies", href: "/work" }];
  const blogLinks: SitemapLink[] = [{ label: "All Posts", href: "/blog" }];

  try {
    const stories = await listPublishedStories();
    for (const row of stories) {
      const story = row as { slug?: string; title?: string };
      if (!story.slug) continue;
      workLinks.push({
        label: story.title?.trim() || story.slug,
        href: `/work/${story.slug}`,
      });
    }
  } catch (err) {
    console.warn("[sitemap-data] skipping story URLs:", err instanceof Error ? err.message : err);
  }

  try {
    const posts = await listPublishedBlogPosts();
    for (const post of posts) {
      blogLinks.push({
        label: post.title?.trim() || post.slug,
        href: `/blog/${post.slug}`,
      });
    }
  } catch (err) {
    console.warn("[sitemap-data] skipping blog URLs:", err instanceof Error ? err.message : err);
  }

  return [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Industries", href: "/industries" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Brand Solutions", href: "/brand-solutions" },
        { label: "Tech Solutions", href: "/tech-solutions" },
        { label: "Guest AI", href: "/services/tech-solutions/ai-chatbots-agents" },
      ],
    },
    {
      title: "Work",
      links: workLinks,
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
    {
      title: "Blog",
      links: blogLinks,
    },
  ];
}
