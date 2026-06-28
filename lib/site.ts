// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR BRAND DETAILS
// Replace these placeholders with the real agency details. Everything on the
// site (header, footer, call buttons, contact page, metadata) reads from here.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Resolved Home Care",
  shortName: "Resolved",
  tagline: "Compassionate in-home senior care",
  description:
    "Trusted, licensed in-home senior care — companionship, personal care, and dementia support delivered with warmth and dignity, right where your loved one feels most at home.",
  // PLACEHOLDER — replace with the real number. `tel` must be digits only (E.164).
  phoneDisplay: "(425) 000-0000",
  phoneTel: "+14250000000",
  email: "care@evergreenhomecare.com",
  // Care requests from the "Request Care" form are emailed here. Delivery is
  // handled by Formspree — set this same address as the recipient on your
  // Formspree form in the dashboard so requests land in your work inbox.
  workEmail: "care@evergreenhomecare.com",
  // PLACEHOLDER — create a free form at https://formspree.io, then paste its ID
  // here (the part after /f/ in your form's endpoint, e.g. "mzbqlabc").
  formspreeId: "your-form-id",
  address: {
    line1: "123 Fun Street, Suite 200",
    line2: "Bellevue, WA 98178",
  },
  hours: "Care available 24/7 · Office Mon–Fri, 8am–6pm",
  serviceArea: "Bellevue & the surrounding Puget Sound area",
  // ── SECTION TOGGLES ──────────────────────────────────────────────────
  // New agency with nothing to show yet? Set a flag to `false` to hide that
  // section everywhere it appears. Flip it back to `true` once you have real
  // numbers or reviews to list — no other code changes needed.
  showStats: false, //  the "15+ years / 120+ caregivers…" stats band (Home + About pages)
  showTestimonials: true, //  the "Stories from the people who trust us" section (Home page)
  // ─────────────────────────────────────────────────────────────────────
  // Trust signals — shown only when `showStats` above is true.
  stats: [
    { value: "15+", label: "Years caring for families" },
    { value: "120+", label: "Caregivers on our team" },
    { value: "4.9★", label: "Average family rating" },
    { value: "24/7", label: "Availability, every day" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;
