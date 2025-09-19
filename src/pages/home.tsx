import { CtaHome } from "../components/cta-home";
import { Hero } from "../components/hero";
import { HymoveSection } from "../components/hymove";
/* import { InfinitumSection } from "../components/infinitum"; */
import { Info } from "../components/info";

export const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <HymoveSection/>
      {/* <InfinitumSection/> */}
      <CtaHome />
    </>
  );
};
