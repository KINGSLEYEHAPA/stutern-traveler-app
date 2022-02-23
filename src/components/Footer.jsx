import React from "react";
import {
  RiTwitterFill,
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full h-[35rem] bg-sky-300 flex flex-col justify-center items-center gap-10 px-10 ">
      <div>
        <h3 className="border-b-4 border-orange-600 pb-4 text-white text-2xl">
          About Traveler
        </h3>
        <p className="mt-6 text-white">
          A portal to see the the beauty of this world. A travel and trip
          advisor application.
        </p>
      </div>
      <div className="flex gap-8 text-white text-2xl">
        <span className="cursor-pointer">
          <RiTwitterFill />
        </span>
        <span className="cursor-pointer">
          {" "}
          <RiFacebookFill />
        </span>
        <span className="cursor-pointer">
          {" "}
          <RiInstagramFill />
        </span>
        <span className="cursor-pointer">
          {" "}
          <RiLinkedinFill />
        </span>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <textarea
          className="w-64 outline-none p-2 bg-sky-400 text-white rounded-lg placeholder:text-center placeholder:text-white placeholder:relative placeholder:top-10 "
          rows="5"
          placeholder="Message"
        />
        <button className="bg-orange-600 text-sm py-1 px-2 rounded text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Footer;