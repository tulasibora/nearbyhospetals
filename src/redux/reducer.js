const initialState = {
  hospetals: [],
  selectedHospital: {},
  currentLocation: {},
  directions: [],
  steps: [],
  LegsData: [],
  stepsData: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "HospetalData":
      return {
        ...state,
        hospetals: payload,
      };
    case "SelectHospital":
      return {
        ...state,
        selectedHospital: payload,
      };
    case "location":
      return {
        ...state,
        currentLocation: payload,
      };
    case "directions":
      return {
        ...state,
        directions: payload,
      };
    case "Legs":
      return {
        ...state,
        LegsData: payload,
      };
    case "STEPS":
      return {
        ...state,
        stepsData: payload,
      };

    default:
      return {
        ...state,
      };
  }
};
