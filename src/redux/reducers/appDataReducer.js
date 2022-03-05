import { actionTypes } from "../actions/actionTypes";

const appData = {
  isLoading: false,
  userLocation: null,
  userWeather: null,
  isLocationError: false,
  locationError: null,
  isWeatherError: false,
  weatherError: null,
  isDestinationAttractionError: false,
  destinationAttractionerror: null,
  isdestinationWeatherError: false,
  destinationWeatherError: null,
  isdestinationNewsError: false,
  destinationNewserror: null,
  destinationAttractionsData: [],
  destinationWeather: [],
  destinationNews: [],
  nameOfSearch: "",
};

const appDataReducer = (state = appData, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_DATA_START_DESTINATION:
      return {
        ...state,
        isLoading: true,
        destinationAttractionsData: [],
        destinationNews: [],
        destinationWeather: [],
      };
    case actionTypes.USER_LOCATION:
      return {
        ...state,
        userLocation: payload,
        isLoading: false,
        isLocationError: false,
        locationError: null,
      };
    case actionTypes.FETCH_DATA_ERROR:
      return { ...state, isLocationError: true, locationError: payload };
    case actionTypes.USER_WEATHER:
      return {
        ...state,
        userWeather: payload,
        isWeatherError: false,
        weatherError: null,

        isLoading: false,
      };

    case actionTypes.DESTINATION_ATTRACTIONS:
      return {
        ...state,
        destinationAttractionsData: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_ATTRACTIONS_ERROR:
      return {
        ...state,
        isDestinationAttractionError: true,
        destinationAttractionerror: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_WEATHER:
      return {
        ...state,
        destinationWeather: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_WEATHER_ERROR:
      return {
        ...state,
        isdestinationWeatherError: true,
        destinationWeatherError: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_NEWS:
      return {
        ...state,
        destinationNews: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_NEWS_ERROR:
      return {
        ...state,
        isdestinationNewsError: true,
        destinationNewserror: payload,
        isLoading: false,
      };
    case actionTypes.DESTINATION_SEARCH_NAME:
      return { ...state, nameOfSearch: payload };

    default:
      return state;
  }
};
export default appDataReducer;
