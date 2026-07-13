import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faClock,
  faCalendar,
  faLocationDot,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../Modal";
import { useAuthStore } from "../../hooks/useAuthStore";
import { onSetActiveCourse } from "../../store/courseSlice/courseSlice";

export const CourseCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [deletingmodal, setdeletingModal] = useState(false);
  const { status } = useAuthStore();

  // COURSE INSCIPTION
  const handleClickCourse = () => {
    window.open("https://wa.me/message/W54JEKQVCRT7J1");
  };

  // COURSE WINDOW
  const handleClickCourseDetails = (props) => {
    dispatch(onSetActiveCourse(props));
    navigate(`/coursePage/${props.id}`, {
      replace: true,
      state: { type: props.type },
    });
  };

  // OPEN DELETE COURSE MODEL
  const handleDelete = (post) => {
    // console.log(post);
    if (post.type === 2) {
      console.log("delete course");
      dispatch(onSetActiveCourse(post));
    } else if (post.type === 4) {
      console.log("delete video");
      dispatch(onSetActiveVideo(post));
    }
    setdeletingModal(true);
  };

  // OPEN EDITION COURSE MODAL
  const openModal = (post) => {
    if (post.type === 2) {
      dispatch(onSetActiveCourse(post));
      // console.dir(post);
      setModal(true);
    } else if (post.type === 4) {
      dispatch(onSetActiveVideo(post));
      // console.dir(post);
      setvideoModal(true);
    }
  };

  // CLOSE EDITION COURSE MODAL
  const closeModal = (option) => {
    if (option === 2) {
      setModal(false);
      dispatch(onSetActiveCourse(null));
    } else if (option === 4) {
      setvideoModal(false);
      dispatch(onSetActiveVideo(null));
    }
  };

  // CLOSE DELETE COURSE MODAL
  const closeDeletingModal = (option) => {
    setdeletingModal(false);
    if (option === 2) {
      dispatch(onSetActiveCourse(null));
    } else if (option === 4) {
      dispatch(onSetActiveVideo(null));
    }
  };

  return (
    <div className="course-card">
      <img className="course-card-img" src={props.img} />
      <div className="card-info">
        <h5 className="course-mod">{props.modality}</h5>
        <h3 className="course-title">{props.title}</h3>
        <div className="course-data">
          <p className="c-details">
            <FontAwesomeIcon icon={faClock} /> {props.Coursedata[0]}
          </p>
          <p className="c-details">
            <FontAwesomeIcon icon={faCalendar} /> {props.Coursedata[1]}
          </p>
          <p className="c-details">
            <FontAwesomeIcon icon={faLocationDot} /> {props.Coursedata[2]}
          </p>
        </div>
        <div className="c-info">
          <ul className="c-list">
            {props.info.map((data) => {
              return <li key={data}>{data}</li>;
            })}
          </ul>
        </div>
        <button className="serv-btn" onClick={handleClickCourse}>
          {props.btntxt}
        </button>
        <button
          className="serv-btn"
          onClick={() =>
            handleClickCourseDetails({
              ...props,
              id: props.id,
              user: props.user,
            })
          }
        >
          Ver Más
        </button>
        {status === "Authenticated" && (
          <>
            <div className="admin-btns">
              <button
                onClick={() =>
                  // console.log(props)
                  openModal({ ...props, id: props.id, user: props.user })
                }
                className="edit-btn"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <Modal
                modalType={1}
                formType={4}
                formAction={1}
                openModal={modal}
                info={props}
                closeModal={() => closeModal(2)}
              >
                Editar {props.title}
              </Modal>
              <button
                onClick={() => handleDelete({ ...props, id: props.id })}
                className="del-btn"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <Modal
                modalType={2}
                openModal={deletingmodal}
                info={props}
                closeModal={() => closeDeletingModal(2)}
              >
                Eliminar {props.title}
              </Modal>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  id: PropTypes.string,
  type: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  modality: PropTypes.string,
  info: PropTypes.array,
  btntxt: PropTypes.string,
  resume: PropTypes.any,
  Coursedata: PropTypes.array,
  pageRoute: PropTypes.string,
  url: PropTypes.string,
  ref: PropTypes.any,
  user: PropTypes.any,
};
