import React from "react";

const Search = () => {
  return (
    <div>
      {" "}
      <input
        className="text-md outline-none rounded-lg text-white bg-sky-400/20 px-4 sm:w-96 py-1 placeholder:text-sm placeholder:text-blue-400"
        placeholder="Search for a location..."
      />
    </div>
  );
};

export default Search;
