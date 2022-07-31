import React from "react";
import './Home.css';
import { HiArrowNarrowRight } from "react-icons/hi";
import supakrit from "../images/supakrit.jpg";
import Link from "react-scroll/modules/components/Link";

const Home = () => {
  return (
    <div name="home" className="w-full h-full bg-[#0C2D48]/75" id="home">
      <div className="col-span-1 sm:hidden">
          <img
            src={supakrit}
            alt="supakrit's photo"
            className="rounded-lg w-[75%] mx-auto"
          />
        </div>
      <div className="container max-w-[1000px] mx-auto px-8 pt-5 sm:first-line sm:grid sm:grid-cols-3 gap-5 sm:items-center sm:justify-center h-full">
        <div className="col-span-1 items-end justify-end">
          <img
            src={supakrit}
            alt="supakrit's photo"
            className="rounded-lg hover:translate-x-0.5 duration-300"
            id="picture"
          />
        </div>
        <div className=" col-span-2 hover:translate-x-1 duration-300 ">
          <div className="text-[#2E8BC0] hover:text-[#B1D4E0] duration-300">
            Greetings, my name is
          </div>
          <p className="text-2xl sm:text-5xl font-bold text-[#ccd6f6] hover:text-[#ffffff] duration-300">
            Supakrit
          </p>
          <p className="text-2xl sm:text-5xl font-bold text-[#ccd6f6] hover:text-[#ffffff] duration-300">
            Chuchatwannakul
          </p>
          <div className="text-xl sm:text-7xl font-bold text-[#8892b0] hover:text-yellow-400 duration-300">
            A Learner
          </div>
          <div className="text-[#8892b0] text-l sm:text-xl py-4 max-w-[700px] text-justify hover:text-[#eaedf8] duration-300">
            I am <span className="text-[#ccd6f6]">"Supakrit"</span> or
            <span className="text-[#ccd6f6]"> "Tata"</span>, a first jobber who
            reskilled from business field to tech field. Highly interested in
            <span className="text-[#ccd6f6]"> Bitcoin, Health,</span> and{" "}
            <span className="text-[#ccd6f6]"> Social Development.</span> Enjoy
            learning new techs and seeing things grow. Want to make an impact to
            minimize inequality.
          </div>

          <div>
            <Link to="about" smooth={true} duration={500}>
              <button
                className="text-white group rounded-lg border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-[#0a192f] z-10"
                href=""
                target="_blank"
              >
                View more
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
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
