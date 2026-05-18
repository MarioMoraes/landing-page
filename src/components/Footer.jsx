import { FadeUp } from '../animations';

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const serviceLinks = [
  { label: 'Corte Clássico', href: '#servicos' },
  { label: 'Barba Completa', href: '#servicos' },
  { label: 'Corte + Barba', href: '#servicos' },
  { label: 'Hot Towel Shave', href: '#servicos' },
  { label: 'Pigmentação', href: '#servicos' },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <FadeUp className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="text-gold font-heading font-bold text-xl tracking-[0.15em] uppercase leading-none">
                Zé Navalha
              </p>
              <p className="text-white/20 font-sans text-[9px] tracking-[0.5em] uppercase mt-1">
                Barbearia Premium
              </p>
            </div>
            <p className="text-gray-600 font-sans text-sm leading-relaxed max-w-xs">
              Tradição, precisão e estilo. Onde cada corte é uma obra.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase font-sans text-gold mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white font-sans text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase font-sans text-gold mb-5">
              Serviços
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white font-sans text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase font-sans text-gold mb-5">
              Contato
            </p>
            <ul className="space-y-4">
              <li>
                <p className="text-[9px] tracking-widest uppercase text-gray-600 mb-0.5 font-sans">
                  Endereço
                </p>
                <p className="text-gray-400 font-sans text-sm">
                  Rua Assis Figueiredo, 3900
                </p>
              </li>
              <li>
                <p className="text-[9px] tracking-widest uppercase text-gray-600 mb-0.5 font-sans">
                  Horário
                </p>
                <p className="text-gray-400 font-sans text-sm">
                  Seg–Sex: 9h às 20h
                  <br />
                  Sáb: 9h às 18h
                </p>
              </li>
              <li>
                <p className="text-[9px] tracking-widest uppercase text-gray-600 mb-0.5 font-sans">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5535991344296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold font-sans text-sm transition-colors duration-200"
                >
                  (35) 99134-4296
                </a>
              </li>
            </ul>
          </div>
        </FadeUp>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 font-sans text-xs">
            © {new Date().getFullYear()} Zé Navalha — Todos os direitos reservados.
          </p>
          <a
            href="#"
            className="text-gray-700 hover:text-gold font-sans text-xs transition-colors duration-200"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
