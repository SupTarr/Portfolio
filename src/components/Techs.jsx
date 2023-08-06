import React from "react";
import Tech from "./Tech";

const Techs = ({ lists }) => {
  return (
    <div name="skills" className="w-full pt-24 bg-[#0C2D48] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-2xl">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {lists.map((list, index) => {
            <Tech key={`tect-${index}`} name={list.name} image={list.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Techs;
