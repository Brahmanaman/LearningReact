import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <>
      <div className="parent">
        <Card user="aman"/>
        <Card user="pawan"/>
        <Card user = "mona"/>
      </div>
    </>
  );
};

export default App;
