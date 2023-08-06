import React from "react";
import { Link } from "react-scroll";

const LinkPopUp = ({ name, handleClick }) => {
  return (
    <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
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
