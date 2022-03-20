import { createSlice } from "@reduxjs/toolkit";

export const selectedLocationSlice = createSlice({
  name: "selectedLocation",
  initialState: {
    value: {
      name: "",
      metaData: "",
      longitude: 103.851959,
      latitude: 1.4027,
      longitudeDelta: 0.0922,
      latitudeDelta: 0.0421,
    },
    reducers: {
      selectALocation: (state, action) => {
        state.value = action.payload;
      },
    },
  },
});

export const { selectALocation } = selectedLocationSlice.actions;

export default selectedLocationSlice.reducer;
