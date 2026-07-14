import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { DISCLAIMER } from "@/data/legal";

export const metadata: Metadata = {
  title: `${DISCLAIMER.title} — Rodha`,
  description: DISCLAIMER.description,
};

export default function DisclaimerPage() {
  return <LegalPageLayout content={DISCLAIMER} />;
}
