import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          path: "",
          Component: HomePage,
        },
        {
          path: "shop",
          Component: Shop,
        },
        {
          path: "about",
          Component: About,
        },
        {
          path: "cart",
          Component: Cart,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
