import { actionTypes } from "../action/actiontype";

const appStateData = {
  searchDataOpen: false,
};

const appStateReducer = (state = appStateData, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
export default appStateReducer;
