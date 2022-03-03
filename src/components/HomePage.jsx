import React from "react";
import mainImage from "../assets/images/355150.jpg";

import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Map from "./Map";
import { useSelector } from "react-redux";
import { location } from "../redux/actions/actionCreators";

const HomePage = () => {
  const appData = useSelector((state) => state.appData);
  const userLocation = appData.userLocation;
  const weatherInfo = appData.userWeather;
  const loadingState = appData.isLoading;

  return (
    <div>
      {weatherInfo !== null && (
        <div className="flex flex-col w-screen justify-start min-h-[115rem] z-0">
          <div className="w-full flex flex-col h-4/5 pr-6 md:pr-0 ssm:flex ssm:flex-col gap-14 md:gap-1 md:flex md:flex-row md:justify-between md:items-center md:w-full md:gap-5 md:relative md:left-24  ">
            <div className=" h-full w-full flex flex-col p-4  relative mx-2 ssm:h-[25rem] md:bottom-24 md:w-[85rem] md:h-[24rem]">
              <img
                className="w-full h-full rounded-xl"
                src={mainImage}
                alt="image2"
              />
              <div className="absolute w-2/3 top-20  left-24 h-44 bg-white/24 flex text-left flex-col justify-center items-center ssm:w-full ssm:left-0  ">
                {" "}
                <h1 className="text-5xl text-orange-600 lg:translate-x-[-5rem]">
                  Explore the World!
                </h1>
                <p className="text-white mr-11 mt-5 sm:ml-8 ssm:ml-16 ssm:w-96 lg:translate-x-[-5rem] ">
                  Visit wonderful and exciting places around the globe. Plan you
                  next trip.
                </p>
                <button className="bg-orange-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-white hover:scale-105 hover:text-orange-600 lg:translate-x-[-9rem] translate-x-[-3.8rem] sm:translate-x-[-5rem]">
                  <Link to="/popular-attractions">
                    See Popular Attractions{" "}
                  </Link>
                </button>
              </div>
            </div>
            <aside className="flex  h-56 mx-2 ml-5 gap-4 justify-center  md:flex md:flex-col  md:h-[45rem] md:w-[60rem] md:relative md:bottom-24 md:gap-5">
              <div className="bg-orange-600 text-center w-1/2 flex flex-col space-y-2 p-3 md:h-44 rounded-lg md:text-sm shadow-xl text-white backdrop-blur-md hover:border-white hover:border-2">
                <h3 className="">
                  Weather Stats today in {weatherInfo && weatherInfo.name}
                </h3>

                <span className="text-4xl text-white">
                  {weatherInfo && weatherInfo.main.temp}°C
                </span>
                <span className="text-md text-white">
                  {weatherInfo && weatherInfo.weather[0].description}
                </span>

                <img
                  className="w-14 h-14 mx-auto"
                  src={
                    weatherInfo &&
                    `http://openweathermap.org/img/wn/${
                      weatherInfo && weatherInfo.weather[0].icon
                    }@2x.png`
                  }
                  alt="weather-img"
                />
              </div>
              <div className="w-1/2 md:h-40 bg-white shadow-xl  rounded-lg text-left space-y-4 text-orange-600 p-6 ssm:pl-10 pt-7 text-md ssm:text-sm hover:border-orange-600 hover:border-2">
                <p> Present location: {weatherInfo && weatherInfo.name}</p>
                <p>Latitude: {userLocation && userLocation.lat} </p>
                <p>Longitude: {userLocation && userLocation.lng} </p>
              </div>
            </aside>
          </div>
          <Map location={location} />

          <Carousel />
        </div>
      )}
      {loadingState && (
        <div className="min-h-screen text-center flex flex-col justify-start items-center ">
          <p className="text-3xl md:text-5xl mx-auto text-orange-600 font-bold mt-44">
            Loading...
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
