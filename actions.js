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
    },
  };
}
