import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CourseCard } from "../cards/CourseCard";
import { TestimonialCard } from "../cards/TestimonialCard";

export const AutoSlider = ({ sliderType, cards = [], limit, className }) => {
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

  // Definimos las diapositivas a mostrar según el tipo
  const testimonialGroups =
    sliderType === 2 ? chunkArray(processedCards, 4) : [];
  const totalSlides =
    sliderType === 1 ? processedCards.length : testimonialGroups.length;

  // Temporizador automático
  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`auto-slider ${className}`}>
      <div className="slides">
        {/* TIPO 1: Muestra tarjetas individuales*/}
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

        {/* TIPO 2: grupo de cardsen un grid */}
        {sliderType === 2 &&
          testimonialGroups.map((group, groupIdx) => (
            <div
              key={`slideGroupT2-${groupIdx}`}
              className={`w-full min-w-full flex justify-center items-center shrink-0 box-border px-5 ${groupIdx === currentSlide ? "active" : ""}`}
            >
              {/* CONTENEDOR PRINCIPAL GRID*/}
              <div className="w-full max-w-300 grid grid-cols-1 md:grid-cols-2 gap-6 md:h-100 text-md md:text-lg">
                {/* COLUMNA 1*/}
                {(group[0] || group[1]) && (
                  <div className="w-full h-full flex flex-col justify-between gap-4">
                    {group[0] && (
                      <div className="flex-1 min-h-37.5 md:min-h-0">
                        <TestimonialCard
                          {...group[0]}
                          className="w-full h-[50%] md:h-full lg:min-h-full"
                        />
                      </div>
                    )}

                    {group[1] && (
                      <div className="flex-1 min-h-37.5 md:min-h-0">
                        <TestimonialCard
                          {...group[1]}
                          className="w-full h-[50%] md:h-full lg:min-h-full"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* COLUMNA 2 */}
                {(group[2] || group[3]) && (
                  <div className="w-full h-full flex flex-col justify-between gap-4">
                    {group[2] && (
                      <div className="flex-1 min-h-37.5 md:min-h-0">
                        <TestimonialCard
                          {...group[2]}
                          className="w-full h-[50%] md:h-full lg:min-h-full"
                        />
                      </div>
                    )}
                    {group[3] && (
                      <div className="flex-1 min-h-37.5 md:min-h-0">
                        <TestimonialCard
                          {...group[3]}
                          className="w-full h-[50%] md:h-full lg:min-h-full"
                        />
                      </div>
                    )}
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
  className: PropTypes.string,
};
