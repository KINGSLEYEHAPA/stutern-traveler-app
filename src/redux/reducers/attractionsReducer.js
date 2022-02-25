import { actionTypes } from "../action/actiontype";

const attractionsData = {};

const attractionsReducer = (state = attractionsData, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
export default attractionsReducer;
