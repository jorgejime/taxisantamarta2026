import React from 'react';
import { Plane, Briefcase, Camera, Clock, UserCheck, Shield, Car } from 'lucide-react';
import { useLanguage } from '../i18n';

interface ServiceItem {
  icon: any;
  key: 'airport' | 'tourism' | 'executive' | 'hourly' | 'designated' | 'delivery';
}

const servicesList: ServiceItem[] = [
  { icon: Plane, key: 'airport' },
  { icon: Camera, key: 'tourism' },
  { icon: Briefcase, key: 'executive' },
  { icon: Clock, key: 'hourly' },
  { icon: UserCheck, key: 'designated' },
  { icon: Shield, key: 'delivery' },
];

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const getWhatsAppLink = (serviceTitle: string) => {
    const baseMsg = language === 'es'
      ? `Hola! Me gustaría solicitar el servicio de: *${serviceTitle}*`
      : `Hello! I would like to request the following service: *${serviceTitle}*`;
    return `https://wa.me/573003848822?text=${encodeURIComponent(baseMsg)}`;
  };

  return (
    <div className="bg-[#1A1A1B] text-white border-b-2 border-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="p-10 md:p-20 border-black border-b-2">
          <h2 className="text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-gray-400 max-w-4xl">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => {
            const serviceData = t.services[service.key];
            return (
              <div
                key={index}
                className="p-10 md:p-12 border-black border-b-2 sm:odd:border-r-2 lg:odd:border-r-0 lg:[&:not(:nth-child(3n))]:border-r-2 hover:bg-[#FFD700] hover:text-black transition-all group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-white text-black font-black text-xl">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <service.icon className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">
                  {serviceData.title}
                </h3>

                <p className="text-sm font-medium uppercase tracking-tight opacity-60 group-hover:opacity-100 leading-tight mb-8 grow">
                  {serviceData.desc}
                </p>

                <a
                  href={getWhatsAppLink(serviceData.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-between border-2 border-white group-hover:border-black p-4 font-black uppercase tracking-tighter text-sm hover:bg-black hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <span>{language === 'es' ? 'Solicitar ahora' : 'Request now'}</span>
                  <Car className="w-5 h-5 ml-2" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;