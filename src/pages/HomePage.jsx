import Hero from '../components/Hero';
import BrandStrip from '../components/BrandStrip';
import AnimationSection from '../components/AnimationSection';
import { SolutionsIntro, FulfillmentShowcase, TransportationShowcase, WarehousingShowcase } from '../components/showcases';
import PricingSection from '../components/PricingSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs'; // Changed from About to AboutUs
import contectus from '../components/ContactUs';
import ContactUs from '../components/ContactUs';
import GetQuote from '../components/GetQuote';


export default function HomePage({ setActiveModal }) {
  return (
    <main>
      <Hero />
      <BrandStrip />
      <AnimationSection />
      <SolutionsIntro />
      <FulfillmentShowcase />
      <TransportationShowcase />
      <WarehousingShowcase />
      <PricingSection />
   
      <AboutUs /> {/* Using AboutUs component */}
      <ContactUs />
      <GetQuote setActiveModal={setActiveModal} /> {/* Pass setActiveModal to GetQuote */}     
    </main>
  );
}