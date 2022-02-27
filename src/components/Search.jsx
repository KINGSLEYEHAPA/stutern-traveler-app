import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <div className="relative ">
      {" "}
      <input
        className="text-md  md:text-lg outline-none rounded-lg w-44 text-white bg-sky-400/20 px-4 pr-7 sm:w-44 md:w-[18rem] ssm:translate-x-4 md:h-10 py-1  ssm:w-[10rem] md:px-7 md:pr-8 placeholder:text-sm md:placeholder:text-lg placeholder:text-blue-400"
        placeholder="Search for a location..."
      />
      <span className="absolute cursor-pointer right-2 top-2.5 text-sm text-white font-bold md:top-2.5 md:text-xl md:right-3 ssm:translate-x-4">
        <RiSearchLine />
      </span>
    </div>
  );
};

export default Search;
