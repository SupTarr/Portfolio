import React from "react";
import { Link as LinkTo } from "react-scroll";

const Link = ({ name }) => {
  return (
    <li className="rounded-xl bg-[#145DA0] text-xl duration-200 hover:bg-[#0C2D48] focus:outline-none focus:ring focus:ring-violet-300 active:bg-[#1e45c5] active:text-white">
      <LinkTo to={name.toLowerCase()} smooth={true} duration={1000}>
        {name}
      </LinkTo>
    </li>
  );
};

export default Link;
