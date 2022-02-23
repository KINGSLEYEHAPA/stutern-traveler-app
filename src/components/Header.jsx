import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { RiMenu5Fill } from "react-icons/ri";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <div className="text-red-800 items-center h-24 relative  flex justify-between w-screen px-6">
      <div>
        <Link
          to="/"
          className="text-sm sm:text-md md:text-lg lg:text-xl text-white  pr-3 "
        >
          Traveler
        </Link>
      </div>

      <div className=" gap-6 hidden ssm:flex">
        <p>Home</p>
        <p>Attractions</p>
        <p>Locations</p>
      </div>

      {isMobile && (
        <div
          className={
            isMobile
              ? "absolute top-24 w-full right-4 px-10 py-5 z-1000 text-center space-y-2 bg-orange-600 ssm transition-all:hidden"
              : "hidden"
          }
        >
          <p>Home</p>
          <p>Attractions</p>
          <p>Location</p>
        </div>
      )}
      <Search />
      <div className="w-36 h-20  text-center py-2 ml-3">
        <img className="w-6 h-6 rounded-full bg-white mx-auto" src="" alt="" />
        <h3 className="text-xs pt-2 text-white">Welcome Kingsley</h3>
      </div>
      <span
        onClick={() => {
          setIsMobile(!isMobile);
        }}
        className="text-white ml-2 md:text-2xl "
      >
        <RiMenu5Fill />
      </span>
    </div>
  );
};

export default Header;
