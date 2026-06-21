"use client";

import { site } from "@/lib/site";
import { Phone } from "./icons";

// Sticky, phone-first action bar for small screens — the primary conversion goal.
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-cream/90 px-3 py-3 backdrop-blur-md lg:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="btn-call w-full !py-4 text-lg"
        aria-label={`Call ${site.name} now at ${site.phoneDisplay}`}
      >
        <Phone className="h-5 w-5" />
        Call now · {site.phoneDisplay}
      </a>
    </div>
  );
}
