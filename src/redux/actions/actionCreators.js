import axios from "axios";

export const getAttractions = async (dispatch) => {
  try {
    const res = await axios.get(
      "https://ig-food-menus.herokuapp.com/our-foods"
    );

    console.log(res);
  } catch (err) {}
};
