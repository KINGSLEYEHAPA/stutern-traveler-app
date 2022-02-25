import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import attractionsReducer from "./attractionsReducer";
import newsReducer from "./newsReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  appState: appStateReducer,
  attractions: attractionsReducer,
  news: newsReducer,
  weather: weatherReducer,
});

export default rootReducer;
