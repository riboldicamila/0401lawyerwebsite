import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const footer = document.querySelector("footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <footer
      className={`bg-black text-white py-24 font-serif transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="flex items-center mb-6">
              <img src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746776367/logo_clau-01_cbtqto.png" alt="Logo" className="h-12 w-auto" />
              <div className="ml-2">
                <h3 className="text-lg font-medium">
                  Dra. Claudia Simón & Asoc.
                </h3>
                <p className="text-sm text-[#f5f0e8]">Estudio Jurídico</p>
              </div>
            </div>
            <p className="text-[#f5f0e8] mb-6">
              Asesoramiento legal profesional y personalizado en diversas áreas
              del derecho.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#816146] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#a67e5b] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-[#816146] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#a67e5b] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-medium mb-6 text-[#a67e5b]">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {["INICIO", "NOSOTROS", "SERVICIOS", "CONTACTO"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#f5f0e8] hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-medium mb-6 text-[#a67e5b]">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                "Derecho de Familia",
                "Derecho Laboral",
                "Derecho Civil",
                "Jubilaciones y Pensiones",
                "Derecho Comercial",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#f5f0e8] hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-medium mb-6 text-[#a67e5b]">
              Horario de Atención
            </h3>
            <ul className="space-y-3 text-[#f5f0e8]">
              <li className="flex justify-between">
                <span>Lunes a Viernes con cita previa</span>
              </li>
              {/* <li className="mt-4 pt-4 border-t border-[#816146]">
                <p>Escribinos para coordinar tu turno</p>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#816146] mt-12 pt-8 text-center text-[#f5f0e8] text-sm">
          <p>
            © {new Date().getFullYear()} Dra. Claudia Simón & Asociados. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
