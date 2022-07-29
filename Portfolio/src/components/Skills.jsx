import React from "react";
import { DiBootstrap, DiReact, DiCss3, DiGit, DiHtml5, DiJsBadge, DiMongodb, DiNodejsSmall, DiVisualstudio } from 'react-icons/di';
import { SiFigma, SiPostman, SiDiscord, SiSlack, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
                            Skills
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-4 gap-8 px-4">
                        <div >
                            <p>Languages</p>
                            <ul>
                                <li className="flex justify-start items-center"><DiHtml5 size="1.25rem"/> &nbsp;HTML</li>
                                <li className="flex justify-start items-center"><DiCss3 size="1.25rem"/>&nbsp;CSS</li>
                                <li className="flex justify-start items-center"><DiJsBadge size="1rem"/> &nbsp;JavaScript</li>
                                <li className="flex justify-start items-center">&nbsp;English IETLS(6.0)</li>
                            </ul>
                        </div>
                        <div>
                            <p>Frameworks</p>
                            <ul>
                            <li className="flex justify-start items-center"><DiReact size="1.25rem"/> &nbsp;Reactjs</li>
                                <li className="flex justify-start items-center"><DiNodejsSmall size="1.25rem"/>&nbsp;Nodejs</li>
                                <li className="flex justify-start items-center"><DiJsBadge size="1.25rem"/> &nbsp;Express</li>
                                <li className="flex justify-start items-center"><DiMongodb size="1.25rem"/> &nbsp;MongoDB</li>
                                <li className="flex justify-start items-center"><SiTailwindcss size="1.25rem"/> &nbsp;Tailwindcss</li>                            
                                <li className="flex justify-start items-center"><DiBootstrap size="1.25rem"/> &nbsp;Bootstrap</li>

                            </ul>
                        </div>
                        <div>
                            <p>Tools</p>
                            <ul>
                                <li className="flex justify-start items-center"><DiGit size="1.25rem"/> &nbsp;Git & GitHub</li>
                                <li className="flex justify-start items-center"><SiFigma size="1.25rem"/>&nbsp;Figma</li>
                                <li className="flex justify-start items-center"><SiSlack size="1rem"/> &nbsp;Slack</li>
                                <li className="flex justify-start items-center"><DiVisualstudio size="1rem"/> &nbsp;VS Code</li>
                                <li className="flex justify-start items-center"><SiPostman size="1rem"/> &nbsp;Postman</li>
                                <li className="flex justify-start items-center"><SiDiscord size="1rem"/> &nbsp;Discord</li>
                            </ul>
                        </div>
                        <div>
                            <p>Soft skills</p>
                            <ul>
                                <li className="flex justify-start items-center">Communication</li>
                                <li className="flex justify-start items-center">Leadership</li>
                                <li className="flex justify-start items-center">Teamwork</li>
                                <li className="flex justify-start items-center">Detail oriented</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Skills;