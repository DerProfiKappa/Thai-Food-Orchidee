import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Startseite", to: "/" },
  { label: "Speisekarte", to: "/menu" },
  { label: "Reservierung", to: "/reservation" },
  { label: "Über uns", to: "/about" },
  { label: "Galerie", to: "/gallery" },
  { label: "Kontakt", to: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setDisableTransition(true);
    } else {
      setDisableTransition(false);
    }
  }, [isHome]);

  const solidBackground = isScrolled || !isHome;

  const navClasses = [
    "fixed top-0 left-0 right-0 z-50",
    disableTransition ? "" : "transition-colors duration-300",
    solidBackground
      ? "bg-background/95 backdrop-blur-md shadow-elegant"
      : "bg-transparent",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/");
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Thai-Nippon-Sushi-Bar" className="w-10 h-10" />
            <span className={`text-xl font-bold ${solidBackground ? "text-foreground" : "text-white"}`}>
              Thai-Nippon-Sushi-Bar
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => {
                  const baseColor = solidBackground ? "text-foreground hover:text-primary" : "text-white hover:text-secondary";
                  const activeColor = solidBackground ? "text-primary" : "text-secondary";
                  return `font-medium transition-colors ${isActive ? activeColor : baseColor}`;
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${solidBackground ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-3 transition-colors ${
                      isActive ? "bg-muted text-primary" : "hover:bg-muted"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
