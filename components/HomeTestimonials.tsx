import Link from "next/link";
import { sectionBandY, sectionPageX } from "@/components/system/sectionTheme";

const TESTIMONIALS = [
  {
    quote:
      "We have been working with BHeard for over two years now. Neha and her team have been highly instrumental in strategizing and executing the social media footprint of our resort. Their focussed effort during our special events helps increase our sales. BHeard team is diligent and approachable at all times. We look forward to work together for years to come.",
    name: "Varun Albuquerque",
    role: "Owner, Novotel Resort",
  },
  {
    quote:
      "When we started with BHeard we had a negligible presence on the social media platform. BHeard has contributed in a great way to our online presence. Their professionalism, dedication and timely services have been the highlight of our association with them. The best part about them is their out of the way suggestions have benefitted us greatly.",
    name: "Vivek Mundra",
    role: "MD, Treat Resorts",
  },
  {
    quote:
      "BHeard is one of the finest agencies to work with. They are sincere and diligent. They have been instrumental in achieving many social media feats for me.",
    name: "Dr. Mickey Mehta",
    role: "Global Leading Holistic Health Guru",
  },
] as const;

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

        <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((item) => (
            <li
              key={item.name}
              className="flex flex-col border-t-2 border-primary pt-6"
            >
              <blockquote className="flex-1 font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-6">
                <p className="font-headline text-sm font-bold uppercase tracking-wide text-neutral-900">
                  {item.name}
                </p>
                <p className="mt-1 font-body text-sm text-on-surface-variant">{item.role}</p>
              </footer>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-body text-sm text-on-surface-variant">
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
