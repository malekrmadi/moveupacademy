const coaches = [
  {
    name: "Karim Ben Ali",
    role: "Head Coach MMA & Boxe",
    experience: "15 ans d'expérience",
    bio: "Champion national de boxe, formé aux meilleures techniques MMA. Karim inspire par son dévouement et sa passion pour le sport de combat.",
    certifications: ["Brevet d'État Boxe", "Certification MMA France"],
    avatar: "🥊"
  },
  {
    name: "Sami Trabelsi",
    role: "Coach Karaté",
    experience: "20 ans d'expérience",
    bio: "Ceinture noire 5ème Dan, Sami enseigne le karaté avec une approche traditionnelle tout en intégrant les méthodes modernes.",
    certifications: ["5ème Dan Karaté", "Diplôme Fédéral"],
    avatar: "🥋"
  },
  {
    name: "Ahmed Mansour",
    role: "Coach Judo & Kickboxing",
    experience: "12 ans d'expérience",
    bio: "Ancien compétiteur international, Ahmed combine technique impeccable et pédagogie adaptée à chaque élève.",
    certifications: ["4ème Dan Judo", "Instructeur Kickboxing"],
    avatar: "🏅"
  },
  {
    name: "Leila Ferchichi",
    role: "Coach Fitness & Préparation",
    experience: "8 ans d'expérience",
    bio: "Spécialiste en préparation physique pour sports de combat, Leila aide chaque athlète à atteindre son potentiel maximum.",
    certifications: ["BPJEPS", "Personal Trainer Certified"],
    avatar: "💪"
  },
];

const Coaches = () => {
  return (
    <section id="coaches" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Notre équipe
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Des coachs <span className="text-gradient">passionnés</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre équipe de professionnels certifiés vous accompagne dans votre progression 
            avec expertise et bienveillance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, index) => (
            <div 
              key={coach.name}
              className="group relative rounded-2xl bg-gradient-card border border-border/50 p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                {coach.avatar}
              </div>
              
              <h3 className="font-display text-xl mb-1">{coach.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{coach.role}</p>
              <p className="text-muted-foreground text-xs mb-4">{coach.experience}</p>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {coach.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {coach.certifications.map((cert) => (
                  <span 
                    key={cert}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
