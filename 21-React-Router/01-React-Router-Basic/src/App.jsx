import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./App.css";

const App = () => {
  return (
    <>
      {/* I have include browser router on main.jsx */}
      {/* <BrowserRouter> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route index path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
