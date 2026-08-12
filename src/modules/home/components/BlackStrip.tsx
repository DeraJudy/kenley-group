import { Container } from "@/src/components/shared/Container";

import { BLACK_STRIP } from "../constants";

export default function BlackStrip() {
  return (
    <section className="border-t border-[var(--line-dark)] border-b border-[var(--line-dark)] bg-black">
      <Container className="py-[52px]">
        <p className="serif max-w-[44ch] text-[1.05rem] font-normal italic leading-[1.55] text-[var(--cream)]">
          {BLACK_STRIP.quote}
        </p>

        <span className="mono mt-[34px] block text-[var(--green-pale)]">
          {BLACK_STRIP.registration}
        </span>
      </Container>
    </section>
  );
}
