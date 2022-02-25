import { actionTypes } from "../action/actiontype";

const weatherData = {};

const weatherReducer = (state = weatherData, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
export default weatherReducer;
