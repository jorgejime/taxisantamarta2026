import React from 'react';
import { MapPin, ArrowRight, Info } from 'lucide-react';

const rates = [
  { route: 'Aeropuerto - Rodadero', price: '$30,000 COP', type: 'Estándar' },
  { route: 'Aeropuerto - Centro Histórico', price: '$35,000 COP', type: 'Estándar' },
  { route: 'Aeropuerto - Taganga', price: '$45,000 COP', type: 'Estándar' },
  { route: 'Santa Marta - Minca', price: '$60,000 COP', type: 'Turismo' },
  { route: 'Santa Marta - Parque Tayrona', price: '$90,000 COP', type: 'Turismo' },
  { route: 'Santa Marta - Palomino', price: '$180,000 COP', type: 'Full Day' },
  { route: 'Servicio por Hora (Ciudad)', price: '$25,000 COP', type: 'Ejecutivo' },
];

const Rates: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Tarifas Oficiales
          </h2>
          <p className="text-lg text-gray-600">
            Precios transparentes y regulados para 2024. Sin sorpresas.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider">Ruta / Servicio</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider">Tipo</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider text-right">Valor Aproximado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rates.map((rate, index) => (
                  <tr key={index} className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-6 flex items-center gap-2 text-gray-800 font-medium">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {rate.route}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        rate.type === 'Turismo' ? 'bg-green-100 text-green-800' :
                        rate.type === 'Ejecutivo' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {rate.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-bold text-gray-900 text-lg">
                      {rate.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 p-4 flex items-start gap-3">
             <Info className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
             <p className="text-sm text-yellow-800">
               * Tarifas sujetas a cambios por temporada alta, recargo nocturno (8pm - 5am) y festivos. Para viajes fuera del perímetro urbano, acuerde el precio con el conductor o use el taxímetro.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;