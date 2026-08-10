import StoriesListingView from "@/components/success-stories/StoriesListingView";
import { sectionBandY, sectionContentBand, sectionPageX } from "@/components/system/sectionTheme";
import { caseStudiesData, loadPublishedCaseStudies } from "@/lib/success-stories/loadCaseStudies";

export default async function WorkListingContent() {
  // const cases = await loadPublishedCaseStudies();
  const cases = caseStudiesData;
  const priorityOrder = [
    "radisson-blu-goa",
    "goa-tourism",
  ];
  
  const reorderedCases = [...cases].sort((a, b) => {
    const aIsRodha = a.slug === "rodha-edtech";
    const bIsRodha = b.slug === "rodha-edtech";
  
    // Rodha always goes to the last position
    if (aIsRodha) return 1;
    if (bIsRodha) return -1;
  
    const aIndex = priorityOrder.indexOf(a.slug);
    const bIndex = priorityOrder.indexOf(b.slug);
  
    // Both are non-priority → preserve their original order
    if (aIndex === -1 && bIndex === -1) return 0;
  
    // Non-priority goes after priority items
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
  
    return aIndex - bIndex;
  });

  if (cases.length === 0) {
    return (
      <section className={`bg-surface ${sectionPageX} ${sectionBandY}`}>
        <div className={`${sectionContentBand} py-20 text-center`}>
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

  return <StoriesListingView cases={reorderedCases} />;
}
