import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import imageOne from "../assets/images/355173.jpg";
import Carousel from "./Carousel";
import Map from "./Map";

const Attractions = () => {
  const attractionsData = useSelector(
    (state) => state.destinationAttractionsData
  );
  const weatherData = useSelector((state) => state.destinationWeather);
  const newsData = useSelector((state) => state.destinationNews);
  const isError = useSelector((state) => state.isError);
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.isLoading);
  const nameOfSearch = useSelector((state) => state.nameOfSearch);

  console.log(attractionsData);

  return (
    <>
      {!isError && (
        <div className="min-h-[160rem] md:h-[120rem] w-full p-6">
          <div className="w-full bg-white h-[22rem] shadow-2xl mx-auto  rounded-xl relative md:h-[30rem]  ">
            <img
              src={
                attractionsData
                  ? attractionsData[5].result_object.photo.images.original.url
                  : imageOne
              }
              alt=""
              className="w-full h-full rounded-xl"
            />
            <div className="absolute top-8 left-7 w-5/6 h-[18rem] bg-orange-600/20 m-4 text-left py-2 px-4 ssm:flex ssm:flex-row  ssm:gap-24">
              <div className="ssm:w-[100rem]">
                <h2 className="capitalize hover:text-white text-4xl ssm:text-5xl lg:text-6xl text-orange-600 border-b-2 border-orange-600 pb-1 hover:border-white">
                  {nameOfSearch}
                </h2>
                <p className="text-white mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repudiandae suscipit sint itaque ea sapiente porro perferendis
                  nam culpa velit magnam.
                </p>
              </div>
              <div className="flex mt-10 w-full justify-between px-4 gap-2 text-orange-600 ssm:flex ssm:flex-col ssm:relative ssm:left-6 md:left-8 lg:left-28 xl:left-60">
                <div className="bg-white rounded-lg h-16 w-28 text-center py-2 hover:text-white hover:bg-orange-600  ">
                  <span className="text-md ">
                    {weatherData &&
                      weatherData.current_observation.condition.temperature}
                    °C
                  </span>
                  <p className=" text-xs">
                    {" "}
                    {weatherData &&
                      weatherData.current_observation.condition.text}
                  </p>
                </div>
                <div className="bg-white rounded-lg h-16 w-28 text-center py-4 hover:text-white hover:bg-orange-600">
                  <span className=" text-xs">
                    {" "}
                    {weatherData && weatherData.current_observation.wind.speed}
                    Km/s
                  </span>
                </div>
                <div className="bg-white/50 rounded-lg h-16 w-28 ">
                  <img
                    className="w-full h-full rounded-lg hover:opacity-80"
                    src="https://cdn1.vectorstock.com/i/1000x1000/86/95/weather-cloud-rainy-icon-vector-19558695.jpg"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-min-screen bg-white p-10 mt-5 rounded-lg ">
            <h2 className=" mb-5 text-xl text-orange-600 ssm:text-3xl text-left ">
              News Headlines{" "}
            </h2>
            <div className="flex flex-col gap-5">
              {newsData.data.slice(0, 6).map((newsItem, index) => {
                return (
                  <Link to={`news/${newsItem.title}`} key={index}>
                    <div className="flex gap-6 shadow-2xl py-4 px-4 hover:scale-105 rounded-lg bg-orange-600/20">
                      <img
                        className="w-32 h-28 md:w-44 md:h-24 rounded-lg"
                        src={
                          newsItem.image
                            ? newsItem.image
                            : "https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg"
                        }
                        alt="News Article Shot"
                      />

                      <div>
                        <h3 className="text-md ssm:text-xl text-orange-600">
                          {newsItem.title}
                        </h3>
                        <p className="text-xs py-1 text-orange-600/70 ssm:text-md">
                          {newsItem.description.slice(0, 100)}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {weatherData && (
            <Map
              location={{
                lat: weatherData.location.lat,
                lng: weatherData.location.long,
                address: `This is ${nameOfSearch}`,
              }}
            />
          )}

          <div className="my-10">
            <Carousel />
          </div>
        </div>
      )}
      {isError && (
        <div className="min-h-screen text-center flex flex-col justify-start items-center ">
          {" "}
          <h2 className="text-2xl md:text-3xl mx-auto text-orange-600 font-bold mt-44">
            Network Error:{error}
          </h2>
        </div>
      )}
      {isLoading && (
        <div className="min-h-screen text-center flex flex-col justify-start items-center ">
          {" "}
          <h2 className="text-2xl md:text-3xl mx-auto text-orange-600 font-bold mt-44 animate-ping">
            Loading...
          </h2>
        </div>
      )}
    </>
  );
};

export default Attractions;
