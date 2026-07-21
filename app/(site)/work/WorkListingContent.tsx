import StoriesListingView from "@/components/success-stories/StoriesListingView";
import { loadPublishedCaseStudies } from "@/lib/success-stories/loadCaseStudies";

export default async function WorkListingContent() {
  const cases = await loadPublishedCaseStudies();

  if (cases.length === 0) {
    return (
      <section className="bg-surface px-gutter-sm py-section-y-sm md:px-gutter md:py-section-y">
        <div className="mx-auto max-w-content-max py-20 text-center">
          <p className="font-label text-label-sm uppercase tracking-[0.2em] text-primary">Our work</p>
          <h1 className="mt-4 font-headline text-4xl font-black uppercase tracking-tight text-on-background">
            Case studies coming soon
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-body text-on-surface-variant">
            Published case studies will appear here once they are live.
          </p>
        </div>
      </section>
    );
  }

  return <StoriesListingView cases={cases} />;
}
