import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { myReducer, starReducer } from "./reducer";
import InnerApp from "./InnerApp";
import React from "react";
import "react-native-gesture-handler";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const store = createStore(combineReducers({ myReducer, starReducer }));

export default function App() {
  return (
    <Provider store={store}>
      <InnerApp></InnerApp>
    </Provider>
  );
}
