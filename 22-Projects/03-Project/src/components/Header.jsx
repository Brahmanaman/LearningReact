import React from "react";
import logo from "../../public/images/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-3">
      <img className="w-20" src={logo} alt="" />
      <nav className="md:flex gap-8 font-semibold hidden">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <span className="md:hidden font-bold text-3xl">&#9776;</span>
    </div>
  );
};

export default Header;
