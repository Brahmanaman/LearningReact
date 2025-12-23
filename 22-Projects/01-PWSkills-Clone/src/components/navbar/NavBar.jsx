import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="w-full h-14 bg-indigo-950 text-white flex items-center justify-between px-4 md:px-4">
        <div className="text-2xl font-bold text-indigo-200">PW Skills</div>
        <ul className="md:flex font-semibold hidden">
          <li className="mx-2.5 cursor-pointer">Home</li>
          <li className="mx-2.5 cursor-pointer">About US</li>
          <li className="mx-2.5 cursor-pointer">Contact US</li>
        </ul>
        <div className="hidden md:block p-2 bg-indigo-700 text-white font-semibold rounded-md cursor-pointer hover:bg-indigo-800 transition-colors duration-300">
          Login/Signup
        </div>
        <div className="md:hidden text-4xl">
            <a href="#">&#8801;</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
