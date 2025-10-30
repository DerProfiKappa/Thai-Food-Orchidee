import interiorImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-thai-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-thai-red/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-up group">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={interiorImage}
                alt="Thai Food Orchidee Restaurant Interieur"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glasmorphism overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-thai-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-gold rounded-full text-thai-dark text-sm font-semibold">
              Seit 2015 in Berlin
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-thai-red via-thai-gold to-thai-green bg-clip-text text-transparent">
              Unsere Geschichte
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thai Food Orchidee ist ein Familienbetrieb im Berliner Westend. Mitten an der Reichsstraße
                servieren wir seit vielen Jahren die Lieblingsrezepte unserer Familie – würzig, frisch und
                unverfälscht wie in den Straßenküchen Bangkoks.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir arbeiten mit regionalen Zutaten, importieren unsere Gewürzmischungen direkt aus Thailand und
                kombinieren traditionelle Kochtechniken mit modernen Ideen. Ob klassisches Pad Thai oder feines
                Curry – jedes Gericht wird mit viel Liebe und Erfahrung zubereitet.
              </p>
              
              <div className="relative pl-6 py-6 border-l-4 border-thai-gold bg-gradient-to-r from-thai-gold/10 to-transparent rounded-r-xl">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-thai-gold rounded-full" />
                <blockquote className="italic text-xl text-foreground font-medium">
                  "Gute Küche entsteht dann, wenn man Menschen mit einem Lächeln nach Hause schickt."
                </blockquote>
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">
                  – Familie Nguyen, Inhaber von Thai Food Orchidee
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
