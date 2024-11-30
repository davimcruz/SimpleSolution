import CompanySlider from "./components/companys/page";
import Header from "./components/header/page";
import AboutUs from "./sections/about/page";
import Features from "./sections/features/page";
import FeaturesFinal from "./sections/features/features-final/page";
import Hero from "./sections/hero/page";
import Ratings from "./sections/ratings/page";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CompanySlider/>
      <AboutUs/>
      <Features/>
      <FeaturesFinal/>
      <Ratings/>
    </>
  );
}