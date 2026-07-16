import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { REFUND_POLICY } from "@/data/legal";

export const metadata: Metadata = {
  title: `${REFUND_POLICY.title} — Rodha`,
  description: REFUND_POLICY.description,
};

export default function RefundPolicyPage() {
  return <LegalPageLayout content={REFUND_POLICY} />;
}
