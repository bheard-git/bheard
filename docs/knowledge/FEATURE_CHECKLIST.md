# Feature Checklist — Phase 1

Statuses: **Not Started** | **Partial** | **Complete**

Update when page/section status changes. Detail: [PROGRESS.md](PROGRESS.md) · Spec: [PHASE1_PRD.md](../PHASE1_PRD.md)

---

## Global

| Feature | Status | Notes |
|---------|--------|-------|
| Promotional banner + countdown | Complete | Dark bar, orange accents, day/h/m/s boxes |
| Header — global nav state | Partial | Exam switcher beside logo; verify PRD links |
| Header — category nav state | Partial | Needs verification vs PRD |
| Mobile nav | Partial | Exists; test against all breakpoints |
| Footer | Partial | Social `shrink-0` rounded; brand left / links right; "Made with love" removed; social URLs TBD |
| Rodha Buddy CTA (external) | Partial | Outline orange in header; final URL TBD |
| Login / Sign Up → Graphy | Partial | Outline button; redirect target TBD |
| Promotion popup + lead form | Not Started | Modal + trigger logic |

---

## Home `/`

| Section | Status |
|---------|--------|
| Hero | Complete (hero-home.png + floating features; stock JPG trust avatars) |
| Choose Your Exam | Complete (vertical Courses/Selections list) |
| Why Thousands Choose Rodha | Complete (icon-without-circle) |
| Featured Courses carousel | Complete (category-colored bg + flat white-text badges + cutouts) |
| Faculty carousel | Complete (transparent profile cutouts) |
| Results / toppers | Complete (selection/rank icons; solid AIR badge; cutouts) |
| Blog / insights | Complete (featured + 2-col side grid) |
| CTA Band | Complete (CAT icon + dividers + white secondary CTA) |
| Pixel-perfect pass vs PNG | Near complete — `.section-header` spacing + badge/contrast polish |

---

## Category Landings `/cat` `/ipmat` `/gdpi` `/clat`

| Section | Status |
|---------|--------|
| Category hero | Complete (all four via `CategoryHeroSection`; CAT uses premium PNG trust icons) |
| Courses overview | Complete (all four) |
| Star faculty | Complete (all four; GDPI faculty added) |
| Test series promo | Complete (CAT: PNG card icons; others still SVG pending assets) |
| Results & toppers | Complete (all four via `ResultsStatsPanel` + toppers carousel) |
| Demo / webinar CTA | Complete (resource cards on all four) |
| Testimonials | Complete (all four; category-filtered via `getTestimonialsByCategory`) |
| Resources teaser | Complete (all four) |
| Category FAQ | Complete (all four; category-specific FAQs) |
| SEO intro copy | Partial (per-page metadata; longer SEO blocks TBD) |
| Match `cat landing page Ui.png` | Complete (structure on all four); dedicated hero photos pending for non-CAT |

---

## Course Detail `/[category]/courses/[slug]`

| Feature | Status |
|---------|--------|
| Course hero | Not Started |
| Curriculum accordion | Not Started |
| Faculty for course | Not Started |
| What's included | Not Started |
| Pricing display | Not Started |
| Sticky Enrol → Graphy | Not Started |
| Floating enquiry | Not Started |
| FAQ / related | Not Started |

---

## Content Pages

| Page | Status | Notes |
|------|--------|-------|
| About `/about` | Not Started | Placeholder |
| Team `/team` | Complete | Hero + leadership/faculty carousels + advisors + culture + CTA; mockup-aligned |
| Faculty listing `/faculty` | Not Started | Placeholder (data + FacultyCard exist) |
| Faculty detail `/faculty/[slug]` | Not Started | Placeholder |
| Blog listing `/blog` | Not Started | Placeholder (data + BlogCard exist) |
| Blog detail `/blog/[slug]` | Not Started | Placeholder |
| Contact `/contact` | Not Started | ContactForm exists; page stub |
| FAQ `/faq` | Complete | Search + category pills + Accordion + Pagination + CTABand |
| Privacy `/privacy-policy` | Complete | LegalPageLayout + structured content |
| Terms `/terms-and-conditions` | Complete | LegalPageLayout + structured content |
| Refund `/refund-policy` | Complete | LegalPageLayout + structured content |
| Disclaimer `/disclaimer` | Complete | LegalPageLayout + structured content |

---

## Forms

| Form | UI | Validation | Backend |
|------|----|------------|---------|
| ContactForm | Partial | Partial | Not Started |
| LeadCaptureForm | Partial | Partial | Not Started |
| NewsletterSignup | Partial | Partial | Not Started |

---

## SEO & Technical

| Item | Status |
|------|--------|
| Per-page metadata (basic) | Partial |
| Open Graph / Twitter | Partial |
| JSON-LD schemas | Not Started |
| sitemap.xml | Not Started |
| robots.txt | Not Started |
| Image alt / heading hierarchy | Partial |

---

## Explicitly Out of Scope (Phase 2)

Do not mark these as remaining Phase 1 work: SSO, payments, student dashboard, admin, dedicated course/test listing pages, resources hub, search results page, login page.
