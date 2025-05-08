import { ChevronDown } from "lucide-react";

export default function MainSection() {
  return (
    <>
      <section
        id="inicio"
        className="relative bg-[#f8f6f2] font-serif overflow-hidden pt-[15vh] pb-8 lg:pt-[20vh] lg:pb-12"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#29220d] opacity-5 transform -skew-x-12 hidden lg:block"></div>
        <div className="absolute top-0 left-0 w-1/4 h-full bg-[#5c4532] opacity-5 transform skew-x-12 hidden lg:block"></div>
        <div className="absolute top-10 left-0 text-gray-200 text-9xl font-bold opacity-5 select-none leading-none -z-10 hidden lg:block">
          Legal
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-7xl mx-auto">
            {/* Text content */}
            <div className="w-full lg:w-1/2 z-10 order-2 lg:order-1 text-center lg:text-left">
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-[#4a4a4a]">
                  Asesoramiento legal{" "}
                  <span className="text-[#5c4532] block mt-1">
                    profesional y personalizado
                  </span>
                </h1>
              </div>
              <p className="text-gray-600 mb-6 max-w-lg text-base leading-relaxed mx-auto">
                Nuestro estudio jurídico cuenta con más de 30 años de
                experiencia brindando soluciones legales efectivas en diversas
                áreas del derecho.
              </p>

              {/* Decorative line */}
              <div className="w-24 h-1 bg-[#5c4532] opacity-90 mb-8 mx-auto"></div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                <a
                  href="#contacto"
                  className="bg-[#5c4532] text-white px-5 py-3 rounded font-medium hover:bg-[#8e6b4e] transition-all duration-300 flex items-center justify-center gap-2 shadow-md text-base"
                >
                  Hacé tu consulta
                  <ChevronDown
                    size={18}
                    className="transition-transform group-hover:rotate-180"
                  />
                </a>
                <a
                  href="#servicios"
                  className="border border-[#5c4532] text-[#5c4532] px-5 py-3 rounded font-medium hover:bg-[#f5f0e8] transition-all duration-300 text-base"
                >
                  Servicios
                </a>
              </div>
            </div>

            {/* Visual content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative h-80 md:h-[400px] lg:h-[450px] max-h-[70vh]">
                {/* Main image */}
                <div className="absolute top-0 right-0 w-4/5 h-full rounded-lg overflow-hidden shadow-xl z-20">
                  <img
                    src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746536481/claudia_e9whvu.jpg"
                    alt="Dra. Claudia Simón"
                    className="w-full h-full object-cover object-"
                  />
                  {/* Overlay with law firm credentials */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5c4532] to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                      Dra. Claudia Simón
                    </p>
                    <p className="text-white text-xs opacity-90">
                      Abogada U.B.A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
