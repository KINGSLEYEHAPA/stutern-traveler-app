import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const News = () => {
  const destinationNews = useSelector((state) => state.destinationNews);
  const nameOfSearch = useSelector((state) => state.nameOfSearch);
  const isdestinationNewsError = useSelector(
    (state) => state.isdestinationNewsError
  );

  const params = useParams();
  const oneNewsItem =
    destinationNews !== undefined &&
    destinationNews?.find((item) => {
      return item.title === params.newsId;
    });
  console.log(oneNewsItem);

  return (
    <>
      {!isdestinationNewsError && (
        <div className="w-screen min-h-screen flex flex-row ">
          <div className="w-[60rem] p-12 bg-white min-h-[35rem] m-10 rounded-lg">
            <h2 className="text-left mb-5 text-2xl ssm:text-3xl text-orange-600 font-bold ">
              {destinationNews && oneNewsItem?.title}
            </h2>
            <hr className="border-orange-600 border-b-2" />
            <img
              className="mt-8 h-52 ssm:h-[32rem] w-full rounded-lg"
              src={
                oneNewsItem?.image_url
                  ? oneNewsItem?.image_url
                  : "https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg"
              }
              alt=""
            />
            <p className="text-orange-600 font-bold mt-10">
              {destinationNews && oneNewsItem?.pubDate}
            </p>
            <p className="mb-10 text-orange-600/60 font-bold">
              {destinationNews && oneNewsItem?.creator[0]}
            </p>
            <p className="text-orange-600/60 mt-10">
              {destinationNews && oneNewsItem?.description}
            </p>
            <p className="text-orange-900 mt-6">
              <a href={destinationNews && oneNewsItem?.link}>Read More </a>
            </p>
          </div>
          <div className="bg-white w-56 h-[35rem] mt-10 hidden xl:block rounded-lg p-4">
            <h2 className="pb-1 text-orange-600 border-orange-600 border-b-2 mb-5 ">
              Popular News in{" "}
              <span className="capitalize"> {nameOfSearch}</span>
            </h2>
            <div className="flex flex-col gap-4">
              {destinationNews &&
                destinationNews?.slice(0, 4).map((news, index) => {
                  return (
                    <Link
                      to={`/attractions/news/${news?.title}`}
                      className="text-orange-600/80"
                      key={index}
                    >
                      <p>{news?.title}</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
