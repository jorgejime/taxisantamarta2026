import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-700 text-center md:text-left">
        Este sitio web utiliza cookies para optimizar su experiencia. Al continuar, acepta nuestra <a href="#" className="underline font-semibold hover:text-black">Política de Cookies</a>.
      </div>
      <div className="flex gap-3">
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-[#FFD700] hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-md text-sm transition-colors"
        >
          Aceptar
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors"
        >
          Configurar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;