import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const [isMobile, setIsmobile] = useState(false);
  return (
    <div className="text-red-800 items-center h-16 flex justify-between w-screen px-6">
      <div>
        <Link
          to="/"
          className="text-xs sm:text-md md:text-lg lg:text-xl text-white  "
        >
          The Traveller
        </Link>
      </div>
      <Search />
      <div className=""> </div>
    </div>
  );
};

export default Header;
