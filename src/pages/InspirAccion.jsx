import { inspoPosts } from "../data/inspoPost";
import { inspoHosts } from "../data/inspoHosts";
import { ProjectCard } from "../components/cards/ProjectCard";
import { getContentsByType } from "../helpers/getContents";
import "./InspirAccion.css";

export const InspirAccion = () => {
  const iposts = getContentsByType("5", inspoPosts);
  const hosts = getContentsByType("5", inspoHosts);

  return (
    <div className="inspo-desc mt-18">
      <div className="text-2xl mx-9.5 md:mx-5 lg:mx-10 flex flex-row flex-wrap gap-x-6 gap-y-4 text-justify pt-6">
        <ProjectCard
          type={iposts[0].type}
          title={iposts[0].title}
          resume={iposts[0].post}
          img={iposts[0].img}
          imgUrl={"../../../assets/inspo/"}
        />
        <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto mt-8" />
      </div>

      <div className="hosts-container text-2xl mx-9.5 md:mx-15 lg:mx-20 flex flex-row flex-wrap gap-x-6 gap-y-4 text-justify pt-6">
        {hosts.map((host) => {
          return (
            <>
              <ProjectCard
                id={host.id}
                title={host.name}
                resume={host.bio}
                img={host?.img}
                imgUrl={"../../../assets/inspo/hosts/"}
              />
            </>
          );
        })}
        <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto mt-8" />
      </div>

      <div className="text-2xl mx-9.5 md:mx-15 lg:mx-20 flex flex-row flex-wrap gap-x-6 gap-y-4 text-justify pt-6">
        <ProjectCard
          type={Number(iposts[1].type)}
          title={iposts[1].title}
          resume={iposts[1].post}
          img={iposts[1].img}
          imgUrl={"../../assets/inspo/inspoImgs/"}
        />
        <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto mt-8" />
      </div>

      <div className="text-2xl mx-9.5 md:mx-15 lg:mx-20 flex flex-row flex-wrap gap-x-6 gap-y-4 text-justify pt-6">
        <ProjectCard
          type={Number(iposts[2].type)}
          title={iposts[2].title}
          resume={iposts[2].post}
          img={iposts[2].img}
          imgUrl={"../../assets/inspo/inspoImgs/"}
        />
        <hr className="w-8/10 md:w-9/10 lg:w-9/10 mx-auto mt-8" />
      </div>
    </div>
  );
};
