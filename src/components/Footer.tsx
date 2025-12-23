import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-display text-xl">🦁</span>
              </div>
              <span className="font-display text-3xl">
                <span className="text-gradient">MoveUp</span>
                <span className="text-foreground"> Academy</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              Votre salle de sport de combat à Hammam-Lif. 
              Boxe, MMA, Karaté, Kickboxing, Judo & Fitness.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#disciplines" className="text-muted-foreground hover:text-primary transition-colors">Nos disciplines</a></li>
              <li><a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">Horaires & Tarifs</a></li>
              <li><a href="#coaches" className="text-muted-foreground hover:text-primary transition-colors">Nos coachs</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="font-display text-xl mb-4">Disciplines</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">Boxe Anglaise</span></li>
              <li><span className="text-muted-foreground">MMA</span></li>
              <li><span className="text-muted-foreground">Karaté</span></li>
              <li><span className="text-muted-foreground">Kickboxing</span></li>
              <li><span className="text-muted-foreground">Judo</span></li>
              <li><span className="text-muted-foreground">Fitness</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Avenue de la République<br />
                  Hammam-Lif, Tunisie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+216 12 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">contact@moveup-academy.tn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MoveUp Academy. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm">
            Lun-Ven: 07h-21h30 | Sam: 09h-14h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
