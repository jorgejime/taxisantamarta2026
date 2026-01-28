import React from 'react';
import { MapPin, ShieldCheck, Banknote } from 'lucide-react';
import { useLanguage } from '../i18n';

interface FeatureItem {
  icon: any;
  titleKey: 'gps' | 'verified' | 'rates';
}

const featuresList: FeatureItem[] = [
  { icon: MapPin, titleKey: 'gps' },
  { icon: ShieldCheck, titleKey: 'verified' },
  { icon: Banknote, titleKey: 'rates' },
];

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white border-b-2 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {featuresList.map((feature, index) => {
            const featureData = t.features[feature.titleKey];
            return (
              <div
                key={index}
                className={`p-10 md:p-16 border-black transition-all hover:bg-black hover:text-white group ${index !== featuresList.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''
                  }`}
              >
                <div className="mb-8">
                  <feature.icon className="w-12 h-12 text-black group-hover:text-[#FFD700]" strokeWidth={3} />
                </div>
                <h2 className="mb-6 text-2xl md:text-3xl tracking-tighter">
                  {featureData.title}
                </h2>
                <div className="border-t-4 border-black group-hover:border-[#FFD700] w-12 mb-6" />
                <p className="text-lg font-bold leading-tight uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                  {featureData.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;