const ScissorsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const RazorIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="5" rx="1" />
    <path d="M5 8v13" />
    <path d="M19 8v13" />
    <path d="M5 14h14" />
  </svg>
);

const DiamondIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
  </svg>
);

const TowelIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
    <path d="M7 3v18" />
  </svg>
);

const BrowIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c2-6 18-6 20 0" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const PigmentIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z" />
    <path d="M12 9v3" />
    <path d="M12 15h.01" />
    <path d="M5 20c2-2 4-3 7-3s5 1 7 3" />
  </svg>
);

const services = [
  {
    Icon: ScissorsIcon,
    name: 'Corte Clássico',
    description:
      'Linhas precisas, fade impecável. O corte que você quer, entregue com maestria e sem margem para erro.',
    price: 'R$ 45',
    featured: false,
  },
  {
    Icon: RazorIcon,
    name: 'Barba Completa',
    description:
      'Da navalha ao acabamento. Barba alinhada, hidratada e com resultado que define seu estilo.',
    price: 'R$ 35',
    featured: false,
  },
  {
    Icon: DiamondIcon,
    name: 'Corte + Barba',
    description:
      'A combinação perfeita. Saia completamente renovado — do cabelo à barba — em uma única visita.',
    price: 'R$ 70',
    featured: true,
  },
  {
    Icon: TowelIcon,
    name: 'Hot Towel Shave',
    description:
      'Ritual clássico com toalha quente, navalha e produtos premium. Relaxamento e precisão absolutos.',
    price: 'R$ 40',
    featured: false,
  },
  {
    Icon: BrowIcon,
    name: 'Sobrancelha',
    description:
      'Acabamento perfeito para uma expressão forte e definida. Um detalhe que muda tudo no visual.',
    price: 'R$ 20',
    featured: false,
  },
  {
    Icon: PigmentIcon,
    name: 'Pigmentação',
    description:
      'Cobertura de falhas e uniformização da barba com resultado natural e duradouro.',
    price: 'R$ 55',
    featured: false,
  },
];

import { FadeUp, Stagger, StaggerItem } from '../animations';

export default function Services() {
  return (
    <section id="servicos" className="bg-dark-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeUp className="mb-16 max-w-xl">
          <p className="section-tag mb-4">O que oferecemos</p>
          <h2 className="leading-none">
            <span className="block text-4xl sm:text-5xl font-heading font-bold text-white uppercase">
              NOSSOS
            </span>
            <span className="block text-5xl sm:text-6xl font-display italic text-gold leading-none">
              Serviços
            </span>
            <span className="block text-4xl sm:text-5xl font-heading font-bold text-white uppercase">
              Premium
            </span>
          </h2>
        </FadeUp>

        {/* Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <StaggerItem
              key={service.name}
              className={`relative p-8 border transition-all duration-300 group flex flex-col ${
                service.featured
                  ? 'border-gold bg-dark-300'
                  : 'border-white/5 bg-dark-200 hover:border-gold/30 hover:bg-dark-300'
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-gold text-dark text-[10px] font-heading font-bold tracking-widest uppercase px-3 py-1">
                  Popular
                </div>
              )}

              <div
                className={`mb-5 transition-colors duration-300 ${
                  service.featured
                    ? 'text-gold'
                    : 'text-white/30 group-hover:text-gold'
                }`}
              >
                <service.Icon />
              </div>

              <h3
                className={`font-heading font-semibold text-base tracking-widest uppercase mb-3 ${
                  service.featured ? 'text-gold' : 'text-white'
                }`}
              >
                {service.name}
              </h3>

              <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className={`font-heading font-bold text-2xl ${
                    service.featured ? 'text-gold' : 'text-white'
                  }`}
                >
                  {service.price}
                </span>
                <a
                  href="#agendamento"
                  className={`text-[11px] tracking-widest uppercase font-heading font-medium transition-colors duration-200 ${
                    service.featured
                      ? 'text-gold'
                      : 'text-gray-600 group-hover:text-gold'
                  }`}
                >
                  Agendar →
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
