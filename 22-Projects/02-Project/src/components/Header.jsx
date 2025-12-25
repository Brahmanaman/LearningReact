import React from "react";
import brand_logo from "../assets/brand_logo.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <img className="cursor-pointer" src={brand_logo} alt="logo" />
      <nav className="hidden md:flex items-center justify-center gap-5 ">
        <a href="#">MENU</a>
        <a href="#">LOCATION</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </nav>
      <button className="hidden md:block bg-red-700 px-3 py-1 text-white font-bold cursor-pointer">
        Login
      </button>
      <span className="md:hidden font-bold text-3xl">&#9776;</span>
    </header>
  );
};

export default Header;
