import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="w-full bg-[#0C2D48] pt-20 text-gray-300">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="inline border-b-4 border-orange-500 text-4xl font-bold">
              Experience
            </p>
          </div>
        </div>
        <div className="grid w-full max-w-[1000px] gap-8 px-4 text-[#a3adcc] duration-200 hover:text-[#ffffff] sm:grid-cols-3">
          <div className=" col-span-2 text-4xl font-bold ">
            <p className="text-orange-500 ">
              Toyota Tsusho DENSO Electronics (Thailand)
            </p>
            <p className="text-lg italic ">Internship </p>
            <ul className="list-disc px-10 pt-4 text-xl text-[#a3adcc]">
              <li className="hover:text-[#ffffff]">
                Designed model of Battery and BMS (Battery Management System)
              </li>
              <li className="hover:text-[#ffffff]">
                Designed model of PMSM (Permanent Magnet Synchronous Motors)
                from mathematic equations and field oriented vector control
                (FOC)
              </li>
              <li className="hover:text-[#ffffff]">
                Python programming with Google Colab for Image Processing
              </li>
            </ul>
          </div>
          <div className="py-3 text-center text-xl">
            <p>April 2021 - June 2021</p>
            <p>Songkhla, Thailand</p>
          </div>
        </div>

        <div className="grid w-full max-w-[1000px] gap-8 px-4 pt-10 text-[#a3adcc] duration-200 hover:text-[#ffffff] sm:grid-cols-3">
          <div className=" col-span-2 text-4xl font-bold ">
            <p className="text-orange-500">Prince of Songkla University</p>
            <p className="text-lg italic ">
              Bachelor of Engineering{" "}
              <span className="text-orange-500">
                (Mechatronics Engineering)
              </span>
            </p>
            <ul className="list-disc px-10 pt-4 text-xl text-[#a3adcc]">
              <li className="italic hover:text-[#ffffff]">
                Smart Agricultural Robot Contest 2020
                <ul className="list-[circle] px-2 pt-2 pb-4 text-xl not-italic text-[#a3adcc] hover:text-[#ffffff]">
                  <li className="font-[550]">
                    Led a team to build a land leveling robot
                  </li>
                  <li className="font-[550]">
                    Designed a blade for spread out soil and laser system for
                    measure land level
                  </li>
                </ul>
              </li>
              <li className="italic hover:text-[#ffffff]">
                Robot Design Camp: RDC 2021
                <ul className="list-[circle] px-2 pt-2 pb-4 text-xl not-italic text-[#a3adcc] hover:text-[#ffffff]">
                  <li className="font-[550]">
                    Mechatronics System Design: Types and important parts, Robot
                    control system (open loop and close loop control systems)
                  </li>
                  <li className="font-[550]">
                    CAD for design a mechanism part of robot gripper
                  </li>
                </ul>
              </li>
              <li className="italic hover:text-[#ffffff]">
                Programming for control manufacturing in industry (PLC)
                <ul className="list-[circle] px-2 pt-2 pb-4 text-xl not-italic text-[#a3adcc] hover:text-[#ffffff]">
                  <li className="font-[550]">
                    Used a software to simulate manufacturing in industry from
                    combining of sensor, actuator, and PLC (Programmable Logic
                    Controller)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="py-3 text-center text-xl">
            <p>August 2018 - May 2022</p>
            <p>Songkhla, Thailand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
