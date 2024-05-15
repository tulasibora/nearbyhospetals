import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import axios from "axios";
import { toStoreWayStepsFromHometoHospital } from "../redux/action";
import RoutingFromHome from "./RoutingFromHome";
import { useLocation } from "react-router-dom";

const SelectedHospital = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = location.state;
  const currentLocation = useSelector((state) => state?.currentLocation);
  const { lat, lon } = state.properties;
  const { latitude, longitude } = currentLocation;
  const [directionsNew, setDirectionnew] = useState([]);
  //https://api.geoapify.com/v1/routing?waypoints=${latitude},${longitude}|${lat},${lon}&mode=drive&apiKey=71bffbdc0fc345bab61a4815d37369bf
  useEffect(() => {
    if (lat && lon && latitude && longitude) {
      axios
        .get(
          `https://api.geoapify.com/v1/routing?waypoints=${latitude},${longitude}|${lat},${lon}&mode=drive&apiKey=71bffbdc0fc345bab61a4815d37369bf`
        )
        .then((response) => {
          setDirectionnew(response.data.features);
          dispatch(toStoreWayStepsFromHometoHospital(response.data.features));
        });
    }
  }, [directionsNew.length === 0]);

  return (
    <div className="hospital">
      <div className="hospitalDetails">
        <div className="text">
          <h1>{state.properties.address_line1}</h1>
        </div>
        <div className="text">
          <hr />
          <p>
            User Latitude : <span>{latitude}</span>
          </p>
          <p>
            User Longitude : <span>{longitude}</span>
          </p>
          <p>
            User Formatted Address : <span>----</span>
          </p>
        </div>

        <div className="text">
          <hr />
          <p>
            Hospital Latitude : <span>{state.properties.lat}</span>
          </p>
          <p>
            Hospital Longitude : <span>{state.properties.lon}</span>
          </p>
          <p>
            Hospital Formatted Address :
            <span>{state.properties.formatted}</span>
          </p>
        </div>

        <div className="text">
          <hr />
          <p>
            Hospital Website <span>----</span>
          </p>
          <p>
            Hospital Email <span>---</span>
          </p>
          <p>
            State <span>{state.properties.state}</span>
          </p>
          <p>
            City <span>{state.properties.city}</span>
          </p>
        </div>
      </div>
      <RoutingFromHome />
    </div>
  );
};

export default SelectedHospital;
