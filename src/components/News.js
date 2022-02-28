import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="w-screen min-h-screen flex flex-row ">
      <div className="w-[60rem] p-12 bg-white min-h-[35rem] m-10 rounded-lg">
        <h2 className="text-center mb-5 text-2xl ssm:text-3xl text-orange-600 font-bold ">
          The Headline
        </h2>
        <hr className="border-orange-600 border-b-2" />
        <img
          className="mt-8 h-52 ssm:h-96 w-full rounded-lg"
          src="https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg"
          alt=""
        />
        <p className="text-orange-600/60 mt-10">
          <p>Date-</p>
          <p className="mb-10">Author-</p> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptates consequuntur accusantium et.
          Atque alias dignissimos perferendis iusto odit, et labore quae
          accusantium rerum natus quo vero sunt aspernatur aliquam repellendus
          tempora nemo distinctio porro repellat architecto, eligendi delectus?
          Nam nemo dolorum consequuntur molestias quo incidunt vero atque
          deleniti maxime deserunt reprehenderit, repudiandae ipsam esse,
          obcaecati veniam. Distinctio blanditiis voluptate ullam voluptatem
          nesciunt beatae nobis labore perspiciatis eum, sequi dolor
          exercitationem consectetur, ducimus culpa atque soluta quasi dolorem
          minima esse iste fugiat quam ipsum, laudantium officia! Voluptatibus
          dolore ad accusamus itaque obcaecati impedit qui dolorem temporibus,
          minus ab? Voluptatibus, libero. Totam inventore adipisci tempore
          tempora provident atque dolore, enim incidunt expedita aspernatur, nam
          eius exercitationem dolores ratione eligendi accusantium neque iure?
        </p>
      </div>
      <div className="bg-white w-56 h-[35rem] mt-10 hidden xl:block rounded-lg p-4">
        <h2 className="pb-1 text-orange-600 border-orange-600 border-b-2 mb-5">
          Popular News in London
        </h2>
        <div className="flex flex-col gap-4">
          <Link to="/attractions/news" className="text-orange-600/80">
            <p>The MPs meet in preparation for G8 meeting</p>
          </Link>
          <Link to="/attractions/news" className="text-orange-600/80">
            <p>The MPs meet in preparation for G8 meeting</p>
          </Link>
          <Link to="/attractions/news" className="text-orange-600/80">
            <p>The MPs meet in preparation for G8 meeting</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
