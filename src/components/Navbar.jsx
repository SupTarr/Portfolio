import React, { useState, useEffect } from "react";
import Links from "./Links";
import LinksPopUp from "./LinksPopUp";
import Informations from "./Informations";

import Logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

let informations = [
  {
    name: "Github",
    icon: <SiGithub size={30} />,
    link: "https://github.com/SupTarr",
  },
  {
    name: "Linkedin",
    icon: <SiLinkedin size={30} />,
    link: "https://www.linkedin.com/in/supakrit-chuchatwannakul-727a81179/",
  },
  {
    name: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    link: "https://drive.google.com/file/d/1mLlHtbb6MbW9ncpP-E2h_TSFpYs2QzS_/view?usp=sharing",
  },
];

const Navbar = ({ destinations }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "unset";
  }, [nav]);

  return (
    <div className="fixed top-0 z-50 flex h-[75px] w-full items-center justify-between bg-[#145DA0] px-4 text-gray-300">
      <img src={Logo} alt="logo PG" className="w-[50px]" />
      <Links destinations={destinations} />

      {/* Hamburger */}
      <div onClick={handleClick} className="z-10 lg:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      {nav ? (
        <LinksPopUp
          destinations={destinations}
          informationsList={informations}
          handleClick={handleClick}
        />
      ) : null}

      {/* Social icon */}
      <div className="hidden lg:flex">
        <Informations lists={informations} />
      </div>
    </div>
  );
};

export default Navbar;
