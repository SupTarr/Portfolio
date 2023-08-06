import React, { useState } from "react";
import Links from "./Links";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiGmail, SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../images/logo.png";
import { Link } from "react-scroll";
import LinksPopUp from "./LinksPopUp";

const Navbar = ({ destinations }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[75px] z-50 flex justify-between items-center px-4 bg-[#145DA0] text-gray-300">
      <img src={Logo} alt="logo PG" className="w-[50px]" />
      <Links destinations={destinations} />

      {/*Hamburger*/}
      <div onClick={handleClick} className="xl:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      {nav ? (
        <LinksPopUp destinations={destinations} handleClick={handleClick} />
      ) : null}

      {/*Social icon*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#000000] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/SupTarr"
              target="_blank"
            >
              GitHub <SiGithub size={30} />
            </a>
          </li>

          <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#1e45c5] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/supakrit-chuchatwannakul-727a81179/"
              target="_blank"
            >
              Linkedin <SiLinkedin size={30} />
            </a>
          </li>

          <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#f52121] ">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-white"
            >
              Gmail <SiGmail size={30} />
            </Link>
          </li>

          <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#000000]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://drive.google.com/file/d/1mLlHtbb6MbW9ncpP-E2h_TSFpYs2QzS_/view?usp=sharing"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
