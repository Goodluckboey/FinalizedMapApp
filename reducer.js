import * as actions from "./actionTypes";

const initialState = [
  {
    name: "InitialState",
    metaData: "No Data Input as of yet",
    longitude: 103.851959,
    latitude: 1.4027,
    longitudeDelta: 0.0922,
    latitudeDelta: 0.0421,
  },
];

export default function myReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SELECT_LOCATION:
      return [
        ...state,
        {
          name: action.payload.name,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
          metaData: action.payload.metaData,
        },
      ];
    default:
      console.log("nothing Changed");
      return state;
  }
}
