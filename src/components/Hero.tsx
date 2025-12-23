import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gallery/carousel2.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Hammam-Lif, Tunisie
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            Bienvenue à{" "}
            <span className="text-gradient">MoveUp Academy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Votre salle de combat à Hammam-Lif
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            Boxe, MMA, Karaté, Kickboxing, Judo & Fitness – entraînement pour tous niveaux. 
            Dépassez vos limites avec nos coachs professionnels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Réservez un cours d'essai gratuit</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#disciplines">Découvrir nos disciplines</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
