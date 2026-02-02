import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import FetchQR from "./pages/FetchQR";
import FetchOld from "./pages/FetchOld";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/trad" element={<FetchOld />} />
          <Route path="/rq" element={<FetchQR />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
