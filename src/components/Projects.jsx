import React from "react";
import Project from "./Project";

const Projects = ({ lists }) => {
  return (
    <div name="projects" className="w-full bg-[#0C2D48] pt-24 text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-green-600 text-4xl font-bold text-gray-300">
            Projects
          </p>
          <p className="py-6 text-2xl">// Check out some of recent Projects.</p>
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
