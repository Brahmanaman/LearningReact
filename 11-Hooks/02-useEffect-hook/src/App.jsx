import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  //call many times, jab jab compoenent re-render hoga
  // useEffect(function () {
  //   console.log("useEffect is running");
  // });

  // useEffect(function () {
  //   console.log("call only pageload");
  // }, []);

  // useEffect(
  //   function () {
  //     console.log("call on state change");
  //   },
  //   [num]
  // );

  return (
    <div>
      {/* <h1>{num}</h1> */}
      <Counter num={num} num1={num1} />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        hit me daddy 👋
      </button>
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        Num1 👋
      </button>
    </div>
  );
};

export default App;
