import Link from "next/link";

import { BRAND } from "../constants";

export default function FooterBrand() {
  return (
    <Link
      href="/"
      className="serif text-[1.35rem] tracking-[0.01em] text-[var(--cream)]"
    >
      {BRAND.name}

      <span className="text-[var(--cream-muted)]">{BRAND.accent}</span>
    </Link>
  );
}
