import React from "react";
import LinkPopUp from "./LinkPopUp";
import Informations from "./Informations";

const LinksPopUp = ({ destinations, informationsList, handleClick }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center className= text-4xl">
      <Informations lists={informationsList} />
      <ul>
        {destinations.map((destination, index) => {
          return (
            <LinkPopUp
              key={`list-${index}`}
              name={destination}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default LinksPopUp;
