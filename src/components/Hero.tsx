import { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-thai-food.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import logo from "@/assets/logo.png";

const ThreeScene = lazy(() => import("@/components/3d/ThreeScene"));

const Hero = () => {
  const images = [heroImage, gallery1, gallery2, gallery3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Thai-Nippon-Sushi-Bar ${index + 1}`}
              className={`w-full h-full object-cover transition-transform ${
                index === currentImageIndex ? "scale-110" : "scale-100"
              }`}
              style={{ transitionDuration: "8000ms" }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Gehe zu Bild ${index + 1}`}
          />
        ))}
      </div>

      {/* 3D Lotus Scene */}
      <div className="absolute top-10 right-10 w-48 h-48 z-20 hidden lg:block">
        <Suspense fallback={<div className="w-full h-full" />}>
          <ThreeScene />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant">
          <img
            src={logo}
            alt="Thai-Nippon-Sushi-Bar Logo"
            className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl animate-pulse"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg bg-gradient-to-r from-white via-thai-gold-light to-white bg-clip-text text-transparent">
            Thai-Nippon-Sushi-Bar
          </h1>
          <p className="text-2xl md:text-4xl mb-4 font-light text-thai-gold-light">
            Authentische thailändische Küche im Herzen von Berlin
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Erleben Sie die Aromen Thailands — frisch, lebendig und unvergesslich
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/reservation")}
            className="bg-gradient-to-r from-thai-gold to-thai-gold-light hover:shadow-glow text-thai-dark px-8 py-6 text-lg rounded-full shadow-elegant transition-all duration-500 hover:scale-110 font-semibold"
          >
            Reservieren Sie jetzt
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
        <button
          onClick={() => scrollToSection("features")}
          className="text-white cursor-pointer transition-transform duration-300 hover:scale-110"
          aria-label="Scroll down"
        >
          <span className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-thai-gold/35 blur-xl animate-pulse" />
            <span className="absolute inset-0 rounded-full bg-thai-gold-light/25 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
            <ChevronDown className="relative z-10 h-8 w-8 animate-bounce" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
