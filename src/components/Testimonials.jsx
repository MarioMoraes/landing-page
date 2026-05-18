import { FadeUp, Stagger, StaggerItem } from '../animations';

const testimonials = [
  {
    name: 'Carlos Eduardo',
    role: 'Cliente há 3 anos',
    text: 'Melhor barbearia da cidade, sem dúvida. Cheguei com foto de referência e saí exatamente como queria. O atendimento é impecável do início ao fim — desde o café até o acabamento final.',
    rating: 5,
  },
  {
    name: 'Marcos Antônio',
    role: 'Cliente há 2 anos',
    text: 'Ambiente top, barbeiros excelentes e um acabamento perfeito. Já tentei outras barbearias mas sempre volto pro Zé Navalha. Aqui é outro nível de cuidado e atenção ao detalhe.',
    rating: 5,
  },
  {
    name: 'Felipe Rodrigues',
    role: 'Cliente há 1 ano',
    text: 'O ritual da toalha quente mudou minha vida. Barba alinhada, pele hidratada e resultado duradouro. Vale cada centavo — é um investimento em autoestima, não um gasto.',
    rating: 5,
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-gold text-sm">★</span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-dark py-28 overflow-hidden">
      {/* Decorative large quote mark */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-white/[0.02] font-display font-bold select-none pointer-events-none"
        style={{ fontSize: '20rem', lineHeight: 1 }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <p className="section-tag mb-4">Quem já passou por aqui</p>
          <h2 className="leading-none">
            <span className="block text-4xl sm:text-5xl font-heading font-bold text-white uppercase">
              O QUE NOSSOS
            </span>
            <span className="block text-5xl sm:text-6xl font-display italic text-gold leading-none">
              Clientes Dizem
            </span>
          </h2>
        </FadeUp>

        {/* Testimonials grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              className="bg-dark-200 border border-white/5 p-8 hover:border-gold/20 transition-colors duration-300 flex flex-col"
            >
              <Stars count={t.rating} />

              <blockquote className="mt-5 mb-6 text-gray-400 font-sans text-sm leading-relaxed flex-1">
                "{t.text}"
              </blockquote>

              <div className="border-t border-white/5 pt-5 flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-heading font-bold text-xs">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-heading font-medium text-sm tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-gray-600 font-sans text-xs">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Overall rating */}
        <FadeUp delay={0.2} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-gold text-2xl">★</span>
            ))}
          </div>
          <div className="text-gray-400 font-sans text-sm">
            <span className="text-white font-semibold">4.9 de 5</span> com base em mais de{' '}
            <span className="text-white font-semibold">300 avaliações</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
