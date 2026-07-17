import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CourseCard } from "../cards/CourseCard";

export const AutoSlider = ({ cards, limit }) => {
  let index;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configurar un temporizador que cambia la diapositiva cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    }, 2000);
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [cards.length]);

  // Función para cambiar a una diapositiva específica
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="auto-slider h-132.5 md:h-97.5">
      <div className="slides">
        {cards.map((card, index) => (
          <div
            key={`Sidet2${index}`}
            className={`slideT2 ${index === currentSlide ? "active" : ""}`}
          >
            <CourseCard
              id={card.id}
              key={`t${index}`}
              type={Number(card.type)}
              title={card.name}
              btntxt={card.btntxt}
              learning={card.learning}
              img={card.img}
              user={card.user}
              resume={card.resume}
              // pitch={card.pitch}
              instructor={card.instructor}
              className="max-w-full md:max-w-250px"
            />
          </div>
        ))}
      </div>

      {/* Puntos de navegación */}
      <div className="dots">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <style>{`
            .slides {
                display: flex;
                transition: transform 0.5s ease-in-out;
                transform: translateX(-${currentSlide * 100}%);
            }
        `}</style>
    </div>
  );
};

AutoSlider.propTypes = {
  cards: PropTypes.any,
  limit: PropTypes.number,
};
