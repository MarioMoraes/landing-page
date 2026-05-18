import { motion } from 'framer-motion';
import { FadeUp, SlideIn } from '../animations';

const INSTAGRAM_HANDLE = '@offices_aplicativos';
const INSTAGRAM_URL = 'https://instagram.com/offices_aplicativos';

const posts = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80',
    alt: 'Corte degradê',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80',
    alt: 'Barbeiro trabalhando',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80',
    alt: 'Acabamento de barba',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80',
    alt: 'Barbearia',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80',
    alt: 'Fade haircut',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&q=80',
    alt: 'Ferramentas',
  },
];

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Instagram() {
  return (
    <section id="instagram" className="bg-dark-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
          <SlideIn direction="left">
            <p className="section-tag mb-4">Nos siga</p>
            <h2 className="leading-none">
              <span className="block text-4xl sm:text-5xl font-heading font-bold text-white uppercase">
                NO
              </span>
              <span className="block text-5xl sm:text-6xl font-display italic text-gold leading-none">
                Instagram
              </span>
            </h2>
          </SlideIn>
          <SlideIn direction="right">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-200 group"
            >
              <InstagramIcon />
              <span className="font-sans text-sm tracking-wide group-hover:underline underline-offset-4">
                {INSTAGRAM_HANDLE}
              </span>
            </a>
          </SlideIn>
        </div>

        {/* Photo grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {posts.map((post, i) => (
            <motion.a
              key={i}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group block"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <InstagramIcon />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
