// Lightweight inline SVG icon set (Lucide-style, 24x24, currentColor).
// Using SVG — never emojis — for crisp, accessible, consistently-sized icons.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Phone(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
export function Heart(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}
export function Shield(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
export function Brain(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 5a3 3 0 0 0-5.99.14 3 3 0 0 0-1.6 5.3A3 3 0 0 0 6 16a3 3 0 0 0 6 .14V5Z" />
      <path d="M12 5a3 3 0 0 1 5.99.14 3 3 0 0 1 1.6 5.3A3 3 0 0 1 18 16a3 3 0 0 1-6 .14V5Z" />
    </svg>
  );
}
export function Sun(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
    </svg>
  );
}
export function Clock(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
export function Home(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}
export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function Check(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
export function MapPin(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export function Mail(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function Quote(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props} strokeWidth={0} fill="currentColor">
      <path d="M9.5 6C6.5 7.5 5 10 5 13.5V18h5v-5H7.7c.1-1.7.9-3 2.6-3.8L9.5 6Zm9 0c-3 1.5-4.5 4-4.5 7.5V18h5v-5h-2.3c.1-1.7.9-3 2.6-3.8L18.5 6Z" />
    </svg>
  );
}

export const iconMap = { heart: Heart, shield: Shield, brain: Brain, sun: Sun, clock: Clock, home: Home } as const;
export type IconName = keyof typeof iconMap;
