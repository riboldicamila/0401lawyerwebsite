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
      <section className="pt-16 md:pt-24 lg:pt-28 relative bg-[#f8f6f2]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
            <div className="md:w-1/2 md:pr-4 lg:pr-8 z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 md:mb-6 text-[#4a4a4a]">
                Asesoramiento legal{" "}
                <span className="text-[#5c4532] block mt-1">
                  profesional y personalizado
                </span>
              </h1>
              <p className="text-gray-600 mb-6 md:mb-8 max-w-lg text-sm sm:text-base leading-relaxed">
                Nuestro estudio jurídico cuenta con más de 15 años de
                experiencia brindando soluciones legales efectivas en diversas
                áreas del derecho.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-[#5c4532] text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded hover:bg-[#8e6b4e] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  Hacé tu consulta
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </button>
                <button className="border border-[#5c4532] text-[#5c4532] px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded hover:bg-[#f5f0e8] transition-all duration-300 shadow-sm hover:shadow-md">
                  Servicios
                </button>
              </div>
            </div>

            <div className="md:w-1/2 mt-10 md:mt-0 relative">
              <div className="relative flex items-center justify-center h-96 sm:h-[400px] md:h-[450px] lg:h-[500px] max-h-[70vh]">
                <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#8c9884] opacity-20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#5c4532] opacity-20 rounded-full"></div>

                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Left image (person) */}
                  <div className="absolute z-10 w-3/5 h-[95%] shadow-lg rounded-lg overflow-hidden left-0">
                    <img
                      src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746536481/claudia_e9whvu.jpg"
                      alt="Dra. Claudia Simón"
                      className="w-full h-full object-cover object-right rounded-lg"
                    />
                  </div>

                  {/* Right video */}
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

        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <Carrousel />

      <Areas />

      <Nosotros />

      <ScrollBackground />

      <Contacto />
    </div>
  );
}