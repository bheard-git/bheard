import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { PRIVACY_POLICY } from "@/data/legal";

export const metadata: Metadata = {
  title: `${PRIVACY_POLICY.title} — Rodha`,
  description: PRIVACY_POLICY.description,
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout content={PRIVACY_POLICY} />;
}
