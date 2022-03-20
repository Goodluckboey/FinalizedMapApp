import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import store from "../store";
const { width, height } = Dimensions.get("screen");

const MapScreen = ({ navigation }) => {
  // const selectedLocation = useSelector((state) => state.selectedLocation.value);

  const [errorMsg, setErrorMsg] = useState(null);

  const startRegion = {
    longitude: 103.851959,
    latitude: 1.4027,
    longitudeDelta: 0.0922,
    latitudeDelta: 0.0421,
  };

  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      initialRegion={startRegion}
    >
      {store.getState().longitude !== startRegion.longitude ||
      store.getState().latitude === startRegion.latitude ? (
        <Marker coordinate={store.getState()}></Marker>
      ) : (
        <Marker coordinate={startRegion}></Marker>
      )}
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width,
    height,
  },
});
