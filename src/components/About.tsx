import { Flame, Users, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    { icon: Flame, title: "Engagement", description: "Nous nous investissons pleinement dans votre progression" },
    { icon: Shield, title: "Discipline", description: "La rigueur est au cœur de notre enseignement" },
    { icon: Users, title: "Communauté", description: "Une famille de passionnés qui s'entraide" },
    { icon: TrendingUp, title: "Progrès", description: "Chaque séance vous rapproche de vos objectifs" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              À propos de nous
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Plus qu'une salle,{" "}
              <span className="text-gradient">une famille</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              MoveUp Academy est née de la passion pour les arts martiaux et le sport de combat. 
              Située au cœur de Hammam-Lif sur l'Avenue de la République, notre salle accueille 
              tous ceux qui souhaitent se dépasser, apprendre et progresser dans une ambiance 
              conviviale et professionnelle.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Notre mission : <strong className="text-foreground">permettre à chacun de se dépasser, 
              gagner en confiance, force et technique</strong>. Que vous soyez débutant ou confirmé, 
              enfant ou adulte, vous trouverez chez nous un programme adapté à vos objectifs.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="group p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <value.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6">
                  <span className="font-display text-5xl md:text-6xl text-gradient">500+</span>
                  <p className="text-muted-foreground mt-2">Membres actifs</p>
                </div>
                <div className="text-center p-6">
                  <span className="font-display text-5xl md:text-6xl text-gradient">10+</span>
                  <p className="text-muted-foreground mt-2">Coachs certifiés</p>
                </div>
                <div className="text-center p-6">
                  <span className="font-display text-5xl md:text-6xl text-gradient">6</span>
                  <p className="text-muted-foreground mt-2">Disciplines</p>
                </div>
                <div className="text-center p-6">
                  <span className="font-display text-5xl md:text-6xl text-gradient">5★</span>
                  <p className="text-muted-foreground mt-2">Satisfaction client</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
