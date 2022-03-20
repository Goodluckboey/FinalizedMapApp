import { createStore } from "@reduxjs/toolkit";
import myReducer from "./reducer";

const store = createStore(myReducer);

export default store;
