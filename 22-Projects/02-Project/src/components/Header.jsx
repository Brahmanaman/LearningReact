import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <img src="/src/assets/brand_logo.png" alt="logo" />
      <nav className="flex items-center justify-center gap-5 ">
        <a href="#">MENU</a>
        <a href="#">LOCATION</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </nav>
      <button className="bg-red-700 px-3 py-1 text-white font-bold">
        Login
      </button>
    </header>
  );
};

export default Header;
