import { createStore } from "@reduxjs/toolkit";
// import createStore from "./customStore";
import myReducer from "./reducer";

const store = createStore(myReducer);

export default store;
