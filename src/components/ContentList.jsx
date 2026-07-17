import PropTypes from "prop-types";
// import { Card } from "./Card";
import { getContentsByType } from "../helpers/getContents";
import { TeamCard } from "./cards/TeamCard";
import { CourseCard } from "./cards/CourseCard";

export const ContentList = (props) => {
  const contents = getContentsByType(
    props.contentType,
    props.contents,
    props.limit,
  );
  let cardList = [];
  let combinedProps;

  contents.forEach((content) => {
    // Definir las props específicas para '2', '3', y '4'
    let additionalProps = {};

    if (props.contentType === "2") {
      // console.log("courseCard");
      //COURSES
      additionalProps = {
        // info: content.aprendizaje,
        learning: content.learning,
        resume: content.resume,
        pitch: content.pitch,
        instructor: content.instructor,
        btntxt: content.btntxt,
        // Más props específicas para COURSES
      };
    } else if (props.contentType === "3") {
      // console.log("teamCard");
      //TEAM MEMBERS
      additionalProps = {
        resume: content.resume,
        btntxt: content.btntxt,
        email: content.email,
        role: contents.role,
        info: content.info,
        // Más props específicas para TEAM MEMBERS
      };
    } else if (props.contentType === "4") {
      // console.log("videoCard");
      //VIDEOS
      additionalProps = {
        url: content.url,
        user: content.user,
        // Más props específicas para VIDEOS
      };
    }

    if (props.contentType !== 5) {
      // Combina las props generales con las props específicas
      combinedProps = {
        id: content.id,
        type: Number(props.contentType),
        title: content.name,
        img: content.img,
        ...additionalProps,
      };
    } else {
      combinedProps = props.childrenImgs;
    }

    // Agrega el componente Card a la lista
    switch (Number(props.contentType)) {
      case 1:
        // console.log("servCard");
        break;
      case 2:
        // console.log(combinedProps);
        cardList.push(
          <CourseCard
            className="my-4 overflow-hidden"
            {...combinedProps}
            key={content.id}
          />,
        );
        break;
      case 3:
        // console.log("teamCard");
        cardList.push(
          <TeamCard
            className="my-4 overflow-hidden px-2"
            {...combinedProps}
            key={content.id}
          />,
        );
        break;

      default:
        break;
    }
    // cardList.push(<Card {...combinedProps} key={content.id} />);
  });

  // Si listType es '1', devuelve el array de componentes Card
  if (props.listType === "1") {
    return cardList;
    // console.log(cardList)
  }

  // En cualquier otro caso, renderiza los componentes Card directamente
  return <>{cardList}</>;
};

ContentList.propTypes = {
  contents: PropTypes.any,
  contentType: PropTypes.string,
  limit: PropTypes.number,
  listType: PropTypes.string,
  childrenImgs: PropTypes.array,
};
