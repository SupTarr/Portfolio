import React from "react";

const Education = () => {
    return (
        <div name="education" className="w-full h-auto bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] justify-start w-full grid">
                    <div className=" sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-blue-500">
                            Education
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 text-gray-400 hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-bold col-span-2 ">
                        <p className="text-blue-500 ">Generation Thailand</p>
                        <p className="text-base italic ">
                            Junior Software Developer Bootcamp{" "}
                            <span className="text-blue-500">(JSD)</span>
                        </p>
                        <ul className="text-xl pt-4 text-gray-500 hover:text-[#ffffff]">
                            <li>
                                TECHNICAL: HTML, CSS, Bootstrap, JavaScript, Reactjs, Nodejs,
                                Express, MongoDB
                            </li>
                            <li>
                                BSM: Problem solving, Time management, Communication, Agile
                                Scrum, Project management
                            </li>
                            <li>
                                Projects:
                                <ul className="pl-8">
                                    <li>- Colemar (HTML, CSS)</li>
                                    <li>- Find Your Hat (JaveScript)</li>
                                    <li>- JAMMMING (Reactjs)</li>
                                    <li>- iTracker (MERN stacks)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="text-xl py-3 text-center">
                        <p>Jan. 2022 - Apr. 2022</p>
                        <p>Online, THA</p>
                    </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 pt-10 text-gray-400 hover:text-[#ffffff] duration-200">
                    <div className=" text-4xl font-bold col-span-2">
                        <p className="text-blue-500 ">Prince of Songkla University</p>
                        <p className="text-base italic ">
                            Bachelor of Business Administration{" "}
                            <span className="text-pink-500">(BBA)</span>, Management
                        </p>
                        <ul className="text-xl pt-4 text-gray-500 hover:text-[#ffffff]">
                            <li>2019 Student Leader Activist in "Management"</li>
                            <li>
                                1st runner-up Smart Start Idea by GSB Startup topic "Thai Street
                                Food"
                            </li>
                            <li>
                                Attended 29th J-MAT Award - Marketing plan for "Sauce Todd"
                            </li>
                        </ul>
                    </div>
                    <div className="text-xl py-3 text-center">
                        <p>Jul. 2017 - May 2021</p>
                        <p>Songkhla, THA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
