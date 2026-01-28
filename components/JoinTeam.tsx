import React, { useState } from 'react';
import { CheckCircle, FileText, Car } from 'lucide-react';
import { useLanguage } from '../i18n';

const JoinTeam: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    celular: '',
    placa: '',
    modelo: '',
    experiencia: t.joinTeam.form.experienceOptions[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = language === 'es' ? 'SOLICITUD DE CONDUCTOR' : 'DRIVER APPLICATION';
    const separator = '=======================';

    // Form labels based on language
    const lName = language === 'es' ? 'NOMBRE' : 'NAME';
    const lId = language === 'es' ? 'CEDULA' : 'ID';
    const lPhone = language === 'es' ? 'CELULAR' : 'PHONE';
    const lPlate = language === 'es' ? 'PLACA' : 'PLATE';
    const lModel = language === 'es' ? 'MODELO' : 'MODEL';
    const lExp = language === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE';

    // Sin emojis para evitar errores de codificación
    const mensaje = `*${title}*\n${separator}\n- *${lName}:* ${formData.nombre.toUpperCase()}\n- *${lId}:* ${formData.cedula}\n- *${lPhone}:* ${formData.celular}\n- *${lPlate}:* ${formData.placa.toUpperCase()}\n- *${lModel}:* ${formData.modelo}\n- *${lExp}:* ${formData.experiencia}`;

    window.open(`https://wa.me/573003848822?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">

        {/* Left Info Area */}
        <div className="lg:col-span-5 p-10 md:p-20 border-black lg:border-r-2 border-b-2 lg:border-b-0">
          <h2 className="mb-12 leading-[0.85]">{t.joinTeam.title}</h2>
          <div className="border-t-8 border-black w-32 mb-12" />

          <div className="space-y-16">
            <section>
              <h3 className="mb-8 flex items-center gap-4">
                <FileText strokeWidth={3} /> {t.joinTeam.requirements}
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {t.joinTeam.reqList.map((req, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 bg-gray-100 font-bold uppercase text-xs tracking-tighter">
                    <CheckCircle className="text-black" size={16} strokeWidth={4} />
                    {req}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="mb-8 flex items-center gap-4">
                <Car strokeWidth={3} /> {t.joinTeam.benefits}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {Object.values(t.joinTeam.benefitCards).map((benefit: any, i) => (
                  <div key={i} className="border-2 border-black p-6 hover:bg-[#FFD700] transition-colors">
                    <h4 className="font-black uppercase text-xl mb-1">{benefit.title}</h4>
                    <p className="font-bold uppercase text-[10px] tracking-widest opacity-60">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="lg:col-span-7 bg-black text-white p-10 md:p-20">
          <h2 className="text-white mb-16 underline decoration-[#FFD700] decoration-8 underline-offset-8">
            {t.joinTeam.form.title}
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={handleSubmit}>
            <div className="flex flex-col border-b-2 border-gray-700 focus-within:border-[#FFD700] transition-colors">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">{t.joinTeam.form.name}</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="bg-transparent text-2xl font-black uppercase tracking-tighter outline-none py-2" placeholder="..." />
            </div>

            <div className="flex flex-col border-b-2 border-gray-700 focus-within:border-[#FFD700] transition-colors">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">{t.joinTeam.form.idNumber}</label>
              <input type="text" name="cedula" value={formData.cedula} onChange={handleChange} required className="bg-transparent text-2xl font-black uppercase tracking-tighter outline-none py-2" placeholder="..." />
            </div>

            <div className="md:col-span-2 flex flex-col border-b-2 border-gray-700 focus-within:border-[#FFD700] transition-colors">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">{t.joinTeam.form.phone}</label>
              <input type="tel" name="celular" value={formData.celular} onChange={handleChange} required className="bg-transparent text-2xl font-black uppercase tracking-tighter outline-none py-2" placeholder="300 000 0000" />
            </div>

            <div className="flex flex-col border-b-2 border-gray-700 focus-within:border-[#FFD700] transition-colors">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">{t.joinTeam.form.plate}</label>
              <input type="text" name="placa" value={formData.placa} onChange={handleChange} required className="bg-transparent text-2xl font-black uppercase tracking-tighter outline-none py-2" placeholder="ABC-123" />
            </div>

            <div className="flex flex-col border-b-2 border-gray-700 focus-within:border-[#FFD700] transition-colors">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">{t.joinTeam.form.model}</label>
              <input type="number" name="modelo" value={formData.modelo} onChange={handleChange} required className="bg-transparent text-2xl font-black uppercase tracking-tighter outline-none py-2" placeholder="2024" />
            </div>

            <div className="md:col-span-2 flex flex-col border-b-2 border-gray-700 focus-within:border-[#FFD700] transition-colors">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">{t.joinTeam.form.experience}</label>
              <select name="experiencia" value={formData.experiencia} onChange={handleChange} className="bg-transparent text-2xl font-black uppercase tracking-tighter outline-none py-2 cursor-pointer">
                {t.joinTeam.form.experienceOptions.map((opt, i) => <option key={i} className="bg-black text-white">{opt}</option>)}
              </select>
            </div>

            <div className="md:col-span-2 pt-10">
              <button type="submit" className="w-full bg-[#FFD700] text-black h-24 text-3xl font-black uppercase tracking-tighter hover:bg-white transition-all">
                {t.joinTeam.form.submit}
              </button>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gray-500 text-center">
                {t.joinTeam.form.note}
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default JoinTeam;