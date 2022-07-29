import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { SiGmail, SiGithub, SiFacebook, SiLinkedin } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../images/Mongrang.png";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);
    return(
        <div className='fixed w-full h-[88px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
          <div>
            <img src={Logo} alt="logo PG" style={{width: '50px'}}/>
          </div>
              <ul className="hidden md:flex">
                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] active:text-white focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='home' smooth={true} duration={500}>
                      Home
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='about' smooth={true} duration={500}>
                      About
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='education' smooth={true} duration={500}>
                      Education
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='experience' smooth={true} duration={500}>
                      Expereince
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='skills' smooth={true} duration={500}>
                      Skills
                  </Link>
                 </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='projects' smooth={true} duration={500}>
                      Projects
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='contact' smooth={true} duration={500}>
                      Contact
                  </Link>
                </li>
              </ul>
          
          {/*Hamburger*/ }
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/>:<FaTimes/>}
            </div>
            {/*Mobile menu*/}
            <ul className= {!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center className= text-4xl'} >
                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='education' smooth={true} duration={500}>
                        Education
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
                
                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
             {/*Social icon*/}
             <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#000000] ">
                        <a className="flex justify-between items-center w-full text-white" href='https://github.com/Veerakit' target="_blank">
                            GitHub <SiGithub size={30}/> 
                        </a>
                    </li>
                    
                    <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#1e45c5] ">
                        <a className="flex justify-between items-center w-full text-white" href='https://www.linkedin.com/in/veerakit-chotpititaveepong' target="_blank">
                            Linkedin <SiLinkedin size={30}/> 
                        </a>
                    </li>

                    <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#f52121] ">
                        <Link to='contact' smooth={true} duration={500} className="flex justify-between items-center w-full text-white">
                                Gmail <SiGmail size={30}/>
                        </Link>
                    </li>
                    <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#334acf] ">
                        <a className="flex justify-between items-center w-full text-white" href='https://www.facebook.com/shiburuki.toto' target="_blank">
                            Facebook <SiFacebook size={30}/> 
                        </a>
                    </li>

                    <li className="w-[140px] h-[60px] rounded-xl flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#000000]">
                        <a className="flex justify-between items-center w-full text-white" href='https://www.canva.com/design/DAEKkPpB9XA/_XdrYH0pmooVr9A7_uqGDw/view?utm_content=DAEKkPpB9XA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank">
                            Resume <BsFillPersonLinesFill size={30}/> 
                        </a>
                    </li>

                </ul>
             </div>
        </div>
    );
}

export default Navbar;
