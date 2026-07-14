export interface LegalSection {
  id: string;
  title: string;
  /** Paragraph strings and/or bullet lists */
  content: Array<string | { type: "list"; items: string[] }>;
}

export interface LegalPageContent {
  slug: string;
  title: string;
  lastUpdated: string;
  description: string;
  sections: LegalSection[];
}

export const LEGAL_CONTACT = {
  email: "hello@rodha.in",
  phone: "+91 98765 43210",
  address: "Mumbai, Maharashtra, India",
  grievanceOfficer: "Grievance Officer, Rodha",
};

export const PRIVACY_POLICY: LegalPageContent = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  lastUpdated: "July 2026",
  description:
    "Rodha's privacy policy explaining how we collect, use, and protect your personal information.",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "Rodha (\"we\", \"us\", or \"our\") operates the Rodha website and related marketing pages. This Privacy Policy explains how we collect, use, store, and protect personal information when you browse our site, submit enquiry forms, or engage with our educational services.",
        "By using our website or submitting your details, you agree to the practices described in this policy. If you do not agree, please discontinue use of the site and do not submit personal information.",
      ],
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      content: [
        "We may collect the following categories of information:",
        {
          type: "list",
          items: [
            "Identity and contact data — name, phone number, email address",
            "Enquiry data — exam of interest, preferred batch year, message content",
            "Technical data — IP address, browser type, device information, approximate location derived from IP",
            "Usage data — pages viewed, referral source, session behaviour via cookies or analytics tools",
            "Transaction references — order or enrollment identifiers shared by payment/learning partners for support",
          ],
        },
      ],
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      content: [
        "We use personal information to:",
        {
          type: "list",
          items: [
            "Respond to enquiries and counselling requests",
            "Provide program information tailored to your exam interest",
            "Improve website performance, content, and user experience",
            "Send service updates, offers, or educational tips where permitted",
            "Detect, prevent, and investigate fraud or misuse",
            "Comply with applicable legal and regulatory obligations",
          ],
        },
      ],
    },
    {
      id: "storage-security",
      title: "4. Storage & Security",
      content: [
        "We implement reasonable administrative, technical, and organisational safeguards to protect personal data against unauthorised access, alteration, disclosure, or destruction.",
        "No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. Please use strong unique passwords on partner platforms and keep your credentials confidential.",
      ],
    },
    {
      id: "third-party",
      title: "5. Third-Party Sharing",
      content: [
        "We may share limited data with trusted partners who help us deliver services, including learning platforms, test platforms, analytics providers, and communication tools. These partners process data only as needed to perform contracted services.",
        "We do not sell your personal information. We may disclose information when required by law, court order, or to protect the rights, property, or safety of Rodha, our users, or others.",
      ],
    },
    {
      id: "cookies",
      title: "6. Cookies",
      content: [
        "Our website may use cookies and similar technologies to remember preferences, measure traffic, and improve functionality. You can control cookies through your browser settings. Disabling cookies may affect certain site features.",
      ],
    },
    {
      id: "user-rights",
      title: "7. Your Rights",
      content: [
        "Subject to applicable law, you may request access to, correction of, or deletion of your personal data held by us. You may also opt out of marketing communications by using unsubscribe links or contacting us directly.",
        "To exercise these rights, email hello@rodha.in with sufficient details to verify your identity and process the request.",
      ],
    },
    {
      id: "data-retention",
      title: "8. Data Retention",
      content: [
        "We retain personal information only as long as necessary for the purposes described in this policy, including legal, accounting, or reporting requirements. Enquiry records may be kept for a reasonable period to provide follow-up support.",
      ],
    },
    {
      id: "updates",
      title: "9. Policy Updates",
      content: [
        "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page reflects the latest revision. Continued use of the website after changes constitutes acceptance of the updated policy.",
      ],
    },
    {
      id: "contact",
      title: "10. Contact",
      content: [
        "For privacy-related questions or grievance redressal, contact us using the details at the bottom of this page.",
      ],
    },
  ],
};

export const TERMS_AND_CONDITIONS: LegalPageContent = {
  slug: "terms-and-conditions",
  title: "Terms & Conditions",
  lastUpdated: "July 2026",
  description:
    "Terms and conditions for using Rodha's platform and educational services.",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        "By accessing the Rodha website or enrolling in any program marketed on this site, you agree to these Terms & Conditions and our Privacy Policy. If you do not agree, please do not use the website or services.",
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      content: [
        "You must provide accurate information when submitting forms or creating accounts on partner platforms. If you are under the age of majority in your jurisdiction, you must use the services only with parent or guardian consent where required.",
      ],
    },
    {
      id: "account-registration",
      title: "3. Account Registration",
      content: [
        "Course access, tests, and related features may require accounts on third-party platforms such as Graphy or ThinkExam. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
        "Notify us promptly if you suspect unauthorised access to your account.",
      ],
    },
    {
      id: "course-access",
      title: "4. Course Access & Delivery",
      content: [
        "Access duration, inclusions (live classes, recordings, mocks, mentorship), and schedule details are specified on the relevant course pages or enrollment confirmation.",
        "Rodha may modify batch timings, faculty assignments, or content structure when reasonably necessary, while aiming to preserve the overall learning outcome of the program.",
      ],
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      content: [
        "All content on the Rodha website and within enrolled programs — including text, graphics, videos, PDFs, question banks, and branding — is owned by Rodha or its licensors and protected by applicable intellectual property laws.",
        "You may use materials solely for personal study. Redistribution, resale, recording of live classes for public sharing, or posting of paid content in public forums is strictly prohibited.",
      ],
    },
    {
      id: "user-conduct",
      title: "6. User Conduct",
      content: [
        "You agree not to:",
        {
          type: "list",
          items: [
            "Misuse the website or disrupt other users' learning experience",
            "Share paid content or account credentials with others",
            "Attempt to reverse-engineer, scrape, or attack our systems",
            "Post unlawful, abusive, or misleading content in community channels",
            "Impersonate Rodha staff or other users",
          ],
        },
        "Violation may result in suspension or termination of access without refund where permitted by our Refund Policy.",
      ],
    },
    {
      id: "payment-terms",
      title: "7. Payment Terms",
      content: [
        "Fees for programs are displayed before purchase. Payments may be collected via partner platforms. Prices may change for future batches; confirmed purchases are governed by the price paid at checkout unless otherwise stated.",
      ],
    },
    {
      id: "refunds",
      title: "8. Refunds",
      content: [
        "Refunds are governed by our separate Refund Policy. Please review that page before purchasing. Submitting a payment constitutes acknowledgement of applicable refund rules.",
      ],
    },
    {
      id: "limitation",
      title: "9. Limitation of Liability",
      content: [
        "Educational outcomes such as ranks, percentiles, or college admissions depend on many factors outside Rodha's control. We do not guarantee specific exam results.",
        "To the maximum extent permitted by law, Rodha shall not be liable for indirect, incidental, or consequential damages arising from use of the website or services. Our aggregate liability for any claim related to a paid program shall not exceed the amount you paid for that program.",
      ],
    },
    {
      id: "termination",
      title: "10. Termination",
      content: [
        "We may suspend or terminate access if you breach these Terms, engage in fraud, or misuse course materials. You may stop using the website at any time. Provisions that by nature should survive (IP, liability limits, governing law) will continue after termination.",
      ],
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      content: [
        "These Terms are governed by the laws of India. Courts in Mumbai, Maharashtra shall have exclusive jurisdiction, subject to applicable consumer protection rights.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      content: [
        "For questions about these Terms, contact us using the details at the bottom of this page.",
      ],
    },
  ],
};

export const REFUND_POLICY: LegalPageContent = {
  slug: "refund-policy",
  title: "Refund Policy",
  lastUpdated: "July 2026",
  description:
    "Rodha's refund policy for course purchases and subscription services.",
  sections: [
    {
      id: "overview",
      title: "1. Overview",
      content: [
        "This Refund Policy explains when refunds may be available for Rodha programs purchased via our website or partner platforms. Please read it carefully before enrolling.",
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      content: [
        "Refund requests may be considered when:",
        {
          type: "list",
          items: [
            "The request is submitted within the stated cooling-off period for the product, if any",
            "You have not consumed a substantial portion of course content or live sessions",
            "Duplicate payment or clear billing error can be verified",
            "Rodha cancels a batch and cannot offer a suitable alternative",
          ],
        },
        "Eligibility criteria may vary by course SKU and will be communicated at purchase when special conditions apply.",
      ],
    },
    {
      id: "timeframe",
      title: "3. Timeframe",
      content: [
        "Unless a course page states a different window, refund requests should generally be raised within 7 days of purchase and before significant content consumption.",
        "Requests raised after the window or after extensive usage may be declined.",
      ],
    },
    {
      id: "process",
      title: "4. Refund Process",
      content: [
        "To request a refund:",
        {
          type: "list",
          items: [
            "Email hello@rodha.in with subject line \"Refund Request\"",
            "Include your full name, registered email/mobile, order ID, course name, and reason",
            "Attach payment receipt or screenshot if available",
          ],
        },
        "Our team will review the request and respond with approval, partial adjustment, or rejection reasons.",
      ],
    },
    {
      id: "non-refundable",
      title: "5. Non-Refundable Items",
      content: [
        "The following are typically non-refundable:",
        {
          type: "list",
          items: [
            "Courses or add-ons marked as non-refundable at checkout",
            "Consumed live mentoring slots and completed workshop seats",
            "Downloadable digital products once delivered, unless defective",
            "Third-party fees charged by payment gateways where not recoverable",
          ],
        },
      ],
    },
    {
      id: "exceptions",
      title: "6. Exceptions",
      content: [
        "We may provide goodwill credits or exceptions in documented hardship cases at Rodha's sole discretion. Such decisions do not create a precedent for future claims.",
      ],
    },
    {
      id: "processing-time",
      title: "7. Processing Time",
      content: [
        "Approved refunds are typically processed within 7–14 business days to the original payment method, depending on the payment partner and bank timelines. You will receive confirmation when the refund is initiated.",
      ],
    },
    {
      id: "contact",
      title: "8. Contact",
      content: [
        "For refund questions, contact us using the details at the bottom of this page.",
      ],
    },
  ],
};

export const DISCLAIMER: LegalPageContent = {
  slug: "disclaimer",
  title: "Disclaimer",
  lastUpdated: "July 2026",
  description: "Disclaimer for Rodha's educational platform and content.",
  sections: [
    {
      id: "general",
      title: "1. General Disclaimer",
      content: [
        "The information on the Rodha website is provided for general educational and informational purposes. While we aim for accuracy, content may contain errors or become outdated. Use of the website is at your own risk.",
      ],
    },
    {
      id: "educational-content",
      title: "2. Educational Content",
      content: [
        "Course materials, blogs, sample questions, and strategy guides are designed to support exam preparation. They are not a substitute for official notifications from exam conducting bodies. Always verify dates, eligibility, and syllabus from official sources.",
      ],
    },
    {
      id: "external-links",
      title: "3. External Links & Partner Platforms",
      content: [
        "Our website may redirect you to third-party platforms (including Graphy, ThinkExam, and Rodha Buddy) for learning, testing, or login. Rodha does not control those platforms' availability, privacy practices, or terms beyond our contractual relationship with them.",
        "We are not responsible for content or services provided exclusively by third parties.",
      ],
    },
    {
      id: "results-outcomes",
      title: "4. Results & Outcomes",
      content: [
        "Past student results, testimonials, and rankings are individual outcomes and do not guarantee similar results for future students. Exam performance depends on personal effort, consistency, aptitude, exam difficulty, and other factors outside Rodha's control.",
      ],
    },
    {
      id: "platform-availability",
      title: "5. Platform Availability",
      content: [
        "We strive for uninterrupted access to marketing pages and partner platforms, but downtime, maintenance, or technical issues may occur. Rodha is not liable for temporary unavailability of the website or partner services.",
      ],
    },
    {
      id: "contact",
      title: "6. Contact",
      content: [
        "If you have questions about this Disclaimer, contact us using the details at the bottom of this page.",
      ],
    },
  ],
};

export const LEGAL_PAGES = {
  privacy: PRIVACY_POLICY,
  terms: TERMS_AND_CONDITIONS,
  refund: REFUND_POLICY,
  disclaimer: DISCLAIMER,
} as const;
