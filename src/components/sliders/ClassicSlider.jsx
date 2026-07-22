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

export const ClassicSlider = ({ cardType, cards, limit, imgUrl }) => {
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
          // for CourseCards
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
                className="w-70! !min-w[280px] md:w-130! mx-1 shrink-0"
              />
            );
          }
          // for VideoCards
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
                className="w-70! !min-w[280px] md:w-130! mx-1 shrink-0"
              />
            );
          }
          // for static Images
          if (cardType === 5) {
            // console.log(imgUrl + card);
            return (
              <div
                key={index}
                className="w-full min-w-full h-62.5 md:h-105 shrink-0 px-1"
              >
                <img
                  src={`${imgUrl}${card}.png`}
                  alt="Project slide"
                  className="w-full h-full rounded-lg object-cover shadow-sm"
                />
              </div>
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
  imgUrl: PropTypes.string,
};
