import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Carousel = () => {
  const nameOfSearch = useSelector((state) => state.nameOfSearch);
  const isDestinationAttractionError = useSelector(
    (state) => state.isDestinationAttractionError
  );
  console.log(isDestinationAttractionError);

  const attractionsData = useSelector(
    (state) => state.destinationAttractionsData
  );

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
    <>
      {!isDestinationAttractionError && (
        <div
          className=" h-28 w-4/5  p-1 relative space-x-4 left-24 translate-x-[-3.5rem]  md:translate-x-[-2rem]  lg:translate-x-[-1rem]  xl:translate-x-[1rem]"
          style={{ margin: "0 10px" }}
        >
          <h2 className="text-center mb-10 text-2xl md:text-3xl text-orange-600">
            {" "}
            Attractions
          </h2>
          <Slider {...sliderSettings}>
            {attractionsData &&
              attractionsData.map((data, index) => (
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
                        alt={data.title}
                        // onError={(e) => {
                        //   e.target.src =
                        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6lcZuMlT_CiWJ_tDq7IqDVJYu8cuxVd17g&usqp=CAU";
                        // }}
                        src={data.result_object.photo.images?.original.url}
                      />
                      <div className="w-full h-28 p-2 text-center py-2">
                        <h2 className="text-orange-600 text-center text-xl ">
                          {data.result_object.name.slice(0, 20)}
                        </h2>
                        <p className="text-orange-600/60 text-sm ">
                          {data.result_object.address
                            ? data.result_object.address.slice(0, 60)
                            : `A nice location in to visit ${nameOfSearch}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Carousel;
