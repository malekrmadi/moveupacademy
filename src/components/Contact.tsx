import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const whatsappNumber = "+21612345678";
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite réserver un cours d'essai gratuit à MoveUp Academy.");

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Rejoignez la <span className="text-gradient">communauté MoveUp</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Réservez votre essai gratuit maintenant et commencez votre transformation !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="font-display text-2xl mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Votre téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Votre message (discipline souhaitée, questions...)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" variant="hero" className="w-full" size="lg">
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-muted-foreground text-sm mb-4 text-center">Ou contactez-nous directement sur WhatsApp :</p>
              <Button 
                variant="heroOutline" 
                className="w-full"
                size="lg"
                asChild
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-6 p-6 rounded-xl bg-card/30 border border-border/30">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-xl mb-2">Adresse</h4>
                <p className="text-muted-foreground">
                  Avenue de la République<br />
                  Hammam-Lif, Tunisie
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl bg-card/30 border border-border/30">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-xl mb-2">Téléphone</h4>
                <p className="text-muted-foreground">
                  +216 12 345 678<br />
                  WhatsApp disponible
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl bg-card/30 border border-border/30">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-xl mb-2">Horaires</h4>
                <p className="text-muted-foreground">
                  Lundi - Vendredi : 07h00 - 21h30<br />
                  Samedi : 09h00 - 14h00
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-border/50 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.8447385789!2d10.3272!3d36.7331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4b5747d5b9c7%3A0x1234567890abcdef!2sAvenue%20de%20la%20R%C3%A9publique%2C%20Hammam-Lif%2C%20Tunisia!5e0!3m2!1sfr!2stn!4v1703097600000!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation MoveUp Academy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
