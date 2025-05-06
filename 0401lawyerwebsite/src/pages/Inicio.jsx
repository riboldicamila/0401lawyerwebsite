import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Instagram, Facebook  } from "lucide-react";
import Carrousel from "../components/Carrousel";
import ScrollBackground from "../components/ScrollBackground";
import Nosotros from "../components/Nosotros";
import Areas from "../components/Areas";

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

      {/* Contacto */}
      <section className="py-16 bg-[#f8f6f2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="md:w-2/3">
              <h6 className="text-[#5c4532] font-medium mb-2">CONTÁCTENOS</h6>
              <h2 className="text-3xl font-serif font-medium mb-6">
                ¿Necesita asesoramiento legal?
              </h2>
              <p className="text-gray-600 mb-8">
                Póngase en contacto con nosotros a través de cualquiera de los
                siguientes medios y le atenderemos a la brevedad posible.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Teléfono</h4>
                    <p className="text-gray-600">(03489) 422409</p>
                    <p className="text-gray-600">(03489) 452601</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">claudiasimon175@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Dirección</h4>
                    <p className="text-gray-600">Rawson 11</p>
                    <p className="text-gray-600">
                      Campana, Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Horario de atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:30 - 12:30 y 16:30 - 19:30
                    </p>
                    <p className="text-gray-600">Sábados: Cerrado</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <p className="text-gray-600">
                      <a
                        href="https://api.whatsapp.com/send/?phone=5493489452601&text&type=phone_number&app_absent=0"
                        className="text-[#5c4532] hover:underline"
                      >
                        Enviar mensaje
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Redes Sociales</h4>
                    <div className="flex space-x-3">
                      <a
                        href="https://www.instagram.com/claudiasimon.estudiojuridico/"
                        className="text-[#5c4532] hover:text-[#8e6b4e]"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://www.facebook.com/estudiojuridicoclaudiasimon"
                        className="text-[#5c4532] hover:text-[#8e6b4e]"
                      >
                        <Facebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
