import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:thaifoodorchidee92atgmail.com?subject=Kontaktanfrage von ${formData.name}&body=Name: ${formData.name}%0D%0AE-Mail: ${formData.email}%0D%0ANachricht: ${formData.message}`;
    window.location.href = mailtoLink;
    toast.success("E-Mail-Client wird geöffnet...");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Besuchen Sie uns</h2>
          <p className="text-muted-foreground text-lg">
            Nehmen Sie Kontakt mit uns auf
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-muted-foreground">
                      Reichsstraße 92, 14052 Berlin
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a
                      href="tel:0303047697"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      030 3047697
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <a
                      href="mailto:thaifoodorchidee92atgmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      thaifoodorchidee92atgmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Öffnungszeiten</p>
                    <p className="text-muted-foreground">Täglich: 12:00 – 22:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-semibold mb-6">Kontaktieren Sie uns</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Ihr Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card"
              />
              <Input
                type="email"
                name="email"
                placeholder="Ihre E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card"
              />
              <Textarea
                name="message"
                placeholder="Ihre Nachricht"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="bg-card"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
              >
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>

        {/* Full Width Map */}
        <div className="rounded-xl overflow-hidden shadow-elegant max-w-full">
          <iframe
            src="https://www.google.com/maps?q=Reichsstra%C3%9Fe+92,+14052+Berlin&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Thai Food Orchidee Standort"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
