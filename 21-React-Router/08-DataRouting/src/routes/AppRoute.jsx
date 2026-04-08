import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import { getAllProducts } from "../api/ProductApi";

const AppRoute = () => {
  let router = createBrowserRouter([
    {
      path: "/dashboard",
      Component: MainLayout,
      children: [
        {
          path: "",
          loader: async () => {
            let data = await getAllProducts();
            return data;
          },
          hydrateFallbackElement: <h1>Loading Data......</h1>,
          Component: Home,
        },
        {
          path: "about/:id/:name",
          Component: About,
        },
        {
          path: "contact",
          Component: Contact,
        },
      ],
    },
    {
      path: "/",
      Component: AuthLayout,
      children: [
        {
          path: "",
          Component: Login,
        },
        {
          path: "register",
          Component: Register,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;

