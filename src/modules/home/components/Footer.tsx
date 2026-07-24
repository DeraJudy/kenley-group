import { Container } from "@/src/components/shared/Container";

import { FOOTER } from "../constants/index";

import FooterBrand from "./FooterBrand";

export default function Footer() {
  return (
    <footer id="contact" className="py-[56px] pb-[64px]">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-8">
          <FooterBrand />

          <span className="mono text-[var(--cream-faint)]">
            {FOOTER.location}
          </span>
        </div>

        <p className="mt-[14px] max-w-[60ch] text-[0.82rem] leading-[1.7] text-[var(--cream-faint)]">
          {FOOTER.description}
        </p>
      </Container>
    </footer>
  );
}
