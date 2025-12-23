import React from "react";
import { useRef } from "react";
import ChildComponent from "./childComponent";

const App = () => {
  const userRef = useRef(null);

  function handleClick() {
    userRef.current.value = 1000;
    userRef.current.style.color = "red";
    userRef.current.focus();
  }

  return (
    <div>

      <ChildComponent ref={userRef}/>
      
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;
