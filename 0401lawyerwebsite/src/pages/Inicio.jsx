import { ChevronDown } from "lucide-react";
import Carrousel from "../components/Carrousel";
import ScrollBackground from "../components/ScrollBackground";
import Nosotros from "../components/Nosotros";
import Areas from "../components/Areas";
import Contacto from "../components/Contacto";

export default function Inicio() {
  return (
    <div className="font-sans text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-28 sm:pt-24 md:pt-24 lg:pt-28 relative bg-[#f8f6f2] font-serif overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-14 sm:py-12 md:py-16 lg:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
            {/* Text content - full width on mobile, half width on md+ */}
            <div className="w-full md:w-1/2 md:pr-4 lg:pr-8 z-10 mb-12 md:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 md:mb-6 text-[#4a4a4a]">
                Asesoramiento legal{" "}
                <span className="text-[#5c4532] block mt-1">
                  profesional y personalizado
                </span>
              </h1>
              <p className="text-gray-600 font-serif mb-6 md:mb-8 max-w-lg text-sm sm:text-base leading-relaxed">
                Nuestro estudio jurídico cuenta con más de 15 años de
                experiencia brindando soluciones legales efectivas en diversas
                áreas del derecho.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* "Hacé tu consulta" button: Link to Contact section */}
                <a
                  href="#contacto"
                  className="bg-[#5c4532] text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded hover:bg-[#8e6b4e] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  Hacé tu consulta
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </a>

                {/* "Servicios" button: Link to Servicios section */}
                <a
                  href="#servicios"
                  className="border border-[#5c4532] text-[#5c4532] px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded hover:bg-[#f5f0e8] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Servicios
                </a>
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

        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#5c4532] opacity-5 -skew-x-12 transform translate-x-1/2 hidden lg:block"></div>

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5c4532] opacity-5 rounded-full -mr-20 -mb-20 hidden lg:block"></div>

        <div className="absolute top-10 left-0 text-gray-100 text-[12rem] font-bold opacity-5 select-none leading-none -z-10 hidden lg:block">
          Legal
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <Carrousel />

      <section id="servicios">
        <Areas />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <ScrollBackground />

      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
}
