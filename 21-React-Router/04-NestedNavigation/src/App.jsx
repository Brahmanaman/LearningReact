import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import College from "./pages/College";
import Student from "./pages/Student";
import Department from "./pages/Department";
import CollegeDetails from "./pages/CollegeDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/college" element={<College />}>
            <Route path="students" element={<Student />} />
            <Route path="departments" element={<Department />} />
            <Route path="college-details" element={<CollegeDetails />} />
          </Route>
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
