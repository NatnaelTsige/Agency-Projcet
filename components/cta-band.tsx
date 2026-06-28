import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { Phone, ArrowRight } from "./icons";

export function CtaBand({
  title = "Ready to arrange care?",
  body = "Send a quick request — tell us when, where, and the type of care you need. A coordinator will follow up to confirm every detail. Prefer to talk first? We're one call away.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact#request" className="btn-call w-full sm:w-auto !px-8 !py-4 !text-lg">
              Request care online
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-ghost w-full sm:w-auto !border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
              <Phone className="h-5 w-5" />
              Or call {site.phoneDisplay}
            </a>
          </div>
          <p className="mt-5 text-sm text-white/70">{site.hours}</p>
        </div>
      </Reveal>
    </section>
  );
}
