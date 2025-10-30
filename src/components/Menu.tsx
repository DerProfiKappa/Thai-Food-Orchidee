const menuData = {
  Vorspeisen: [
    { name: "Thailändische Frühlingsrollen", description: "Frisches Gemüse in Reispapier gewickelt, serviert mit süßer Chilisauce", price: "€7.50" },
    { name: "Satay Hähnchen", description: "Gegrillte Hähnchenspieße mit Erdnusssauce", price: "€8.90" },
    { name: "Papaya Salat (Som Tam)", description: "Grüne Papaya mit Chili, Limette und Erdnüssen", price: "€7.90" },
  ],
  "Suppen & Currys": [
    { name: "Tom Yum Goong", description: "Pikante und saure Suppe mit Garnelen, Zitronengras und Galgant", price: "€9.90" },
    { name: "Grünes Curry", description: "Kokosnuss-Curry mit Hähnchen, Auberginen und Thai-Basilikum", price: "€13.90" },
    { name: "Massaman Curry", description: "Reichhaltiges Curry mit Rindfleisch, Kartoffeln und gerösteten Erdnüssen", price: "€14.90" },
    { name: "Rotes Curry", description: "Würziges rotes Curry mit Ente und Ananas", price: "€15.90" },
  ],
  "Hauptgerichte": [
    { name: "Pad Thai", description: "Gebratene Reisnudeln mit Garnelen, Tofu, Ei und Erdnüssen", price: "€12.90" },
    { name: "Pad Kra Pao", description: "Thai-Basilikum-Pfanne mit Hähnchen und Chili", price: "€13.50" },
    { name: "Drunken Noodles", description: "Breite Reisnudeln mit Rindfleisch, Gemüse und Thai-Basilikum", price: "€13.90" },
    { name: "Thailändischer Gebratener Reis", description: "Jasminreis mit Gemüse, Ei und Ihrer Wahl an Protein", price: "€11.90" },
  ],
  Desserts: [
    { name: "Mango Sticky Rice", description: "Süßer Klebreis mit frischer Mango und Kokosnusssauce", price: "€6.90" },
    { name: "Frittierte Banane", description: "Bananenkrapfen mit Honig und Sesamsamen", price: "€5.50" },
    { name: "Thailändisches Kokosnusseis", description: "Hausgemachtes Kokosnusseis mit gerösteten Erdnüssen", price: "€5.90" },
  ],
  Getränke: [
    { name: "Thailändischer Eistee", description: "Süßer schwarzer Tee mit Kondensmilch und Eis", price: "€4.50" },
    { name: "Frisches Kokoswasser", description: "Erfrischendes junges Kokoswasser", price: "€4.90" },
    { name: "Zitronengras-Ingwer-Tee", description: "Heißer Kräutertee mit frischem Zitronengras und Ingwer", price: "€3.90" },
  ],
};

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--thai-gold))_1px,_transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-thai-red via-thai-gold to-thai-red bg-clip-text text-transparent">
            Unsere Speisekarte
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Entdecken Sie authentische thailändische Aromen, zubereitet mit Liebe
          </p>
        </div>

        <div className="grid gap-16 max-w-6xl mx-auto">
          {Object.entries(menuData).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="relative mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-thai-gold to-thai-gold-light bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="w-32 h-1 mx-auto bg-gradient-gold rounded-full" />
              </div>
              
              <div className="grid gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-border/50 overflow-hidden"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-thai-gold/0 via-thai-gold/5 to-thai-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-thai-gold transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
