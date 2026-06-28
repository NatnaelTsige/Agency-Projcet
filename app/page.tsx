import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { iconMap, ArrowRight, Check, Quote } from "@/components/icons";
import { services, steps, testimonials, values } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust stats — toggle with `showStats` in lib/site.ts */}
      {site.showStats && (
        <section className="container-x">
          <RevealGroup className="grid grid-cols-2 gap-4 rounded-4xl border border-ink/5 bg-surface p-6 shadow-soft sm:p-8 lg:grid-cols-4">
            {site.stats.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="font-display text-4xl font-semibold text-primary sm:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      )}

      {/* Services preview */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Personal care, tailored to your loved one"
          body="From a few hours of companionship to round-the-clock support, every plan is built around the person — never a one-size-fits-all package."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealItem key={service.slug}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col rounded-4xl border border-ink/5 bg-surface p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 flex-1 text-muted">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-sand/60 py-20 sm:py-28">
        <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="How it works"
            title="Getting started is simple"
            body="No confusing paperwork or hard sells — just a clear, caring path from your first call to care at home."
          />
          <RevealGroup className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealItem key={step.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary font-display text-xl font-bold text-white shadow-soft">
                    {i + 1}
                  </span>
                  <div className="hidden h-px flex-1 bg-primary/20 lg:block" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why us / values */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Why families choose us"
            title="The warmth of family, the standards of professionals"
            body="Everything we do is built to earn the trust of families across Bellevue — here's what that means for yours."
          />
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <RevealItem key={v.title} className="card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cta/15 text-cta">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Testimonials — toggle with `showTestimonials` in lib/site.ts */}
      {site.showTestimonials && (
        <section className="relative overflow-hidden bg-primary-deep py-20 text-white sm:py-28">
          <div className="dot-grid absolute inset-0 opacity-15" aria-hidden />
          <div className="container-x relative">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow !border-white/20 !bg-white/10 !text-white">Families we serve</span>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
                Stories from the people who trust us
              </h2>
            </Reveal>
            <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((t) => (
                <RevealItem key={t.name} className="flex h-full flex-col rounded-4xl bg-white/10 p-7 backdrop-blur">
                  <Quote className="h-9 w-9 text-accent" />
                  <p className="mt-4 flex-1 text-lg leading-relaxed text-white/90">{t.quote}</p>
                  <div className="mt-6 border-t border-white/15 pt-4">
                    <div className="font-display text-lg font-semibold">{t.name}</div>
                    <div className="text-sm text-white/65">{t.role}</div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading eyebrow="Good to know" title="Questions families often ask" />
        <Faq />
      </section>

      <CtaBand />
    </>
  );
}
