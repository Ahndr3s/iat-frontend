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
          testimonialGroups.map((group, groupIdx) => (
            <div
              key={`slideGroupT2-${groupIdx}`}
              className={`slideAutoT2 ${groupIdx === currentSlide ? "active" : ""}`}
            >
              <div className="testimonial-grid-layout">
                {/* Tarjeta 1: Longitud completa */}
                {group[0] && (
                  <div className="testimonial-full-width">
                    <TestimonialCard {...group[0]} className="w-full h-full" />
                  </div>
                )}

                {/* Contenedor Flex Vertical: Contiene Tarjeta 2 y Tarjeta 3 (Mitad de longitud cada una) */}
                {(group[1] || group[2]) && (
                  <div className="testimonial-flex-vertical">
                    {group[1] && (
                      <TestimonialCard
                        {...group[1]}
                        className="testimonial-half-height"
                      />
                    )}
                    {group[2] && (
                      <TestimonialCard
                        {...group[2]}
                        className="testimonial-half-height"
                      />
                    )}
                  </div>
                )}

                {/* Tarjeta 4: Longitud completa */}
                {group[3] && (
                  <div className="testimonial-full-width">
                    <TestimonialCard {...group[3]} className="w-full h-full" />
                  </div>
                )}
              </div>
            </div>
          ))}
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
