import React from "react";
import { NavLink, Outlet } from "react-router";

const College = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>College Page</h1>
      <h4>Nested Links</h4>
      <h3>
        <NavLink to={"/"}>back to home</NavLink>
      </h3>
      <ul>
        <li>
          <NavLink to="">Students</NavLink>
        </li>
        <li>
          <NavLink to="departments">Departments</NavLink>
        </li>
        <li>
          <NavLink to="college-details">College Details</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default College;
