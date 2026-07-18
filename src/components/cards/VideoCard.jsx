import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../Modal";
import { useAuthStore } from "../../hooks/useAuthStore";
import { onSetActiveVideo } from "../../store/videoSlice/videoSlice";

export const VideoCard = (props) => {
  const dispatch = useDispatch();
  const [videoModal, setvideoModal] = useState(false);
  const [deletingmodal, setdeletingModal] = useState(false);
  const { status } = useAuthStore();

  // console.log(props)
  // VIDEOBLOG LINK
  const handleVideoblogClick = (url) => {
    window.open(url);
  };

  // OPEN DELETE COURSE MODEL
  const handleDelete = (post) => {
    // console.log(post);
    console.log("delete video");
    dispatch(onSetActiveVideo(post));
    setdeletingModal(true);
  };

  // OPEN EDITION COURSE MODAL
  const openModal = (post) => {
    dispatch(onSetActiveVideo(post));
    // console.dir(post);
    setvideoModal(true);
  };

  // CLOSE EDITION COURSE MODAL
  const closeModal = () => {
    setvideoModal(false);
    dispatch(onSetActiveVideo(null));
  };

  // CLOSE DELETE COURSE MODAL
  const closeDeletingModal = () => {
    setdeletingModal(false);
    dispatch(onSetActiveVideo(null));
  };

  return (
    <div
      className="videoblog-banner-card bg-cover h-64"
      // style={{ backgroundImage: `url(${props.img})` }}
      style={{ backgroundImage: `url(../../../assets/${props.img}.png)`}}
      {...(status !== "Authenticated" && {
        onClick: () => handleVideoblogClick(props.url),
      })}
    >
      <br />
      <h2 className="serv-title">{props.title}</h2>
      {status === "Authenticated" && (
        <>
          <div className="admin-btns">
            <button
              onClick={() =>
                // console.log(props.user)
                openModal({ ...props, id: props.id, user: props.user })
              }
              className="edit-btn"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <Modal
              modalType={1}
              formType={5}
              formAction={1}
              info={props}
              openModal={videoModal}
              closeModal={() => closeModal(4)}
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
              info={props}
              openModal={deletingmodal}
              closeModal={() => closeDeletingModal(4)}
            >
              Eliminar {props.title}
            </Modal>
          </div>
        </>
      )}
    </div>
  );
};

VideoCard.propTypes = {
  id: PropTypes.string,
  type: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
  user: PropTypes.any,
  className: PropTypes.string,
};
