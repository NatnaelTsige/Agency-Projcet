import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { RequestCareForm } from "@/components/request-care-form";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Clock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Request Care",
  description: `Request in-home senior care from ${site.name} — tell us when, where, and the type of care you need. Free in-home assessments across ${site.serviceArea}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Request care"
        title="Tell us what you need — we'll take it from here"
        subtitle="Share when, where, and the type of care you're looking for. Your request goes straight to our care team, and a coordinator will call to confirm the details. Prefer to talk first? We're one call away."
      />

      <section id="request" className="container-x scroll-mt-28 pb-12 sm:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Primary action: the request form */}
          <Reveal>
            <RequestCareForm />
          </Reveal>

          {/* Secondary: call + contact details */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <a
                href={`tel:${site.phoneTel}`}
                className="group relative overflow-hidden rounded-4xl bg-primary p-8 text-white shadow-lift transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
                    <Phone className="h-7 w-7" />
                  </span>
                  <p className="mt-5 text-white/80">Prefer to talk? Call us</p>
                  <p className="font-display text-3xl font-semibold sm:text-4xl">{site.phoneDisplay}</p>
                  <p className="mt-2 text-sm text-white/70">{site.hours}</p>
                </div>
              </a>

              <ul className="grid gap-4">
                <ContactRow icon={<Mail className="h-6 w-6" />} label="Email us">
                  <a href={`mailto:${site.email}`} className="hover:text-primary">
                    {site.email}
                  </a>
                </ContactRow>
                <ContactRow icon={<MapPin className="h-6 w-6" />} label="Visit our office">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </ContactRow>
                <ContactRow icon={<Clock className="h-6 w-6" />} label="Service area">
                  {site.serviceArea}
                </ContactRow>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-3xl border border-ink/5 bg-surface p-5 shadow-soft">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
        {icon}
      </span>
      <div>
        <div className="text-sm font-semibold text-ink">{label}</div>
        <div className="mt-0.5 text-muted">{children}</div>
      </div>
    </li>
  );
}
