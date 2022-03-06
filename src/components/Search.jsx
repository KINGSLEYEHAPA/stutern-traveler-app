import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataStartUser,
  getDestinationAttractionsError,
  getDestinationAttractionsSuccess,
  getDestinationWeatherError,
  getDestinationWeatherSuccess,
  getNewDataSuccess,
  getNewsDataError,
} from "../redux/actions/actionCreators";

import { actionTypes } from "../redux/actions/actionTypes";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [destinationWord, setDestinationWord] = useState("");
  const reducerState = useSelector((state) => state.destinationWeather);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(destinationWord + " this is not setting");
    console.log(reducerState);

    navigate("/attractions");
    setDestinationWord("");
  };

  useEffect(() => {
    if (destinationWord.length > 4) {
      dispatch({
        type: actionTypes.DESTINATION_SEARCH_NAME,
        payload: destinationWord,
      });
      const attractionsURL =
        "https://travel-advisor.p.rapidapi.com/locations/search";

      const options = {
        params: {
          query: destinationWord,
          limit: "30",
          offset: "0",
          units: "km",
          location_id: "1",
          currency: "USD",
          sort: "relevance",
          lang: "en_US",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "35e846bf3amshe76c7944fcf2005p156df0jsn1e2c93db3463",
        },
      };

      const getDestinationAttractionData = async (dispatch) => {
        try {
          dispatch(fetchDataStartUser());
          const resAttraction = await axios.get(attractionsURL, options);

          dispatch(getDestinationAttractionsSuccess(resAttraction?.data.data));

          console.log(resAttraction);
        } catch (err) {
          console.log(err.message);
          dispatch(getDestinationAttractionsError(err.message));
        }
      };
      const yahooWeather = "https://yahoo-weather5.p.rapidapi.com/weather";
      const rapidOptions = {
        params: { location: destinationWord, format: "json", u: "c" },
        headers: {
          "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
          "x-rapidapi-key":
            "9bc837decemsh62dd049e8517d88p10dc1cjsn77d59f44d625",
        },
      };

      const getWeather = async (dispatch) => {
        try {
          const resWeather = await axios.get(yahooWeather, rapidOptions);

          dispatch(getDestinationWeatherSuccess(resWeather?.data));
          console.log(resWeather.data);
        } catch (err) {
          console.log(err.message);
          dispatch(getDestinationWeatherError(err.message));
        }
      };

      const getNews = async (dispatch) => {
        try {
          const resNews = await axios.get(
            `http://api.mediastack.com/v1/news?access_key=b4c203815fa77f8225196c1defbb370e&keywords=${destinationWord}&countries=us`
          );

          dispatch(getNewDataSuccess(resNews?.data));
          console.log(resNews);
        } catch (err) {
          console.log(err.message);
          dispatch(getNewsDataError(err.message));
        }
      };

      dispatch(getDestinationAttractionData);
      dispatch(getWeather);
      dispatch(getNews);
    }
  }, [destinationWord, dispatch]);

  return (
    <div className="relative ">
      <form onSubmit={handleSubmit}>
        <input
          value={destinationWord}
          className="text-md  md:text-lg outline-none rounded-lg w-44 text-white bg-sky-400/20 px-4 pr-7 sm:w-44 md:w-[18rem] ssm:translate-x-4 md:h-10 py-1  ssm:w-[10rem] md:px-7 md:pr-8 placeholder:text-sm md:placeholder:text-md placeholder:text-orange-600 placeholder:font-bold"
          placeholder="Search for a location..."
          onChange={(e) => {
            setDestinationWord(e.target.value);
          }}
        />
      </form>
      <span className="absolute cursor-pointer right-2 top-2.5 text-sm text-white font-bold md:top-2.5 md:text-xl md:right-3 ssm:translate-x-4">
        <RiSearchLine />
      </span>
    </div>
  );
};

export default Search;
