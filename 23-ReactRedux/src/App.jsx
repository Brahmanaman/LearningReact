import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default App;
