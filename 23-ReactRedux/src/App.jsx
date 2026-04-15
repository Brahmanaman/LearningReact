import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice.js";

const App = () => {
  const count = useSelector((state) => state.count.count);

  const dispatch = useDispatch();
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
