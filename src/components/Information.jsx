import React from "react";

const Information = ({ name, icon, link }) => {
  return (
    <li className="w-[140px] h-[60px] rounded-xl flex items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#000000] ">
      <a
        className="flex justify-evenly gap-4 items-center w-full text-white text-base"
        href={link}
        target="_blank"
      >
        {name} {icon}
      </a>
    </li>
  );
};

export default Information;
