import React from "react";
import Information from "./Information";

const Informations = ({ lists }) => {
  return (
    <div className="fixed flex-col top-[35%] left-0">
      <ul>
        {lists.map((list, index) => {
          return (
            <Information
              key={`list-${index}`}
              name={list.name}
              icon={list.icon}
              link={list.link}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Informations;
