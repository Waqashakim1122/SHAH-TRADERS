// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#020617] text-light min-vh-100">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<PricingSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/fulfillment" element={<FulfillmentPage />} />
          <Route path="/solutions/PackingLabeling" element={<PackingLabelingPage />} />
          <Route path="/solutions/warehousing" element={<WarehousingPage />} />
          <Route path="/solutions/ecommerce-fulfillment" element={<EcommerceFulfillmentDetailPage />} />
          <Route path="/solutions/ware-housing" element={<WarehousingDetailPage />} />
          <Route path="/solutions/packing-labeling" element={<PackingLabelingDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
