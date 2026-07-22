import { projects } from "../../assets/data/Projects";
import { ProjectCard } from "../components/cards/ProjectCard";
import { getContentsByType } from "../helpers/getContents";
import "./ProjectsStyles.css";

export const Projects = () => {
  const proj = getContentsByType("5", projects);
  //   console.log(proj);
  return (
    <div className="mt-18">
      <h1 className="page-title text-5xl py-4 text-center">
        Proyectos Escolares
      </h1>

      <div className="project-desc text-2xl mx-9.5 md:mx-40 lg:mx-50 flex flex-row flex-wrap gap-x-6 gap-y-4 text-justify pt-6">
        <p>
          En{" "}
          <span className="iat-highlight">
            <span>IA</span> <span>TUTORES</span>
          </span>{" "}
          acompañamos y co-diseñamos experiencias educativas junto con las
          escuelas, partiendo de sus necesidades reales, su contexto y sus
          posibilidades.
        </p>
        <p>
          Cada proyecto que presentamos aquí nació del trabajo colaborativo con
          comunidades escolares que buscaban fortalecer el aprendizaje, la
          convivencia, la participación estudiantil o la innovación pedagógica.
        </p>
        <p>
          Nuestro acompañamiento ayudó a transformar esas ideas en experiencias
          organizadas, aplicables y con impacto: torneos, proyectos escolares,
          espacios socioemocionales, foros docentes y propuestas que pueden
          inspirar a otras escuelas.
        </p>
      </div>

      <div className="project-container">
        {proj.map((project) => {
          return (
            <>
              <ProjectCard
                id={project.id}
                title={project.title}
                subTitle={project.subTitle}
                resume={project.resume}
                img={project?.img}
                videoUrl={project?.url}
                imgUrl={"../../../assets/projectImgs/"}
              />
              <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto mt-8" />
            </>
          );
        })}
      </div>
    </div>
  );
};
