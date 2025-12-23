import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me{" "}
        </button>

        <ExpensiveCalculation />
      </div>
    </>
  );
};

function ExpensiveCalculation() {
  //before useMemo
  // let sum = 0;
  // for (let i = 0; i < 10000002; i++) {
  //   sum += i;
  // }

  console.log("expensive calculation running");

  //after useMemo
  const sum = useMemo(() => {
    console.log("inside use memo hook");
    let total = 0;
    for (let i = 0; i < 10000002; i++) {
      total += i;
    }
    return total;
  }, []);

  return <h1>Sum: {sum}</h1>;
}

export default App;
