/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileFloatCall from './components/MobileFloatCall';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('');

  const handleOpenQuote = () => {
    setSelectedServiceId('');
    setIsQuoteOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen selection:bg-gold-400 selection:text-slate-950">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Page Layout */}
      <main id="main-content">
        {/* Full-Height Luxury Entrance */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Detailed Brand Integrity / Craftsmanship Section */}
        <About />

        {/* Elite Services Grid Section */}
        <Services onSelectService={handleSelectService} />

        {/* Interactive Filterable Image Showcase */}
        <Gallery />

        {/* Client Praise & Verifications */}
        <Testimonials />

        {/* Quick Contacts, Interactive Form, and FAQS */}
        <Contact />
      </main>

      {/* Footer Credentials Bar */}
      <Footer />

      {/* Responsive Gold Mobile Quick Call Panel */}
      <MobileFloatCall />

      {/* High-End Proposal Inquiry Modal Overlay */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedService={selectedServiceId}
      />
    </div>
  );
}
