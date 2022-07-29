import React from "react";

const Expereince = () => {
    return (
        <div name="experience" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className=" pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-blue-500">
                            Experience
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 text-gray-400 hover:text-[#ffffff] duration-200">
                        <div className=" text-4xl font-bold col-span-2 ">
                            <p className="text-blue-500 ">Krungthai Bank</p>
                            <p className="text-base italic ">Internship </p>
                            <ul className="text-xl pt-4 text-gray-500 hover:text-[#ffffff]">
                                <li>
                                Solves technical problems in customer service and document tasks 
                                </li>
                                <li>
                                Managed and created in media regarding CSM
                                </li>
                                <li>
                                Managed entrepreneurs participated in stimulus economy campaigns
                                </li>
                            </ul>
                        </div>
                        <div className="text-xl py-3 text-center">
                            <p>Feb. 2021 - Apr. 2021</p>
                            <p>Songkhla, THA</p>
                        </div>
                    </div>

                    <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 pt-10 text-gray-400 hover:text-[#ffffff] duration-200">
                        <div className=" text-4xl font-bold col-span-2 ">
                            <p className="text-blue-500 ">Prince of Songkla University</p>
                            <p className="text-base italic ">Student president, Faculty of Management Science Student Society</p>
                            <ul className="text-xl pt-4 text-gray-500 hover:text-[#ffffff]">
                                <li>
                                    Organised and managed multiple student activity projects during education year.
                                </li>
                                <li>
                                    Developed student activity to meet with current trends along with university criterias and expectation.
                                </li>
                            </ul>
                        </div>
                        <div className="text-xl py-3 text-center">
                            <p>May 2019 - May 2020</p>
                            <p>Songkhla, THA</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Expereince;