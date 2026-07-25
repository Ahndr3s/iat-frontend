import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CourseCard } from "../cards/CourseCard";
import { TestimonialCard } from "../cards/TestimonialCard";

export const AutoSlider = ({ sliderType, cards = [], limit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Si hay un límite, recortamos el arreglo primero
  const processedCards = limit !== undefined ? cards.slice(-limit) : cards;

  // FUNCIÓN AUXILIAR: Agrupa las tarjetas en bloques de 4 para el tipo 2
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Definimos las diapositivas reales según el tipo
  const testimonialGroups =
    sliderType === 2 ? chunkArray(processedCards, 4) : [];
  const totalSlides =
    sliderType === 1 ? processedCards.length : testimonialGroups.length;

  // Temporizador automático
  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000); // 4 segundos por diapositiva para una lectura cómoda

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="auto-slider h-132.5 md:h-97.5">
      <div className="slides">
        {/* CASO sliderType === 1: Muestra tarjetas individuales de Cursos */}
        {sliderType === 1 &&
          processedCards.map((card, index) => (
            <div
              key={`slideT1-${card.id || index}`}
              className={`slideAutoT1 ${index === currentSlide ? "active" : ""}`}
            >
              <CourseCard
                id={card.id}
                type={Number(card.type)}
                title={card.name}
                btntxt={card.btntxt}
                learning={card.learning}
                img={card.img}
                user={card.user}
                resume={card.resume}
                instructor={card.instructor}
                className="max-w-full md:max-w-250px"
              />
            </div>
          ))}

        {/* CASO sliderType === 2: Muestra testimonios en grupos con diseño de cuadrícula */}
        {sliderType === 2 &&
          // AutoSlider.jsx

testimonialGroups.map((group, groupIdx) => (
  <div
    key={`slideGroupT2-${groupIdx}`}
    className={`w-full min-w-full flex justify-center items-center shrink-0 box-border px-5 ${
      groupIdx === currentSlide ? "active" : ""
    }`}
  >
    {/* CONTENEDOR PRINCIPAL GRID:
        - Móvil: 1 columna, separación de 16px (gap-4), altura adaptable.
        - Escritorio (md): 3 columnas idénticas, altura fija de 400px. */}
    <div className="w-full max-w-[1200px] gap-4 grid grid-cols-1 md:grid-cols-3 md:h-[400px]">
      
      {/* Tarjeta 1: Ocupa 1 columna exacta en PC (1/3 del total) */}
      {group[0] && (
        <div className="w-full h-full min-h-[250px] md:min-h-0">
          <TestimonialCard {...group[0]} className="w-full h-full" />
        </div>
      )}

      {/* Contenedor central: Columna 2 en PC. Distribuye las tarjetas 2 y 3 verticalmente */}
      {(group[1] || group[2]) && (
        <div className="w-full h-full flex flex-col justify-between gap-4">
          {group[1] && (
            <div className="flex-1 min-h-[180px] md:min-h-0">
              <TestimonialCard {...group[1]} className="w-full h-full" />
            </div>
          )}
          {group[2] && (
            <div className="flex-1 min-h-[180px] md:min-h-0">
              <TestimonialCard {...group[2]} className="w-full h-full" />
            </div>
          )}
        </div>
      )}

      {/* Tarjeta 4: Ocupa la 3ra columna en PC. Mismo tamaño exacto que la Tarjeta 1 */}
      {group[3] && (
        <div className="w-full h-full min-h-[250px] md:min-h-0">
          <TestimonialCard {...group[3]} className="w-full h-full" />
        </div>
      )}
      
    </div>
  </div>
))
}
      </div>

      {sliderType === 1 && totalSlides > 0 && (
        <div className="dots">
          {processedCards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      <style>{`
        .slides {
          display: flex;
          transition: transform 1.2s ease-in-out; 
          transform: translateX(-${currentSlide * 100}%);
        }
      `}</style>
    </div>
  );
};

AutoSlider.propTypes = {
  sliderType: PropTypes.number,
  cards: PropTypes.any,
  limit: PropTypes.number,
};
