import { motion } from 'framer-motion';
import { FadeUp, SlideIn } from '../animations';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85',
    alt: 'Corte de cabelo em detalhe',
    className: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85',
    alt: 'Interior da barbearia',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=85',
    alt: 'Ferramentas do barbeiro',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=85',
    alt: 'Acabamento de barba',
    className: 'col-span-2 row-span-1',
  },
];

const stripImages = [
  { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80', alt: 'Barbeiro trabalhando' },
  { src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80', alt: 'Fade perfeito' },
  { src: 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=600&q=80', alt: 'Barbeiro e cliente' },
];

const imgVariant = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
};

export default function Gallery() {
  return (
    <section id="galeria" className="bg-dark py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SlideIn direction="left">
            <p className="section-tag mb-4">Nosso trabalho</p>
            <h2 className="leading-none">
              <span className="block text-4xl sm:text-5xl font-heading font-bold text-white uppercase">
                O Corte
              </span>
              <span className="block text-5xl sm:text-6xl font-display italic text-gold leading-none">
                em Detalhe
              </span>
            </h2>
          </SlideIn>
          <SlideIn direction="right">
            <p className="text-gray-500 font-sans text-sm max-w-xs leading-relaxed">
              Cada imagem conta a história de um cliente que saiu daqui melhor do que chegou.
            </p>
          </SlideIn>
        </div>

        {/* Main grid */}
        <motion.div
          className="grid grid-cols-3 grid-rows-2 gap-3 h-[500px] sm:h-[600px]"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {images.map((img) => (
            <motion.div
              key={img.src}
              variants={imgVariant}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`${img.className} overflow-hidden group relative`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          className="grid grid-cols-3 gap-3 mt-3"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stripImages.map((img) => (
            <motion.div
              key={img.src}
              variants={imgVariant}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden group relative h-40 sm:h-52"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
