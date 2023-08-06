import React from "react";

const About = () => {
  return (
    <div name="about" className="z-0 w-full bg-[#0C2D48] pt-24 text-gray-300">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline border-b-4 border-yellow-400 text-4xl font-bold">
              About
            </p>
          </div>
        </div>
        <div className="grid w-full max-w-[1000px] gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right ">
            <p>Hello, there</p>
          </div>
          <div>
            <p className="text-justify indent-10 text-2xl">
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
