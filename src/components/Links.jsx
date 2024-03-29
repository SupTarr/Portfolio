import React from "react";
import Link from "./Link";

const Links = ({ destinations }) => {
  return (
    <ul className="hidden lg:flex">
      {destinations.map((destination, index) => {
        return <Link key={`list-${index}`} name={destination} />;
      })}
    </ul>
  );
};

export default Links;
