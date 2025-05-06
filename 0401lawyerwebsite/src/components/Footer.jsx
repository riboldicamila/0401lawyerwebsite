export default function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-serif italic">
                <span className="text-[#b89f7e]">S</span>
              </div>
              <div className="ml-2">
                <h3 className="text-lg font-medium">
                  Dra. Claudia Simón & Asoc.
                </h3>
                <p className="text-sm text-gray-300">Estudio Jurídico</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Asesoramiento legal profesional y personalizado en diversas áreas
              del derecho.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "linkedin", "twitter"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-[#5c4532] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8e6b4e] transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Aquí irían los íconos de redes sociales */}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["INICIO", "NOSOTROS", "SERVICIOS", "CONTACTO"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white hover:underline transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Derecho de Familia",
                "Derecho Laboral",
                "Derecho Civil",
                "Jubilaciones y Pensiones",
                "Derecho Comercial",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white hover:underline transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-medium mb-4">Horario de Atención</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>Solo con cita previa</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Dra. Claudia Simón & Asociados. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
