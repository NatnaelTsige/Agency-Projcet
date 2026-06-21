import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { careerPerks } from "@/lib/content";
import { site } from "@/lib/site";
import { Check, Phone, ArrowRight, Heart } from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers",
  description: `Become a caregiver with ${site.name}. Competitive pay, flexible schedules, real training, and a team that supports you.`,
};

const openings = [
  { role: "Caregiver / Home Health Aide", type: "Full-time & Part-time", area: "Springfield · Eugene" },
  { role: "Certified Nursing Assistant (CNA)", type: "Full-time", area: "Willamette Valley" },
  { role: "Overnight / Live-in Caregiver", type: "Flexible shifts", area: "Springfield" },
  { role: "Care Coordinator", type: "Full-time", area: "Office + field" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do the most meaningful work of your life"
        subtitle="Join a team that treats caregivers the way we treat clients — with respect, support, and genuine appreciation for the work."
      />

      {/* Perks */}
      <section className="container-x py-12 sm:py-16">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careerPerks.map((perk) => (
            <RevealItem key={perk.title} className="card h-full">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-cta/15 text-cta">
                <Heart className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{perk.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{perk.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Openings */}
      <section className="container-x py-12 sm:py-16">
        <SectionHeading
          align="left"
          eyebrow="Open positions"
          title="Roles we're hiring for now"
          body="Don't see a perfect match? We're always glad to meet great caregivers — call us anytime."
        />
        <RevealGroup className="mt-10 grid gap-4">
          {openings.map((job) => (
            <RevealItem key={job.role}>
              <a
                href={`tel:${site.phoneTel}`}
                className="group flex flex-col gap-4 rounded-3xl border border-ink/5 bg-surface p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {job.type} · {job.area}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2.5 text-sm font-semibold text-primary-deep transition-colors group-hover:bg-primary group-hover:text-white">
                  Apply by phone
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Requirements + CTA */}
      <section className="container-x py-12 sm:py-20">
        <Reveal className="grid items-center gap-10 overflow-hidden rounded-4xl bg-primary p-8 text-white shadow-lift sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">What we look for</h2>
            <ul className="mt-6 space-y-3">
              {[
                "A warm, patient, dependable nature",
                "Eligibility to work in the U.S.",
                "Reliable transportation",
                "Willingness to complete our paid training",
              ].map((req) => (
                <li key={req} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white/10 p-7 text-center backdrop-blur">
            <p className="text-lg text-white/90">Ready to start? The fastest way to apply is a quick call.</p>
            <a href={`tel:${site.phoneTel}`} className="btn-call mt-5 w-full !py-4 !text-lg">
              <Phone className="h-5 w-5" />
              Call {site.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-white/70">{site.hours}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
