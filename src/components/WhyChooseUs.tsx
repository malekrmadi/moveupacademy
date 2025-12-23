import { Shield, Users, Award, Heart, Clock, Dumbbell } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Ambiance Familiale",
    description: "Une communauté soudée où chacun se sent accueilli, respecté et soutenu dans sa progression."
  },
  {
    icon: Award,
    title: "Coaching Professionnel",
    description: "Des entraîneurs certifiés avec des années d'expérience en compétition et en enseignement."
  },
  {
    icon: Heart,
    title: "Tous Niveaux",
    description: "Que vous soyez débutant ou expert, nos programmes s'adaptent à votre niveau et vos objectifs."
  },
  {
    icon: Shield,
    title: "Sécurité Maximale",
    description: "Équipements modernes et protocoles de sécurité stricts pour un entraînement sans risque."
  },
  {
    icon: Clock,
    title: "Horaires Flexibles",
    description: "Des cours du matin au soir pour s'adapter à tous les emplois du temps."
  },
  {
    icon: Dumbbell,
    title: "Équipement Premium",
    description: "Salle entièrement équipée avec matériel professionnel de dernière génération."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Pourquoi nous choisir
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            L'excellence à <span className="text-gradient">votre portée</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
