import PillarCard from "./PillarCard";

import { PILLARS } from "../constants/pillars";

export default function Pillars() {
  return (
    <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
      {PILLARS.map((pillar) => (
        <PillarCard key={pillar.id} pillar={pillar} />
      ))}
    </div>
  );
}
