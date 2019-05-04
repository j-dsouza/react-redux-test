import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";

const mathReducer = (
  state = {
    result: 1,
    lastValue: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValue, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValue: [...state.lastValue, action.payload]
      };
      break;
    default:
      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: "Max",
    age: 27
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = { ...state, name: action.payload };
      break;
    case "SET_AGE":
      state = { ...state, age: action.payload };
      break;
    default:
      break;
  }
  return state;
};

const counterReducer = (state = { counters: { id: 1, value: 1 } }, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = { ...state, counters: { value: state.counters.value++ } };
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(
  combineReducers({ mathReducer, userReducer, counterReducer }),
  {},
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const myLogger = store => next => action => {
//   console.log("Logged Action: ", action);
//   next(action);
// };

store.subscribe(() => {
  // console.log("Store updated!", store.getState());
});
