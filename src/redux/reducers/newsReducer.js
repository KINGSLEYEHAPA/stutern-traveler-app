import { actionTypes } from "../action/actiontype";

const newsData = {};

const newsReducer = (state = newsData, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
export default newsReducer;
