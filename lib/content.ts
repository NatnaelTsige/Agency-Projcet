// Structured content used across pages. Edit copy here to keep pages tidy.

export const services = [
  {
    slug: "companion-care",
    title: "Companion Care",
    summary:
      "Friendly company, conversation, and a steady routine — someone to share the day, run errands, and keep loneliness at bay.",
    points: [
      "Conversation & shared hobbies",
      "Meal prep & light housekeeping",
      "Errands, appointments & outings",
      "Medication reminders",
    ],
    icon: "heart",
  },
  {
    slug: "personal-care",
    title: "Personal Care",
    summary:
      "Respectful, hands-on help with the daily tasks that keep your loved one safe, comfortable, and dignified at home.",
    points: [
      "Bathing, grooming & dressing",
      "Mobility & transfer assistance",
      "Toileting & incontinence care",
      "Nutrition & hydration support",
    ],
    icon: "shield",
  },
  {
    slug: "dementia-care",
    title: "Dementia & Alzheimer's Care",
    summary:
      "Specially trained caregivers who bring calm, structure, and patience to every stage of memory loss.",
    points: [
      "Memory-focused daily routines",
      "Redirection & de-escalation",
      "Safe, familiar environment",
      "Family coaching & updates",
    ],
    icon: "brain",
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    summary:
      "Short-term relief for family caregivers — take a real break knowing your loved one is in caring, capable hands.",
    points: [
      "A few hours to a few weeks",
      "Flexible day or overnight cover",
      "Seamless handover & notes",
      "Peace of mind while you rest",
    ],
    icon: "sun",
  },
  {
    slug: "24-hour-care",
    title: "24-Hour & Live-In Care",
    summary:
      "Around-the-clock support for higher needs — a caregiver always present, day and night.",
    points: [
      "Overnight safety & supervision",
      "Rotating or live-in caregivers",
      "Complex-needs support",
      "Consistent, familiar faces",
    ],
    icon: "clock",
  },
  {
    slug: "transition-care",
    title: "Hospital-to-Home Care",
    summary:
      "A smooth, supported recovery after a hospital stay — reducing readmissions and easing the journey home.",
    points: [
      "Discharge & home setup",
      "Recovery routine support",
      "Appointment transport",
      "Coordination with clinicians",
    ],
    icon: "home",
  },
] as const;

export const steps = [
  {
    title: "Call us",
    body: "Speak with a real care coordinator — no phone trees, no pressure. We listen first.",
  },
  {
    title: "Free in-home assessment",
    body: "We visit, understand your loved one's needs and personality, and answer every question.",
  },
  {
    title: "A tailored care plan",
    body: "You get a written plan and a matched caregiver who fits the routine and the person.",
  },
  {
    title: "Care begins — and stays flexible",
    body: "We start, check in often, and adjust as needs change. You're never locked in.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "From the first phone call, Evergreen treated my mother like family. Her caregiver, Maria, has become someone she genuinely looks forward to seeing every day.",
    name: "Sandra P.",
    role: "Daughter of a client, Eugene",
  },
  {
    quote:
      "After Dad's stroke we were overwhelmed. They built a plan in days, matched us with a caregiver who understood him, and stayed reachable around the clock.",
    name: "James & Lori T.",
    role: "Family caregivers, Springfield",
  },
  {
    quote:
      "The dementia training is real. They keep my husband calm and engaged on days I simply can't, and they keep me informed without ever making me feel judged.",
    name: "Eleanor M.",
    role: "Wife & primary caregiver",
  },
] as const;

export const values = [
  {
    title: "Dignity first",
    body: "Every plan starts with the person — their routines, preferences, and independence.",
  },
  {
    title: "Carefully matched",
    body: "We pair caregivers by personality and need, not just availability.",
  },
  {
    title: "Always reachable",
    body: "A real coordinator answers, day or night — no call centers, no scripts.",
  },
  {
    title: "Licensed & vetted",
    body: "Background checks, ongoing training, and full insurance on every caregiver.",
  },
] as const;

export const faqs = [
  {
    q: "How quickly can care start?",
    a: "For most families, care can begin within 24–48 hours of your first call. Urgent situations are often same-day — call us and we'll move fast.",
  },
  {
    q: "Are your caregivers licensed and insured?",
    a: "Yes. Every caregiver is background-checked, trained, bonded, and covered by our insurance. We handle payroll, taxes, and compliance so you never have to.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Care is flexible and month-to-month. You can adjust hours or pause services as your loved one's needs change.",
  },
  {
    q: "What if we don't click with our caregiver?",
    a: "Just tell us. Matching is at the heart of what we do, and we'll happily introduce a different caregiver until the fit feels right.",
  },
  {
    q: "Do you accept long-term care insurance?",
    a: "We work with most long-term care insurance plans and provide detailed invoices for reimbursement. We're glad to help you understand your coverage.",
  },
] as const;

export const careerPerks = [
  { title: "Pay that respects the work", body: "Competitive hourly pay, overtime, and travel reimbursement." },
  { title: "Real schedules", body: "Flexible shifts built around your life — full-time, part-time, or overnight." },
  { title: "Training & growth", body: "Paid onboarding, certifications, and a clear path to senior caregiver roles." },
  { title: "A team that has your back", body: "24/7 coordinator support, peer mentors, and recognition that means it." },
] as const;
