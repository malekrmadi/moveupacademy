import boxingImage from "@/assets/boxing-training.jpg";
import mmaImage from "@/assets/mma-training.jpg";
import karateImage from "@/assets/karate-training.jpg";
import kickboxingImage from "@/assets/kickboxing-training.jpg";
import judoImage from "@/assets/judo-training.jpg";

const disciplines = [
  {
    name: "Boxe Anglaise",
    image: boxingImage,
    benefits: ["Technique de frappe", "Cardio intense", "Self-défense"],
    level: "Tous niveaux",
    description: "L'art noble du combat debout. Développez votre jeu de jambes, votre timing et votre puissance de frappe."
  },
  {
    name: "MMA",
    image: mmaImage,
    benefits: ["Combat complet", "Polyvalence", "Condition physique"],
    level: "Intermédiaire à avancé",
    description: "L'art martial le plus complet. Combinez frappe, lutte et combat au sol dans un sport passionnant."
  },
  {
    name: "Karaté",
    image: karateImage,
    benefits: ["Discipline mentale", "Concentration", "Respect"],
    level: "Tous niveaux",
    description: "Un art martial traditionnel qui forge le corps et l'esprit. Parfait pour développer la maîtrise de soi."
  },
  {
    name: "Kickboxing",
    image: kickboxingImage,
    benefits: ["Puissance", "Endurance", "Agilité"],
    level: "Tous niveaux",
    description: "Combinaison explosive de boxe et de techniques de pied. Idéal pour brûler des calories et se défouler."
  },
  {
    name: "Judo",
    image: judoImage,
    benefits: ["Équilibre", "Projections", "Self-control"],
    level: "Tous niveaux",
    description: "L'art de la souplesse. Apprenez à utiliser la force de votre adversaire contre lui."
  },
];

const Disciplines = () => {
  return (
    <section id="disciplines" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Nos disciplines
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Trouvez votre <span className="text-gradient">style de combat</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la boxe traditionnelle au MMA moderne, découvrez nos programmes 
            adaptés à tous les niveaux et tous les objectifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((discipline, index) => (
            <div 
              key={discipline.name}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={discipline.image} 
                  alt={discipline.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {discipline.level}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl mb-3">{discipline.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{discipline.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {discipline.benefits.map((benefit) => (
                    <span 
                      key={benefit}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}

          {/* Additional Card - Fitness & Prep */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 flex flex-col justify-center p-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-display text-2xl mb-3">Fitness & Préparation Physique</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complétez votre entraînement avec nos cours de conditionnement physique, 
                renforcement musculaire et préparation athlétique.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Cardio</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Force</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Souplesse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
