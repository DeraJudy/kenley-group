import { Container } from "@/src/components/shared/Container";

import { HERO } from "../constants";

import Motif from "./Motif";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-[72px] pb-[56px]">
      <Motif />

      <Container>
        <span className="mono mb-[24px] block text-[var(--green)]">
          {HERO.eyebrow}
        </span>

        <h1 className="serif max-w-none text-[clamp(2rem,5.2vw,3.2rem)] font-normal leading-[1.25]">
          {HERO.title.first}
          <br />
          {HERO.title.second}{" "}
          <em className="font-normal italic text-[var(--green)]">
            {HERO.title.emphasis}
          </em>
        </h1>

        <p className="mt-[22px] max-w-[52ch] text-[1.02rem] leading-[1.6] text-[var(--ink-muted)]">
          {HERO.description}
        </p>
      </Container>
    </header>
  );
}
