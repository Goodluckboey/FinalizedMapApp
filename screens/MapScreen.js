import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import store from "../store";
import { Provider } from "react-redux";

const { width, height } = Dimensions.get("screen");

const MapScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [startRegion, setStartRegion] = useState({
    longitude: 103.851959,
    latitude: 1.4027,
    longitudeDelta: 0.0922,
    latitudeDelta: 0.0421,
  });
  const [mapRegion, setMapRegion] = useState({
    longitude: 103.851959,
    latitude: 1.4027,
    longitudeDelta: 0.0922,
    latitudeDelta: 0.0421,
  });

  useEffect(() => {
    setMapRegion(store.getState()[store.getState().length - 1]);
  }, []);

  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      initialRegion={startRegion}
    >
      {mapRegion ? (
        <Marker coordinate={mapRegion}></Marker>
      ) : (
        console.log("NoMapData")
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
