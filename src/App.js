import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { getOurCurrentLocation, toStoreHospetalData } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import hospetal from "./assets/medical.png";
import { Route, Routes, useNavigate } from "react-router-dom";
import HospitalList from "./Components/HospitalList";
import SelectedHospital from "./Components/SelectedHospital";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedHospital = useSelector((state) => state?.selectedHospital);

  useEffect(() => {
    axios
      .get(
        "https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:78.44202,17.3707564,5000&bias=proximity:78.44202,17.3707564&limit=20&apiKey=71bffbdc0fc345bab61a4815d37369bf"
      )
      .then((response) =>
        dispatch(toStoreHospetalData(response.data.features))
      );
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const payload = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        dispatch(getOurCurrentLocation(payload));
      });
    }
  }, []);
  return (
    <div style={{ maxHeight: "100vh" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="toolBar">
            <img src={hospetal} />
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <b>Near By Hospitals</b>
            </Typography>
            {selectedHospital.type !== undefined && (
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/")}
              >
                Hospitals
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ margin: "0rem 1rem", maxHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<HospitalList />} />
          <Route path="/hospital" element={<SelectedHospital />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
