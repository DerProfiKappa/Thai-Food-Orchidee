import { Suspense, lazy } from "react";

const Feature3DIcon = lazy(() => import("@/components/3d/Feature3DIcon"));

const features = [
  {
    icon3d: 'chili' as const,
    title: "Authentische Rezepte",
    description: "Traditionelle Aromen direkt aus Bangkok",
  },
  {
    icon3d: 'wok' as const,
    title: "Frische Zutaten",
    description: "Lokal bezogen und biologisch, wo möglich",
  },
  {
    icon3d: 'leaf' as const,
    title: "Perfekte Atmosphäre",
    description: "Gemütlich, elegant und einladend",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-thai-red via-thai-gold to-thai-green bg-clip-text text-transparent">
            Warum Thai-Nippon-Sushi-Bar?
          </h2>
          <p className="text-muted-foreground text-lg">Erleben Sie authentische thailändische Küche</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-border/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glasmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-thai-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* 3D Icon */}
              <div className="relative w-32 h-32 mx-auto mb-6 transition-transform duration-500 group-hover:scale-110">
                <Suspense fallback={
                  <div className="w-full h-full rounded-full bg-primary/10 animate-pulse" />
                }>
                  <Feature3DIcon type={feature.icon3d} />
                </Suspense>
              </div>
              
              <h3 className="relative text-2xl font-bold mb-3 text-foreground group-hover:text-thai-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
