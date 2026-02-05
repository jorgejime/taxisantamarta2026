import React from 'react';
import { Car } from 'lucide-react';
import { useLanguage } from '../i18n';

const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();
  const ctaText = language === 'es' ? 'PEDIR TAXI YA' : 'ORDER TAXI NOW';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip / Invitation label */}
      <div className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-2 border-2 border-white shadow-lg animate-bounce">
        {ctaText}
      </div>

      <a
        href="https://wa.me/573164207000?text=Hola,%20necesito%20un%20taxi%20para%20la%20direcci%C3%B3n:"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
      >
        {/* The Button - Pure Swiss Taxi Style */}
        <div className="relative flex items-center justify-center bg-[#FFD700] border-4 border-black w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-[0_8px_0_0_#000] hover:shadow-[0_4px_0_0_#000] hover:translate-y-1 transition-all active:shadow-none active:translate-y-2">
          <Car className="w-8 h-8 sm:w-12 sm:h-12 text-black fill-transparent stroke-[3]" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;