import axios from "axios";
import { actionTypes } from "./actionTypes";

export const getWeatherDataSuccess = (data) => ({
  type: actionTypes.USER_WEATHER,
  payload: data,
});
export const fetchDataStart = () => ({
  type: actionTypes.FETCH_DATA_START,
});

export const getWeatherDataError = (error) => ({
  type: actionTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const getNewsData = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.FETCH_DATA_START });
    const resNews = await axios.get();

    console.log(resNews);
  } catch (err) {}
};

export const location = {};

export const displayLocationInfo = (position) => {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;
  console.log(lat, lng);

  location.lat = lat;
  location.lng = lng;
  location.address = "This is your current location.";
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayLocationInfo);
}
console.log(location);

const API_key = process.env.REACT_APP_API_KEY_WEATHER;
export const getWeatherData = async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const resWeather =
      location !== null &&
      (await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&units=metric&appid=${API_key}`
      ));

    dispatch(getWeatherDataSuccess(resWeather?.data));
    console.log(resWeather.data);
  } catch (err) {
    console.log(err.message);
    dispatch(getWeatherDataError(err.message));
  }
};
