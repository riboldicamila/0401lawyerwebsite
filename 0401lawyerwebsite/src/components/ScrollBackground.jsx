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
          'url("https://res.cloudinary.com/dav7tzdzv/image/upload/v1746558072/document-agreement-documents-sign-48148_tojkz8.jpg")',
        backgroundPosition,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center pt-40">
        <p className="text-xl mt-4">
          Defensa legal honesta y cercana, para cada argentino.
        </p>
      </div>
    </div>
  );
};

export default ScrollBackground;
