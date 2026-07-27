import PropTypes from "prop-types";

export const TestimonialCard = (props) => {
  return (
    <div className="md:h-80">
      <div className={`testimony-quote ${props.className}`}>
        <p className="t-quote text-sm md:text-xl">{props.quote}</p>
        <div className="quoted ml-4">
          <p className="quoted-txt">— {props.name}</p>
          {/* <img className="quoted-img" src={""} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  // type: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
  img: PropTypes.any,
  imgUrl: PropTypes.string,
  className: PropTypes.string,
};
