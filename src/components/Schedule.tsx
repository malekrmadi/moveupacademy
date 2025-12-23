import { Button } from "@/components/ui/button";

const schedule = [
  { time: "07:00 - 08:30", monday: "Fitness", tuesday: "Boxe", wednesday: "Fitness", thursday: "Kickboxing", friday: "Cardio", saturday: "-" },
  { time: "09:00 - 10:30", monday: "Karaté Enfants", tuesday: "Judo Enfants", wednesday: "Karaté Enfants", thursday: "Judo Enfants", friday: "-", saturday: "Tous Niveaux" },
  { time: "17:00 - 18:30", monday: "Boxe Débutants", tuesday: "MMA", wednesday: "Kickboxing", thursday: "Boxe", friday: "MMA", saturday: "Sparring" },
  { time: "18:30 - 20:00", monday: "Karaté Adultes", tuesday: "Judo Adultes", wednesday: "Karaté Adultes", thursday: "Judo Adultes", friday: "Mixte", saturday: "-" },
  { time: "20:00 - 21:30", monday: "MMA Avancé", tuesday: "Boxe Avancé", wednesday: "MMA Avancé", thursday: "Kickboxing", friday: "Libre", saturday: "-" },
];

const pricing = [
  {
    name: "Essai Gratuit",
    price: "0",
    period: "1 séance",
    features: ["1 cours d'essai", "Évaluation personnalisée", "Visite des installations", "Sans engagement"],
    highlight: false,
    cta: "Réserver maintenant"
  },
  {
    name: "Mensuel",
    price: "80",
    period: "/ mois",
    features: ["Accès illimité aux cours", "Toutes les disciplines", "Vestiaires équipés", "Coaching personnalisé"],
    highlight: true,
    cta: "S'inscrire"
  },
  {
    name: "Trimestriel",
    price: "200",
    period: "/ 3 mois",
    features: ["Économisez 40 DT", "Accès illimité aux cours", "Toutes les disciplines", "Programme sur mesure"],
    highlight: false,
    cta: "S'inscrire"
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Schedule */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Planning
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Nos <span className="text-gradient">horaires</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-display text-lg">Horaire</th>
                  <th className="p-4 text-center font-display text-lg">Lundi</th>
                  <th className="p-4 text-center font-display text-lg">Mardi</th>
                  <th className="p-4 text-center font-display text-lg">Mercredi</th>
                  <th className="p-4 text-center font-display text-lg">Jeudi</th>
                  <th className="p-4 text-center font-display text-lg">Vendredi</th>
                  <th className="p-4 text-center font-display text-lg">Samedi</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="p-4 font-medium text-primary">{row.time}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.monday}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.tuesday}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.wednesday}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.thursday}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.friday}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.saturday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Tarifs
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Choisissez votre <span className="text-gradient">formule</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.highlight 
                    ? "bg-gradient-card border-primary shadow-glow" 
                    : "bg-card border-border/50 hover:border-primary/50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-fire text-primary-foreground text-sm font-bold rounded-full">
                    Populaire
                  </div>
                )}
                
                <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="font-display text-5xl text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">DT {plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.highlight ? "hero" : "heroOutline"} 
                  className="w-full"
                  asChild
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
