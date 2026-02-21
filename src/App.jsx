// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';

// Page Components
import HomePage from './pages/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import GetQuote from './components/GetQuote';
import SolutionsPage from './pages/SolutionsPage';
import FulfillmentPage from './pages/FulfillmentPage';
import PackingLabelingPage from './pages/PackingLabelingPage';
import WarehousingPage from './pages/WarehousingPage';
import PricingSection from './components/PricingSection';
import EcommerceFulfillmentDetailPage from './pages/EcommerceFulfillmentDetailPage';
import WarehousingDetailPage from './pages/WarehousingDetailPage';
import PackingLabelingDetailPage from './pages/PackingLabelingDetailPage';
// Remove these if they don't exist yet:
// import ColdChainPage from './pages/ColdChainPage';
// import ProcessPage from './pages/ProcessPage';
// import GlobalNetwork from './components/GlobalNetwork';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <BrowserRouter>
      <div className="bg-[#020617] text-light min-vh-100">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage setActiveModal={setActiveModal} />} />
          <Route path="/calculator" element={<PricingSection />} />
          <Route path="/about" element={<AboutUs />} />
         
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/solutions" element={<SolutionsPage setActiveModal={setActiveModal} />} />
          <Route path="/solutions/fulfillment" element={<FulfillmentPage />} />
          <Route path="/solutions/PackingLabeling" element={<PackingLabelingPage />} />
          <Route path="/solutions/warehousing" element={<WarehousingPage />} />
          // In your routes:
<Route path="/solutions/ecommerce-fulfillment" element={<EcommerceFulfillmentDetailPage />} />
<Route path="/solutions/ware-housing" element={<WarehousingDetailPage />} />
<Route path="/solutions/packing-labeling" element={<PackingLabelingDetailPage />} />
          
          {/* Comment out routes for pages you haven't created yet */}
          {/* <Route path="/network" element={<GlobalNetwork />} /> */}
          {/* <Route path="/process" element={<ProcessPage />} /> */}
          {/* <Route path="/solutions/cold-chain" element={<ColdChainPage />} /> */}
        </Routes>

        <Footer />

        {activeModal && (
          <ServiceModal
            serviceId={activeModal}
            onClose={() => setActiveModal(null)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
