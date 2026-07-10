import "./AboutStyles.css";
import { ContentList } from "../components/ContentList";

export const About = () => {
  return (
    <>
      <h1 className="page-title mt-25">Sobre Nosotros</h1>
      <div className="text-info mt-6">
        <p className="p-info mx-8">
          En IA Tutores, reinventamos el camino hacia la excelencia educativa.
          Como pioneros en el coaching educativo, nuestra misión trasciende la
          enseñanza tradicional; nos dedicamos a encender la chispa del
          crecimiento tanto académico como personal en maestros y estudiantes
          por igual.
        </p>
      </div>

      <div className="team-container" id="team-container">
        <h3 className="subtitle mt-6 ml-6 md:ml-64 lg:ml-64">Nuestro equipo</h3>
        <p className="txt-team mb-1 text-2xl text-justify">
          Estamos encantados de presentar a nuestro equipo de profesionales
          dedicados a redefinir su experiencia en educacion
        </p>
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <ContentList contentType="3" />
        </div>
      </div>
    </>
  );
};
