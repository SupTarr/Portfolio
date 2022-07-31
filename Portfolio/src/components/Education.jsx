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
                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 text-gray-400 hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-normal col-span-2 ">
                        <p className="text-blue-500 ">Generation Thailand</p>
                        <p className="text-base italic ">
                            Junior Software Developer Bootcamp{" "}
                            <span className="text-blue-500">(JSD)</span>
                        </p>
                        <ul className="text-xl pt-4 text-gray-500 hover:text-[#ffffff]">
                            <li>
                                <span className="font-bold">Technical Skills</span>: HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, Express, Web API, SQL, PostgreSQL, MongoDB, Git and GitHub
                            </li>
                            <li>
                                <span className="font-bold">Soft Skills</span>: Growth Mindset, Persistence, Future Orientation, Orientation to Details and Teamwork
                            </li>
                        </ul>
                    </div>
                    <div className="text-xl py-3 text-center">
                        <p>May 2022 - August 2022</p>
                        <p>Online, Thailand</p>
                    </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 pt-10 text-gray-400 hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-bold col-span-2">
                        <p className="text-blue-500">Prince of Songkla University</p>
                        <p className="text-base italic ">
                            Bachelor of Engineering <span className="text-blue-500">(Mechatronics Engineering)</span>
                        </p>
                        <p className="text-xl pt-4 text-gray-500 hover:text-[#ffffff]">
                            Full scholarship from Faculty of Engineering (Lookprabida scholarship)
                        </p>
                    </div>
                    <div className="text-xl py-3 text-center">
                        <p>August 2018 - May 2022</p>
                        <p>Songkhla, Thailand</p>
                    </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 pt-10 text-gray-400 hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-bold col-span-2">
                        <p className="text-blue-500">PSU Wittayanusorn</p>
                        <p className="text-base italic ">
                            Science Classrooms in University-Affiliated School Project <span className="text-blue-500">(SCiUS)</span>
                        </p>
                        <p className="text-xl pt-4 text-gray-500 hover:text-[#ffffff]">
                            With cooperation from the Ministry of Science and Technology, this project supports the training of science from among students with special talents.
                        </p>
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
