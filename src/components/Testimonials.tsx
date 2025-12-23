import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mohamed K.",
    role: "Membre depuis 2 ans",
    content: "MoveUp Academy a changé ma vie. J'ai perdu 15 kg et gagné une confiance en moi que je n'avais jamais eue. L'ambiance est incroyable !",
    rating: 5,
    discipline: "MMA"
  },
  {
    name: "Sarah B.",
    role: "Membre depuis 1 an",
    content: "Les coachs sont exceptionnels. Ils prennent vraiment le temps d'adapter les exercices à mon niveau. Je recommande à 100% !",
    rating: 5,
    discipline: "Kickboxing"
  },
  {
    name: "Youssef M.",
    role: "Membre depuis 3 ans",
    content: "Après avoir essayé plusieurs salles, j'ai trouvé ma maison ici. La qualité de l'enseignement et l'esprit de famille sont uniques.",
    rating: 5,
    discipline: "Boxe"
  },
  {
    name: "Amira T.",
    role: "Parent d'élève",
    content: "Mon fils suit les cours de karaté depuis 6 mois. Sa discipline et sa concentration à l'école se sont nettement améliorées.",
    rating: 5,
    discipline: "Karaté Enfants"
  },
  {
    name: "Riadh S.",
    role: "Membre depuis 4 ans",
    content: "J'ai commencé sans aucune expérience en arts martiaux. Aujourd'hui, je participe à des compétitions. Merci à toute l'équipe !",
    rating: 5,
    discipline: "Judo"
  },
  {
    name: "Nadia H.",
    role: "Membre depuis 6 mois",
    content: "Super ambiance, super équipe. Les cours de fitness sont vraiment efficaces et les coachs très motivants !",
    rating: 5,
    discipline: "Fitness"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Témoignages
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez les retours de nos membres et comment MoveUp Academy 
            a transformé leur vie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                  {testimonial.discipline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
