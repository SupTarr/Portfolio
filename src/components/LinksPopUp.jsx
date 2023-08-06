import React from "react";
import LinkPopUp from "./LinkPopUp";

const LinksPopUp = ({ destinations, handleClick }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center className= text-4xl">
      <ul>
        {destinations.map((destination, index) => {
          return (
            <LinkPopUp
              key={`lisk-${index}`}
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
