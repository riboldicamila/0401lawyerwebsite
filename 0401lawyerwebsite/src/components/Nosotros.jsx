import { useEffect, useState } from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function Nosotros() {
  const teamMembers = [
    {
      id: 1,
      name: "Dra. Claudia Simón",
      position: "ABOGADA U.B.A",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746557856/e8b33de7-8133-4906-b679-0d08b2dbef54_yjwklb.jpg",
    },
    {
      id: 2,
      name: "Manuel Lombao",
      position: "ABOGADO U.B.A",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746557848/482204996_1154156153074138_8887014398218258912_n_1_tb2pfb.jpg",
    },
  ];

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

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to "contacto" section
  const handleContactClick = () => {
    const contactoSection = document.getElementById("contacto");
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#f8f6f2] relative font-serif">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 w-full">
              <div className="relative group">
                {/* Decorative elements */}
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 bg-[#5c4532] opacity-20 rounded-full 
                            transition-all duration-500 group-hover:scale-110"
                ></div>
                <div
                  className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#5c4532] opacity-15 rounded-full 
                            transition-all duration-500 group-hover:scale-110 hidden md:block"
                ></div>

                <div className="shadow-xl z-10 relative overflow-hidden group h-72 md:h-96">
                  <div className="relative overflow-hidden h-full">
                    <img
                      src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746606876/IMG_4778_1_ehrh8h.jpg"
                      alt="Estudio Jurídico"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div
                className={`transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h6 className="text-[#5c4532] font-semibold mb-3 tracking-widest text-sm">
                  CONOZCA NUESTRO ESTUDIO
                </h6>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-gray-800">
                  Dra. Claudia Simón & Asociados
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nuestro estudio jurídico fue fundado con la misión de brindar
                  asesoramiento legal integral y personalizado. Contamos con un
                  equipo de profesionales especializados en diversas áreas del
                  derecho, comprometidos con la excelencia y la búsqueda de las
                  mejores soluciones para nuestros clientes.
                </p>
                <div className="flex items-center mt-6 space-x-4">
                  <img
                    src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746539200/black-logo_y25bjf.png"
                    alt="Firma"
                    className="w-16 h-16 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
                  />
                  <div className="h-10 w-0.5 bg-gray-200"></div>
                  <button
                    className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 font-serif"
                    onClick={handleContactClick}
                  >
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#5c4532] opacity-5 -skew-x-12 transform translate-x-1/2 hidden lg:block"></div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden font-serif">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h6 className="text-[#5c4532] font-semibold mb-3 tracking-widest text-sm">
              PROFESIONALES DEDICADOS
            </h6>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-gray-800">
              Nuestro equipo
            </h2>
            <div className="w-20 h-1 bg-[#5c4532] mx-auto mb-6 "></div>
            <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
              Nuestro equipo de abogados aporta un profundo conocimiento
              jurídico.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`transition-all duration-700 delay-${index * 200} ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-10 left-0 text-gray-100 text-[12rem] font-bold opacity-5 select-none leading-none -z-10">
          Equipo
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5c4532] opacity-5 rounded-full -mr-20 -mb-20 hidden lg:block"></div>
      </section>
    </div>
  );
}
