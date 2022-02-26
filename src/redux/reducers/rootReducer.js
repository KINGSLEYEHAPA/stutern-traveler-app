import { combineReducers } from "redux";
import appStateReducer from "./appStateReducer";
import appDataReducer from "./appDataReducer";

const rootReducer = combineReducers({
  appState: appStateReducer,
  appData: appDataReducer,
});

export default rootReducer;
