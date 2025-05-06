import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-serif italic">
              <span className="text-[#b89f7e]">S</span>
            </div>
            <div className="ml-2 hidden md:block">
              <h1 className="text-lg font-medium">
                Dra. Claudia Simón & Asoc.
              </h1>
              <p className="text-xs text-gray-600">Estudio Jurídico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["INICIO", "NOSOTROS", "SERVICIOS", "CONTACTO"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all hover:text-[#a67e5b] ${
                  activeSection === item.toLowerCase()
                    ? "text-[#a67e5b] border-b-2 border-[#a67e5b]"
                    : "text-gray-700"
                }`}
              >
                {item}
              </button>
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
                {["INICIO", "NOSOTROS", "SERVICIOS", "CONTACTO"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-medium p-2 transition-all hover:bg-[#f5f0e8] ${
                      activeSection === item.toLowerCase()
                        ? "text-[#a67e5b] bg-[#f5f0e8]"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
