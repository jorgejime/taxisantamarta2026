import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavItem, PageType } from '../types';
import { useLanguage } from '../i18n';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems: NavItem[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'rates', label: t.nav.rates },
    { id: 'drivers', label: t.nav.drivers },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="bg-white border-b-2 border-black sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between h-16 md:h-24 items-center">

          {/* Logo Section */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img
              src="https://i.ibb.co/vCjDmVT2/Logo-web-TSM-200x60-PX-2.png"
              alt="Taxi Santa Marta"
              className="h-8 md:h-12 w-auto object-contain filter grayscale"
            />
          </div>

          {/* Desktop Menu - Swiss International Style */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 h-24 border-l-2 border-black font-black uppercase tracking-tighter text-sm transition-all hover:bg-black hover:text-white ${currentPage === item.id
                    ? 'bg-black text-white'
                    : 'text-black'
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-6 h-24 border-l-2 border-black font-black uppercase text-xs flex flex-col items-center justify-center hover:bg-gray-100"
            >
              <Globe className="w-4 h-4 mb-1" />
              <span>{language === 'es' ? 'English' : 'Español'}</span>
            </button>

            <a
              href="https://wa.me/573182000081"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-24 border-l-2 border-black bg-[#FFD700] flex items-center justify-center font-black uppercase tracking-widest text-sm hover:bg-yellow-400"
            >
              {t.nav.orderTaxi}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={toggleLanguage}
              className="px-4 h-16 border-l-2 border-black font-black text-xs uppercase"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 h-16 border-l-2 border-black text-black"
            >
              {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Radical Swiss Design */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-black fixed inset-0 top-[66px] z-50">
          <div className="flex flex-col h-full bg-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left p-8 border-b-2 border-black text-4xl font-black uppercase tracking-tighter leading-none ${currentPage === item.id ? 'bg-black text-white' : 'text-black'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-auto">
              <a
                href="https://wa.me/573182000081"
                className="block w-full text-center bg-[#FFD700] p-10 text-2xl font-black uppercase border-t-2 border-black"
              >
                {t.nav.orderTaxi}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;