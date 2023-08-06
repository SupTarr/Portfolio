import React from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = ({ name, gitHub, image, liveSite, stacks, description }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center my-auto content-div"
    >
      <div className="opacity-0 text-center group-hover:opacity-100 duration-300">
        <span className="text-2xl font-bold text-white tracking-wider">
          {name}
        </span>
        <div className="pt-8 text-center">
          {Array.isArray(gitHub) ? (
            gitHub.map((link, index) => (
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
            <a title={gitHub} href={gitHub} target="_blank">
              <button
                title={gitHub}
                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]"
              >
                <SiGithub title={gitHub} size="2rem" />
              </button>
            </a>
          )}
          <a title={liveSite} href={liveSite} target="_blank">
            <button
              title={liveSite}
              className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]"
            >
              <HiOutlineExternalLink title={liveSite} size="2rem" />
            </button>
          </a>
        </div>
        <p className="text-center">{"Stacks: " + stacks}</p>
        <p className="text-center mx-3">{description}</p>
      </div>
    </div>
  );
};

export default Project;
