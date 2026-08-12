import { Container } from "@/src/components/shared/Container";

import { FEATURE_GROUPS } from "../constants/features";

import FeatureGroup from "./FeatureGroup";

export default function FeatureGroups() {
  return (
    <section className="pt-[8px] pb-[88px]">
      <Container>
        {FEATURE_GROUPS.map((group) => (
          <FeatureGroup key={group.id} group={group} />
        ))}
      </Container>
    </section>
  );
}
