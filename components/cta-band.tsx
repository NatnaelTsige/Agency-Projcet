import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { Phone, ArrowRight } from "./icons";

export function CtaBand({
  title = "Ready to talk about care?",
  body = "Call now to speak with a real care coordinator. No phone trees, no pressure — just a warm conversation about how we can help your family.",
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
            <a href={`tel:${site.phoneTel}`} className="btn-call w-full sm:w-auto !px-8 !py-4 !text-lg">
              <Phone className="h-5 w-5" />
              Call {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-ghost w-full sm:w-auto !border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
              Request a callback
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-white/70">{site.hours}</p>
        </div>
      </Reveal>
    </section>
  );
}
