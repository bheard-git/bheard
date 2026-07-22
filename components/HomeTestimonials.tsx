import { ExternalLink, Quote, Star } from "lucide-react";
import Link from "next/link";
import { sectionBandY, sectionPageX } from "@/components/system/sectionTheme";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Bheard/@18.9967888,72.8245175,17z/data=!4m8!3m7!1s0x3be7ce926dfac38d:0x510690c4739e550b!8m2!3d18.9967888!4d72.8245175!9m1!1b1!16s%2Fg%2F11c5zbnn00";

const TESTIMONIALS = [
  {
    quote:
      "We have been working with BHeard for over two years now. Neha and her team have been highly instrumental in strategizing and executing the social media footprint of our resort. Their focussed effort during our special events helps increase our sales. BHeard team is diligent and approachable at all times. We look forward to work together for years to come.",
    name: "Varun Albuquerque",
    role: "Owner, Novotel Resort",
    rating: 5,
    reviewUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      "When we started with BHeard we had a negligible presence on the social media platform. BHeard has contributed in a great way to our online presence. Their professionalism, dedication and timely services have been the highlight of our association with them. The best part about them is their out of the way suggestions have benefitted us greatly.",
    name: "Vivek Mundra",
    role: "MD, Treat Resorts",
    rating: 5,
    reviewUrl: GOOGLE_REVIEWS_URL,
  },
  {
    quote:
      "BHeard is one of the finest agencies to work with. They are sincere and diligent. They have been instrumental in achieving many social media feats for me.",
    name: "Dr. Mickey Mehta",
    role: "Global Leading Holistic Health Guru",
    rating: 5,
    reviewUrl: GOOGLE_REVIEWS_URL,
  },
] as const;

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
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

/** Visual testimonials only — do not add Review / AggregateRating schema. */
export default function HomeTestimonials() {
  return (
    <section
      aria-labelledby="home-testimonials-heading"
      className={`bg-surface-container-low ${sectionPageX} ${sectionBandY}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            id="home-testimonials-heading"
            className="max-w-[14ch] font-headline text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.95] text-neutral-900"
          >
            What Our Clients Say
          </h2>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant/60 bg-white px-4 py-2 font-body text-sm font-medium text-neutral-900 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            <GoogleMark className="h-4 w-4 shrink-0" />
            <span>Verified Google Reviews</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
          </a>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3 md:gap-5">
          {TESTIMONIALS.map((item) => (
            <li key={item.name}>
              <article className="group flex h-full flex-col rounded-2xl border border-outline-variant/70 bg-white p-6 shadow-[0_18px_60px_-40px_rgba(17,24,39,0.28)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_-44px_rgba(17,24,39,0.32)] md:p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden
                  >
                    <Quote className="h-5 w-5 fill-primary/20" strokeWidth={2.25} />
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-2.5 py-1">
                      <GoogleMark className="h-3.5 w-3.5 shrink-0" />
                      <span className="font-body text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant">
                        Google Review
                      </span>
                    </div>
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
                  <a
                    href={item.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-neutral-900 underline decoration-primary/60 underline-offset-4 transition-colors group-hover:text-primary hover:decoration-primary"
                  >
                    Read full review on Google
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                  </a>
                </footer>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-on-surface-variant">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-neutral-900 underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
          >
            <GoogleMark className="h-4 w-4 shrink-0" />
            See all reviews on Google
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
          </a>
          <span className="hidden text-outline-variant sm:inline" aria-hidden>
            |
          </span>
          <Link
            href="/work"
            className="font-semibold text-neutral-900 underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
          >
            Explore our success stories
          </Link>
        </p>
      </div>
    </section>
  );
}
