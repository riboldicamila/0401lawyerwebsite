import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll();
  
  const textOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const textY = useTransform(scrollY, [0, 100], [0, -10]);
  
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
      className="relative h-72 md:h-70 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dav7tzdzv/image/upload/v1746558072/document-agreement-documents-sign-48148_tojkz8.jpg")',
        backgroundPosition,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
  
      <motion.div 
        className="relative z-10 text-white text-center px-4 max-w-3xl"
        style={{ 
          opacity: textOpacity,
          y: textY
        }}
      >
        <div className="w-20 h-1 bg-[#5c4532] mx-auto mb-4"></div>
        <p className="text-2xl md:text-3xl font-serif italic">
          Defensa legal, honesta y cercana
        </p>
        <div className="w-20 h-1 bg-[#5c4532] mx-auto mt-4"></div>
      </motion.div>
    </div>
  );
  
};

export default ScrollBackground;