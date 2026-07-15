// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useParams, Navigate } from "react-router-dom";
// import { useVideoStore } from "../hooks/useVideoStore";
import { useCourseStore } from "../hooks/useCourseStore";
import { getConsultorById } from "../helpers/getConsultorById";
// import {
//   faClock,
//   faCalendar,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
import "../pages/CoursePageStyles.css";

export const CoursePage = () => {
  const { id } = useParams();
  const location = useLocation();
  // const { videos } = useVideoStore();
  // const { type } = location.state || {};
  const { type } = location.state || 2;
  const { courses } = useCourseStore();

  //  Static record search
  const content = courses ? getConsultorById(type, courses, id) : null;

  if (!content) return <Navigate to={"/courses"} replace />;

  //Dynamic record search
  // if (type === 2) {
  // content = getConsultorById(type, courses, id);
  // } else if (type === 4) {
  // content = getConsultorById(type, videos, id);
  // }

  console.dir(content);
  return (
    <>
      <div className="course-wrapper mt-18 w-screen min-h-screen overflow-y-auto flex flex-col">
        <div
          className="course-header w-full h-[50vh] flex flex-col justify-center items-center bg-center bg-no-repeat relative shrink-0 p-8"
          style={{ backgroundImage: `url(${content.img})` }}
        >
          <div className="course-title inset-0 z-0 ">
            <h1 className="page-title text-4xl bg-black/40 font-bold z-10 text-center md:text-justify px-4 shadow-sm">
              {content.name}
            </h1>
          </div>
        </div>

        <div className="course-info w-full text-left md:text-justify flex flex-col py-12 px-6 grow">
          <div className="c-info md:w-3/4 mx-auto space-y-6 text-gray-200 wrap-break-words px-4">
            <div className="c-resume md:px-8">
              <h4 className="mb-2">¿Qué es?</h4>
              <p className="px-4">{content.resume}</p>
            </div>
            <div className="c-resume">
              <h4 className="mb-2">Aprenderás</h4>
              <ul className="px-4">
                {content.info.map((data) => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
            </div>
            <div className="c-resume">
              <h4 className="mb-2">Impartido por</h4>
              <div>
                {/* <h6>{content.instructor.name}</h6>
                <p className="px-4">{content.instructor.bio}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
