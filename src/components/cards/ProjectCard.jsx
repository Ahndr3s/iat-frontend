import PropTypes from "prop-types";
import { ClassicSlider } from "../sliders/ClassicSlider";

export const ProjectCard = (props) => {
  // Define si mostrar un slider o una imagen estatica
  const showSlider = Array.isArray(props.img) && props.img.length > 0;
  const showSingleImage =
    !showSlider &&
    (!props.img || typeof props.img === "string" || props.videoUrl);
  const singleImageSrc =
    typeof props.img === "string" ? props.img : props.videoUrl;

  // Define la ruta de la imagen a mostrar
  const defaultSrc = !props.img
    ? `../../../assets/ia_banner.png`
    : `${props.imgUrl}${singleImageSrc}.png`;

  // VIDEOBLOG LINK
  const handleVideoblogClick = () => {
    window.open(props.videoUrl, "_blank", "noopener, noreferrer");
  };

  return (
    <div className="text-2xl my-2 flex flex-col">
      <div className=" py-4 mx-10 md:mx-40 lg:mx-50 mt-2">
        <h2 className="project-title text-4xl">{props.title}</h2>
        <h3 className="project-subtitle text-2xl">{props.subTitle}</h3>
      </div>

      <div className="project-info text-lg mx-6 md:mx-40 lg:mx-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 text-left pt-6 items-start">
        {showSlider && (
          // Muestra un slider de imagenes
          <div className="w-full min-h-62.5 md:min-h-100 flex justify-center items-center">
            <ClassicSlider
              cardType={5}
              cards={props.img}
              imgUrl={props.imgUrl}
            />
          </div>
        )}

        {showSingleImage && (
          // Muestra una imgane estatica con un link a un video opcional
          <div className="w-full min-h-62.5 md:min-h-100 flex justify-center items-center overflow-hidden rounded-lg shadow-md">
            <img
              src={defaultSrc}
              alt={props.title}
              onClick={props.videoUrl ? handleVideoblogClick : undefined}
              className="w-full h-full object-cover min-h-62.5 md:min-h-100"
            />
          </div>
        )}

        {/* Texto descriptivo */}
        <div className="flex flex-col gap-y-4 text-justify w-full">
          {props.resume.map((parr, idx) => {
            return (
              <p key={`${props.id}-${idx}`} className="">
                {parr}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  type: PropTypes.number,
  id: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  resume: PropTypes.array,
  img: PropTypes.any,
  videoUrl: PropTypes.string,
  imgUrl: PropTypes.string,
  className: PropTypes.string,
};
