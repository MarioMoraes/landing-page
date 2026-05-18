import { useState } from 'react';
import { SlideIn } from '../animations';

const WHATSAPP_NUMBER = '5535991344296';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const services = [
  'Corte Clássico',
  'Barba Completa',
  'Corte + Barba',
  'Hot Towel Shave',
  'Sobrancelha',
  'Pigmentação',
];

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Vim pelo site do Zé Navalha e gostaria de agendar.%0A%0A` +
        `*Nome:* ${form.name}%0A` +
        `*Serviço:* ${form.service || 'A definir'}%0A` +
        `*Telefone:* ${form.phone}%0A` +
        (form.message ? `*Observação:* ${form.message}` : '')
    );
    window.open(`${WHATSAPP_BASE}?text=${text}`, '_blank');
  };

  return (
    <section id="agendamento" className="bg-dark-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <SlideIn direction="left">
            <p className="section-tag mb-4">Reserve seu horário</p>
            <h2 className="mb-6 leading-none">
              <span className="block text-4xl sm:text-5xl font-heading font-bold text-white uppercase">
                AGENDE SUA
              </span>
              <span className="block text-5xl sm:text-6xl font-display italic text-gold leading-none">
                Visita
              </span>
            </h2>
            <p className="text-gray-400 font-sans text-base leading-relaxed mb-10 max-w-md">
              Sem filas, sem espera. Preencha o formulário e finalize seu agendamento direto pelo WhatsApp. Rápido, simples e sem burocracia.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  label: 'Endereço',
                  value: 'Rua Assis Figueiredo, 3900',
                },
                {
                  label: 'Horário',
                  value: 'Seg–Sex: 9h às 20h · Sáb: 9h às 18h',
                },
                {
                  label: 'WhatsApp',
                  value: '(35) 99134-4296',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-px h-full bg-gold/40 self-stretch" />
                  <div>
                    <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-gold mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-gray-300 font-sans text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>

          {/* Right: Form */}
          <SlideIn direction="right" className="bg-dark-200 border border-white/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-gray-500 mb-2">
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ex: João Silva"
                  className="w-full bg-dark border border-white/5 text-white font-sans text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 placeholder:text-gray-700"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-gray-500 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="w-full bg-dark border border-white/5 text-white font-sans text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 placeholder:text-gray-700"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-gray-500 mb-2">
                  Serviço
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-dark border border-white/5 text-white font-sans text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-gray-500 mb-2">
                  Observação
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Horário preferido, referência de corte..."
                  rows={3}
                  className="w-full bg-dark border border-white/5 text-white font-sans text-sm px-4 py-3 outline-none focus:border-gold/40 transition-colors duration-200 placeholder:text-gray-700 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center py-4 mt-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.552 4.107 1.516 5.836L.057 23.617a.75.75 0 0 0 .92.92l5.839-1.458A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0h-.001zm0 21.75a9.718 9.718 0 0 1-4.951-1.355l-.355-.211-3.667.915.931-3.601-.232-.371A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25c5.385 0 9.75 4.365 9.75 9.75 0 5.384-4.365 9.75-9.75 9.75h-.001z" />
                </svg>
                Enviar pelo WhatsApp
              </button>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
