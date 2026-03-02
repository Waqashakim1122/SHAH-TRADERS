// src/pages/HomePage.jsx
import Hero from '../components/Hero';
import BrandStrip from '../components/BrandStrip';
import AnimationSection from '../components/AnimationSection';
import PricingSection from '../components/PricingSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import GetQuote from '../components/GetQuote';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandStrip />
      <AnimationSection />
      <Services />
      <PricingSection />
      <AboutUs />
      <ContactUs />
      <GetQuote />
    </main>
  );
}
