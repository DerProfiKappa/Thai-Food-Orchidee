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
    const mailtoLink = `mailto:painzain40@gmail.com?subject=Kontaktanfrage von ${formData.name}&body=Name: ${formData.name}%0D%0AE-Mail: ${formData.email}%0D%0ANachricht: ${formData.message}`;
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
                      Buckower Chaussee 100-102, 12277 Berlin
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a
                      href="tel:015563136888"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      015563 136888
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <a
                      href="mailto:ThaiNipponSushiBar@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ThaiNipponSushiBar@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Öffnungszeiten</p>
                    <p className="text-muted-foreground">Mo–Fr: 11:30 – 22:30</p>
                    <p className="text-muted-foreground">Sa–So: 12:00 – 23:00</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.8!2d13.3523!3d52.4254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e1234567%3A0x1234567890!2sBuckower%20Chaussee%20100-102%2C%2012277%20Berlin!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Thai-Nippon-Sushi-Bar Standort"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
