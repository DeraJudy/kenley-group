import { Container } from "@/src/components/shared/Container";
import { Section } from "@/src/components/shared/Section";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

import { ABOUT } from "../constants/index";
import Pillars from "./Pillars";

export default function About() {
  const { eyebrow, title, introduction, description, highlightedText } = ABOUT;

  const [beforeHighlight, afterHighlight] = description.split(highlightedText);

  return (
    <Section id="about">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="mt-[28px] max-w-[62ch] text-[1rem] leading-[1.7] text-[var(--cream-muted)]">
          <p>{introduction}</p>

          <p className="mt-[18px]">
            {beforeHighlight}
            <strong className="font-medium text-[var(--cream)]">
              {highlightedText}
            </strong>
            {afterHighlight}
          </p>
        </div>
        <Pillars />
      </Container>
    </Section>
  );
}
