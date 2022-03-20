import { Provider } from "react-redux";
import { createStore } from "redux";
import myReducer from "./reducer";
import InnerApp from "./InnerApp";
import React from "react";
import "react-native-gesture-handler";
import { View, Text, StyleSheet, Dimensions } from "react-native";

// import store from "./store";

const height = Dimensions.get("window").height;

const store = createStore(myReducer);

export default function App() {
  return (
    <Provider store={store}>
      <InnerApp></InnerApp>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
  },
  map: {
    height,
  },
  homeTitle: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "40%",
  },
  mapTitle: {},
});
