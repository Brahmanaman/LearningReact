import React, { useEffect, useState } from "react";
import useApiCustomHook from "./useApiCustomHook";

const Test = () => {
  const [products] = useApiCustomHook();

  return (
    <>
      <h1>Fetching Product Names from Custom Api hook in test</h1>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.id}: {item.title}
        </h3>
      ))}
    </>
  );
};

export default Test;
