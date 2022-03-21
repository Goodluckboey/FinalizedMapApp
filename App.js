import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { myReducer, starReducer } from "./reducer";
import InnerApp from "./InnerApp";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const store = createStore(combineReducers({ myReducer, starReducer }));

export default function App() {
  const [render, setRender] = useState(false);
  return (
    <Provider store={store}>
      <InnerApp></InnerApp>
    </Provider>
  );
}
