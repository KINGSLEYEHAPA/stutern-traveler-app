import axios from "axios";
import { actionTypes } from "./actionTypes";

export const getWeatherDataSuccess = (data) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataStart = () => ({
  type: actionTypes.FETCH_DATA_START,
});
export const fetchDataEnd = () => ({
  type: actionTypes.FETCH_DATA_END,
});

export const getWeatherDataError = (error) => ({
  type: actionTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const getData = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.FETCH_DATA_START });
    const resWeather = await axios.get();

    console.log(resWeather);
  } catch (err) {}
};
