import { actionTypes } from "../actions/actionTypes";

const appData = {
  currentCityWeatherData: [],
  isLoading: false,
  userLocation: null,
  userWeather: null,
  isError: false,
  error: null,
  destinationAttractionsData: [],
  destinationWeather: [],
  destinationNews: [],
  nameOfSearch: "",
};

const appDataReducer = (state = appData, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return { ...state, isLoading: true, isError: false, error: null };
    case actionTypes.USER_LOCATION:
      return { ...state, userLocation: payload };
    case actionTypes.FETCH_DATA_ERROR:
      return { ...state, isError: true, error: payload };
    case actionTypes.USER_WEATHER:
      return {
        ...state,
        userWeather: payload,

        isLoading: false,
      };

    case actionTypes.DESTINATION_ATTRACTIONS:
      return {
        ...state,
        destinationAttractionsData: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_ATTRACTIONS_ERROR:
      return { ...state, isError: true, error: payload, isLoading: false };
    case actionTypes.DESTINATION_WEATHER:
      return {
        ...state,
        destinationWeather: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_WEATHER_ERROR:
      return { ...state, isError: true, error: payload, isLoading: false };
    case actionTypes.DESTINATION_NEWS:
      return {
        ...state,
        destinationNews: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_NEWS_ERROR:
      return { ...state, isError: true, error: payload, isLoading: false };
    case actionTypes.DESTINATION_SEARCH_NAME:
      return { ...state, nameOfSearch: payload };

    default:
      return state;
  }
};
export default appDataReducer;
