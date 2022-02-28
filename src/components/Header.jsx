import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { RiMenu5Fill } from "react-icons/ri";
import kingsley from "../assets/images/kingsley.jpg";
import { getWeatherData, location } from "../redux/actions/actionCreators";

import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/actions/actionTypes";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actionTypes.USER_LOCATION, payload: location });
    dispatch(getWeatherData);
  }, [dispatch]);

  return (
    <div className="text-red-800 items-center h-24 relative  flex justify-between w-screen px-6">
      <div>
        <Link
          to="/"
          className="text-md ssm:text-xl md:text-2xl lg:text-3xl  text-orange-600 font-bold  pr-3 "
        >
          Traveler
        </Link>
      </div>

      <div className=" gap-8 hidden ssm:flex text-white">
        <Link
          to="/"
          className="hover:text-orange-600  hover:bg-white p-1 rounded-md font-bold"
        >
          <p>Home</p>{" "}
        </Link>
        <Link
          to="/popular-attractions"
          className="hover:text-orange-600  hover:bg-white p-1 rounded-md font-bold"
        >
          {" "}
          <p>Attractions</p>{" "}
        </Link>
        <Link
          to="/"
          className="hover:text-orange-600  hover:bg-white p-1 rounded-md font-bold"
        >
          {" "}
          <p>News</p>{" "}
        </Link>
      </div>

      {isMobile && (
        <div
          className={
            isMobile
              ? " backdrop-blur-xl flex flex-col gap-6 bg-orange-600/20 absolute ssm:hidden  top-24 w-full right-4 px-10 py-5 z-20 text-center h-56 text-white space-y-2  ssm transition-all:hidden"
              : "hidden"
          }
        >
          <Link to="/" className="hover:text-orange-600">
            <p>Home</p>{" "}
          </Link>
          <Link to="popular-attractions" className=" hover:text-orange-600">
            {" "}
            <p>Attractions</p>{" "}
          </Link>

          <Link to="/" className="hover:text-orange-600 ">
            <p>Travel News</p>{" "}
          </Link>
        </div>
      )}
      <Search />
      <div className="w-36 h-20  text-center py-2 ml-3">
        <img
          className="w-6 h-6 rounded-full bg-white mx-auto"
          src={kingsley}
          alt=""
        />
        <h3 className="text-xs md:text-sm pt-2 text-white">Welcome Kingsley</h3>
      </div>
      <span
        onClick={() => {
          setIsMobile(!isMobile);
        }}
        className="text-orange-600 ml-2 mr-6 text-2xl ssm:hidden hover:text-white"
      >
        <RiMenu5Fill />
      </span>
    </div>
  );
};

export default Header;
