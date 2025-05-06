import React, { useEffect, useState } from "react";

const ScrollBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundPosition = `50% ${scrollPosition * 0.5}px`;

  return (
    <div
      className="relative h-60 bg-cover bg-top"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dav7tzdzv/image/upload/v1746540972/background_ozjep7.png")',
        backgroundPosition,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center pt-40">
        <h1 className="text-4xl font-bold">
          Conocé la historia de nuestro estudio
        </h1>
        <p className="text-xl mt-4">
          El Estudio Mazzinghi fue fundado en 1952, por Jorge Adolfo Mazzinghi
        </p>
        <button className="mt-8 px-4 py-2 bg-white text-black rounded">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default ScrollBackground;
