import React from "react";

const App = () => {
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
        <input type="text" name="" id="" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
