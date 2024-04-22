import changetheNumber from "./updown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changetheNumber: changetheNumber // Assuming changetheNumber is a slice of your state
  });

export default rootReducer;