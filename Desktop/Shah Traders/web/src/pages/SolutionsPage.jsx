import { SolutionsIntro, FulfillmentShowcase,  PackingLabelingShowcase, WarehousingShowcase } from '../components/showcases';

export default function SolutionsPage({ setActiveModal }) {
  return (
    <main className="pt-24">
      <SolutionsIntro />
      <FulfillmentShowcase />
      <PackingLabelingShowcase />
      <WarehousingShowcase />
    </main>
  );
}