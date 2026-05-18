import { FadeUp, Stagger, StaggerItem } from '../animations';

const team = [
  {
    name: 'José Moura',
    role: 'Fundador & Master Barber',
    specialty: 'Cortes clássicos, Degradê e Navalhado',
    experience: '12 anos',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  },
  {
    name: 'Rafael Silva',
    role: 'Senior Barber',
    specialty: 'Barba e Hot Towel Shave',
    experience: '7 anos',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85',
  },
  {
    name: 'Lucas Mendes',
    role: 'Barber',
    specialty: 'Cortes modernos e Pigmentação',
    experience: '4 anos',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=85',
  },
];

export default function Team() {
  return (
    <section id="equipe" className="bg-dark-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <p className="section-tag mb-4">Quem faz acontecer</p>
          <h2 className="leading-none">
            <span className="block text-4xl sm:text-5xl font-heading font-bold text-white uppercase">
              CONHEÇA NOSSOS
            </span>
            <span className="block text-5xl sm:text-6xl font-display italic text-gold leading-none">
              Mestres Barbeiros
            </span>
          </h2>
        </FadeUp>

        {/* Team grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <StaggerItem key={member.name} className="group">
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

                {/* Experience badge */}
                <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm border border-white/5 px-3 py-1.5">
                  <span className="text-gold font-heading font-semibold text-xs tracking-widest uppercase">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-heading font-bold text-xl tracking-wide text-white uppercase">
                    {member.name}
                  </h3>
                  <span className="text-gold font-sans text-xs mt-1">{i === 0 ? '★' : ''}</span>
                </div>
                <p className="font-display italic text-gold text-base mb-2">{member.role}</p>
                <p className="text-gray-500 font-sans text-sm">{member.specialty}</p>
              </div>

              {/* Hover underline */}
              <div className="mt-4 h-px bg-white/5 group-hover:bg-gold/40 transition-colors duration-300" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
