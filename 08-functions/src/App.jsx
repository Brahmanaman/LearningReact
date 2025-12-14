import React from "react";

const App = () => {
  function btnclicked() {
    console.log("btn clicked");
  }

  function mouseEnter() {
    console.log("mouse entered");
  }

  function inputchange(){
    console.log("input likha ja rha hai")
  }

  return (
    <div>
      <h1>Hello Aman Sharma</h1>
      <button onMouseEnter={mouseEnter} onClick={btnclicked}>
        change user
      </button>
      <button
        onClick={function () {
          console.log("inline function");
        }}
      >
        inline function
      </button>
      <button
        onClick={() => {
          console.log("arrow function");
        }}
      >
        arrow function
      </button>

      <input onChange={(event)=>{console.log(event.target.value)}} type="text" placeholder="input change event" />
    </div>
  );
};

export default App;
