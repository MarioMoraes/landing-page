import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <section ref={ref} className="relative min-h-screen bg-dark-100 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-100 to-dark-200" />

      {/* Parallax grid texture */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,151,42,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,151,42,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          y: gridY,
        }}
      />

      {/* Gold accent bar */}
      <motion.div
        className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gold"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center min-h-screen py-32">

          {/* Left: Copy */}
          <motion.div style={{ y: textY }}>
            <motion.div
              className="flex items-center gap-3 mb-10"
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="h-px w-12 bg-gold" />
              <span className="section-tag">Barbearia Premium · Est. 2019</span>
            </motion.div>

            <h1 className="leading-none mb-8">
              <motion.span
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block text-xl sm:text-2xl font-heading font-light tracking-[0.35em] text-white/40 uppercase mb-2"
              >
                Onde o
              </motion.span>
              <motion.span
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block font-heading font-bold text-white uppercase text-[clamp(4.5rem,11vw,9rem)] leading-none"
              >
                Ofício
              </motion.span>
              <motion.span
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block font-display italic text-gold text-[clamp(3rem,7.5vw,7rem)] leading-none -mt-2"
              >
                Vira Arte.
              </motion.span>
            </h1>

            <motion.p
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-base sm:text-lg max-w-lg mb-10 font-sans font-light leading-relaxed"
            >
              Mais do que um corte — uma experiência que transforma. Cada detalhe executado com precisão, do cabelo à barba, do primeiro ao último fio.
            </motion.p>

            <motion.div
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#agendamento" className="btn-primary">
                Agendar Agora
              </a>
              <a href="#servicos" className="btn-outline">
                Ver Serviços
              </a>
            </motion.div>

            <motion.div
              custom={6}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 text-sm font-sans"
            >
              <div className="flex items-center gap-2">
                <span className="text-gold text-base tracking-wider">★★★★★</span>
                <span className="text-white font-medium">4.9</span>
                <span className="text-gray-500">/5</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-gray-500">+2.000 clientes satisfeitos</span>
            </motion.div>
          </motion.div>

          {/* Right: Image with parallax */}
          <motion.div
            className="relative hidden lg:flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ y: imageY }}
          >
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=700&q=85"
                  alt="Barbeiro Zé Navalha em ação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark to-transparent" />
              </div>

              <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/20 pointer-events-none" />

              <div
                className="absolute -top-6 -left-10 text-gold/10 select-none pointer-events-none"
                style={{ fontSize: '120px', lineHeight: 1 }}
              >
                ✂
              </div>

              <motion.div
                className="absolute -bottom-8 -left-10 bg-dark-200 border border-white/5 p-4 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="section-tag mb-1">Horários disponíveis</p>
                <p className="text-white font-heading font-semibold text-sm tracking-wide">
                  Reserve hoje mesmo
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[9px] tracking-[0.5em] uppercase font-sans">Descer</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
