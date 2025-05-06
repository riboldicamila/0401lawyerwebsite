import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";
import Carrousel from "../components/Carrousel";
import ScrollBackground from "../components/ScrollBackground";
import Nosotros from "../components/Nosotros";
import Areas from "../components/Areas";

export default function Inicio() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Formulario enviado:", formData);
    alert("Gracias por su mensaje. Nos pondremos en contacto pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
  };

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

      {/* Áreas de Práctica */}
      <Areas />

      {/* Sobre Nosotros */}
      <Nosotros />

      <ScrollBackground />

      {/* Testimonios */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="text-[#5c4532] font-medium mb-2">TESTIMONIOS</h6>
            <h2 className="text-3xl font-serif font-medium">
              Lo que dicen nuestros clientes
            </h2>
            <div className="w-24 h-1 bg-[#5c4532] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                position: "Cliente Derecho Familiar",
                comment:
                  "Excelente atención y profesionalismo. Resolvieron mi caso de divorcio con gran eficiencia y humanidad.",
              },
              {
                name: "Carlos Rodríguez",
                position: "Cliente Jubilación",
                comment:
                  "Gracias a su asesoramiento pude obtener mi jubilación sin complicaciones. Altamente recomendable.",
              },
              {
                name: "Laura Fernández",
                position: "Cliente Derecho Laboral",
                comment:
                  "Me ayudaron a resolver un conflicto laboral complejo con resultados muy favorables. Gran equipo de profesionales.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f8f6f2] p-6 rounded-lg hover:shadow-md transition-all"
              >
                <div className="text-3xl text-[#5c4532] mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">
                  {testimonial.comment}
                </p>
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/50/50"
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contacto */}
      <section className="py-16 bg-[#f8f6f2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h6 className="text-[#5c4532] font-medium mb-2">CONTÁCTENOS</h6>
              <h2 className="text-3xl font-serif font-medium mb-6">
                ¿Necesita asesoramiento legal?
              </h2>
              <p className="text-gray-600 mb-8">
                Complete el formulario y nos pondremos en contacto con usted a
                la brevedad para coordinar una consulta.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Teléfono / Whatsapp</h4>
                    <p className="text-gray-600">(03489) 15452601</p>
                    <p className="text-gray-600">Tel/Fax: (03489) 422409</p>
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
                    <p className="text-gray-600">
                      Av. Libertador 123, Piso 4, Oficina B
                    </p>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#5c4532] p-3 rounded-full text-white mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Horario de atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00
                    </p>
                    <p className="text-gray-600">
                      Sábados: Solo con cita previa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-6">
                  Formulario de Contacto
                </h3>
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="nombre"
                    >
                      Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      value={formData.nombre}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5c4532] focus:border-transparent transition-all"
                      placeholder="Ingrese su nombre completo"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5c4532] focus:border-transparent transition-all"
                      placeholder="Ingrese su correo electrónico"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="telefono"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      value={formData.telefono}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5c4532] focus:border-transparent transition-all"
                      placeholder="Ingrese su número de teléfono"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="asunto"
                    >
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      value={formData.asunto}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5c4532] focus:border-transparent transition-all"
                    >
                      <option value="">Seleccione un área de consulta</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="jubilaciones">
                        Jubilaciones y Pensiones
                      </option>
                      <option value="comercial">Derecho Comercial</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="mensaje"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5c4532] focus:border-transparent transition-all"
                      placeholder="Describa brevemente su consulta"
                      rows="4"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#5c4532] text-white py-3 rounded hover:bg-[#8e6b4e] transition-all font-medium"
                  >
                    Enviar Consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
