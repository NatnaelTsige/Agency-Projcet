import Link from "next/link";
import { site } from "@/lib/site";
import { Phone } from "./icons";

// Sticky bottom action bar for small screens. Primary action is requesting care
// online; calling is kept one tap away as the secondary option.
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-2 border-t border-ink/10 bg-cream/90 px-3 py-3 backdrop-blur-md lg:hidden">
      <Link href="/contact#request" className="btn-primary flex-1 !py-3.5 text-base">
        Request care
      </Link>
      <a
        href={`tel:${site.phoneTel}`}
        className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-cta text-white shadow-soft transition-colors hover:bg-cta-deep"
        aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
