import React from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = ({ name, gitHub, image, liveSite, stacks, description }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="content-div group container my-auto flex items-center justify-center rounded-md shadow-lg shadow-[#040c16]"
    >
      <div className="text-center opacity-0 duration-300 group-hover:opacity-100">
        <span className="text-2xl font-bold tracking-wider text-white">
          {name}
        </span>
        <div className="pt-8 text-center">
          {Array.isArray(gitHub) ? (
            gitHub.map((link, index) => (
              <a title={link} href={link} target="_blank" key={index}>
                <button
                  title={link}
                  className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700 active:bg-[#288fff]"
                >
                  <SiGithub title={link} size="2rem" />
                </button>
              </a>
            ))
          ) : (
            <a title={gitHub} href={gitHub} target="_blank">
              <button
                title={gitHub}
                className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700 active:bg-[#288fff]"
              >
                <SiGithub title={gitHub} size="2rem" />
              </button>
            </a>
          )}
          <a title={liveSite} href={liveSite} target="_blank">
            <button
              title={liveSite}
              className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700 active:bg-[#288fff]"
            >
              <HiOutlineExternalLink title={liveSite} size="2rem" />
            </button>
          </a>
        </div>
        <p className="text-center">{"Stacks: " + stacks}</p>
        <p className="mx-3 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Project;
