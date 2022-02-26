import axios from "axios";
import { actionTypes } from "./actionTypes";

export const getData = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.FETCH_DATA_START });
    const resWeather = await axios.get();

    console.log(resWeather);
  } catch (err) {}
};
