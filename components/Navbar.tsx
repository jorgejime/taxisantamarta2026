import React, { useState } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { NavItem, PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Inicio' },
  { id: 'services', label: 'Servicios' },
  { id: 'rates', label: 'Tarifas' },
  { id: 'drivers', label: 'Soy Conductor' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex flex-col items-end leading-none">
              <span className="text-3xl font-black tracking-tighter uppercase text-black group-hover:text-gray-800 transition-colors">TAXI</span>
              <span className="text-xs tracking-widest uppercase font-bold text-gray-600">Santa Marta</span>
            </div>
            <Smartphone className="h-8 w-8 text-black stroke-[2.5]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium text-lg transition-colors ${
                  currentPage === item.id 
                    ? 'text-yellow-600 font-bold' 
                    : 'text-gray-900 hover:text-yellow-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#FFD700] hover:bg-yellow-400 text-black font-bold py-2.5 px-6 rounded-full transition-colors shadow-sm">
              Pedir Taxi
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                   currentPage === item.id 
                    ? 'bg-yellow-50 text-yellow-800' 
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <button className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-bold py-3 rounded-full transition-colors">
                Pedir Taxi
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;