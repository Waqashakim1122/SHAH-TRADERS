import Hero from '../components/Hero';
import BrandStrip from '../components/BrandStrip';
import AnimationSection from '../components/AnimationSection';
import { SolutionsIntro, FulfillmentShowcase, PackingLabelingShowcase, WarehousingShowcase } from '../components/showcases';
import PricingSection from '../components/PricingSection';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import GetQuote from '../components/GetQuote';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandStrip />
      <AnimationSection />
      <SolutionsIntro />
      <FulfillmentShowcase />
      <PackingLabelingShowcase />
      <WarehousingShowcase />
      <PricingSection />
      <AboutUs />
      <ContactUs />
      <GetQuote />
    </main>
  );
}
