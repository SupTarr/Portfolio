import React from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = ({ lists }) => {
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
              <div
                key={index}
                style={{ backgroundImage: `url(${project.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center my-auto content-div"
              >
                <div className="opacity-0 text-center group-hover:opacity-100 duration-300">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {project.name}
                  </span>
                  <div className="pt-8 text-center">
                    {Array.isArray(project.gitHub) ? (
                      project.gitHub.map((link, index) => (
                        <a title={link} href={link} target="_blank" key={index}>
                          <button
                            title={link}
                            className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]"
                          >
                            <SiGithub title={link} size="2rem" />
                          </button>
                        </a>
                      ))
                    ) : (
                      <a
                        title={project.gitHub}
                        href={project.gitHub}
                        target="_blank"
                      >
                        <button
                          title={project.gitHub}
                          className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]"
                        >
                          <SiGithub title={project.gitHub} size="2rem" />
                        </button>
                      </a>
                    )}
                    <a
                      title={project.liveSite}
                      href={project.liveSite}
                      target="_blank"
                    >
                      <button
                        title={project.liveSite}
                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]"
                      >
                        <HiOutlineExternalLink
                          title={project.liveSite}
                          size="2rem"
                        />
                      </button>
                    </a>
                  </div>
                  <p className="text-center">{"Stacks: " + project.stacks}</p>
                  <p className="text-center mx-3">{project.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project;
