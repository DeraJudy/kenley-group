import Link from "next/link";

import { Referral } from "../home.types";

interface Props {
  referral: Referral;
}

export default function ReferralCard({ referral }: Props) {
  return (
    <div className="mt-[48px] grid grid-cols-1 items-center gap-8 border border-[var(--green)] px-[26px] py-[36px] md:grid-cols-[1fr_auto] md:px-[40px] md:py-[48px]">
      <p className="max-w-[52ch] text-[1rem] leading-[1.7] text-[var(--cream-muted)]">
        {referral.description}
      </p>

      <Link
        href={referral.button.href}
        className="mono inline-flex justify-center border border-[var(--green)] bg-[var(--green)] px-[26px] py-[14px] transition-colors duration-300 hover:bg-transparent"
      >
        {referral.button.label}
      </Link>
    </div>
  );
}
