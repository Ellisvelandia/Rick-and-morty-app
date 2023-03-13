import React from "react";
import { Link } from "react-router-dom";

const Navlinks = [
  { name: "Episode", to: "/episode" },
  { name: "Characters", to: "/character" },
  { name: "Location", to: "/location" },
  { name: "Favorites", to: "/favorite" },
];

const Navbar = () => {
  return (
    <nav className="flex xl:flex-row flex-col justify-center md:gap-12 gap-2 lg:px-4 px-2">
      {Navlinks.map(({ name, to }) => (
        <Link to={to} key={name + to}>
          <p className="text-white tracking-wide xl:text-3xl text-xl mb-3 hover:scale-110">{name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
