import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ValueProposition from "../components/ValueProposition";
import WhyChooseUs from "../components/WhyChooseUs";
import ProgramCarousel from "../components/ProgramCarousel";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ValueProposition />
      <WhyChooseUs />
      <ProgramCarousel />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}
