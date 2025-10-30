const features = [
  {
    icon: "flame",
    title: "Authentische Rezepte",
    description: "Traditionelle Aromen direkt aus Bangkok",
  },
  {
    icon: "utensils",
    title: "Frische Zutaten",
    description: "Lokal bezogen und biologisch, wo möglich",
  },
  {
    icon: "leaf",
    title: "Perfekte Atmosphäre",
    description: "Gemütlich, elegant und einladend",
  },
];

const iconMap: Record<string, string> = {
  flame: "🔥",
  utensils: "🥢",
  leaf: "🍃",
};

const Features = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-background to-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-thai-dark">
            Unser Versprechen
          </div>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Warum Thai Food Orchidee?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Erleben Sie authentische thailändische Küche mit modernen Akzenten
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-thai-gold/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-thai-gold to-thai-gold-light text-thai-dark shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:shadow-elegant">
                <span className="text-5xl">{iconMap[feature.icon] ?? "✨"}</span>
                <div className="absolute inset-[12%] rounded-2xl border border-white/40 transition-all duration-500 group-hover:border-white/60" />
              </div>

              <h3 className="relative text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-thai-gold">
                {feature.title}
              </h3>
              <p className="relative mt-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transform bg-gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
