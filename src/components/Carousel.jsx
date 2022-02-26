import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { hotelCards } from "../dummyData";
import { Link } from "react-router-dom";

const Carousel = () => {
  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  return (
    <div
      className=" h-28 w-4/5  p-1 relative space-x-4 left-24 translate-x-[-3.5rem]  md:translate-x-[-2rem]  lg:translate-x-[-1rem]  xl:translate-x-[1rem]"
      style={{ margin: "0 10px" }}
    >
      <h2 className="text-center mb-10 text-2xl md:text-3xl text-orange-600">
        {" "}
        Attractions
      </h2>
      <Slider {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <Link
            to="/attractions"
            key={index}
            className="w-24 h-60  shadow-xl  pl-4 rounded-lg  "
            style={{ margin: "0 -10px" }}
          >
            {" "}
            <div>
              <div className="bg-white/90 backdrop-blur-2xl w-full   rounded-lg  rounded-br-lg rounded-bl-lg ">
                <img
                  className="w-full h-48 sm:h-44  rounded-tr-lg rounded-tl-lg"
                  alt={card.title}
                  src={card.imageSrc}
                />
                <div className="w-full p-2 text-center py-2">
                  <h2 className="text-orange-600 text-center text-xl ">
                    {card.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
