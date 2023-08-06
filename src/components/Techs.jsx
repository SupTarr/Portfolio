import React from "react";
import Tech from "./Tech";

const Techs = ({ lists }) => {
  return (
    <div name="skills" className="w-full bg-[#0C2D48] pt-24 text-gray-300">
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div>
          <p className="inline border-b-4 border-pink-600 text-4xl font-bold ">
            Skills
          </p>
          <p className="py-4 text-2xl">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          {lists.map((list, index) => {
            return (
              <Tech key={`tech-${index}`} name={list.name} image={list.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techs;
