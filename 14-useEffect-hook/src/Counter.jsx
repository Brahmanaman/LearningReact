import React from "react";
import { useEffect } from "react";

const Counter = ({ num, num1 }) => {
  function counterHandler() {
    console.log("counter handler");
  }

  useEffect(() => {
    counterHandler();
  }, [num1]);

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num1}</h1>
    </div>
  );
};

export default Counter;
