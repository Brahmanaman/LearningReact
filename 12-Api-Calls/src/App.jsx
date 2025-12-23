import React from "react";
import axios from "axios";

const App = () => {
  const getData = async () => {
    // const response = await fetch("https://dummyjson.com/todos");
    // const result = await response.json();
    // console.log(result);

    const response = await axios.get("https://dummyjson.com/todos");
    console.log(response.data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
