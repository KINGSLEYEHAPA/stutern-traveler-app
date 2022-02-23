import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <div className="relative ">
      {" "}
      <input
        className="text-md md:text-xl outline-none rounded-lg w-44 text-orange-600 bg-sky-400/20 px-4 pr-7 sm:w-44 md:w-[22rem] ssm:translate-x-8 md:h-12 py-1  md:px-6 placeholder:text-sm md:placeholder:text-xl placeholder:text-blue-400"
        placeholder="Search for a location..."
      />
      <span className="absolute right-2 top-2.5 text-sm text-orange-600 md:top-3 md:text-xl md:right-3 ssm:translate-x-8">
        <RiSearchLine />
      </span>
    </div>
  );
};

export default Search;
