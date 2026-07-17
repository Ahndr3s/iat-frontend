import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { CourseCard } from "../cards/CourseCard";
import { VideoCard } from "../cards/VideoCard";

// import { getContentsByType } from '../../helpers/getContents';

export const ClassicSlider = ({ cardType, cards, limit }) => {
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
        {cards.map((card, index) => {
          if (cardType === 2) {
            return (
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
                className="!w-[280px] !min-w[280px] md:!w-[520px] mx-1 flex-shrink-0"
              />
            );
          }
          if (cardType === 4) {
            return (
              <VideoCard
                id={card.id}
                key={`t1${index}`}
                type={Number(card.type)}
                title={card.name}
                img={card.img}
                url={card.url}
                user={card.user}
                className="!w-[280px] !min-w[280px] md:!w-[520px] mx-1 flex-shrink-0"
              />
            );
          }
        })}
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
  cardType: PropTypes.number,
  cards: PropTypes.any,
  limit: PropTypes.number,
};
