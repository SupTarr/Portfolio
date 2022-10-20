import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full pt-24 bg-[#0C2D48] text-gray-300 z-0">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hello, there</p>
          </div>
          <div>
            <p className="text-justify text-2xl indent-10">
              I recently completed the Bachelor of Engineering Program in
              Mechatronics Engineering. I learned{" "}
              <span className="text-yellow-300">C</span> and{" "}
              <span className="text-yellow-300">Python</span> programming in
              university and have some experience with both. While at Generation
              Thailand's Junior Software Developer Bootcamp, I learned{" "}
              <span className="text-yellow-300">MERN full-stack developer</span>{" "}
              skills to shift careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
