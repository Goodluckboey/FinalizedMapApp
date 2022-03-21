import * as actions from "./actionTypes";

export function selectLocation(input) {
  return {
    type: actions.SELECT_LOCATION,
    payload: {
      name: input.name,
      longitude: input.longitude,
      latitude: input.latitude,
      metaData: input.metaData,
      longitudeDelta: input.longitudeDelta,
      latitudeDelta: input.latitudeDelta,
      starred: input.starred,
    },
  };
}

export function makeNewLocationList(input) {
  return {
    type: actions.ADD_STARRED_LIST,
    payload: {
      name: input.name,
      longitude: input.longitude,
      latitude: input.latitude,
      metaData: input.metaData,
      longitudeDelta: input.longitudeDelta,
      latitudeDelta: input.latitudeDelta,
      starred: input.starred,
    },
  };
}
