import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../i18n';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12 pb-28 sm:pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img
              src="https://i.ibb.co/39qfdZY8/Logo-web-TSM-200x60-PX-1.png"
              alt="Taxi Santa Marta"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          <div className="flex space-x-5 sm:space-x-6">
            <a
              href="https://www.facebook.com/taxisantamarta4207000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.instagram.com/taxi_santamarta4207000/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Taxi Santa Marta. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;