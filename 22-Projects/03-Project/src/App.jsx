import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="max-w-325 m-auto px-3">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
