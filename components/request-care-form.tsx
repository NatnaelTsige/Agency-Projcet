"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { Check, ArrowRight } from "./icons";

// Submits care requests to Formspree, which emails them to your work inbox
// (site.workEmail — set as the recipient on your Formspree form).
// Set your form ID in `lib/site.ts` (site.formspreeId). https://formspree.io
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${site.formspreeId}`;

const schedules = [
  "Mornings",
  "Afternoons",
  "Evenings",
  "Overnight",
  "Live-in (24/7)",
  "Flexible / not sure",
] as const;

type Status = "idle" | "loading" | "success" | "error";

export function RequestCareForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Prevent picking a start date in the past.
  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = await res.json().catch(() => null);
      const message =
        data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
        "Something went wrong. Please try again, or call us directly.";
      setErrorMsg(message);
      setStatus("error");
    } catch {
      setErrorMsg("We couldn't send your request. Please check your connection or call us directly.");
      setStatus("error");
    }
  }

  const loading = status === "loading";
  const fieldClass =
    "mt-1.5 w-full rounded-2xl border border-ink/15 bg-cream/50 px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-white focus:outline-none";
  const labelClass = "text-sm font-medium text-ink";

  return (
    <div className="card relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-cta/15 text-cta">
              <Check className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">Request received — thank you</h3>
            <p className="mt-2 max-w-sm text-muted">
              We've sent your request to our care team and a coordinator will be in touch shortly to confirm the
              details. For anything urgent, please call{" "}
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-primary">
                {site.phoneDisplay}
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid gap-4"
            noValidate
          >
            {/* Honeypot — bots fill this; humans never see it. */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {/* Email subject line shown in your work inbox. */}
            <input type="hidden" name="_subject" value={`New care request — ${site.name}`} />

            {/* Contact details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Your name</label>
                <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone number</label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} placeholder="(555) 000-0000" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="font-normal text-muted">(optional)</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />
            </div>

            {/* TYPE of care */}
            <div>
              <label htmlFor="care-type" className={labelClass}>What type of care do you need?</label>
              <select id="care-type" name="care-type" required className={fieldClass} defaultValue="">
                <option value="" disabled>Select the care needed</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Not sure yet">I'm not sure yet — please advise</option>
              </select>
            </div>

            {/* WHEN */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="start-date" className={labelClass}>When should care begin?</label>
                <input id="start-date" name="start-date" type="date" min={today} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="schedule" className={labelClass}>Preferred schedule</label>
                <select id="schedule" name="schedule" className={fieldClass} defaultValue="">
                  <option value="" disabled>Select a schedule</option>
                  {schedules.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* WHERE */}
            <div>
              <label htmlFor="location" className={labelClass}>Where will care be provided?</label>
              <input
                id="location"
                name="location"
                type="text"
                required
                autoComplete="address-level2"
                className={fieldClass}
                placeholder="City or neighborhood (e.g. Bellevue, WA)"
              />
            </div>

            <div>
              <label htmlFor="details" className={labelClass}>
                Anything else we should know? <span className="font-normal text-muted">(optional)</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                className={fieldClass}
                placeholder="Tell us about your loved one's needs and the best time to reach you."
              />
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-2xl bg-accent-soft/70 px-4 py-3 text-sm font-medium text-accent-deep">
                {errorMsg}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-primary mt-1 w-full !py-4 !text-lg disabled:opacity-70">
              {loading ? "Sending request…" : "Send care request"}
              {!loading && <ArrowRight className="h-5 w-5" />}
            </button>
            <p className="text-center text-xs text-muted">
              We respect your privacy. Your details are only used to arrange care.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
