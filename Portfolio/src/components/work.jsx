import React from 'react';
import WorkImg from '../images/WorkImg.png';
import Itracker from '../images/itracker.png';
import Todolist from '../images/todolistmern.png';
import { SiGithub } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Work = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>
              Projects
            </p>
            <p className='py-6 text-2xl'>
                // Check out some of recent Projects.
            </p>
          </div>
  
  {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
  
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${Itracker})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 text-center group-hover:opacity-100 duration-300'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  iTracker
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://github.com/Veerakit/iTRACK-mern' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                        <SiGithub size="2rem" />
                    </button>
                  </a>
                  <a href='https://teal-naiad-e852dc.netlify.app/' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                        <HiOutlineExternalLink size="2rem" />
                    </button>
                  </a>
                </div>
                  <span className='text-center'>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stacks: MongoDB, Express, React, Node 
                </span>

              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${WorkImg})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 text-center group-hover:opacity-100 duration-300'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  JAMMMING Spotigoo
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://github.com/Veerakit/ReactAssessment' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                        <SiGithub size="2rem" />
                    </button>
                  </a>
                  <a href='http://spoti-goo.surge.sh/' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                        <HiOutlineExternalLink size="2rem" />
                    </button>
                  </a>
                </div>
                  <span>
                      Stacks: HTML, CSS, JavaScript, React 
                </span>
              </div>
            </div>
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${Todolist})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='text-center opacity-0 group-hover:opacity-100 duration-300'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                &nbsp;&nbsp;To Do-List
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://github.com/Veerakit/todo-list-mern' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                        <SiGithub size="2rem" />
                    </button>
                  </a>
                  <a href='https://unique-dieffenbachia-f6742a.netlify.app/?fbclid=IwAR3iCG6jqcm2VAmqDAPFhZ6OUUjPLAvjSukpU0QsqvRUgvHd-FUa9ZZqIJQ' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                        <HiOutlineExternalLink size="2rem" />
                    </button>
                  </a>
                </div>
                  <span>
                      Stacks: MongoDB, Express, React, Node   
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Work;