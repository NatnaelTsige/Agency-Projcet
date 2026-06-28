import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { values } from "@/lib/content";
import { site } from "@/lib/site";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — our story, our values, and the people who make compassionate in-home senior care possible.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Founded on a simple promise: care we'd want for our own parents"
        subtitle={`${site.name} helps families across ${site.serviceArea} keep their loved ones safe, comfortable, and thriving at home.`}
      />

      {/* Story + portrait */}
      <section className="container-x py-12 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-gradient-to-br from-accent via-accent-deep to-[#7a3c1f] shadow-lift">
              <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
              <div className="absolute inset-0 flex items-end p-8">
                <p className="font-display text-2xl font-semibold leading-snug text-white">
                  “We started {site.shortName} after struggling to find care for our own mother. We knew families deserved better.”
                </p>
              </div>
            </div>
            {/* Replace with a real founder/team photo for the strongest trust signal. */}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="prose-lg space-y-5 text-muted">
              <p>
                It began with a single family — ours. When our mother needed help at home, we found an industry that
                too often treated care as a transaction. We knew it could be warmer, more personal, and more
                dependable.
              </p>
              <p>
                That same family-first standard guides every home we enter. We match caregivers by personality, train
                them rigorously, and stay reachable around the clock — because peace of mind shouldn't keep office
                hours.
              </p>
              <p className="font-medium text-ink">
                Every plan we write starts with one question: <em>what would help this person live well, today?</em>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats — toggle with `showStats` in lib/site.ts */}
      {site.showStats && (
        <section className="container-x py-8">
          <RevealGroup className="grid grid-cols-2 gap-4 rounded-4xl bg-primary p-8 text-white sm:grid-cols-4">
            {site.stats.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="font-display text-4xl font-semibold sm:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm text-white/75">{s.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      )}

      {/* Values */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we stand for"
          title="The values behind every visit"
          body="These aren't posters on a wall — they're the standards we hire, train, and check ourselves against."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <RevealItem key={v.title} className="card h-full">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{v.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CtaBand title="Come meet the team that cares" />
    </>
  );
}
