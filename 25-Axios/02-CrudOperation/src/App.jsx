import React from "react";
import Comments from "./components/Comments";
import { Slide, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="bg-linear-to-br from-gray-950 via-[#020024] to-[#090979] text-white ">
        <div className="flex justify-center pt-5">
          <Comments />
          <ToastContainer theme="dark" transition={Slide} />
        </div>
      </div>
    </>
  );
};

export default App;
