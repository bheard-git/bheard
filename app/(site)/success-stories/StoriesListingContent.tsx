import StoriesListingView from "@/components/success-stories/StoriesListingView";
import { listPublishedStories } from "@/lib/services/stories.service";
import { successStoryToCaseStudy } from "@/lib/success-stories/mapper";

export default async function StoriesListingContent() {
  const rows = await listPublishedStories();
  const cases = rows.map(successStoryToCaseStudy);

  if (cases.length === 0) {
    return (
      <section className="bg-surface px-gutter-sm py-section-y-sm md:px-gutter md:py-section-y">
        <div className="mx-auto max-w-content-max py-20 text-center">
          <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">Success stories</p>
          <h1 className="mt-4 font-headline text-4xl font-black uppercase tracking-tight text-on-background">
            Stories coming soon
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-body text-on-surface-variant">
            Published case studies will appear here once they are live in the CMS.
          </p>
        </div>
      </section>
    );
  }

  return <StoriesListingView cases={cases} />;
}
