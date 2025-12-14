import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  let [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
    // console.log("previous count ", prevCount.current);
  }, [count]);

  function toogleInput() {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "initial";
    }
  }

  return (
    <>
      <div>
        <button style={{ outline: "none" }} onClick={toogleInput}>
          Toggle input
        </button>
        <input
          style={{
            padding: "10px",
            fontSize: "20px",
            outline: "none",
            border: "none",
            marginLeft: "10px",
            borderRadius: "10px",
          }}
          ref={inputRef}
          type="text"
          placeholder="enter your name"
        />
      </div>
      <div>
        <h1>
          Current: {count} | Previous: {prevCount.current}
        </h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default App;
