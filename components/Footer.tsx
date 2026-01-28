import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <div className="flex flex-col items-start leading-none">
              <span className="text-2xl font-black tracking-tighter uppercase text-white">TAXI</span>
              <span className="text-xs tracking-widest uppercase font-bold text-gray-400">Santa Marta</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Taxi Santa Marta. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;