import React from "react";

const Education = () => {
    return (
        <div name="education" className="w-full pt-28 pb-24 bg-[#0C2D48] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] justify-start w-full grid">
                    <div className=" sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-blue-500">
                            Education
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 text-[#a3adcc] hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-bold col-span-2 ">
                        <p className="text-blue-500 ">Generation Thailand</p>
                        <p className="text-lg italic ">
                            Junior Software Developer Bootcamp{" "}
                            <span className="text-blue-500">(JSD)</span>
                        </p>
                        <ul className="text-xl pt-4 text-[#a3adcc] hover:text-[#ffffff]">
                            <li>
                                <span className="font-bold italic">Technical Skills </span>: <span className="font-[550]">HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, Express, Web API, SQL, PostgreSQL, MongoDB, Git and GitHub</span>
                            </li>
                            <li>
                                <span className="font-bold italic underline-offset-auto">Soft Skills </span>: <span className="font-[550]">Growth Mindset, Persistence, Future Orientation, Orientation to Details and Teamwork</span>
                            </li>
                        </ul>
                    </div>
                    <div className="text-xl py-3 text-center">
                        <p>May 2022 - August 2022</p>
                        <p>Online, Thailand</p>
                    </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 pt-10 text-[#a3adcc] hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-bold col-span-2">
                        <p className="text-blue-500">Prince of Songkla University</p>
                        <p className="text-lg italic ">
                            Bachelor of Engineering <span className="text-blue-500">(Mechatronics Engineering)</span>
                        </p>
                        <ul className="text-xl pt-4 text-[#a3adcc] hover:text-[#ffffff]">
                            <li>Full scholarship from Faculty of Engineering (Lookprabida scholarship)</li>
                        </ul>
                    </div>
                    <div className="text-xl py-3 text-center">
                        <p>August 2018 - May 2022</p>
                        <p>Songkhla, Thailand</p>
                    </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 pt-10 text-[#a3adcc] hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-bold col-span-2">
                        <p className="text-blue-500">PSU Wittayanusorn</p>
                        <p className="text-lg italic ">
                            Science Classrooms in University-Affiliated School Project <span className="text-blue-500">(SCiUS)</span>
                        </p>
                        <ul className="text-xl pt-4 text-[#a3adcc] hover:text-[#ffffff]">
                            <li>With cooperation from the Ministry of Science and Technology, this project supports the training of science from among students with special talents.</li>
                        </ul>
                    </div>
                    <div className="text-xl py-3 text-center">
                        <p>May 2015 - March 2018</p>
                        <p>Songkhla, Thailand</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
