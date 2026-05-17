import CareersListingView from "@/components/careers/CareersListingView";
import { listActiveCareers } from "@/lib/services/careers.service";

export default async function CareersListingContent() {
  const roles = await listActiveCareers();
  return <CareersListingView roles={roles} />;
}
