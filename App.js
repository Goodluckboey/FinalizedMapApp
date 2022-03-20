import { Provider } from "react-redux";
import { createStore } from "redux";
import myReducer from "./reducer";
import InnerApp from "./InnerApp";
import React from "react";
import "react-native-gesture-handler";
import { View, Text, StyleSheet, Dimensions } from "react-native";


const height = Dimensions.get("window").height;

const store = createStore(myReducer);

export default function App() {
  return (
    <Provider store={store}>
      <InnerApp></InnerApp>
    </Provider>
  );
}
