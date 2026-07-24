"use client";

import Link from "next/link";
import { CounsellingCtaButton } from "@/components/ui/CounsellingCtaButton";

interface CtaAction {
  label: string;
  href: string;
}

interface CounsellingCtaActionProps {
  action: CtaAction;
  className?: string;
  children?: React.ReactNode;
}

function isCounsellingModalAction(action: CtaAction) {
  return /counselling/i.test(action.label) && action.href === "/contact";
}

export function CounsellingCtaAction({ action, className, children }: CounsellingCtaActionProps) {
  const content = children ?? action.label;

  if (isCounsellingModalAction(action)) {
    return <CounsellingCtaButton className={className}>{content}</CounsellingCtaButton>;
  }

  if (action.href.startsWith("http")) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  );
}
