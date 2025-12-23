import React from "react";

const App = () => {
  return (
    <>
      <div>
        <form className="flex p-10" action="">
          <input
            type="text"
            className="px-5 py-2 border-2 rounded"
            placeholder="Enter Notes Heading"
          />
          <input type="text" placeholder="Write details" />
        </form>
      </div>
    </>
  );
};

export default App;
