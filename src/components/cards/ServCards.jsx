import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ServCards = (props) => {
  const navigate = useNavigate();

  // SERVICES WINDOW
  const handleClickServ = () => {
    // if (ref && ref.current) {
    // ref.current.scrollIntoView({ behavior: "smooth" });
    // } else {
    navigate(props.pageRoute, {
      replace: true,
    });
    // }
  };

  return (
    <div className={`serv-card ${props.className || ""}`}>
      <img
        className="serv-card-img w-full h-48 object-cover rounded-t-lg"
        src={props.img}
        alt={props.title}
      />
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="serv-title my-2 text-xl font-bold text-white">
          {props.title}
        </h2>
        <div className="card-info text-base text-left text-gray-200">
          <p>{props.resume}</p>
          <ul className="list-disc text-left py-2 mx-6">
            {props.info?.map((data) => (
              <li key={data}>{data}</li>
            ))}
          </ul>
        </div>
        {/* CORRECCIÓN: Botón centrado, con ancho adaptable y borde blanco visible */}
        <button
          className="serv-btn mt-4 px-6 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-pink-200 transition-colors duration-300 cursor-pointer"
          onClick={handleClickServ}
        >
          {props.btntxt}
        </button>
      </div>
    </div>
  );
};

ServCards.propTypes = {
  type: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  info: PropTypes.array,
  btntxt: PropTypes.string,
  resume: PropTypes.any,
  pageRoute: PropTypes.string,
};
