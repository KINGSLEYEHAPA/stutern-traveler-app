import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { hotelCards } from "../dummyData";

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
      className=" h-28 w-4/5  p-1 relative space-x-4 left-24"
      style={{ margin: "0 10px" }}
    >
      <Slider {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div
            className="w-24 h-96  shadow-xl  pl-4 rounded-lg "
            style={{ margin: "0 -10px" }}
            key={index}
          >
            <div className="bg-white w-full  p-2 rounded-lg">
              <img
                className="w-full h-40 rounded-lg"
                alt={card.title}
                src={card.imageSrc}
              />
              <h2 className="text-orange-600 text-center text-xl mt-4">
                {card.title}
              </h2>
              <p>{card.description}</p>
              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="">Buy Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
