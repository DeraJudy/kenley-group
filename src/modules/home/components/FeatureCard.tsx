import Link from "next/link";

import { LiveIndicator } from "@/src/components/shared/LiveIndicator";

import { FeatureCard as FeatureCardType } from "../home.types";

interface Props {
  card: FeatureCardType;
}

export default function FeatureCard({ card }: Props) {
  const isBlack = card.variant === "black";

  return (
    <Link
      href={card.href}
      className={[
        "group relative flex min-h-[190px] flex-col gap-3",
        "px-[30px] pt-[34px] pb-[30px]",
        "no-underline transition-colors duration-200",
        isBlack
          ? "bg-black text-[var(--cream)]"
          : "bg-[var(--cream)] text-[var(--ink)]",
        isBlack
          ? "hover:bg-[var(--green)]"
          : "hover:bg-[var(--green)] hover:text-[var(--cream)]",
      ].join(" ")}
    >
      <span
        className={
          isBlack ? "mono text-[var(--green-pale)]" : "mono text-[var(--green)]"
        }
      >
        {card.eyebrow}
      </span>

      <div className="flex items-center gap-[10px]">
        {card.live && <LiveIndicator />}

        <h3 className="serif text-[1.2rem] font-normal leading-[1.35]">
          {card.title}
        </h3>
      </div>

      <p
        className={
          isBlack
            ? "flex-1 text-[0.9rem] text-[var(--cream-muted)]"
            : "flex-1 text-[0.9rem] text-[var(--ink-muted)]"
        }
      >
        {card.description}
      </p>

      <span
        className={
          isBlack
            ? "font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--green-pale)]"
            : "font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--green)]"
        }
      >
        {card.action}
      </span>
    </Link>
  );
}
