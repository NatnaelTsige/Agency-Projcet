import type { SVGProps } from "react";

// A leaf cradling a heart — growth, life, and care. Distinctive, scalable, themeable.
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
      <path
        d="M20 3C11 3 5 9 5 19c0 9 6 15 15 18 9-3 15-9 15-18C35 9 29 3 20 3Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M11 28c0-9 6-15 17-16-1 11-7 16-16 16Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M20 30c-2.4-1.7-5-3.7-5-6.5A2.6 2.6 0 0 1 20 22a2.6 2.6 0 0 1 5 1.5c0 2.8-2.6 4.8-5 6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
