import React from "react";

const Information = ({ name, icon, link }) => {
  return (
    <li className="ml-[-80px] flex h-[60px] w-[140px] items-center rounded-xl bg-[#000000] duration-300 hover:ml-[-10px] ">
      <a
        className="flex w-full items-center justify-evenly gap-4 text-base text-white"
        href={link}
        target="_blank"
      >
        {name} {icon}
      </a>
    </li>
  );
};

export default Information;
