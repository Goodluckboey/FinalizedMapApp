import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import store from "../store";
import customNavigationBar from "../customNavigator";
import positionData from "../positionData";
import { selectLocation } from "../actions";

const { width, height } = Dimensions.get("screen");

const MapScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);

  const startRegion = {
    longitude: 103.851959,
    latitude: 1.4027,
    longitudeDelta: 0.0922,
    latitudeDelta: 0.0421,
  };

  const updateState = (input) => {
    store.dispatch(selectLocation(input));
  };

  return (
    <>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        initialRegion={
          store.getState().myReducer.longitude !== startRegion.longitude ||
          store.getState().myReducer.latitude === startRegion.latitude
            ? store.getState().myReducer
            : startRegion
        }
      >
        {positionData.map((element) => {
          return (
            <Marker
              key={element.name}
              coordinate={element}
              onPress={() => {
                updateState(element);
                navigation.navigate("Details");
              }}
            ></Marker>
          );
        })}
      </MapView>
      {customNavigationBar({ navigation })}
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingLeft: 10,
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  map: {
    height,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  text: {
    flex: 1,
  },
});
