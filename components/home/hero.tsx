"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { Phone, ArrowRight, Check, Heart, Shield } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Soft drifting background washes — purely decorative. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary-soft blur-3xl animate-blob-drift" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent-soft blur-3xl animate-blob-drift [animation-delay:-6s]" />
      </div>

      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            <Heart className="h-3.5 w-3.5" />
            {site.serviceArea.split("&")[0].trim()} & beyond
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-[4.1rem]"
          >
            Care that feels like{" "}
            <span className="relative whitespace-nowrap text-primary">
              family
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path d="M2 9C40 3 160 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            — right at home.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {site.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact#request" className="btn-primary !px-8 !py-4 !text-lg">
              Request care online
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-ghost !px-7 !py-4 !text-lg">
              <Phone className="h-5 w-5" />
              Or call {site.phoneDisplay}
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/80">
            {["Licensed, bonded & insured", "Free in-home assessment", "No long-term contracts"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-cta/15 text-cta">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Hero visual — replace the gradient portrait with a real caregiver photo
            (a warm, candid shot works best). Floating cards animate in. */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-deep to-[#0a4a54] shadow-lift">
            <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
            {/* Brand motif as a graceful, large watermark */}
            <svg viewBox="0 0 40 40" className="absolute -bottom-10 -right-8 h-72 w-72 text-white/10" aria-hidden>
              <path d="M11 28c0-9 6-15 17-16-1 11-7 16-16 16Z" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="font-display text-2xl font-semibold leading-snug text-white">
                “She doesn't just visit — she brightens Mom's whole day.”
              </p>
              <p className="mt-3 text-white/70">— A daughter in {site.address.line2.split(",")[0]}</p>
            </div>
          </div>

          <FloatCard
            className="-left-4 top-8 sm:-left-8"
            delay={0.5}
            reduce={!!reduce}
            icon={<Shield className="h-5 w-5 text-primary" />}
            title="Background-checked"
            subtitle="Every caregiver, every time"
          />
          <FloatCard
            className="-right-3 bottom-12 sm:-right-6"
            delay={0.7}
            reduce={!!reduce}
            icon={<span className="font-display text-lg font-bold text-accent">4.9★</span>}
            title="Loved by families"
            subtitle="Around Bellevue"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatCard({
  className,
  delay,
  reduce,
  icon,
  title,
  subtitle,
}: {
  className?: string;
  delay: number;
  reduce: boolean;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease, delay }}
      className={`absolute flex items-center gap-3 rounded-2xl border border-ink/5 bg-surface/95 px-4 py-3 shadow-lift backdrop-blur ${className}`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream">{icon}</span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-xs text-muted">{subtitle}</span>
      </span>
    </motion.div>
  );
}
