import React from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import { Layout } from '@/components/brand/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AirportTransfersPage from '@/pages/services/AirportTransfersPage';
import ExecutiveTransportationPage from '@/pages/services/ExecutiveTransportationPage';
import VipEventPage from '@/pages/services/VipEventPage';
import ExecutiveProtectionPage from '@/pages/services/ExecutiveProtectionPage';
import ProductionTransportationPage from '@/pages/services/ProductionTransportationPage';
import CorporateAccountsPage from '@/pages/services/CorporateAccountsPage';
import FleetPage from '@/pages/FleetPage';
import ExperiencePage from '@/pages/ExperiencePage';
import ReviewsPage from '@/pages/ReviewsPage';
import AboutPage from '@/pages/AboutPage';
import BookPage from '@/pages/BookPage';
import ContactPage from '@/pages/ContactPage';
import CorporateInquiryPage from '@/pages/CorporateInquiryPage';
import ThankYouPage from '@/pages/ThankYouPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/airport-transfers" element={<AirportTransfersPage />} />
            <Route path="/services/executive-transportation" element={<ExecutiveTransportationPage />} />
            <Route path="/services/vip-event-transportation" element={<VipEventPage />} />
            <Route path="/services/executive-protection" element={<ExecutiveProtectionPage />} />
            <Route path="/services/production-transportation" element={<ProductionTransportationPage />} />
            <Route path="/services/corporate-accounts" element={<CorporateAccountsPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/corporate-inquiry" element={<CorporateInquiryPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="top-center" toastOptions={{ style: { background: '#0B0B0B', color: '#F6F1E6', border: '1px solid rgba(212,175,55,0.30)' } }} />
    </div>
  );
}

export default App;
