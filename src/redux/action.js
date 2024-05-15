export const toStoreHospetalData = (payload) => {
  return {
    type: "HospetalData",
    payload: payload,
  };
};
export const handleSelectHospital = (payload) => {
  return {
    type: "SelectHospital",
    payload: payload,
  };
};
export const getOurCurrentLocation = (payload) => {
  return {
    type: "location",
    payload: payload,
  };
};
export const toStoreWayStepsFromHometoHospital = (payload) => {
  return {
    type: "directions",
    payload: payload,
  };
};
export const setLegs = (payload) => {
  return {
    type: "Legs",
    payload: payload,
  };
};
export const setSteps = (payload) => {
  return {
    type: "STEPS",
    payload: payload,
  };
};
