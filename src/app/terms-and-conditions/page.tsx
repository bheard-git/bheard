import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { TERMS_AND_CONDITIONS } from "@/data/legal";

export const metadata: Metadata = {
  title: `${TERMS_AND_CONDITIONS.title} — Rodha`,
  description: TERMS_AND_CONDITIONS.description,
};

export default function TermsPage() {
  return <LegalPageLayout content={TERMS_AND_CONDITIONS} />;
}
