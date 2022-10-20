import React from "react";
import Colmar from "../images/ColmarAcademy.png";
import Adhoc from "../images/adhoc.png";
import findYourHat from "../images/findYourHat.png";
import Jammming from "../images/Jammming.png";
import Ravenous from "../images/Ravenous.png";
import Immifit from "../images/Immifit.png";
import myIntroInReason from "../images/myIntroInReason.png";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const projectLists = [
  {
    name: "Colmar Academy",
    image: Colmar,
    gitHub: "https://github.com/SupTarr/ColmarAcademy",
    liveSite: "https://suptarr.github.io/ColmarAcademy/",
    stacks: "HTML, CSS",
    desscription:
      "Made a website from wireframe with HTML, plain CSS, and responsive design",
  },
  {
    name: "Adhoc",
    image: Adhoc,
    gitHub: "https://github.com/SupTarr/Adhoc",
    liveSite: "https://suptarr.github.io/Adhoc/",
    stacks: "HTML, Bootstrap",
    desscription:
      "Made a website from wireframe with HTML, Bootstrap, and responsive design",
  },
  {
    name: "Find Your Hat",
    image: findYourHat,
    gitHub: "https://github.com/SupTarr/findYourHat",
    liveSite: "https://replit.com/@SupTarr/findYourHat#README.md",
    stacks: "JavaScript",
    desscription:
      "Used a JavaScript (Function, Conditional Statements, and Class) to make a game that controlled to get a hat without falling into a hole",
  },
  {
    name: "Jammming",
    image: Jammming,
    gitHub: "https://github.com/SupTarr/Jammming",
    liveSite: "https://tarjammming.surge.sh/",
    stacks: "HTML, CSS, JavaScript, ReactJS",
    desscription:
      "Made a website with ReactJS and managed a song data from Spotify API to show a song and added a song to a new Spotify playlist",
  },
  {
    name: "Ravenous",
    image: Ravenous,
    gitHub: "https://github.com/SupTarr/Ravenous",
    liveSite: "https://supravenous.surge.sh/",
    stacks: "HTML, CSS, JavaScript, ReactJS",
    desscription:
      "Made a website with ReactJS and managed businesses data from Yelp API to show each data",
  },
  {
    name: "Immifit",
    image: Immifit,
    gitHub: [
      "https://github.com/SupTarr/FrontendImmifit",
      "https://github.com/SupTarr/BackendImmifit",
    ],
    liveSite: "https://immifit.vercel.app/",
    stacks: "MongoDB, Express, ReactJS, NodeJS",
    desscription:
      "Made a website application with MERN stack for exercise tracker",
  },
  {
    name: "My Intro In Reason",
    image: myIntroInReason,
    gitHub: "https://github.com/SupTarr/myIntroInReason",
    liveSite: "https://suptarrescript.surge.sh/",
    stacks: "HTML, CSS, JavaScript, ReactJS, ReScript",
    desscription:
      "My introduction to the ReScript that combined with React to make a React component",
  },
];

const Project = () => {
  return (
    <div name="projects" className="w-full pt-24 text-gray-300 bg-[#0C2D48]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Projects
          </p>
          <p className="py-6 text-2xl">// Check out some of recent Projects.</p>
          <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectLists.map((project, index) => (
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
                  <p className="text-center mx-3">{project.desscription}</p>
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
