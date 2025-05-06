import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Note: You'll need to install these packages:
// npm install swiper@10
// And import the CSS in your main file:
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
      title: "Local Insight, National Power",
      description:
        "With strong roots in the Grand Strand, we provide valuable insights that make a difference, backed by a formidable national network of insurers.",
      image: "/api/placeholder/600/400", // Replace with your actual image
    },
    {
      id: 2,
      title: "Tailored Risk Management",
      description:
        "We craft exclusive solutions for your unique risks, enhancing operational efficiency and driving profitability.",
      image: "/api/placeholder/600/400", // Replace with your actual image
    },
    {
      id: 3,
      title: "Expert-Driven Solutions",
      description:
        "Our specialized products and deep industry expertise guarantee you get the right coverage at the most competitive premiums.",
      image: "/api/placeholder/600/400", // Replace with your actual image
    },
    {
      id: 4,
      title: "Expert-Driven Solutions",
      description:
        "Our specialized products and deep industry expertise guarantee you get the right coverage at the most competitive premiums.",
      image: "/api/placeholder/600/400", // Replace with your actual image
    },
    {
      id: 5,
      title: "Expert-Driven Solutions",
      description:
        "Our specialized products and deep industry expertise guarantee you get the right coverage at the most competitive premiums.",
      image: "/api/placeholder/600/400", // Replace with your actual image
    },
  ];

  // Handle scroll visibility with Intersection Observer
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
      className="relative py-16 md:py-24 overflow-hidden bg-gray-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]/80"></div>
        <img
          src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746526986/closeup-shot-dome-with-victoria-statue-metropolis-building-madrid-spain_181624-32258_o4gdbr.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Title with animation */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose BME?
          </h2>
        </div>

        {/* Swiper Carousel */}
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
                return `<span class="${className} w-2 h-2 bg-[#f5f0e8] hover:bg-[#a67e5b] mx-1 rounded-full transition-all duration-300"></span>`;
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
              <SwiperSlide key={feature.id} className="pb-12">
                <div className="bg-white rounded-none overflow-hidden h-full flex flex-col transition-transform duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-center text-[#a67e5b]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div
            ref={paginationRef}
            className="flex justify-center items-center mt-6 space-x-2"
          ></div>
        </div>
      </div>
    </section>
  );
}
