import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full pt-24 bg-[#0C2D48] text-gray-300 ">
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
            <p className="text-justify text-2xl indent-10 py-1">
              I have experiences with C, Python, HTML, CSS, Bootstrap, React,
              JavaScript programming skills from the classroom and learning
              beyond classroom with training courses.
              <span className="text-yellow-300"> JavaScript</span>. Currently,
              learning <span className="text-yellow-300"> Cypress </span>
              and <span className="text-yellow-300"> Robot Framework</span>.
              Looking forward to learning about{" "}
              <span className="text-yellow-300">Software Testing</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
