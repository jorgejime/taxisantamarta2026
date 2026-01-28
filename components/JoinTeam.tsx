import React from 'react';
import { CheckCircle, FileText, Car } from 'lucide-react';

const JoinTeam: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Afíliate a Taxi Santa Marta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Únete a la flota más confiable de la ciudad. Aumenta tus ingresos con nuestra alta demanda de servicios turísticos y ejecutivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Requirements & Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="text-[#FFD700]" /> Requisitos de Afiliación
            </h3>
            <ul className="space-y-4 mb-10">
              {[
                'Licencia de conducción C1 o C2 vigente.',
                'Tarjeta de propiedad del vehículo.',
                'SOAT y revisión técnico-mecánica al día.',
                'Tarjeta de operación vigente.',
                'Vehículo modelo 2018 en adelante (preferiblemente con A/C).',
                'Antecedentes judiciales y disciplinarios.',
                'Seguridad social (ARL, EPS, Pensión).'
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Car className="text-[#FFD700]" /> Beneficios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-gray-900">Más Carreras</h4>
                <p className="text-sm text-gray-600">Acceso a convenios con hoteles y empresas.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-gray-900">Seguridad</h4>
                <p className="text-sm text-gray-600">Monitoreo 24/7 y botón de pánico en la app.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-gray-900">Pagos Puntuales</h4>
                <p className="text-sm text-gray-600">Liquidación semanal de servicios corporativos.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Pre-Inscripción</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Cédula</label>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white" placeholder="123456789" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Celular / WhatsApp</label>
                <input type="tel" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white" placeholder="300 123 4567" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Placa del Vehículo</label>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white uppercase" placeholder="ABC-123" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Modelo (Año)</label>
                  <input type="number" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white" placeholder="2020" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Experiencia (Años)</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white">
                  <option>Menos de 1 año</option>
                  <option>1 - 3 años</option>
                  <option>3 - 5 años</option>
                  <option>Más de 5 años</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-bold py-3.5 rounded-lg transition-colors shadow-lg">
                  Enviar Solicitud
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  Nos pondremos en contacto contigo en las próximas 24 horas para agendar la revisión.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JoinTeam;