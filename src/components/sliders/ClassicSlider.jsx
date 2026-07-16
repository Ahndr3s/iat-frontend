import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { CourseCard } from "../cards/CourseCard";

// import { getContentsByType } from '../../helpers/getContents';

export const ClassicSlider = ({ cards, limit }) => {
  const [card, setCard] = useState(0);
  const sliderRef = useRef(null);
  let index;

  let onPreviousClick = () => {
    index = card === 0 ? cards.length - 1 : card - 1;
    setCard(index);
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  let onNextClick = () => {
    index = card === cards.length - 1 ? 0 : card + 1;
    setCard(index);
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  // Si se proporciona un límite, devuelve los últimos 'limit' registros
  if (limit !== undefined) {
    cards = cards.slice(-limit);
  }

  return (
    <div className="slider-container">
      <FontAwesomeIcon
        className="slider-btn"
        icon={faCircleChevronLeft}
        onClick={onPreviousClick}
      />
      <div ref={sliderRef} key={index} className="slide">
        {cards.map((card, index) => (
          <CourseCard
            id={card.id}
            key={`t1${index}`}
            type={Number(card.type)}
            title={card.name}
            btntxt={card.btntxt}
            learning={card.learning}
            img={card.img}
            user={card.user}
            resume={card.resume}
            instructor={card.instructor}
          />
        ))}
        {/* <ContentList contents={cards} contentType={'4'} listType={'1'} /> */}
      </div>
      <FontAwesomeIcon
        className="slider-btn"
        icon={faCircleChevronRight}
        onClick={onNextClick}
      />
    </div>
  );
};

ClassicSlider.propTypes = {
  cards: PropTypes.any,
  limit: PropTypes.number,
};
