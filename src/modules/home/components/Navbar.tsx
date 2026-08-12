// "use client";

// import Link from "next/link";

// import { Container } from "@/src/components/shared/Container";
// import { LiveIndicator } from "@/src/components/shared/LiveIndicator";

// import { BRAND, LIVE_TRACKER, NAV_ITEMS } from "../constants";

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-black/90 backdrop-blur-md">
//       <Container className="flex items-center justify-between py-[18px]">
//         <Link href="/" className="serif text-[1.35rem] tracking-[0.01em]">
//           {BRAND.name}

//           <span className="text-[var(--cream-muted)]">{BRAND.accent}</span>
//         </Link>

//         <div className="hidden items-center gap-8 md:flex">
//           {NAV_ITEMS.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className="nav-text text-[var(--cream-muted)] transition-colors hover:text-[var(--green-pale)]"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>

//         <Link
//           href={LIVE_TRACKER.href}
//           className="button-text flex items-center gap-1 border border-[var(--green)] px-4 py-2 transition-all duration-300 hover:bg-[var(--green)]"
//         >
//           <LiveIndicator />

//           {LIVE_TRACKER.label}
//         </Link>
//       </Container>
//     </nav>
//   );
// }

import Link from "next/link";

import { Container } from "@/src/components/shared/Container";
import { LiveIndicator } from "@/src/components/shared/LiveIndicator";

import { BRAND, LIVE_TRACKER } from "../constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(244,239,224,0.94)] backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-[18px]">
        <Link href="/" className="serif text-[1.35rem] text-[var(--ink)]">
          {BRAND.name}
          <span className="text-[var(--ink-faint)]">{BRAND.accent}</span>
        </Link>

        <Link
          href={LIVE_TRACKER.href}
          aria-label="Open the live tracker"
          className="nav-text inline-flex items-center gap-2 border border-[var(--green)] px-4 py-2 text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--green)] hover:text-[var(--cream)]"
        >
          <LiveIndicator />

          {LIVE_TRACKER.label}
        </Link>
      </Container>
    </nav>
  );
}
