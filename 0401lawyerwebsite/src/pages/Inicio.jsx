import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Instagram,
  Facebook,
} from "lucide-react";
import Carrousel from "../components/Carrousel";
import ScrollBackground from "../components/ScrollBackground";
import Nosotros from "../components/Nosotros";
import Areas from "../components/Areas";
import Contacto from "../components/Contacto";

export default function Inicio() {
  return (
    <div className="font-sans text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 relative bg-[#f8f6f2]">
        <div className="container mx-auto px-8 sm:px-12 md:px-18 lg:px-24 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 lg:pr-16 z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-[#4a4a4a]">
                Asesoramiento legal{" "}
                <span className="text-[#5c4532] block mt-1">
                  profesional y personalizado
                </span>
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
                Nuestro estudio jurídico cuenta con más de 15 años de
                experiencia brindando soluciones legales efectivas en diversas
                áreas del derecho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#5c4532] text-white px-6 py-3 rounded hover:bg-[#8e6b4e] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  Consulta Gratuita{" "}
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </button>
                <button className="border border-[#5c4532] text-[#5c4532] px-6 py-3 rounded hover:bg-[#f5f0e8] transition-all duration-300 shadow-sm hover:shadow-md">
                  Servicios
                </button>
              </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 relative">
              <div className="relative flex items-center justify-center h-[550px] max-h-[80vh]">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8c9884] opacity-20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5c4532] opacity-20 rounded-full"></div>

                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute z-10 w-3/5 h-[95%] shadow-lg rounded-lg overflow-hidden left-0">
                    <img
                      src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746536481/claudia_e9whvu.jpg"
                      alt="Dra. Claudia Simón"
                      className="w-full h-full object-cover object-right rounded-lg"
                    />
                  </div>

                  <div className="absolute w-3/5 h-[80%] rounded-lg overflow-hidden shadow-xl right-0">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover object-left rounded-lg"
                    >
                      <source
                        src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1746524667/6101151-uhd_2732_1440_30fps_ivjkdt.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <Carrousel />

      <Areas />

      <Nosotros />

      <ScrollBackground />

      <Contacto />
    </div>
  );
}
