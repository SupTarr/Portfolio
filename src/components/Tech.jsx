import React from "react";

const Tech = ({ name, image }) => {
  return (
    <div className="rounded-xl bg-[#1e2227] shadow-lg shadow-[#040c16] duration-500 hover:scale-110">
      <img className="mx-auto mt-5 w-20" src={image} alt={`${name} icon`} />
      <p className="my-4 text-lg font-bold">{name}</p>
    </div>
  );
};

export default Tech;
