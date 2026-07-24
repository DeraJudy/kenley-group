import { Pillar } from "../home.types";

interface Props {
  pillar: Pillar;
}

export default function PillarCard({ pillar }: Props) {
  return (
    <article className="border border-[var(--line)] bg-black px-[30px] py-[36px] transition duration-300 hover:border-[var(--green)]">
      <span className="mono mb-5 block text-[var(--green-pale)]">
        {pillar.eyebrow}
      </span>

      <h3 className="serif mb-[14px] text-[1.15rem] leading-[1.4]">
        {pillar.title}
      </h3>

      <p className="text-[0.94rem] leading-[1.7] text-[var(--cream-muted)]">
        {pillar.description}
      </p>
    </article>
  );
}
