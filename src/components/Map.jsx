import React from "react";
import GoogleMapReact from "google-map-react";
import { location } from "../dummyData";
import { blueMap } from "../myMapStyles";

const Map = () => {
  return (
    <div className="map">
      <div className="w-screen h-96 mb-8">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={location}
          defaultZoom={10}
          options={{ styles: blueMap }}
        >
          {/* <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
