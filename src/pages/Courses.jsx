import { useEffect, useState } from "react";
// import { useAuthStore } from "../hooks/useAuthStore";
// import { Slider } from "../components/Slider";
// import { NewsBanner } from "../components/NewsBanner";
// import { Modal } from "../components/Modal";
import { useCourseStore } from "../hooks/useCourseStore";
import { useVideoStore } from "../hooks/useVideoStore";
import "./CoursesStyles.css";

// provitional static content
import { ContentList } from "../components/ContentList";
import { ClassicSlider } from "../components/sliders/ClassicSlider";
import { getContentsByType } from "../helpers/getContents";

export const Courses = () => {
  // const [courseModal, setcourseModal] = useState(false);
  // const [videoModal, setvideoModal] = useState(false);
  // const { status, user } = useAuthStore();
  // const { courses, startLoadingCourses } = useCourseStore();
  // const { videos, startLoadingVideos } = useVideoStore();
  const { startLoadingCourses } = useCourseStore();
  const { startLoadingVideos } = useVideoStore();

  const cards = getContentsByType("2");
  console.log(cards);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const handleCreateCourse = () => {
  //   console.log('soy el user '+user.name)
  //   setcourseModal(true);
  // };

  // const handleCreateVideo = () => {
  //   console.log('soy el user '+user.name)
  //   setvideoModal(true);
  // };

  useEffect(() => {
    startLoadingCourses();
  }, [startLoadingCourses]);

  useEffect(() => {
    startLoadingVideos();
  }, [startLoadingVideos]);

  return (
    <>
      <h1 className="page-title mt-25">Cursos y Talleres</h1>

      <div className="banner">
        <h3 className="c-subtitle">Nuevos Lanzamientos</h3>
        {/* <NewsBanner /> */}
        <div className=" grid grid-cols-1 justify-items-center justify-center md:grid-cols-2 lg:grid-cols-2">
          <ContentList contentType="2" />
          <ClassicSlider cards={cards} />
        </div>
        {/* {status === "Authenticated" && (
          <>
            <div className="admin-btns">
              <button onClick={handleCreateCourse} className="serv-btn">
                Crear Curso
              </button>
              <Modal
                modalType={1}
                formType={4}
                formAction={0}
                openModal={courseModal}
                info={user}
                closeModal={() => setcourseModal(false)}
              >
                Crear Curso
              </Modal>
              <button onClick={handleCreateVideo} className="serv-btn">
                Crear VideoBlog
              </button>
              <Modal
                modalType={1}
                formType={5}
                formAction={0}
                openModal={videoModal}
                closeModal={() => setvideoModal(false)}
              >
                Crear VideoBlog
              </Modal>
            </div>
          </>
        )} */}
      </div>

      <div className="categorie">
        <h4>Más Populares</h4>
        {/* <Slider type={1} cards={<ContentList contentType='2'/>} /> */}
        {/* <Slider type={1} cards={courses} /> */}
      </div>
      <div className="categorie">
        <h4>Más Videos</h4>
        <hr />
        {/* <Slider type={1} cards={<ContentList contentType='2'/>} /> */}
        {/* <Slider type={1} cards={videos} /> */}
      </div>

      {/* <div className="categorie">
        <h4>Recomendaciones para tí</h4>
        <hr />
        {/* <Slider type={1} cards={<ContentList contentType='2'/>} />*/}
      {/* <Slider type={2} cards={videos} /> */}
      {/* </div> */}
    </>
  );
};
