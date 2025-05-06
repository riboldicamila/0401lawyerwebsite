import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Inicio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
    alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen">
      {/* Navbar */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-serif italic">
              <span className="text-[#b89f7e]">S</span>
            </div>
            <div className="ml-2 hidden md:block">
              <h1 className="text-lg font-medium">Dra. Claudia Simón & Asoc.</h1>
              <p className="text-xs text-gray-600">Estudio Jurídico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['INICIO', 'NOSOTROS', 'SERVICIOS', 'CONTACTO'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all hover:text-[#a67e5b] ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[#a67e5b] border-b-2 border-[#a67e5b]' 
                    : 'text-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                {['INICIO', 'NOSOTROS', 'SERVICIOS', 'CONTACTO'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-medium p-2 transition-all hover:bg-[#f5f0e8] ${
                      activeSection === item.toLowerCase() 
                        ? 'text-[#a67e5b] bg-[#f5f0e8]' 
                        : 'text-gray-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 relative bg-[#f8f6f2]">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 text-[#4a4a4a]">
                Asesoramiento legal <br />
                <span className="text-[#a67e5b]">profesional y personalizado</span>
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg">
                Nuestro estudio jurídico cuenta con más de 15 años de experiencia brindando soluciones legales efectivas en diversas áreas del derecho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#a67e5b] text-white px-6 py-3 rounded hover:bg-[#8e6b4e] transition-all flex items-center justify-center gap-2">
                  Consulta Gratuita <ChevronDown size={16} />
                </button>
                <button className="border border-[#a67e5b] text-[#a67e5b] px-6 py-3 rounded hover:bg-[#f5f0e8] transition-all">
                  Servicios
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8c9884] opacity-20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#a67e5b] opacity-20 rounded-full"></div>
                <img 
                  src="/api/placeholder/600/450" 
                  alt="Estudio Jurídico" 
                  className="rounded-lg shadow-lg z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Áreas de Práctica */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="text-[#a67e5b] font-medium mb-2">NUESTRAS ÁREAS</h6>
            <h2 className="text-3xl font-serif font-medium">Áreas de Práctica</h2>
            <div className="w-24 h-1 bg-[#a67e5b] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Derecho de Familia', icon: '👨‍👩‍👧‍👦', description: 'Divorcios, sucesiones, régimen patrimonial, filiación y adopciones.' },
              { title: 'Derecho Laboral', icon: '👩🏽‍💼', description: 'Despidos, indemnizaciones, accidentes laborales y reclamos salariales.' },
              { title: 'Derecho Civil', icon: '⚖️', description: 'Contratos, daños y perjuicios, responsabilidad civil y derechos reales.' },
              { title: 'Jubilaciones y Pensiones', icon: '👵', description: 'Asesoramiento previsional, reajustes y pensiones por fallecimiento.' },
              { title: 'Derecho Comercial', icon: '📊', description: 'Constitución de sociedades, contratos comerciales y asesoramiento empresarial.' },
              { title: 'Mediación', icon: '🤝', description: 'Mediación prejudicial obligatoria y resolución alternativa de conflictos.' },
            ].map((area, index) => (
              <div 
                key={index} 
                className="bg-[#f8f6f2] p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-[#a67e5b] transition-all">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16 bg-[#f8f6f2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#a67e5b] opacity-20 rounded-full"></div>
                <img 
                  src="/api/placeholder/500/600" 
                  alt="Dra. Claudia Simón" 
                  className="rounded-lg shadow-lg z-10 relative"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h6 className="text-[#a67e5b] font-medium mb-2">CONOZCA NUESTRO ESTUDIO</h6>
              <h2 className="text-3xl font-serif font-medium mb-6">Dra. Claudia Simón & Asociados</h2>
              <p className="text-gray-600 mb-6">
                Nuestro estudio jurídico fue fundado con la misión de brindar asesoramiento legal integral y personalizado. 
                Contamos con un equipo de profesionales especializados en diversas áreas del derecho, comprometidos con la 
                excelencia y la búsqueda de las mejores soluciones para nuestros clientes.
              </p>
              <p className="text-gray-600 mb-6">
                La Dra. Claudia Simón, abogada egresada de la Universidad de Buenos Aires (UBA), lidera nuestro equipo 
                con más de 15 años de experiencia en el ejercicio de la profesión.
              </p>
              <div className="flex items-center">
                <img src="/api/placeholder/60/60" alt="Firma" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-medium">Dra. Claudia Simón</h4>
                  <p className="text-sm text-gray-600">Abogada UBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="text-[#a67e5b] font-medium mb-2">TESTIMONIOS</h6>
            <h2 className="text-3xl font-serif font-medium">Lo que dicen nuestros clientes</h2>
            <div className="w-24 h-1 bg-[#a67e5b] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'María González', position: 'Cliente Derecho Familiar', comment: 'Excelente atención y profesionalismo. Resolvieron mi caso de divorcio con gran eficiencia y humanidad.' },
              { name: 'Carlos Rodríguez', position: 'Cliente Jubilación', comment: 'Gracias a su asesoramiento pude obtener mi jubilación sin complicaciones. Altamente recomendable.' },
              { name: 'Laura Fernández', position: 'Cliente Derecho Laboral', comment: 'Me ayudaron a resolver un conflicto laboral complejo con resultados muy favorables. Gran equipo de profesionales.' },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-[#f8f6f2] p-6 rounded-lg hover:shadow-md transition-all"
              >
                <div className="text-3xl text-[#a67e5b] mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">{testimonial.comment}</p>
                <div className="flex items-center">
                  <img src="/api/placeholder/50/50" alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-[#f8f6f2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h6 className="text-[#a67e5b] font-medium mb-2">CONTÁCTENOS</h6>
              <h2 className="text-3xl font-serif font-medium mb-6">¿Necesita asesoramiento legal?</h2>
              <p className="text-gray-600 mb-8">
                Complete el formulario y nos pondremos en contacto con usted a la brevedad para coordinar una consulta.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#a67e5b] p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Teléfono / Whatsapp</h4>
                    <p className="text-gray-600">(03489) 15452601</p>
                    <p className="text-gray-600">Tel/Fax: (03489) 422409</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#a67e5b] p-3 rounded-full text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">claudiasimon175@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#a67e5b] p-3 rounded-full text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Dirección</h4>
                    <p className="text-gray-600">Av. Libertador 123, Piso 4, Oficina B</p>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#a67e5b] p-3 rounded-full text-white mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Horario de atención</h4>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: Solo con cita previa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-6">Formulario de Contacto</h3>
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="nombre">
                      Nombre y Apellido
                    </label>
                    <input 
                      type="text" 
                      id="nombre" 
                      value={formData.nombre}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#a67e5b] focus:border-transparent transition-all"
                      placeholder="Ingrese su nombre completo"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#a67e5b] focus:border-transparent transition-all"
                      placeholder="Ingrese su correo electrónico"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="telefono">
                      Teléfono
                    </label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      value={formData.telefono}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#a67e5b] focus:border-transparent transition-all"
                      placeholder="Ingrese su número de teléfono"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="asunto">
                      Asunto
                    </label>
                    <select 
                      id="asunto" 
                      value={formData.asunto}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#a67e5b] focus:border-transparent transition-all"
                    >
                      <option value="">Seleccione un área de consulta</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="jubilaciones">Jubilaciones y Pensiones</option>
                      <option value="comercial">Derecho Comercial</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mensaje">
                      Mensaje
                    </label>
                    <textarea 
                      id="mensaje" 
                      value={formData.mensaje}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#a67e5b] focus:border-transparent transition-all"
                      placeholder="Describa brevemente su consulta"
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-[#a67e5b] text-white py-3 rounded hover:bg-[#8e6b4e] transition-all font-medium"
                  >
                    Enviar Consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a4a4a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0 md:w-1/4">
              <div className="flex items-center mb-4">
                <div className="text-3xl font-serif italic">
                  <span className="text-[#b89f7e]">S</span>
                </div>
                <div className="ml-2">
                  <h3 className="text-lg font-medium">Dra. Claudia Simón & Asoc.</h3>
                  <p className="text-sm text-gray-300">Estudio Jurídico</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Asesoramiento legal profesional y personalizado en diversas áreas del derecho.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-[#a67e5b] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8e6b4e] transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Aquí irían los íconos de redes sociales */}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mb-8 md:mb-0 md:w-1/4">
              <h3 className="text-lg font-medium mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {['INICIO', 'NOSOTROS', 'SERVICIOS', 'CONTACTO'].map((item) => (
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
                {['Derecho de Familia', 'Derecho Laboral', 'Derecho Civil', 'Jubilaciones y Pensiones', 'Derecho Comercial'].map((item) => (
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
            <p>© {new Date().getFullYear()} Dra. Claudia Simón & Asociados. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}