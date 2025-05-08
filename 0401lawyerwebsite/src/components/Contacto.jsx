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

export default function Contacto() {
  return (
    <section className="py-40 bg-[#f8f6f2]">
      <div className="container mx-auto px-4 font-serif">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-2/3">
            <h6 className="text-[#5c4532] font-semibold mb-2">CONTÁCTENOS</h6>
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
                    Con cita previa.
                  </p>
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
  );
}
