import React from 'react';
import { Apple, Play, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-gray-900 overflow-hidden">
      {/* Background Image - Using a placeholder similar to a colonial street in Colombia */}
      <img 
        src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=2070&auto=format&fit=crop" 
        alt="Taxi on Santa Marta street" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />
      
      {/* Dark Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white pt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Tu transporte confiable <br />
            en Santa Marta
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg font-light">
            Seguridad, puntualidad y profesionalismo en cada viaje por Colombia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            {/* App Store Buttons Box */}
            <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center min-w-[200px] shadow-lg">
              <span className="text-gray-900 font-bold mb-3 text-sm">Descarga la App</span>
              <div className="flex gap-4">
                <button className="text-black hover:text-gray-700 transition-colors">
                   <Apple className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                </button>
                <button className="text-black hover:text-gray-700 transition-colors">
                   <Play className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                </button>
              </div>
            </div>

            {/* WhatsApp Box */}
            <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center min-w-[200px] shadow-lg">
              <span className="text-gray-900 font-bold mb-3 text-sm">Reserva por WhatsApp</span>
              <button className="bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition-colors">
                 <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;