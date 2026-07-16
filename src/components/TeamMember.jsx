import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../pages/TeamMemberStyles.css";
import { Navigate, useParams } from "react-router-dom";
import { getConsultorById } from "../helpers/getConsultorById";
import { useEffect, useMemo } from "react";
import { consultors } from "../../assets/data/consultors";

export const TeamMember = () => {
  const { id } = useParams();
  const { type } = location.state || {};
  const consultor = useMemo(
    () => getConsultorById(type, consultors, id),
    [type, id],
  );
  // console.log(consultor)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!consultor) return <Navigate to={"/home"} />;

  return (
    <>
      <div className="wrapper mt-14">
        <div className="page-header">
          <div className="team-titles pb-2">
            <h1 className="team-name">{consultor.name}</h1>
            <h5>
              <FontAwesomeIcon icon={faEnvelope} /> {consultor.email}
            </h5>
            <h3 className="team-title">{consultor.title}</h3>
          </div>
        </div>

        <div className="instructor-info grid grid-cols-1 md:grid-cols-2">
        <img
          src={`../../assets/${consultor.img}.png`}
          className="team-img w-5rem h-8rem mt-9 justify-self-center"
        />
        <div className="info-container">
          <div className="team-member-info">
            {consultor.resume.map((info) => {
              return (
                <p key={info} className="team-mem-info">
                  {info}
                </p>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
