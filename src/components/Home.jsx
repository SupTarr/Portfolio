import React from "react";
import supakrit from "../images/supakrit.jpg";

const Home = () => {
  return (
    <section
      name="home"
      className="min-h-screen"
      id="home"
      style={{
        backgroundImage:
          "url(https://media.tenor.com/2nKSTDDekOgAAAAC/coding-kira.gif)",
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen bg-[#0C2D48]/80">
        <div className="col-span-1 pt-24 sm:hidden">
          <img
            src={supakrit}
            alt="supakrit's photo"
            className="mx-auto w-[50%] rounded-lg"
          />
        </div>
        <div className="sm:first-line container mx-auto h-full min-h-screen max-w-[1000px] gap-5 px-8 pt-5 sm:grid sm:grid-cols-3 sm:items-center sm:justify-center">
          <div className="col-span-1 items-end justify-end">
            <img
              src={supakrit}
              alt="supakrit's photo"
              className="rounded-lg duration-300 hover:translate-x-1"
              id="picture"
            />
          </div>
          <div className=" col-span-2 duration-300 hover:translate-x-1 ">
            <div className="text-xl text-[#ccd6f6] duration-300 hover:text-yellow-400">
              Greetings, my name is
            </div>
            <p className="text-2xl font-bold text-[#ccd6f6] duration-300 hover:text-[#ffffff] sm:text-5xl">
              Supakrit
            </p>
            <p className="text-2xl font-bold text-[#ccd6f6] duration-300 hover:text-[#ffffff] sm:text-5xl">
              Chuchatwannakul
            </p>
            <div className="text-xl font-bold text-[#a3adcc] duration-300 hover:text-yellow-400 sm:text-3xl">
              Software Engineer
            </div>
            <div className="text-l max-w-[700px] py-4 text-justify text-[#a3adcc] duration-300 hover:text-[#eaedf8] sm:text-2xl">
              I am <span className="text-[#eff0f2]">"Supakrit"</span> or
              <span className="text-[#ccd6f6]"> "Tata"</span>, a recent graduate
              in the field of Mechatronics engineering who wants to pursue a
              career in technology field. Highly interested in
              <span className="text-[#eff0f2]">
                {" "}
                Investment, Health,
              </span> and <span className="text-[#eff0f2]"> Programming</span>.
              I enjoy learning new technologies and solving problems in order to
              create new things.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
