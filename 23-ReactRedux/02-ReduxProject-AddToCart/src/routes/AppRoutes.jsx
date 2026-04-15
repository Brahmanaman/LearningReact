import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: HomePage,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
