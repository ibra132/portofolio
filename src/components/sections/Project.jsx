import React from "react";
import { listProjects, GradientImage } from "../../data";

const Project = () => {
  return (
    <section
      id="project"
      className=" text-white min-h-[742px] bg-cover bg-center"
      style={{ backgroundImage: `url(${GradientImage})` }}
    >
      <div className="flex flex-col justify-center items-center space-y-5 px-5 py-20">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-justify">Several projects that I have worked on</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {listProjects.map((item) => (
            <div
              key={item.id}
              className="p-4 space-y-5 border-1 border-white rounded-lg bg-black/50"
            >
              <h2 className="font-bold text-xl">{item.project}</h2>
              <p className="font-thin">{item.description}</p>
              <div className="flex gap-2 flex-wrap">
                {item.tools.map((tool) => (
                  <span
                    className="bg-zinc-800 text-xs font-medium rounded-md p-2"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-full inline-block text-center text-black px-4 py-2 rounded-lg cursor-pointer"
              >
                See Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
