import React from 'react';
import Jammming from '../images/Jammming.png';
import findYourHat from '../images/findYourHat.png';
import adhoc from '../images/adhoc.png';
import Colmar from '../images/ColmarAcademy.png';
import Ravenous from '../images/Ravenous.png';
import Immifit from '../images/Immifit.png';
import { SiGithub } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Project = () => {
  return (
    <div name='projects' className='w-full pt-24 text-gray-300 bg-[#0C2D48]'>
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
            style={{ backgroundImage: `url(${Colmar})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center my-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Colmar Academy
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/SupTarr/ColmarAcademy' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]'>
                    <SiGithub size="2rem" />
                  </button>
                </a>
                <a href='https://suptarr.github.io/ColmarAcademy/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]'>
                    <HiOutlineExternalLink size="2rem" />
                  </button>
                </a>
              </div>
              <p className='text-center'>Stacks: HTML, CSS</p>
              <p className='text-center mx-3'>Made a website from wireframe with HTML, plain CSS, and responsive design</p>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${adhoc})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center my-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Adhoc
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/SupTarr/Adhoc' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]'>
                    <SiGithub size="2rem" />
                  </button>
                </a>
                <a href='https://suptarr.github.io/Adhoc/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#288fff]'>
                    <HiOutlineExternalLink size="2rem" />
                  </button>
                </a>
              </div>
              <p className='text-center'>Stacks: HTML, Bootstrap</p>
              <p className='text-center mx-3'>Made a website from wireframe with HTML, Bootstrap, and responsive design</p>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${findYourHat})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Find Your Hat
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/SupTarr/findYourHat' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <SiGithub size="2rem" />
                  </button>
                </a>
                <a href='https://replit.com/@SupTarr/findYourHat#README.md' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <HiOutlineExternalLink size="2rem" />
                  </button>
                </a>
              </div>
              <p className='text-center'>Stacks: JavaScript</p>
              <p className='text-center mx-3'>Used a JavaScript (Function, Conditional Statements, and Class) to make a game that controlled to get a hat without falling into a hole</p>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Jammming})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 text-center group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Jammming
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/SupTarr/Jammming' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <SiGithub size="2rem" />
                  </button>
                </a>
                <a href='https://tarjammming.surge.sh/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <HiOutlineExternalLink size="2rem" />
                  </button>
                </a>
              </div>
              <p className='text-center'>Stacks: HTML, CSS, JavaScript, ReactJS</p>
              <p className='text-center mx-3'>Made a website with ReactJS and managed a song data from Spotify API to show a song and added a song to a new Spotify playlist</p>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Ravenous})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Ravenous
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/SupTarr/Ravenous' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <SiGithub size="2rem" />
                  </button>
                </a>
                <a href='https://supravenous.surge.sh/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <HiOutlineExternalLink size="2rem" />
                  </button>
                </a>
              </div>
              <p className='text-center'>Stacks: HTML, CSS, JavaScript, ReactJS</p>
              <p className='text-center mx-3'>Made a website with ReactJS and managed businesses data from Yelp API to show each data</p>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Immifit})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Immifit
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/SupTarr/FrontendImmifit' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <SiGithub size="2rem" />
                  </button>
                </a>
                <a href='https://immifit.vercel.app/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg active:bg-[#6579bb]'>
                    <HiOutlineExternalLink size="2rem" />
                  </button>
                </a>
              </div>
              <p className='text-center'>Stacks: MongoDB, Express, ReactJS, NodeJS</p>
              <p className='text-center mx-3'>Made a website application with MERN stack for exercise tracker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;