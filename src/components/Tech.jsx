import React from "react";

const Tech = ({ name, image }) => {
  return (
    <div className="shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl">
      <img className="w-20 mx-auto mt-5" src={image} alt={`${name} icon`} />
      <p className="text-lg my-4 font-bold">{name}</p>
    </div>
  );
};

export default Tech;
