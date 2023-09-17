import React from "react";
import LinkPopUp from "./LinkPopUp";
import Informations from "./Informations";

const LinksPopUp = ({ destinations, informationsList, handleClick }) => {
  return (
    <div className="className= absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f] text-4xl">
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
