import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { userSelector, useDispatch, useSelector } from "react-redux";
import {increaseData,increaseDataByValue} from "./features/showSlice"
// import Zustand from './Zustand'; // Alternative for Redux and Redux Toolkit 

// FLOW  OF USING REDUX 
// (1) Visit "https://whataboutcoding.com/redux-toolkit-tutorial/#Step_2_%E2%80%93_Create_a_global_store"
// 1) Install Redux and Redux Toolkit package
// 2) Create a Redux Store
// Create a file named src / app / store.js.Import
// the configureStore API from Redux Toolkit.
// We'll start by creating an empty Redux store, and exporting it:
// 3) Step 3 – Providing store to complete react app This will provide store globally. Go to src/index.js :
    // something like this : -
    // import React from "react";
    // import ReactDOM from "react-dom/client";
    // import "./index.css";
    // import App from "./App";
    // import { store } from "./app/store";
    // import { Provider } from "react-redux"; 

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
// );
// 4)  Step 4 – Now lets create a slice
/* Create a slice – src/features/counter/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
    incrementByTypedValue: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
*/

// 5) Add Slice Reducers to the Store
/* 
import { configureStore } from "@reduxjs/toolkit";
import counterRedcuer from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: { counter: counterRedcuer },
});
*/


// 6) Implementing useSelector and useDispatch in React Components
/*
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
export default function Counter() {
  const count = useSelector((c) => c.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "40%",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}
*/

function App() {
  const data  = useSelector((c) => {
    return c.show.value;
  });

  const dispatch = useDispatch();

  const increaseHandler = () => [
    dispatch(increaseData())
  ]
  // const increaseByPayload = (params) => [
  //   dispatch(increaseDataByValue(params))
  // ]


  // const [val, setValue] = useState(1);
  // const handler = () => {
  //   setValue(val +1)
  // }
  return (
    // <Zustand />
    <>
      <h1> 
        Parent {data}
      </h1>

      <button onClick={()=>{increaseHandler()}}> Increase by 1 </button>
      <button onClick={() => {
        dispatch(increaseDataByValue(10))
      }}> Increase by 10 </button>
      
    </>
  )
}

export default App;
