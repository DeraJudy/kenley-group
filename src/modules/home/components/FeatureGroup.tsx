import { FeatureGroup as FeatureGroupType } from "../home.types";

import FeatureCard from "./FeatureCard";

interface Props {
  group: FeatureGroupType;
}

export default function FeatureGroup({ group }: Props) {
  return (
    <div className="mt-[48px]">
      <div className="mb-[16px] flex items-baseline gap-4">
        <span className="mono whitespace-nowrap text-[var(--green)]">
          {group.title}
        </span>

        <div className="h-px flex-1 bg-[var(--line)]" />
      </div>

      <div
        className={[
          "grid gap-px border border-[var(--line)] bg-[var(--line)]",
          group.columns === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        ].join(" ")}
      >
        {group.cards.map((card) => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
