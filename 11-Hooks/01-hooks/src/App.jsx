import React, { useState } from "react";

const App = () => {
  let [a, seta] = useState(0);

  function inc() {
    a++;
    seta(a);
  }

  function desc() {
    a--;
    if (a <= 0) {
      a = 0;
    }
    seta(a);
  }

  return (
    <div className="box">
      <h1>Value of A is {a}</h1>
      <div className="buttons">
        <button id="inc" onClick={inc}>Increment</button>
        <button id="desc" onClick={desc}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
