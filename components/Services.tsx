import React from 'react';
import { Plane, Briefcase, Camera, Clock, UserCheck, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const serviceList = [
    {
      icon: Plane,
      title: 'Traslados Aeropuerto',
      desc: 'Te recogemos o llevamos al Aeropuerto Simón Bolívar con puntualidad garantizada. Monitoreamos tu vuelo.',
    },
    {
      icon: Camera,
      title: 'Turismo Local',
      desc: 'Recorridos por Taganga, Minca, Parque Tayrona y alrededores. Conductores que conocen los mejores sitios.',
    },
    {
      icon: Briefcase,
      title: 'Transporte Ejecutivo',
      desc: 'Servicio discreto y vehículos confortables para reuniones de negocios, congresos y eventos corporativos.',
    },
    {
      icon: Clock,
      title: 'Servicio por Horas',
      desc: 'Disponibilidad total del vehículo y conductor para diligencias múltiples dentro de la ciudad.',
    },
    {
      icon: UserCheck,
      title: 'Conductor Elegido',
      desc: 'Disfruta de la fiesta sin preocupaciones. Un conductor profesional te llevará a casa en tu propio vehículo.',
    },
    {
      icon: Shield,
      title: 'Encomiendas Seguras',
      desc: 'Transporte de documentos y paquetes pequeños con seguimiento en tiempo real.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Más que un simple taxi
          </h2>
          <p className="text-lg text-gray-600">
            Adaptamos nuestro servicio a tus necesidades, ya sea que visites Santa Marta por placer o negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;