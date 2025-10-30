import { Facebook, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img src={logo} alt="Thai-Nippon-Sushi-Bar Logo" className="w-16 h-16" />
          
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://maps.google.com/?q=Buckower+Chaussee+100-102,+12277+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Google Maps"
            >
              <MapPin className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center">
            <p className="mb-2">© 2025 Thai-Nippon-Sushi-Bar Berlin — Alle Rechte vorbehalten</p>
            <p className="text-sm opacity-75">
              Website erstellt von{" "}
              <span className="text-primary">Hemakesh Ande</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
