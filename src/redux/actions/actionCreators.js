import { actionTypes } from "./actionTypes";
export const fetchDataStart = () => ({
  type: actionTypes.FETCH_DATA_START,
});

export const getWeatherDataSuccess = (data) => ({
  type: actionTypes.USER_WEATHER,
  payload: data,
});

export const getWeatherDataError = (error) => ({
  type: actionTypes.FETCH_DATA_ERROR,
  payload: error,
});
export const getNewDataSuccess = (data) => ({
  type: actionTypes.DESTINATION_NEWS,
  payload: data,
});

export const getNewsDataError = (error) => ({
  type: actionTypes.DESTINATION_NEWS_ERROR,
  payload: error,
});

export const getDestinationWeatherSuccess = (data) => ({
  type: actionTypes.DESTINATION_WEATHER,
  payload: data,
});

export const getDestinationWeatherError = (error) => ({
  type: actionTypes.DESTINATION_WEATHER_ERROR,
  payload: error,
});
export const getDestinationAttractionsSuccess = (data) => ({
  type: actionTypes.DESTINATION_ATTRACTION,
  payload: data,
});

export const getDestinationAttractionsError = (error) => ({
  type: actionTypes.DESTINATION_ATTRACTION_ERROR,
  payload: error,
});

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
