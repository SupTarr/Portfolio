import React from "react";
import Information from "./Information";

const Informations = ({ lists }) => {
  return (
    <div className="fixed top-[35%] left-0 flex-col">
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
