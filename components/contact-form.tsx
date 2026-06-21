"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { Check, ArrowRight } from "./icons";

// Submits to Formspree. Set your form ID in `lib/site.ts` (site.formspreeId).
// Create a form at https://formspree.io — no backend required.
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${site.formspreeId}`;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

      // Formspree returns a JSON body with field-level errors on 4xx.
      const data = await res.json().catch(() => null);
      const message =
        data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
        "Something went wrong. Please try again, or call us directly.";
      setErrorMsg(message);
      setStatus("error");
    } catch {
      setErrorMsg("We couldn't reach the server. Please check your connection or call us directly.");
      setStatus("error");
    }
  }

  const loading = status === "loading";
  const fieldClass =
    "mt-1.5 w-full rounded-2xl border border-ink/15 bg-cream/50 px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-white focus:outline-none";

  return (
    <div className="card relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-cta/15 text-cta">
              <Check className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">Thank you — we'll be in touch</h3>
            <p className="mt-2 max-w-sm text-muted">
              A care coordinator will call you back shortly. For anything urgent, please call us directly at{" "}
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
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            {/* Sets the email subject Formspree sends to you. */}
            <input type="hidden" name="_subject" value={`New care enquiry — ${site.name}`} />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Your name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-ink">
                  Phone number
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} placeholder="(555) 000-0000" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email <span className="font-normal text-muted">(optional)</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="care-for" className="text-sm font-medium text-ink">
                Who is the care for?
              </label>
              <select id="care-for" name="care-for" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>My parent</option>
                <option>My spouse</option>
                <option>Myself</option>
                <option>Another family member</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={fieldClass}
                placeholder="Tell us a little about your situation and the best time to reach you."
              />
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-2xl bg-accent-soft/70 px-4 py-3 text-sm font-medium text-accent-deep">
                {errorMsg}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-primary mt-1 w-full !py-4 !text-lg disabled:opacity-70">
              {loading ? "Sending…" : "Request a callback"}
              {!loading && <ArrowRight className="h-5 w-5" />}
            </button>
            <p className="text-center text-xs text-muted">
              We respect your privacy. Your details are only used to contact you about care.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
