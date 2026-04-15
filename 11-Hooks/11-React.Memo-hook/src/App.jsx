import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./Child";

function App() {
  console.log("parent render");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ id: 1, name: "Aman" });

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
        <br />
        <button onClick={() => setUser({ name: "Mona" })}>Change User</button>

        <Child user={user} count={count} />
      </div>
    </>
  );
}

export default App;
