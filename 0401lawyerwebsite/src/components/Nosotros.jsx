import { useRef, useEffect } from 'react';
import TeamMemberCard from './TeamMember';

export default function Nosotros() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Dra. Claudia Simón",
      position: "DIRECTORA",
      image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746557856/e8b33de7-8133-4906-b679-0d08b2dbef54_yjwklb.jpg",
    },
    {
      id: 2,
      name: "Manuel Lombao",
      position: "ABOGADO ASOCIADO",
      image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746557848/482204996_1154156153074138_8887014398218258912_n_1_tb2pfb.jpg",
    },
  ];
  
  // Reference to video element to control playback speed
  const videoRef = useRef(null);
  
  // Set playback rate when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Reduce speed to half
    }
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="py-10 bg-[#f8f6f2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#5c4532] opacity-20 rounded-full"></div>
                <div className="rounded-lg shadow-lg z-10 relative overflow-hidden h-128">
                  <video 
                    ref={videoRef}
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-full object-cover object-top"
                  >
                    <source src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1746556361/IMG_8979_ctwbti.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* White overlay with opacity */}
                  <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h6 className="text-[#5c4532] font-medium mb-2">
                CONOZCA NUESTRO ESTUDIO
              </h6>
              <h2 className="text-3xl font-serif font-medium mb-4">
                Dra. Claudia Simón & Asociados
              </h2>
              <p className="text-gray-600 mb-4">
                Nuestro estudio jurídico fue fundado con la misión de brindar
                asesoramiento legal integral y personalizado. Contamos con un
                equipo de profesionales especializados en diversas áreas del
                derecho, comprometidos con la excelencia y la búsqueda de las
                mejores soluciones para nuestros clientes.
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746539200/black-logo_y25bjf.png"
                  alt="Firma"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Inspired by the image */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-medium mb-4">
              Nuestro equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo aporta un profundo conocimiento de la industria
              y experiencia incomparable en el mercado.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        
        {/* Background text effect similar to the image */}
        <div className="absolute top-0 left-0 text-gray-100 text-9xl font-bold opacity-10 select-none">
          Equipo
        </div>
      </section>
    </>
  );
}
