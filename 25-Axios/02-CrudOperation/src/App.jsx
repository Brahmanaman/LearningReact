import React from "react";
import Comments from "./components/Comments";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <div className="bg-linear-to-br from-gray-950 via-[#020024] to-[#090979] text-white ">
        <Form />
        <div className="flex justify-center pt-5">
          <Comments />
        </div>
      </div>
    </>
  );
};

export default App;
