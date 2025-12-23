import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Je suis débutant, puis-je m'inscrire ?",
    answer: "Absolument ! Nos cours sont adaptés à tous les niveaux, du débutant complet à l'athlète confirmé. Nos coachs vous guideront pas à pas dans votre apprentissage."
  },
  {
    question: "Que dois-je apporter pour mon premier cours ?",
    answer: "Pour votre premier cours, apportez simplement une tenue de sport confortable, une serviette et une bouteille d'eau. L'équipement spécifique (gants, protections) est fourni pour les débutants."
  },
  {
    question: "Comment fonctionne le cours d'essai gratuit ?",
    answer: "Réservez votre séance via notre formulaire de contact. Vous pourrez participer à un cours complet de la discipline de votre choix, sans aucun engagement. C'est l'occasion parfaite de découvrir notre ambiance !"
  },
  {
    question: "Y a-t-il des cours pour les enfants ?",
    answer: "Oui ! Nous proposons des cours de karaté et de judo spécialement conçus pour les enfants à partir de 6 ans. Ces cours développent la discipline, la confiance et la coordination."
  },
  {
    question: "Puis-je pratiquer plusieurs disciplines ?",
    answer: "Bien sûr ! Nos abonnements vous donnent accès à toutes les disciplines. Beaucoup de nos membres combinent boxe et MMA, ou karaté et fitness par exemple."
  },
  {
    question: "Quels sont les horaires d'ouverture ?",
    answer: "La salle est ouverte du lundi au vendredi de 7h à 21h30, et le samedi de 9h à 14h. Consultez notre planning pour connaître les horaires des cours spécifiques."
  },
  {
    question: "Y a-t-il des vestiaires et des douches ?",
    answer: "Oui, nous disposons de vestiaires hommes et femmes entièrement équipés avec douches, casiers sécurisés et tout le nécessaire pour vous changer confortablement."
  },
  {
    question: "Comment puis-je résilier mon abonnement ?",
    answer: "Vous pouvez résilier votre abonnement à tout moment avec un préavis d'un mois. Aucuns frais cachés, aucune pénalité. Contactez-nous simplement par téléphone ou sur place."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline font-display text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
