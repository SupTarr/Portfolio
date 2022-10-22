import React from 'react';
import C from '../images/c-logo.png';
import Python from '../images/python-logo.png';
import Html from '../images/html.png';
import Css3 from '../images/css.png';
import Bootstrap from '../images/bootstrap-logo.svg';
import Tailwind from '../images/tailwind.png';
import JavaScript from '../images/javascript.png';
import reScript from '../images/rescript.png';
import ReactImg from '../images/react.png';
import Node from '../images/node.png';
import Mongo from '../images/mongodb.png';
import SQL from '../images/SQL.png';
import Git from '../images/Git-logo.png';
import GitHub from '../images/github.png';

const Tech = () => {
    return (
        <div name='skills' className='w-full pt-24 bg-[#0C2D48] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4 text-2xl'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={C} alt="C icon" />
                        <p className='text-lg my-4 font-bold'>C</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={Python} alt="Python icon" />
                        <p className='text-lg my-4 font-bold'>Python</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={Html} alt="HTML icon" />
                        <p className='text-lg my-4 font-bold'>HTML</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={Css3} alt="CSS icon" />
                        <p className='text-lg my-4 font-bold'>CSS</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-24 h-20 mx-auto mt-5' src={Bootstrap} alt="Bootstrap icon" />
                        <p className='text-lg my-4 font-bold'>Bootstrap</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={Tailwind} alt="Tailwindcss icon" />
                        <p className='text-lg my-4 font-bold'>TailwindCSS</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={JavaScript} alt="JavaScript icon" />
                        <p className='text-lg my-4 font-bold'>JavaScript</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={reScript} alt="JavaScript icon" />
                        <p className='text-lg my-4 font-bold'>ReScript</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={ReactImg} alt="Reactjs icon" />
                        <p className='text-lg my-4 font-bold'>ReactJS</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={Node} alt="Nodejs icon" />
                        <p className='text-lg my-4 font-bold'>NodeJS</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={Mongo} alt="MongoDB icon" />
                        <p className='text-lg my-4 font-bold'>MongoDB</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={SQL} alt="MongoDB icon" />
                        <p className='text-lg my-4 font-bold'>SQL</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={Git} alt="Git icon" />
                        <p className='text-lg my-4 font-bold'>Git</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] bg-[#1e2227] hover:scale-110 duration-500 rounded-xl'>
                        <img className='w-20 mx-auto mt-5' src={GitHub} alt="GitHub icon" />
                        <p className='text-lg my-4 font-bold'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tech;