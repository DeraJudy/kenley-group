import { ApproachItem } from "../home.types";

interface Props {
  item: ApproachItem;
}

export default function ApproachRow({ item }: Props) {
  return (
    <article className="grid grid-cols-1 gap-[10px] border-b border-[var(--line)] py-[28px] md:grid-cols-[220px_1fr] md:gap-8 md:py-[34px]">
      <span className="mono pt-[5px] text-[var(--green-pale)]">
        {item.eyebrow}
      </span>

      <p className="max-w-[60ch] text-[1rem] leading-[1.7] text-[var(--cream-muted)]">
        <strong className="font-medium text-[var(--cream)]">
          {item.title}
        </strong>{" "}
        {item.description}
      </p>
    </article>
  );
}
