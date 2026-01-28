import React from 'react';
import { MapPin, ShieldCheck, Banknote } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: MapPin,
    title: 'Rastreo GPS en tiempo real',
    description: 'Monitorea tu ruta y comparte tu viaje para mayor seguridad.',
  },
  {
    icon: ShieldCheck,
    title: 'Conductores Verificados',
    description: 'Personal calificado y vehículos inspeccionados regularmente.',
  },
  {
    icon: Banknote,
    title: 'Tarifas Fijas y Transparentes',
    description: 'Conoce el valor de tu viaje antes de iniciar, sin sorpresas.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-gray-900 p-4 rounded-xl mb-6 transform transition-transform group-hover:scale-110 duration-300">
                <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              {/* Added description text slightly lighter than title to aid UI balance, though screenshot implies minimal text */}
              {feature.description && (
                <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;