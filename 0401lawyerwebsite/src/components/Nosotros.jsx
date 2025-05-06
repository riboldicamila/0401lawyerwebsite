import { useState } from 'react';

export default function Nosotros() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Dra. Claudia Simón",
      position: "DIRECTORA",
      image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746555330/e8b33de7-8133-4906-b679-0d08b2dbef54_gogtwv.jpg",
    },
    {
      id: 2,
      name: "Manuel Lombao",
      position: "ABOGADO ASOCIADO",
      image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746555448/482204996_1154156153074138_8887014398218258912_n_1_zyrlde.jpg",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="py-16 bg-[#f8f6f2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#5c4532] opacity-20 rounded-full"></div>
                <img
                  src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746542778/0c4a1765-2660-47cb-808c-e6c17b451331_oa7qt1.jpg"
                  alt="Dra. Claudia Simón"
                  className="rounded-lg shadow-lg z-10 relative"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h6 className="text-[#5c4532] font-medium mb-2">
                CONOZCA NUESTRO ESTUDIO
              </h6>
              <h2 className="text-3xl font-serif font-medium mb-6">
                Dra. Claudia Simón & Asociados
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestro estudio jurídico fue fundado con la misión de brindar
                asesoramiento legal integral y personalizado. Contamos con un
                equipo de profesionales especializados en diversas áreas del
                derecho, comprometidos con la excelencia y la búsqueda de las
                mejores soluciones para nuestros clientes.
              </p>
              <p className="text-gray-600 mb-6">
                La Dra. Claudia Simón, abogada egresada de la Universidad de
                Buenos Aires (UBA), lidera nuestro equipo con más de 15 años de
                experiencia en el ejercicio de la profesión.
              </p>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/60/60"
                  alt="Firma"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-medium">Dra. Claudia Simón</h4>
                  <p className="text-sm text-gray-600">Abogada UBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Inspired by the image */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6">
              Nuestro equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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

// Team member card component with hover effects
function TeamMemberCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-full sm:w-72 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        {/* Curved frame effect */}
        <div className="absolute inset-0 border-2 border-blue-200 rounded-lg" style={{
          borderRadius: '40% 40% 0 0 / 10%',
          transform: 'scale(1.05)',
          borderBottom: 'none'
        }}></div>
        
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-xl font-medium mb-1">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.position}</p>
        
        {/* LinkedIn icon */}
        <a 
          href="#" 
          className="inline-block mt-3 text-blue-500 transition-colors duration-300 hover:text-blue-700"
          aria-label={`LinkedIn profile for ${member.name}`}
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  );
}