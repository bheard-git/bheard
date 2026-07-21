import CareersListingView from "@/components/careers/CareersListingView";
import { GENERAL_APPLICATION_SLUG, getActiveCareerBySlug } from "@/lib/services/careers.service";

export default async function CareersListingContent() {
  const generalRole = await getActiveCareerBySlug(GENERAL_APPLICATION_SLUG);
  const onlineApplicationsReady = Boolean(process.env.DATABASE_URL && generalRole?.id);

  return (
    <CareersListingView
      slug={GENERAL_APPLICATION_SLUG}
      roleTitle={generalRole?.title ?? "General Application"}
      onlineApplicationsReady={onlineApplicationsReady}
    />
  );
}
