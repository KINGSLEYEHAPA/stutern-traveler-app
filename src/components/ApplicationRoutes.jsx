import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Attractions from "./Attractions";
import HomePage from "./HomePage";

const ApplicationRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/attractions" element={<Attractions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default ApplicationRoutes;
