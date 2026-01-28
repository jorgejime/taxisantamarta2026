import React from 'react';
import { Apple, Play, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full bg-white border-b-2 border-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh]">

          {/* Main Content Area */}
          <div className="md:col-span-8 p-6 md:p-16 flex flex-col justify-center border-black md:border-r-2 order-2 md:order-1">
            <h1 className="mb-8 max-w-4xl">
              {t.hero.title}<br />
              <span className="text-[#FFD700] stroke-black" style={{ WebkitTextStroke: '2px black' }}>
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-xl md:text-3xl font-medium tracking-tight text-black mb-12 max-w-2xl leading-tight uppercase font-black">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/573182000081"
                className="group inline-flex items-center justify-between bg-black text-white p-6 md:p-8 text-xl md:text-3xl font-black uppercase tracking-tighter hover:bg-[#FFD700] hover:text-black transition-all"
              >
                <span>{t.hero.bookWhatsApp}</span>
                <MessageCircle className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://apps.apple.com/co/app/taxi-santa-marta/id1609494308"
                  className="flex flex-col items-center justify-center border-2 border-black p-4 hover:bg-gray-100 transition-colors"
                >
                  <Apple className="w-8 h-8 mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest">iOS</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.taxisantamarta4340000.santamarta"
                  className="flex flex-col items-center justify-center border-2 border-black p-4 hover:bg-gray-100 transition-colors"
                >
                  <Play className="w-8 h-8 mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Android</span>
                </a>
              </div>
            </div>
          </div>

          {/* Graphical/Image Area */}
          <div className="md:col-span-4 bg-gray-100 relative min-h-[300px] md:min-h-full border-b-2 md:border-b-0 border-black order-1 md:order-2">
            <img
              src="https://i.ibb.co/DDC69Njt/Gemini-Generated-Image-1ii1lj1ii1lj1ii1.png"
              alt="Taxi Santa Marta"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-[#FFD700] text-black font-black p-2 text-sm uppercase tracking-tighter border-2 border-black">
                SMR-2026
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;