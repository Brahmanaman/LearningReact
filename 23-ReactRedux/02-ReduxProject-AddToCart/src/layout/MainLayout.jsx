import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <div className="p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
