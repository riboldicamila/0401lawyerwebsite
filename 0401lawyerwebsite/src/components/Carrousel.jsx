import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carrousel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const paginationRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "Expertos en su área",
      description:
        "Conocé a nuestro equipo, listos para brindarte asesoramiento personalizado y soluciones legales a tu medida.",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746606938/clau_hbjyyh.png",
    },
    {
      id: 7,
      title: "Estamos para vos",
      description:
        "No importa cuál sea tu situación legal, estamos acá para escucharte y ayudarte.",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746542342/general_aa7rnx.png",
    },
    {
      id: 2,
      title: "Servicios Legales",
      description:
        "¡Conocé todos los servicios legales que ofrecemos en el estudio! Nuestro objetivo es acompañarte en cada etapa.",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746606876/IMG_4778_1_ehrh8h.jpg",
    },
    {
      id: 8,
      title: "Ubicación y Consultas",
      description:
        "Estamos ubicados en Rawson 11, Campana, Argentina. Contactanos para hacer tu consulta.",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746543130/clau2_unucjd.png",
    },
    {
      id: 3,
      title: "Derecho de Familia",
      description:
        "Divorcios, tenencia, régimen de comunicación, adopciones, alimentos y más.",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746543199/pexels-photo-7876053_on0kt4.jpg",
    },
    {
      id: 4,
      title: "Derecho Laboral",
      description:
        "Despidos injustificados, acoso laboral, reclamos salariales y defensa del trabajador.",
      image:
        "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Derecho Civil",
      description:
        "Sucesiones, daños y perjuicios, derecho inmobiliario, accidentes (ART).",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746543718/2b54ebb1-8ba9-40bd-8973-d0234a6eabad_m8xln8.jpg",
    },
    {
      id: 6,
      title: "Jubilaciones y Pensiones",
      description:
        "Te asesoramos y acompañamos en cada paso para que accedas a lo que te corresponde.",
      image:
        "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746543608/pexels-photo-7681200_dcctxm.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-40 md:pt-60 pb-16 md:pb-24 overflow-hidden bg-gray-900 font-sans"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]/80"></div>
        <div
          className="w-full h-full bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dav7tzdzv/image/upload/v1746541502/analog-landscape-city-with-buildings_23-2149661458_gxb6bj.jpg')",
            filter: "sepia(0.6) brightness(0.9) contrast(1) saturate(0.6)",
            opacity: 0.3,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-1 md:px-12 relative z-10 font-serif">
        <div className="text-center relative mb-16 px-4">
          <div className="flex items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif italic font-light text-white opacity-80 mx-4">
              Estudio Jurídico 
            </h2>
          </div>
        </div>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} w-2 h-2 bg-[#f5f0e8] hover:bg-[#5c4532] mx-1 rounded-full transition-all duration-300"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id} className="pb-12 h-full flex">
                <div className="bg-white rounded-none overflow-hidden flex flex-col flex-grow w-full transition-transform duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif font-bold mb-2 text-center text-[#5c4532]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={paginationRef}
            className="flex justify-center items-center mt-6 space-x-2"
          ></div>
        </div>
      </div>
    </section>
  );
}
