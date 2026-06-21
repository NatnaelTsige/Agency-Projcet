import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { iconMap, Check } from "@/components/icons";
import { services, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Companion care, personal care, dementia & Alzheimer's care, respite, 24-hour and hospital-to-home support — tailored in-home senior care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="In-home care, shaped around the person"
        subtitle="Whatever your loved one needs — a little help or a lot — we build a plan that fits their life, and we adjust as things change."
      />

      <section className="container-x py-12 sm:py-16">
        <RevealGroup className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealItem key={service.slug}>
                <article className="flex h-full flex-col rounded-4xl border border-ink/5 bg-surface p-8 shadow-soft">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-muted">{service.summary}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta/15 text-cta">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      {/* Process recap */}
      <section className="relative overflow-hidden bg-sand/60 py-20 sm:py-28">
        <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="A gentle start"
            title="From first call to first visit"
            body="We keep it human and unhurried, every step of the way."
          />
          <RevealGroup className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealItem key={step.title}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary font-display text-xl font-bold text-white shadow-soft">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Reveal className="container-x pt-20">
        <div className="rounded-4xl border border-primary/15 bg-primary-soft/50 p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Not sure which care is right?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            That's exactly what our free in-home assessment is for. We'll listen, suggest, and never push.
          </p>
        </div>
      </Reveal>

      <CtaBand title="Let's find the right care together" />
    </>
  );
}
