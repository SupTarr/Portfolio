import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full bg-[#0C2D48] pt-28 pb-10 text-gray-300"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1000px] justify-start">
          <div className=" pb-8 pl-4 sm:text-right">
            <p className="inline border-b-4 border-blue-500 text-4xl font-bold">
              Education
            </p>
          </div>
        </div>
        <div className="grid w-full max-w-[1000px] gap-8 px-4 text-[#a3adcc] duration-200 hover:text-[#ffffff] sm:grid-cols-3">
          <div className=" col-span-2 text-4xl font-bold ">
            <p className="text-blue-500 ">Generation Thailand</p>
            <p className="text-lg italic ">
              Junior Software Developer Bootcamp{" "}
              <span className="text-blue-500">(JSD)</span>
            </p>
            <ul className="pt-4 text-xl text-[#a3adcc] hover:text-[#ffffff]">
              <li>
                <span className="font-bold italic">Technical Skills </span>:{" "}
                <span className="font-[550]">
                  HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, Express,
                  Web API, SQL, PostgreSQL, MongoDB, Git and GitHub
                </span>
              </li>
              <li>
                <span className="font-bold italic underline-offset-auto">
                  Soft Skills{" "}
                </span>
                :{" "}
                <span className="font-[550]">
                  Growth Mindset, Persistence, Future Orientation, Orientation
                  to Details and Teamwork
                </span>
              </li>
            </ul>
          </div>
          <div className="py-3 text-center text-xl">
            <p>May 2022 - August 2022</p>
            <p>Online, Thailand</p>
          </div>
        </div>

        <div className="grid w-full max-w-[1000px] gap-8 px-4 pt-10 text-[#a3adcc] duration-200 hover:text-[#ffffff] sm:grid-cols-3">
          <div className=" col-span-2 text-4xl font-bold">
            <p className="text-blue-500">Prince of Songkla University</p>
            <p className="text-lg italic ">
              Bachelor of Engineering{" "}
              <span className="text-blue-500">(Mechatronics Engineering)</span>
            </p>
            <ul className="pt-4 text-xl text-[#a3adcc] hover:text-[#ffffff]">
              <li>
                Full scholarship from Faculty of Engineering (Lookprabida
                scholarship)
              </li>
            </ul>
          </div>
          <div className="py-3 text-center text-xl">
            <p>August 2018 - May 2022</p>
            <p>Songkhla, Thailand</p>
          </div>
        </div>

        <div className="grid w-full max-w-[1000px] gap-8 px-4 pt-10 text-[#a3adcc] duration-200 hover:text-[#ffffff] sm:grid-cols-3">
          <div className=" col-span-2 text-4xl font-bold">
            <p className="text-blue-500">PSU Wittayanusorn</p>
            <p className="text-lg italic ">
              Science Classrooms in University-Affiliated School Project{" "}
              <span className="text-blue-500">(SCiUS)</span>
            </p>
            <ul className="pt-4 text-xl text-[#a3adcc] hover:text-[#ffffff]">
              <li>
                With cooperation from the Ministry of Science and Technology,
                this project supports the training of science from among
                students with special talents.
              </li>
            </ul>
          </div>
          <div className="py-3 text-center text-xl">
            <p>May 2015 - March 2018</p>
            <p>Songkhla, Thailand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
