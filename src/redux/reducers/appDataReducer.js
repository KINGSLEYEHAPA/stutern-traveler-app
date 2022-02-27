import { actionTypes } from "../actions/actionTypes";

const appData = {
  currentCityWeatherData: [],
  isLoading: false,
};

const appDataReducer = (state = appData, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
export default appDataReducer;
