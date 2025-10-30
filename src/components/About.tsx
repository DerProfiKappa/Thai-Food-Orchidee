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
                alt="Thai-Nippon-Sushi-Bar Restaurant Interieur"
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
                Thai-Nippon-Sushi-Bar entstand aus dem Traum einer thailändischen Familie, 
                die authentischen Aromen Bangkoks mit der pulsierenden Stadt Berlin zu teilen. 
                Nach Jahren der Perfektionierung traditioneller Rezepte, die über Generationen 
                weitergegeben wurden, haben wir unsere Türen geöffnet, um Ihnen das authentischste 
                thailändische Esserlebnis außerhalb Thailands zu bieten.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jedes Gericht, das wir servieren, wird mit Leidenschaft zubereitet, unter 
                Verwendung frischester Zutaten und traditionsreicher Kochtechniken. Von unseren 
                duftenden Currys bis zu unserem perfekt ausbalancierten Pad Thai erzählt jeder 
                Teller eine Geschichte des thailändischen kulinarischen Erbes.
              </p>
              
              <div className="relative pl-6 py-6 border-l-4 border-thai-gold bg-gradient-to-r from-thai-gold/10 to-transparent rounded-r-xl">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-thai-gold rounded-full" />
                <blockquote className="italic text-xl text-foreground font-medium">
                  "Thailändisches Essen zu kochen ist nicht nur unser Job — es ist unsere Art, 
                  Glück zu teilen."
                </blockquote>
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">
                  — Chef Somchai, Gründer
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
