import React from "react";
import Link from "./Link";

const Links = ({ destinations }) => {
  console.log(destinations);
  return (
    <ul className="hidden lg:flex">
      {destinations.map((destination) => {
        <Link name={destination}></Link>;
      })}
    </ul>
  );
};

export default Links;
