import { Approach, Hero, Navbar, Referrals } from "@/src/modules/home/index";
import About from "../modules/home/components/About";
import Footer from "../modules/home/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Referrals />
      <Footer />
    </>
  );
}
