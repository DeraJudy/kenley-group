import { Container } from "@/src/components/shared/Container";
import { Section } from "@/src/components/shared/Section";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

import { REFERRALS, REFERRAL_CARD } from "../constants/index";

import ReferralCard from "./ReferralCard";

export default function Referrals() {
  return (
    <Section id="referrals">
      <Container>
        <SectionHeading eyebrow={REFERRALS.eyebrow} title={REFERRALS.title} />

        <p className="mt-[28px] max-w-[62ch] text-[1rem] leading-[1.7] text-[var(--cream-muted)]">
          {REFERRALS.introduction}
        </p>

        <ReferralCard referral={REFERRAL_CARD} />
      </Container>
    </Section>
  );
}
