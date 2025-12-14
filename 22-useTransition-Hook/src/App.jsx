import React from "react";
import { useTransition } from "react";
import { useState } from "react";

const App = () => {
  // syntax : const[pendingState, function] = useTransition();
  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <div>
      <h1>UseTransition hook</h1>
      <p>{pending.toString()}</p>
      <button disabled={pending} onClick={handleButton}>
        click
      </button>
    </div>
  );
};

export default App;
