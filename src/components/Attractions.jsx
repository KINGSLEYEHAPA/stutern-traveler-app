import React from "react";
import { Link } from "react-router-dom";
import imageOne from "../assets/images/355173.jpg";
// import "../assets/images/355119.jpg";

const Attractions = () => {
  return (
    <div className="min-h-screen w-full p-6">
      <div className="w-full bg-white h-[22rem] shadow-2xl mx-auto  rounded-xl relative  ">
        <img src={imageOne} alt="" className="w-full h-full rounded-xl" />
        <div className="absolute top-8 left-7 w-5/6 h-[18rem] bg-orange-600/20 m-4 text-left py-2 px-4 ssm:flex ssm:flex-row  ssm:gap-24">
          <div className="ssm:w-[100rem]">
            <h2 className="text-4xl ssm:text-5xl lg:text-6xl text-orange-600 border-b-2 border-orange-600 pb-1">
              London
            </h2>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae suscipit sint itaque ea sapiente porro perferendis nam
              culpa velit magnam.
            </p>
          </div>
          <div className="flex mt-10 w-full justify-between px-4 gap-2 text-orange-600 ssm:flex ssm:flex-col ssm:relative ssm:left-6 md:left-8 lg:left-28 xl:left-60">
            <div className="bg-white/50 rounded-lg h-12 w-28 text-center pt-2  ">
              <span className="text-sm "> Temp: 9°C</span>
              <span className=" text-sm"> Snow</span>
            </div>
            <div className="bg-white/50 rounded-lg h-12 w-28 text-center pt-2">
              <span className=" text-xs"> Wind Speed: 2km/s</span>
            </div>
            <div className="bg-white/50 rounded-lg h-12 w-28 ">
              <img
                className="w-full h-full rounded"
                src="https://cdn1.vectorstock.com/i/1000x1000/86/95/weather-cloud-rainy-icon-vector-19558695.jpg"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-min-screen bg-white p-6 mt-5 rounded-lg ">
        <h2 className=" mb-5 text-2xl text-orange-600 ssm:text-3xl text-center">
          News Headlines{" "}
        </h2>
        <div className="flex flex-col gap-5">
          <Link to="news">
            <div className="flex gap-6 shadow-2xl py-4 px-4">
              <img
                className=" w-44 h-24 rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5-tCW_twG5OXhcX56JSSYYCLQ8_7-UbfgA&usqp=CAU"
                alt=""
              />

              <div>
                <h3 className="text-lg ssm:text-xl text-orange-600">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
                <p className="text-sm py-1 text-orange-600/70 ssm:text-md">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </Link>
          <Link to="news">
            <div className="flex gap-6 shadow-2xl py-4 px-4">
              <img
                className=" w-44 h-24 rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5-tCW_twG5OXhcX56JSSYYCLQ8_7-UbfgA&usqp=CAU"
                alt=""
              />

              <div>
                <h3 className="text-lg ssm:text-xl text-orange-600">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
                <p className="text-sm py-1 text-orange-600/70 ssm:text-md">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </Link>
          <Link to="news">
            <div className="flex gap-6 shadow-2xl py-4 px-4">
              <img
                className=" w-44 h-24 rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5-tCW_twG5OXhcX56JSSYYCLQ8_7-UbfgA&usqp=CAU"
                alt=""
              />

              <div>
                <h3 className="text-lg ssm:text-xl text-orange-600">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
                <p className="text-sm py-1 text-orange-600/70 ssm:text-md">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </Link>
          <Link to="news">
            <div className="flex gap-6 shadow-2xl py-4 px-4">
              <img
                className=" w-44 h-24 rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5-tCW_twG5OXhcX56JSSYYCLQ8_7-UbfgA&usqp=CAU"
                alt=""
              />

              <div>
                <h3 className="text-lg ssm:text-xl text-orange-600">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
                <p className="text-sm py-1 text-orange-600/70 ssm:text-md">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
