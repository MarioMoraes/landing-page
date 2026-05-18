import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="text-gold font-heading font-bold text-xl tracking-[0.15em] uppercase group-hover:text-gold-light transition-colors duration-300">
            Zé Navalha
          </span>
          <span className="text-white/30 font-sans text-[9px] tracking-[0.5em] uppercase mt-0.5">
            Barbearia Premium
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-gray-400 hover:text-white text-[11px] tracking-[0.25em] uppercase font-sans transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#agendamento"
            className="hidden lg:inline-flex items-center border border-gold text-gold px-6 py-2.5 text-[11px] tracking-[0.25em] uppercase font-heading font-medium hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Agendar
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Abrir menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-dark-100 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-gold text-sm tracking-[0.25em] uppercase font-sans transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#agendamento"
            className="mt-2 border border-gold text-gold px-6 py-3 text-sm tracking-widest uppercase font-heading text-center hover:bg-gold hover:text-dark transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}
