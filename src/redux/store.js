import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import appDataReducer from "./reducers/appDataReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(appDataReducer, composedEnhancer);

export default store;
