import React from "react";
import "./Home.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import supakrit from "../images/supakrit.jpg";
import Link from "react-scroll/modules/components/Link";

const Home = () => {
  return (
    <div name="home" className="w-full h-full bg-[#0C2D48]/80" id="home">
      <div className="col-span-1 sm:hidden">
        <img
          src={supakrit}
          alt="supakrit's photo"
          className="rounded-lg w-[50%] pt-24 mx-auto"
        />
      </div>
      <div className="container max-w-[1000px] mx-auto px-8 pt-5 sm:first-line sm:grid sm:grid-cols-3 gap-5 sm:items-center sm:justify-center h-full">
        <div className="col-span-1 items-end justify-end">
          <img
            src={supakrit}
            alt="supakrit's photo"
            className="rounded-lg hover:translate-x-1 duration-300"
            id="picture"
          />
        </div>
        <div className=" col-span-2 hover:translate-x-1 duration-300 ">
          <div className="text-xl text-[#ccd6f6] hover:text-yellow-400 duration-300">
            Greetings, my name is
          </div>
          <p className="text-2xl sm:text-5xl font-bold text-[#ccd6f6] hover:text-[#ffffff] duration-300">
            Supakrit
          </p>
          <p className="text-2xl sm:text-5xl font-bold text-[#ccd6f6] hover:text-[#ffffff] duration-300">
            Chuchatwannakul
          </p>
          <div className="text-xl sm:text-3xl font-bold text-[#a3adcc] hover:text-yellow-400 duration-300">
            Software Engineer
          </div>
          <div className="text-[#a3adcc] text-l sm:text-2xl py-4 max-w-[700px] text-justify hover:text-[#eaedf8] duration-300">
            I am <span className="text-[#eff0f2]">"Supakrit"</span> or
            <span className="text-[#ccd6f6]"> "Tata"</span>, a recent graduate
            in the field of Mechatronics engineering who wants to pursue a
            career in technology field. Highly interested in
            <span className="text-[#eff0f2]">
              {" "} Investment, Health,
            </span> and <span className="text-[#eff0f2]"> Programming</span>. I
            enjoy learning new technologies and solving problems in order to
            create new things.
          </div>

          <div>
            <Link to="about" smooth={true} duration={500}>
              <button
                className="text-white group rounded-lg border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-[#0a192f] z-10"
                href=""
                target="_blank"
              >
                View more
                <span className="group-hover:rotate-90 group-hover:-translate-y-1 group-hover:translate-x-2 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
