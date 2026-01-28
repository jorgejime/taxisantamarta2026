import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../i18n';

const Rates: React.FC = () => {
  const { t } = useLanguage();

  const officialRates = [
    { key: 'minimum', price: '$8.600' },
    { key: 'night', price: '$1.341' },
    { key: 'sunday', price: '$1.341' },
    { key: 'airport', price: '$5.590' },
    { key: 'app', price: '$335' },
    { key: 'hourly', price: '$40.136' },
  ];

  const fixedRates = [
    { key: 'airportSM', price: '$40.136' },
    { key: 'airportRodadero', price: '$32.533' },
    { key: 'airportTaganga', price: '$56.682' },
    { key: 'smDecameron', price: '$44.943' },
    { key: 'smPozos', price: '$23.589' },
    { key: 'smMinca', price: '$87.067' },
    { key: 'smTayrona', price: '$138.408' },
    { key: 'smBahia', price: '$96.930' },
  ];

  return (
    <div className="bg-white border-b-2 border-black min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="p-10 md:p-20 border-b-2 border-black grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h2 className="mb-4">{t.rates.title}</h2>
            <div className="border-t-8 border-black w-24 mb-4" />
          </div>
          <p className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-none text-gray-400">
            {t.rates.subtitle}
          </p>
        </div>

        {/* Official Rates Section */}
        <div className="bg-gray-100 p-6 md:px-16 border-b-2 border-black">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">{t.rates.sectionOfficial}</h3>
        </div>
        <div className="grid grid-cols-1">
          {officialRates.map((rate, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-16 border-b-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                {t.rates.concepts[rate.key as keyof typeof t.rates.concepts]}
              </span>
              <div className="text-3xl md:text-5xl font-black tracking-tighter">
                {rate.price} <span className="text-xs md:text-sm align-middle tracking-normal">COP</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Rates Section */}
        <div className="bg-gray-100 p-6 md:px-16 border-b-2 border-black border-t-8 border-t-black">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">{t.rates.sectionFixed}</h3>
        </div>
        <div className="grid grid-cols-1">
          {fixedRates.map((rate, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-16 border-b-2 border-black hover:bg-[#FFD700] transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                {t.rates.routes[rate.key as keyof typeof t.rates.routes]}
              </span>
              <div className="text-3xl md:text-5xl font-black tracking-tighter group-hover:scale-110 transition-transform">
                {rate.price} <span className="text-xs md:text-sm align-middle tracking-normal">COP</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div className="p-10 bg-[#FFD700] border-t-2 border-black flex flex-col md:flex-row gap-6 items-center">
          <Info className="w-12 h-12 flex-shrink-0" strokeWidth={3} />
          <p className="text-sm md:text-xl font-black uppercase tracking-tight leading-tight">
            {t.rates.note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rates;