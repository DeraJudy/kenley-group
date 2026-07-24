interface Props {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}

export function SectionHeading({ eyebrow, title, children }: Props) {
  return (
    <>
      <span className="mono text-[var(--green-pale)]">{eyebrow}</span>

      <h2 className="serif mt-[20px] max-w-[26ch] text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.35]">
        {title}
      </h2>
    </>
  );
}
