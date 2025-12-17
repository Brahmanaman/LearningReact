import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Parent Component</h1>
        <h3>Parent Count: {count}</h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>

        <Child props={[]}/>
      </div>
    </>
  );
}

export default App;
