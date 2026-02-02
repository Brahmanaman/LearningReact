import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="body">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
