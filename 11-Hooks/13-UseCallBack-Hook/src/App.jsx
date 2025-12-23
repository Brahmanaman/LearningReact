import React, { useCallback, useState } from "react";
import "./App.css";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("hellllo from handle click");
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click me </button>
      <Child click={handleClick} />
    </div>
  );
};

export default App;
