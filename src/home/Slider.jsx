import { useEffect, useState } from "react";

const images = [
  "/image_home/hero.jpg",
  "/image_home/hero.jpg",
  "/image_home/hero.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div
        className="
          relative w-full 
          h-[420px] md:h-[560px] xl:h-[740px]
          overflow-hidden
          rounded-[12px]
          border border-white/10
        "
      >
        {/* SLIDES */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`
              absolute top-0 left-0 w-full h-full
              object-cover
              transition-opacity duration-700
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                w-2 h-2 rounded-full
                transition
                ${index === current ? "bg-white" : "bg-white/50"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
