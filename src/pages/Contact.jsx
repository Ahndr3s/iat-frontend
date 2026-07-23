import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { testimonials } from "../../assets/data/testimonials";
import { TestimonialCard } from "../components/cards/TestimonialCard";
import { getContentsByType } from "../helpers/getContents";
import { AutoSlider } from "../components/sliders/AutoSlider";
import "./ContactStyles.css";


export const Contact = () => {
  const instagramUrl = "https://www.instagram.com/iatutores/";
  const facebookUrl = "https://www.facebook.com/iatutores?mibextid=ZbWKwL";
  const youtubekUrl = "https://www.youtube.com/@IATutores";

  const commens = getContentsByType("7", testimonials);
  // console.log(commens);

  return (
    <>
      <h1 className="page-title text-5xl py-4 text-center pt-25">
        Contáctanos
      </h1>
      <div className="socials-container">
        <h2 className="socials-subtitle text-5xl">Únete a la comunidad</h2>
        <div className="socials-icons">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href={youtubekUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
        </div>
      </div>

      <h2 className="testimonies-header text-4xl mb-16 md:ml-32">
        Casos de éxito
      </h2>
      <div className="testimony-container mb-12">
        {/* <TestimonialCard
          id={commens[0].id}
          name={commens[0].name}
          quote={commens[0].quote}
        /> */}
      <AutoSlider sliderType={2} cards={commens} />
      </div>
    </>
  );
};