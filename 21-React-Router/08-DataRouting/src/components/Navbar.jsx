import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Logo</h1>
        <div>
          <ul className="flex gap-10 cursor-pointer">
            <NavLink to="">Home</NavLink>
            <NavLink to="about/5/aman">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </ul>
        </div>
        <div className="bg-stone-800 px-5 py-2 rounded-lg font-semibold cursor-pointer">Login</div>
      </div>
    </>
  );
};

export default Navbar;
