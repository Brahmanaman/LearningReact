import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import FetchQR from "./pages/FetchQR";
import FetchOld from "./pages/FetchOld";
import {FetchIndividualData} from "./ui/FetchIndividualData";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/trad" element={<FetchOld />} />
          <Route path="/rq" element={<FetchQR />} />
          <Route path="/rq/:id" element={<FetchIndividualData />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
