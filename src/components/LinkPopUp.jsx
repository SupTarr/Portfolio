import React from "react";
import { Link } from "react-scroll";

const LinkPopUp = ({ name, handleClick }) => {
  return (
    <li className="rounded-xl bg-[#0a192f] py-6 text-4xl duration-200 hover:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300 active:bg-[#1e45c5]">
      <Link
        onClick={handleClick}
        to={name.toLowerCase()}
        smooth={true}
        duration={1000}
      >
        {name}
      </Link>
    </li>
  );
};

export default LinkPopUp;
