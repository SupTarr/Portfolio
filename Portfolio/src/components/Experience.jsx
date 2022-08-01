import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="w-full pt-2 bg-[#0C2D48] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-500">
              Experience
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 text-[#a3adcc] hover:text-[#ffffff] duration-200">
          <div className=" text-4xl font-bold col-span-2 ">
            <p className="text-orange-500 ">
              Toyota Tsusho DENSO Electronics (Thailand)
            </p>
            <p className="text-lg italic ">Internship </p>
            <ul className="px-10 list-disc text-xl pt-4 text-[#a3adcc] hover:text-[#ffffff]">
              <li>
                Designed model of Battery and BMS (Battery Management System)
              </li>
              <li>
                Designed model of PMSM (Permanent Magnet Synchronous Motors)
                from mathematic equations and field oriented vector control
                (FOC)
              </li>
              <li>Python programming with Google Colab for Image Processing</li>
            </ul>
          </div>
          <div className="text-xl py-3 text-center">
            <p>April 2021 - June 2021</p>
            <p>Songkhla, Thailand</p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 pt-10 text-[#a3adcc] hover:text-[#ffffff] duration-200">
          <div className=" text-4xl font-bold col-span-2 ">
            <p className="text-orange-500">Prince of Songkla University</p>
            <p className="text-lg italic ">
              Bachelor of Engineering{" "}
              <span className="text-orange-500">
                (Mechatronics Engineering)
              </span>
            </p>
            <ul className="px-10 list-disc text-xl pt-4 text-[#a3adcc] hover:text-[#ffffff]">
              <li className="italic">
                Smart Agricultural Robot Contest 2020
                <ul className="not-italic px-2 list-[circle] text-xl pt-2 pb-4 text-[#a3adcc] hover:text-[#ffffff]">
                  <li className="font-[550]">Led a team to build a land leveling robot</li>
                  <li className="font-[550]">
                    Designed a blade for spread out soil and laser system for
                    measure land level
                  </li>
                </ul>
              </li>
              <li className="italic">
                Robot Design Camp: RDC 2021
                <ul className="not-italic px-2 list-[circle] text-xl pt-2 pb-4 text-[#a3adcc] hover:text-[#ffffff]">
                  <li className="font-[550]">
                    Mechatronics System Design: Types and important parts, Robot
                    control system (open loop and close loop control systems)
                  </li>
                  <li className="font-[550]">CAD for design a mechanism part of robot gripper</li>
                </ul>
              </li>
              <li className="italic">
                Programming for control manufacturing in industry (PLC)
                <ul className="not-italic px-2 list-[circle] text-xl pt-2 pb-4 text-[#a3adcc] hover:text-[#ffffff]">
                  <li className="font-[550]">
                    Used a software to simulate manufacturing in industry from
                    combining of sensor, actuator, and PLC (Programmable Logic
                    Controller)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text-xl py-3 text-center">
            <p>August 2018 - May 2022</p>
            <p>Songkhla, Thailand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
