import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Services from './components/Services';
import Rates from './components/Rates';
import JoinTeam from './components/JoinTeam';
import SEOHead from './components/SEOHead';
import { PageType } from './types';
import { LanguageProvider } from './i18n';

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
    <LanguageProvider>
      <SEOHead />
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-yellow-200">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main id="main-content" role="main">
          {renderContent()}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;

