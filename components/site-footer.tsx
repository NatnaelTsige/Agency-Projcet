import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./logo";
import { Phone, Mail, MapPin } from "./icons";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white">
      <div className="dot-grid absolute inset-0 opacity-[0.15]" aria-hidden />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-10 w-10 text-white" />
              <span className="font-display text-2xl font-semibold">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-white/70">{site.description}</p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-semibold text-white transition-colors hover:bg-cta-deep"
            >
              <Phone className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Get in touch</h2>
            <ul className="mt-4 space-y-3.5 text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <a href={`tel:${site.phoneTel}`} className="hover:text-white">{site.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
            </ul>
            <p className="mt-5 text-sm text-white/55">{site.hours}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Licensed, bonded & insured.
          </p>
          <p>Serving {site.serviceArea}.</p>
        </div>
      </div>
    </footer>
  );
}
