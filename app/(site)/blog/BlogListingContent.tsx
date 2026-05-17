import BlogListingView from "@/components/blog/BlogListingView";
import { listPublishedBlogPosts } from "@/lib/services/blog.service";

export default async function BlogListingContent() {
  const posts = await listPublishedBlogPosts();
  return <BlogListingView posts={posts} />;
}
