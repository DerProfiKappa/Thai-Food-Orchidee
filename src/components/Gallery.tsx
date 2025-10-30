import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Thailändische Frühlingsrollen" },
  { src: gallery2, alt: "Grünes Curry" },
  { src: gallery3, alt: "Pad Thai" },
  { src: gallery4, alt: "Tom Yum Suppe" },
  { src: gallery5, alt: "Mango Sticky Rice" },
  { src: gallery6, alt: "Frische Thai-Kräuter" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--thai-red))_1px,_transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-thai-gold via-thai-red to-thai-gold bg-clip-text text-transparent">
            Galerie
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Ein visueller Vorgeschmack auf unsere kulinarische Kunst
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              {/* Image with parallax effect */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="w-8 h-8 text-thai-red" />
                  </div>
                </div>
                
                {/* Image title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-xl">{image.alt}</h3>
                  <div className="w-16 h-1 bg-gradient-gold mt-2" />
                </div>
              </div>
              
              {/* Decorative corner gradient */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-gold opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-thai-gold transition-colors bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            aria-label="Schließen"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] animate-scale-in">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-glow"
            />
            
            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-2xl font-bold">{images[selectedImage].alt}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
