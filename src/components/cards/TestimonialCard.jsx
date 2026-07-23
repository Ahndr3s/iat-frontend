import PropTypes from "prop-types";

export const TestimonialCard = (props) => {
  return (
    <div>
      <div className="testimony-quote">
          <p className="t-quote">
          {props.quote}
          </p>
          <div className="quoted ml-4">
            <p className="quoted-txt">— {props.name}</p>
            {/* <img
              className="quoted-img"
              src={}
              alt=""
            /> */}
          </div>
        </div>
    </div>
  )
}

TestimonialCard.propTypes = {
  // type: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
  img: PropTypes.any,
  imgUrl: PropTypes.string,
  className: PropTypes.string,
};
