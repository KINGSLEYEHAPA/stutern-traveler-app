import { actionTypes } from "../actions/actionTypes";

const appStateData = {
  isLoading: false,
  isError: false,
  error: null,
};

const appStateReducer = (state = appStateData, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return { ...state, isloading: true };
    default:
      return state;
  }
};
export default appStateReducer;
