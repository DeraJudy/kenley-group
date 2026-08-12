import {
  BlackStrip,
  FeatureGroups,
  Hero,
  Navbar,
} from "@/src/modules/home/index";
import Footer from "../modules/home/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureGroups />
      {/* <About /> */}
      {/* <Approach /> */}
      {/* <Referrals /> */}
      <BlackStrip />
      <Footer />
    </>
  );
}
