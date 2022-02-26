const appStateData = {
  searchDataOpen: false,
};

const appStateReducer = (state = appStateData, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
export default appStateReducer;
