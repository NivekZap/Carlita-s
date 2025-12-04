
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Ultimas ofertas",
      offer: " ",
      buttonText1: "Compra Ahora",
      buttonText2: "Busca más",
      imgSrc: assets.flyer,
    },
    {
      id: 2,
      title: "Ultimas ofertas",
      offer: " ",
      buttonText1: "Compra Ahora",
      buttonText2: "Explora",
      imgSrc: assets.flyer1,
    },
    {
      id: 3,
      title: "Ultimas ofertas",
      offer: " ",
      buttonText1: "Ordénalo ahora",
      buttonText2: "Lee más",
      imgSrc: assets.flyer2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="relative min-w-full h-[350px] md:h-[480px] rounded-xl mt-6 overflow-hidden bg-[#E6E9F2]"
          >
            {/* Imagen completa */}
            <Image
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
              fill
              className="object-contain bg-[#E6E9F2]"
              priority
            />

            {/* CONTENIDO SOBRE LA IMAGEN */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 bg-black/0">
              <p className="text-orange-600 text-sm md:text-base mb-2">
                {slide.offer}
              </p>

              <h1 className="text-white text-2xl md:text-4xl font-semibold max-w-lg drop-shadow">
                {slide.title}
              </h1>

              <div className="flex items-center mt-4 md:mt-6 gap-4">
                <button className="px-7 md:px-10 py-2.5 bg-orange-600 rounded-full text-white font-medium" href="all-products.html">
                  {slide.buttonText1}
                </button>

                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Puntos del slider */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
