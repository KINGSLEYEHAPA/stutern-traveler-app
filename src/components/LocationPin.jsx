import React from "react";
import { ImLocation } from "react-icons/im";

const LocationPin = ({ text, lat, lng }) => {
  return (
    <div className="w-40 h-36 bg-white p-1 rounded-lg relative top-3">
      <span className="text-4xl text-orange-600 absolute right-40 bottom-40">
        <ImLocation />
      </span>
      <p className=" mt-4 text-sm w-full px-1 text-orange-600">{text}</p>
      <p className=" mt-4 text-sm w-full px-1 text-orange-600">
        Latitude: {lat}
      </p>
      <p className=" mt-4 text-sm w-full px-1 text-orange-600">
        Longitude: {lng}
      </p>
    </div>
  );
};

export default LocationPin;
