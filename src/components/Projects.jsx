import React from "react";
import Project from "./Project";

const Projects = ({ lists }) => {
  return (
    <div name="projects" className="w-full pt-24 text-gray-300 bg-[#0C2D48]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Projects
          </p>
          <p className="py-6 text-2xl">// Check out some of recent Projects.</p>
          <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {lists.map((project, index) => (
              <Project
                key={`project-${index}`}
                name={project.name}
                image={project.image}
                gitHub={project.gitHub}
                liveSite={project.liveSite}
                stacks={project.stacks}
                description={project.description}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
