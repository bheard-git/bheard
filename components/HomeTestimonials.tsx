import { Quote, Star } from "lucide-react";
import Link from "next/link";
import { sectionBandY, sectionPageX } from "@/components/system/sectionTheme";

const TESTIMONIALS = [
  {
    quote:
      "We have been working with BHeard for over two years now. Neha and her team have been highly instrumental in strategizing and executing the social media footprint of our resort. Their focussed effort during our special events helps increase our sales. BHeard team is diligent and approachable at all times. We look forward to work together for years to come.",
    name: "Varun Albuquerque",
    role: "Owner, Novotel Goa Dona Sylvia Resort",
    rating: 5,
  },
  {
    quote:
      "When we started with BHeard we had a negligible presence on the social media platform. BHeard has contributed in a great way to our online presence. Their professionalism, dedication and timely services have been the highlight of our association with them. The best part about them is their out of the way suggestions have benefitted us greatly.",
    name: "Vivek Mundra",
    role: "MD, Treat Resorts",
    rating: 5,
  },
  {
    quote:
      "BHeard is one of the finest agencies to work with. They are sincere and diligent. They have been instrumental in achieving many social media feats for me.",
    name: "Dr. Mickey Mehta",
    role: "Global Leading Holistic Health Guru",
    rating: 5,
  },
] as const;

const VIDEO_TESTIMONIALS = [
  {
    label: "Radisson Blu Cavelossim | Hospitality Marketing Review",
    href: "https://youtu.be/slyIlEBUzsA",
  },
  {
    label: "Dr. Sameera Gupta | Personal Brand & Social Media Marketing Review",
    href: "https://youtu.be/TVp_P5ZmBoI",
  },
] as const;

function YouTubeMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8z"
        fill="#FF0000"
      />
      <path d="M9.75 15.02l6.26-3.02-6.26-3.02v6.04z" fill="#FFFFFF" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

const footerLinkClassName =
  "inline-flex items-start gap-1.5 font-semibold text-neutral-900 underline decoration-primary underline-offset-4 transition-colors hover:text-primary lg:items-center";

const videoLinkClassName = `${footerLinkClassName} max-w-full text-balance`;

/** Visual testimonials only — do not add Review / AggregateRating schema. */
export default function HomeTestimonials() {
  return (
    <section
      aria-labelledby="home-testimonials-heading"
      className={`bg-surface-container-low ${sectionPageX} ${sectionBandY}`}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="home-testimonials-heading"
          className="max-w-[14ch] font-headline text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.95] text-neutral-900"
        >
          What Our Clients Say
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-3 md:gap-5">
          {TESTIMONIALS.map((item) => (
            <li key={item.name}>
              <article className="group flex h-full flex-col rounded-2xl border border-outline-variant/70 bg-white p-6 shadow-[0_18px_60px_-40px_rgba(17,24,39,0.28)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_-44px_rgba(17,24,39,0.32)] md:p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden
                  >
                    <Quote className="h-5 w-5 fill-primary/20" strokeWidth={2.25} />
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <StarRating rating={item.rating} />
                  </div>
                </div>

                <blockquote className="flex-1 font-body text-base leading-relaxed text-on-surface-variant">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>

                <footer className="mt-6 border-t border-outline-variant/50 pt-5">
                  <p className="font-headline text-sm font-bold uppercase tracking-wide text-neutral-900">
                    {item.name}
                  </p>
                  <p className="mt-1 font-body text-sm text-on-surface-variant">{item.role}</p>
                </footer>
              </article>
            </li>
          ))}
        </ul>

        <nav
          aria-label="Testimonials and related links"
          className="mt-10 flex flex-col gap-4 font-body text-sm text-on-surface-variant lg:gap-3 xl:flex-row xl:flex-wrap xl:items-center xl:gap-x-6 xl:gap-y-2"
        >
          <Link href="/work" className={footerLinkClassName}>
            Explore our success stories
          </Link>

          <span className="h-px w-full bg-outline-variant/50 xl:hidden" aria-hidden />

          <span className="hidden h-4 w-px shrink-0 bg-outline-variant xl:block" aria-hidden />

          <ul className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2">
            {VIDEO_TESTIMONIALS.map((video) => (
              <li key={video.href} className="w-full lg:w-auto">
                <a
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={videoLinkClassName}
                >
                  <YouTubeMark className="mt-0.5 h-4 w-4 shrink-0 lg:mt-0" />
                  <span>{video.label}</span>
                  <span className="sr-only"> (opens on YouTube)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
