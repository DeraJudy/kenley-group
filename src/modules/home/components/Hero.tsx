import Link from "next/link";
import { Container } from "@/src/components/shared/Container";
import { LiveIndicator } from "@/src/components/shared/LiveIndicator";

import { HERO } from "../constants";

import Motif from "./Motif";

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-[var(--line)] pt-[110px] pb-[90px]">
      <Motif />

      <Container>
        <span className="mono text-[var(--green-pale)]">{HERO.eyebrow}</span>

        <h1 className="serif max-w-[19ch] text-[clamp(2rem,5.2vw,3.4rem)] leading-[1.25]">
          {HERO.title.first}
          <br />
          {HERO.title.second}{" "}
          <em className="text-[var(--green-pale)] italic font-normal">
            {HERO.title.emphasis}
          </em>
        </h1>

        <p className="mt-8 max-w-[56ch] text-[1.05rem] leading-[1.7] text-[var(--cream-muted)]">
          {HERO.description}
        </p>

        <div className="mt-[44px] flex flex-wrap gap-4">
          <Link
            href={HERO.actions.referral.href}
            className="mono inline-flex items-center border border-[var(--green)] bg-[var(--green)] px-[26px] py-[14px] transition-all duration-300 hover:bg-transparent"
          >
            {HERO.actions.referral.label}
          </Link>

          <Link
            href={HERO.actions.tracker.href}
            className="mono inline-flex items-center gap-3 border border-[var(--green)] px-[26px] py-[14px] transition-all duration-300 hover:bg-[var(--green)]"
          >
            <LiveIndicator />

            {HERO.actions.tracker.label}
          </Link>

          <Link
            href={HERO.actions.approach.href}
            className="mono inline-flex items-center border border-[var(--green)] px-[26px] py-[14px] text-[var(--green-pale)] transition-all duration-300 hover:bg-[var(--green)] hover:text-white"
          >
            {HERO.actions.approach.label}
          </Link>
        </div>
      </Container>
    </header>
  );
}
