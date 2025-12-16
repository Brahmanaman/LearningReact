import React, { useEffect, useState } from "react";
import Test from "./CustomHook/test";
import Test2 from "./CustomHook/Test2";
import useApiCustomHook from "./CustomHook/useApiCustomHook";

const App = () => {
  const [products] = useApiCustomHook();
  return (
    <div>
      {/* <h1>Test Component</h1>
      <Test />
      <Test2 /> */}

      <h1>Fetching Product Names from Custom Api hook in App</h1>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.id}: {item.title}
        </h3>
      ))}

      <Test />
    </div>
  );
};

export default App;
