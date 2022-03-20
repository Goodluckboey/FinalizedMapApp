import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import myReducer from "./reducer";
import InnerApp from "./InnerApp";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";

// import store from "./store";

const store = createStore(myReducer);


export default function App() {
  return (
    <Provider store={store}>
      <InnerApp></InnerApp>
    </Provider>
  );
}
