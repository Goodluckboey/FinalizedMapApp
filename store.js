import { createStore, combineReducers } from "redux";
// import createStore from "./customStore";
import {myReducer,starReducer} from "./reducer";

const store = createStore(combineReducers({ myReducer, starReducer }));

export default store;
