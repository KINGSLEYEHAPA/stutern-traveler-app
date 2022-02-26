import axios from "axios";
import { actionTypes } from "./redux/actions/actionTypes";

export const hotelCards = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    title: "Studio Room",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 50/Day",
    features: ["Free Wifi", "Free breakfast"],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Deluxe Room",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 80/Day",
    features: ["Free Wifi", "Free breakfast"],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    title: "King Deluxe Room",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 150/Day",
    features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Royal Suite",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 299/Day",
    features: [
      "Free Wifi",
      "Free breakfast",
      "Discounted Meals",
      "MacBook for work use (hotel's property)",
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Royal Suite",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 299/Day",
    features: [
      "Free Wifi",
      "Free breakfast",
      "Discounted Meals",
      "MacBook for work use (hotel's property)",
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Royal Suite",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 299/Day",
    features: [
      "Free Wifi",
      "Free breakfast",
      "Discounted Meals",
      "MacBook for work use (hotel's property)",
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Royal Suite",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 299/Day",
    features: [
      "Free Wifi",
      "Free breakfast",
      "Discounted Meals",
      "MacBook for work use (hotel's property)",
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Royal Suite",
    description: "Lorem ipsum dolor sit amet, consectur dolori",
    pricingText: "USD 299/Day",
    features: [
      "Free Wifi",
      "Free breakfast",
      "Discounted Meals",
      "MacBook for work use (hotel's property)",
    ],
  },
];

export let location = {
  address: "",
  lat: 5.55,
  lng: 5.79,
};

export const displayLocationInfo = (position) => {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;
  console.log(lat, lng);
  location.lat = lat;
  location.lng = lng;
  location.address = "This is your current location.";
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

export const getWeatherData = async (dispatch) => {
  try {
    dispatch({ type: actionTypes.FETCH_DATA_START });
    const res = await axios.get();
    const resWeather = await res.json();
    dispatch({ type: actionTypes.FETCH_DATA_SUCCESS, payload: resWeather });

    console.log(resWeather);
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_DATA_ERROR, payload: err.message });
  }
};
