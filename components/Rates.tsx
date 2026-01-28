import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { useLanguage } from '../i18n';

interface RateItem {
  routeKey: 'airportRodadero' | 'airportCentro' | 'airportTaganga' | 'santaMartaMinca' | 'santaMartaTayrona' | 'santaMartaPalomino' | 'hourlyCity';
  price: string;
  typeKey: 'standard' | 'tourism' | 'fullDay' | 'executive';
}

const ratesList: RateItem[] = [
  { routeKey: 'airportRodadero', price: '$30.000', typeKey: 'standard' },
  { routeKey: 'airportCentro', price: '$35.000', typeKey: 'standard' },
  { routeKey: 'airportTaganga', price: '$45.000', typeKey: 'standard' },
  { routeKey: 'santaMartaMinca', price: '$60.000', typeKey: 'tourism' },
  { routeKey: 'santaMartaTayrona', price: '$90.000', typeKey: 'tourism' },
  { routeKey: 'santaMartaPalomino', price: '$180.000', typeKey: 'fullDay' },
  { routeKey: 'hourlyCity', price: '$25.000', typeKey: 'executive' },
];

const Rates: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white border-b-2 border-black min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="p-10 md:p-20 border-b-2 border-black grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h2 className="mb-4">{t.rates.title}</h2>
            <div className="border-t-8 border-black w-24 mb-4" />
          </div>
          <p className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-none text-gray-400">
            {t.rates.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1">
          {ratesList.map((rate, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:px-16 border-b-2 border-black hover:bg-black hover:text-white transition-all transition-duration-300"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="text-xs font-black p-1 border-2 border-black group-hover:border-white uppercase">
                  {t.rates.types[rate.typeKey]}
                </span>
                <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
                  {t.rates.routes[rate.routeKey]}
                </span>
              </div>
              <div className="text-4xl md:text-7xl font-black tracking-tighter">
                {rate.price} <span className="text-xs md:text-sm align-middle tracking-normal">COP</span>
              </div>
            </div>
          ))}
        </div>

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