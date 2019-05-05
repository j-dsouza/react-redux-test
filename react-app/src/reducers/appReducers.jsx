import { combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer";

const appReducer = combineReducers({ counterReducer });

const rootReducer = (state, action) => {
  console.log("appReducers.jsx");
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
