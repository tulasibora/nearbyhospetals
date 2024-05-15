import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import { handleSelectHospital } from "../redux/action";
import { useNavigate } from "react-router-dom";

const HospitalList = () => {
  const hospetals = useSelector((state) => state.hospetals);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="allHospitalList">
        {hospetals.map((hospital, index) => {
          return (
            <div
              key={index}
              className="hospitalDiv"
              onClick={() =>
                dispatch(
                  handleSelectHospital(hospital),
                  navigate("/hospital", { state: hospital })
                )
              }
            >
              <h3>{hospital.properties.address_line1}</h3>
              <p>{hospital.properties.formatted}</p>
              <p>{hospital.properties.suburb}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HospitalList;
