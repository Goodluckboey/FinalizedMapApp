import * as actions from "./actionTypes";

export function myReducer(
  state = {
    name: "InitialState",
    metaData: "No Data Input as of yet",
    longitude: 103.851959,
    latitude: 1.4027,
    longitudeDelta: 0.0922,
    latitudeDelta: 0.0421,
    starred: false,
  },
  action
) {
  switch (action.type) {
    case actions.SELECT_LOCATION:
      return {
        ...state,
        name: action.payload.name,
        longitude: action.payload.longitude,
        latitude: action.payload.latitude,
        metaData: action.payload.metaData,
        starred: action.payload.starred,
      };

    default:
      console.log("nothing Changed");
      return state;
  }
}

export function starReducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_STARRED_LIST:
      return [
        ...state,
        {
          name: action.payload.name,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
          metaData: action.payload.metaData,
          starred: action.payload.starred,
        },
      ];

    default:
      console.log("nothing Changed");
      return state;
  }
}
