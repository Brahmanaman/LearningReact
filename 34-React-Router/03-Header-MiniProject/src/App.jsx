import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<PageNotFound />} /> this is normal page not found route */}
          {
            <Route
              path="/*"
              element={<Navigate to="/" />}
            /> /* if someone enter wrong url it automatically redirect to home page */
          }
        </Routes>
      </main>
    </>
  );
};

export default App;
