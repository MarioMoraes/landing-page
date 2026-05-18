import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SlideIn, Stagger, StaggerItem } from '../animations';

const stats = [
  { value: '5+', label: 'Anos de Experiência' },
  { value: '2k+', label: 'Clientes Atendidos' },
  { value: '98%', label: 'de Aprovação' },
  { value: '3', label: 'Mestres Barbeiros' },
];

export default function Stats() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative bg-dark py-28 overflow-hidden">
      {/* Parallax background photo */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark" />
      </motion.div>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Heading */}
          <SlideIn direction="left">
            <p className="section-tag mb-5">Nossa história</p>
            <h2 className="mb-6">
              <span className="block text-3xl sm:text-4xl font-heading font-bold text-white uppercase tracking-tight leading-tight">
                Mais do que uma barbearia,
              </span>
              <span className="block text-5xl sm:text-6xl font-display italic text-gold leading-none mt-2">
                É um Legado.
              </span>
            </h2>
            <p className="text-gray-400 font-sans font-light leading-relaxed max-w-md text-base">
              Fundado com a missão de resgatar a cultura da barbearia clássica, o Zé Navalha une tradição e modernidade em cada atendimento — porque todo homem merece sair daqui melhor do que chegou.
            </p>
          </SlideIn>

          {/* Right: Stats */}
          <Stagger className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="border border-white/5 bg-dark-200/60 p-6 hover:border-gold/30 transition-colors duration-300 group">
                  <div className="text-4xl sm:text-5xl font-heading font-bold text-gold mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm font-sans tracking-wide">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
