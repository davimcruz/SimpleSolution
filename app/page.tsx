import CompanySlider from "./components/companys/page";
import Header from "./components/header/page";
import AboutUs from "./sections/about/page";
import Features from "./sections/features/page";
import Hero from "./sections/Hero/page";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CompanySlider/>
      <AboutUs/>
      <Features/>
    </>
  );
}