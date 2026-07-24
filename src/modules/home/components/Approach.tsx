import { Container } from "@/src/components/shared/Container";
import { Section } from "@/src/components/shared/Section";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

import { APPROACH, APPROACH_ITEMS } from "../constants/index";

import ApproachRow from "./ApproachRow";

export default function Approach() {
  return (
    <Section id="approach">
      <Container>
        <SectionHeading eyebrow={APPROACH.eyebrow} title={APPROACH.title} />

        <p className="mt-[28px] max-w-[62ch] text-[1rem] leading-[1.7] text-[var(--cream-muted)]">
          {APPROACH.introduction}
        </p>

        <div className="mt-[52px] border-t border-[var(--line)]">
          {APPROACH_ITEMS.map((item) => (
            <ApproachRow key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
