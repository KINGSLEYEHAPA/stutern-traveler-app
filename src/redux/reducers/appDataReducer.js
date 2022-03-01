import { actionTypes } from "../actions/actionTypes";

const appData = {
  currentCityWeatherData: [],
  isLoading: false,
  userLocation: null,
  userWeather: null,
  isError: false,
  error: null,
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

    default:
      return state;
  }
};
export default appDataReducer;
