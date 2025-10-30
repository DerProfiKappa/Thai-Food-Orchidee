import { useState } from "react";
import { CalendarDays, Clock, Mail, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name, email, phone, date, time, guests, notes } = formData;
    const formattedDate = date ? new Date(date).toLocaleDateString("de-DE") : "";

    const mailto = [
      "mailto:thaifoodorchidee92atgmail.com",
      `subject=Reservierungsanfrage von ${encodeURIComponent(name)}`,
      "body=" +
        encodeURIComponent(
          [
            `Name: ${name}`,
            `E-Mail: ${email}`,
            `Telefon: ${phone}`,
            `Datum: ${formattedDate}`,
            `Uhrzeit: ${time}`,
            `Personen: ${guests}`,
            "",
            "Anmerkungen:",
            notes || "-",
          ].join("\r\n")
        ),
    ].join("?");

    window.location.href = mailto;
    toast.success("E-Mail-Client wird geöffnet...");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      notes: "",
    });
  };

  return (
    <section className="bg-gradient-to-b from-background to-muted/40 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-thai-dark">
            Reservierung
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Ihren Tisch bei Thai Food Orchidee sichern
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Ob romantisches Dinner, Geschäftsessen oder Familienfeier – lassen Sie uns wissen,
            wann wir Sie verwöhnen dürfen. Wir bestätigen Ihre Reservierung schnellstmöglich.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_1fr] animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="space-y-6">
            <div
              className="rounded-3xl bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl font-semibold">Kontakt & Anfragen</h2>
              <p className="mt-3 text-muted-foreground">
                Für kurzfristige Reservierungen erreichen Sie uns am schnellsten telefonisch.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <a
                      href="tel:0303047697"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      030 3047697
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">E-Mail</p>
                    <a
                      href="mailto:thaifoodorchidee92atgmail.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      thaifoodorchidee92atgmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-semibold">Öffnungszeiten</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Täglich</p>
                    <p>12:00 – 22:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-semibold">Tipps für Ihre Reservierung</h2>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CalendarDays className="mt-1 h-5 w-5 text-primary" />
                  <span>Bitte geben Sie Datum und Uhrzeit so genau wie möglich an.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-primary" />
                  <span>Für Gruppen ab 8 Personen empfehlen wir eine telefonische Absprache.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <span>
                    Sie erhalten eine Bestätigung per E-Mail – kontrollieren Sie ggf. Ihren Spam-Ordner.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-3xl bg-card/90 p-8 shadow-elegant backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-slide-up"
            style={{ animationDelay: "0.25s" }}
          >
            <h2 className="text-2xl font-semibold">Anfrage senden</h2>
            <p className="mt-3 text-muted-foreground">
              Wir melden uns schnellstmöglich mit einer Bestätigung oder Rückfragen.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Input
                name="name"
                placeholder="Ihr Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-muted/40"
              />
              <Input
                type="email"
                name="email"
                placeholder="Ihre E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-muted/40"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Ihre Telefonnummer"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-muted/40"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bg-muted/40"
                />
                <Input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="bg-muted/40"
                />
              </div>
              <Input
                type="number"
                name="guests"
                min="1"
                max="20"
                placeholder="Anzahl der Personen"
                value={formData.guests}
                onChange={handleChange}
                required
                className="bg-muted/40"
              />
              <Textarea
                name="notes"
                rows={5}
                placeholder="Besondere Wünsche oder Anmerkungen"
                value={formData.notes}
                onChange={handleChange}
                className="bg-muted/40"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-thai-gold to-thai-gold-light text-thai-dark hover:shadow-glow"
              >
                Anfrage absenden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;
