import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

const ApplicationRoutes = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default ApplicationRoutes;
