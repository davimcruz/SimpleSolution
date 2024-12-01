import CompanySlider from "./components/companys";
import Header from "./components/header";
import AboutUs from "./sections/about";
import Features from "./sections/features";
import FeaturesFinal from "./sections/features/features-final";
import Ratings from "./sections/ratings";
import Hero from "./sections/hero";
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