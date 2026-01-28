import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Services from './components/Services';
import Rates from './components/Rates';
import JoinTeam from './components/JoinTeam';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
          </>
        );
      case 'services':
        return <Services />;
      case 'rates':
        return <Rates />;
      case 'drivers':
        return <JoinTeam />;
      default:
        return (
          <>
            <Hero />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-yellow-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;