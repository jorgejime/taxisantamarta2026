import React, { useState } from 'react';
import { useLanguage } from '../i18n';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4 md:p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
      <div className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
        {t.cookies.message} <a href="#" className="underline font-semibold hover:text-black">{t.cookies.policy}</a>.
      </div>
      <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
        <button
          onClick={() => setIsVisible(false)}
          className="flex-1 sm:flex-none bg-[#FFD700] hover:bg-yellow-400 text-black font-bold py-2 px-4 sm:px-6 rounded-md text-xs sm:text-sm transition-colors"
        >
          {t.cookies.accept}
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-1 sm:flex-none bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 sm:px-6 rounded-md text-xs sm:text-sm transition-colors"
        >
          {t.cookies.configure}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;