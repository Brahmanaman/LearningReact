import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-[5%] flex justify-between items-center p-2">
      <h1>Navbar</h1>
      <div className="flex items-center justify-center gap-10">
        <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/shop">
          Shop
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/about">
          About
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/cart">
          Cart
        </NavLink>
      </div>
      <div>
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
