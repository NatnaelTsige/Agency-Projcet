"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "./icons";

// NOTE: This form is wired for UX/validation only. Connect `onSubmit` to your
// backend, an email service (e.g. Resend/Formspree), or a CRM to receive leads.
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulated submit — replace with a real request to your endpoint.
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }

  const fieldClass =
    "mt-1.5 w-full rounded-2xl border border-ink/15 bg-cream/50 px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-white focus:outline-none";

  return (
    <div className="card relative overflow-hidden">
      <AnimatePresence mode="wait">
        {sent ? (
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
              A care coordinator will call you back shortly. For anything urgent, please call us directly.
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
