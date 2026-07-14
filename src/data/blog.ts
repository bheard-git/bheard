import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "CAT 2026 Exam Pattern: Complete Guide to Syllabus, Sections & Scoring",
    slug: "cat-2026-exam-pattern-complete-guide",
    excerpt:
      "Everything you need to know about the CAT 2026 exam pattern, section-wise syllabus, marking scheme, and preparation strategy.",
    content: "Full content here...",
    category: "CAT",
    tags: ["CAT", "Exam Pattern", "Syllabus"],
    author: "Anand Mishra",
    publishedAt: "2026-06-15",
    readTime: "8 min read",
    image: "/assets/images/blog/cat-exam-pattern.jpg",
    featured: true,
  },
  {
    id: "b2",
    title: "How to Crack IPMAT 2026 in 6 Months: A Proven Strategy",
    slug: "crack-ipmat-2026-in-6-months",
    excerpt:
      "A month-by-month preparation plan to crack IPMAT and secure admission to IIM Indore or Rohtak.",
    content: "Full content here...",
    category: "IPMAT",
    tags: ["IPMAT", "Strategy"],
    author: "Rahul Sharma",
    publishedAt: "2026-06-10",
    readTime: "6 min read",
    image: "/assets/images/blog/ipmat-strategy.jpg",
  },
  {
    id: "b3",
    title: "GDPI Tips: How to Ace Group Discussions at Top B-Schools",
    slug: "gdpi-tips-ace-group-discussions",
    excerpt:
      "Master the art of group discussions with proven frameworks, body language tips, and current affairs strategies.",
    content: "Full content here...",
    category: "GDPI",
    tags: ["GDPI", "Soft Skills"],
    author: "Vishal Gupta",
    publishedAt: "2026-06-05",
    readTime: "5 min read",
    image: "/assets/images/blog/gdpi-tips.jpg",
  },
  {
    id: "b4",
    title: "CLAT 2026 Legal Reasoning: Key Topics & Practice Tips",
    slug: "clat-2026-legal-reasoning-tips",
    excerpt:
      "Focus on the most important legal reasoning topics and practice strategies for CLAT 2026.",
    content: "Full content here...",
    category: "CLAT",
    tags: ["CLAT", "Legal Reasoning"],
    author: "Megha Jivedi",
    publishedAt: "2026-05-28",
    readTime: "7 min read",
    image: "/assets/images/blog/clat-legal.jpg",
  },
  {
    id: "b5",
    title: "10 Proven Study Habits of CAT 99 Percentilers",
    slug: "study-habits-cat-99-percentilers",
    excerpt:
      "Learn the daily routines, revision tactics, and mock-test strategies that top scorers swear by.",
    content: "Full content here...",
    category: "CAT",
    tags: ["CAT", "Study Tips"],
    author: "Anand Mishra",
    publishedAt: "2026-05-20",
    readTime: "4 min read",
    image: "/assets/images/blog/study-tips.jpg",
  },
];

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}

export function getLatestPosts(count = 4): BlogPost[] {
  return blogPosts.slice(0, count);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
