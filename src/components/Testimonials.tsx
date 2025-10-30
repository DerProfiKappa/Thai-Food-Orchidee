import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Das beste thailändische Restaurant in Berlin! Authentische Aromen und liebevolles Personal.",
    author: "Sarah M.",
  },
  {
    text: "Ihr grünes Curry ist unglaublich — schmeckt wie in Bangkok!",
    author: "Michael K.",
  },
  {
    text: "Gemütliche Atmosphäre, schneller Service und fantastisches Essen.",
    author: "Lisa T.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Was unsere Gäste sagen</h2>
          <p className="text-muted-foreground text-lg">
            Erfahren Sie von denen, die unsere thailändische Gastfreundschaft erlebt haben
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
