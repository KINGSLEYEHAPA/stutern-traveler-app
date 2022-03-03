import { actionTypes } from "../actions/actionTypes";

const appData = {
  currentCityWeatherData: [],
  isLoading: false,
  userLocation: null,
  userWeather: null,
  isError: false,
  error: null,
  destinationAttractionData: [],
  destinationWeather: [],
  destinationNews: [],
  nameOfSearch: "",
};

const appDataReducer = (state = appData, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return { ...state, isLoading: true };
    case actionTypes.USER_LOCATION:
      return { ...state, userLocation: payload };
    case actionTypes.FETCH_DATA_ERROR:
      return { ...state, isError: true, error: payload };
    case actionTypes.USER_WEATHER:
      return {
        ...state,
        userWeather: payload,
        isError: false,
        error: null,
        isLoading: false,
      };
    case actionTypes.DESTINATION_ATTRACTION:
      return {
        ...state,
        destinationAttractionData: payload,
        isLoading: false,
        error: null,
        isError: false,
      };
    case actionTypes.DESTINATION_ATTRACTION_ERROR:
      return { ...state, isError: true, error: payload, isLoading: false };
    case actionTypes.DESTINATION_WEATHER:
      return {
        ...state,
        destinationWeather: payload,
        isLoading: false,
        error: null,
        isError: false,
      };
    case actionTypes.DESTINATION_WEATHER_ERROR:
      return { ...state, isError: true, error: payload, isLoading: false };
    case actionTypes.DESTINATION_NEWS:
      return {
        ...state,
        destinationNews: payload,
        isLoading: false,
        error: null,
        isError: false,
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
