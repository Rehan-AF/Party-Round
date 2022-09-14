import { combineReducers } from "@reduxjs/toolkit";
import HeaderReducer from "../redux/header/header.slicer";

const rootReducer = combineReducers({
  Header: HeaderReducer,
});

export default rootReducer;
