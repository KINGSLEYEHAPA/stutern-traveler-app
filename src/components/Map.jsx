import React from "react";
import GoogleMapReact from "google-map-react";

import { skyOrange } from "../myMapStyles";
import LocationPin from "./LocationPin";

const Map = ({ location }) => {
  return (
    <div className="w-full p-8">
      <div className="w-full md:w-full h-96 mb-10 mt-2 mx-auto flex ">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={location}
          defaultZoom={10}
          options={{ styles: skyOrange }}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
