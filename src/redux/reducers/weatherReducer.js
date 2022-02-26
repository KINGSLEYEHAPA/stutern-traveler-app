const weatherData = {};

const weatherReducer = (state = weatherData, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
export default weatherReducer;
