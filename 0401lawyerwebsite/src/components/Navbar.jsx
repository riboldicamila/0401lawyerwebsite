import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["inicio", "nosotros", "servicios", "contacto"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80"
      }`}
    >
      <div className="bg-black text-white text-xs w-full flex items-center py-2">
        <div className="container mx-auto px-4 flex items-center font-serif">
          <MapPin size={12} className="mr-1" />
          <span>Rawson 11, Campana, Argentina - (03489) 422409 </span>
        </div>
      </div>

      <div className={`w-full ${scrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center font-serif">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746539200/black-logo_y25bjf.png"
              alt="Logo"
              className="h-12 md:h-10"
            />
            <div className="ml-2 hidden md:block">
              <h1 className="text-lg font-medium">
                Dra. Claudia Simón & Asoc.
              </h1>
              <p className="text-xs text-gray-600">Estudio Jurídico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "INICIO", href: "#inicio" },
              { name: "SERVICIOS", href: "#servicios" },
              { name: "NOSOTROS", href: "#nosotros" },
              { name: "CONTACTO", href: "#contacto" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all hover:text-[#5c4532] ${
                  activeSection === item.href.slice(1)
                    ? "text-[#5c4532] border-b-2 border-[#5c4532]"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                {[
                  { name: "INICIO", href: "#inicio" },
                  { name: "SERVICIOS", href: "#servicios" },
                  { name: "NOSOTROS", href: "#nosotros" },
                  { name: "CONTACTO", href: "#contacto" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium p-2 transition-all hover:bg-[#f5f0e8] ${
                      activeSection === item.href.slice(1)
                        ? "text-[#5c4532] bg-[#f5f0e8]"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
