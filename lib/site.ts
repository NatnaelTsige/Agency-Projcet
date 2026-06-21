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
  // PLACEHOLDER — create a free form at https://formspree.io, then paste its ID
  // here (the part after /f/ in your form's endpoint, e.g. "mzbqlabc").
  formspreeId: "your-form-id",
  address: {
    line1: "123 Fun Street, Suite 200",
    line2: "Bellevue, WA 98178",
  },
  hours: "Care available 24/7 · Office Mon–Fri, 8am–6pm",
  serviceArea: "Bellevue, Seattle & the surrounding Willamette Valley",
  // Trust signals — adjust to the agency's real credentials.
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
