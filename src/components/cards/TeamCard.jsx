import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const TeamCard = (props) => {
  const navigate = useNavigate();
  const imgUrl = `../../assets/${props.img}.png`;

  // TEAM MEMBER WINDOW
  const handleClickTeamMember = (id) => {
    navigate(`/teamMember/${id}`, {
      replace: true,
      state: { type: props.type },
    });
  };

  return (
    <div className={`team-card ${props.className || ""}`}>
      <h2 className="team-name pb-3">{props.title}</h2>
      <div className="team-card-body">
        <img className="team-card-img md:max-w-xs lg:max-w-xs" src={imgUrl} />
        <div className="team-data">
          <p className="p-resume text-[0.86rem] md:text-base lg:text-base md:max-w-sm lg:max-w-sm">
            {props.resume}
          </p>
          <button
            className="serv-btn mt-4 w-sm md:ml-5 lg:ml-5 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-pink-200 transition-colors duration-300 cursor-pointer"
            onClick={() => handleClickTeamMember(props.id)}
          >
            {props.btntxt}
          </button>
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  info: PropTypes.array,
  btntxt: PropTypes.string,
  resume: PropTypes.any,
  pageRoute: PropTypes.string,
};
