import { useEffect } from "react";
import { useState } from "react";

function App() {
  /*
   * 👉 component paida hone se leke destroy hone tak ka pura safar.
   */

  // Mount
  useEffect(() => {
    console.log("Mounted");
  }, []);

  // Update
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  // Unmount
  useEffect(() => {
    return () => {
      console.log("Unmounted");
    };
  }, []);

  //this code will run on every life cycle event
  useEffect(() => {});

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
