import React, { useState } from "react";

const App = () => {

  let [name, setName] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    console.log("submit handler");
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} name="" id="" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
