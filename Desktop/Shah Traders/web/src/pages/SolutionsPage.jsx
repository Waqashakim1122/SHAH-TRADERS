import { SolutionsIntro, FulfillmentShowcase, TransportationShowcase, WarehousingShowcase } from '../components/showcases';

export default function SolutionsPage({ setActiveModal }) {
  return (
    <main className="pt-24">
      <SolutionsIntro />
      <FulfillmentShowcase />
      <TransportationShowcase />
      <WarehousingShowcase />
    </main>
  );
}