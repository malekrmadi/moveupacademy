import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import carousel1 from "@/assets/gallery/carousel1.jpg";
import carousel2 from "@/assets/gallery/carousel2.jpg";
import carousel3 from "@/assets/gallery/carousel3.jpg";
import carousel4 from "@/assets/gallery/carousel4.jpg";
import carousel5 from "@/assets/gallery/carousel5.jpg";
import carousel6 from "@/assets/gallery/carousel6.jpg";
import carousel7 from "@/assets/gallery/carousel7.jpg";

const images = [
  { src: carousel1, alt: "Photo de la galerie 1" },
  { src: carousel2, alt: "Photo de la galerie 2" },
  { src: carousel3, alt: "Photo de la galerie 3" },
  { src: carousel4, alt: "Photo de la galerie 4" },
  { src: carousel5, alt: "Photo de la galerie 5" },
  { src: carousel6, alt: "Photo de la galerie 6" },
  { src: carousel7, alt: "Photo de la galerie 7" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galerie" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Galerie
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
            Découvrez <span className="text-gradient">nos installations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une salle moderne et équipée pour vous accompagner dans votre progression
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-foreground font-medium text-sm">{image.alt}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary/20 border-primary/50 hover:bg-primary/40 text-foreground" />
            <CarouselNext className="bg-primary/20 border-primary/50 hover:bg-primary/40 text-foreground" />
          </Carousel>
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Photo de la salle"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
