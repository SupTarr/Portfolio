import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import Veerakit from '../images/veerakit.jpg';
import Link from "react-scroll/modules/components/Link";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto px-8 grid grid-cols-3 gap-5 items-center justify-center h-full">
                <div className=" col-span-2 hover:translate-x-1 duration-300 ">

                <div className="text-yellow-300 hover:text-yellow-400 duration-300"> Greetings, my name is</div>
                <div className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] hover:text-[#ffffff] duration-300">Veerakit Chotpititaveepong</div>
                <div className="text-4xl sm:text-7xl font-bold text-[#8892b0] hover:text-yellow-400 duration-300">A Learner</div>
                <div className="text-[#8892b0] text-xl py-4 max-w-[700px] text-justify hover:text-[#eaedf8] duration-300">
                    I am <span className="text-[#ccd6f6]">"Veerakit"</span> or <span className="text-[#ccd6f6]" >"Gun"</span>, a first jobber who reskilled from business field to tech field. 
                    Highly interested in <span className="text-[#ccd6f6]" >Bitcoin, Health,</span> and <span className="text-[#ccd6f6]"> Social Development.</span> Enjoy learning new techs and seeing things grow. 
                    Want to make an impact to minimize inequality.
                </div>

                <div>
                <Link to='about' smooth={true} duration={500}>
                    <button className="text-white group rounded-lg border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-[#0a192f]"
                        href="" target="_blank"
                    >
                            View more 
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 "/>
                        </span>
                    </button>
                </Link>
                </div>
                </div>
                <div className="col-span-1">
                    <img src={Veerakit} alt="Veerakit's photo" className=" rounded-lg hover:rotate-3 duration-300" />
                </div>
            </div>
        </div>
    );
}

export default Home;