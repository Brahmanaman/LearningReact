import React, { memo } from "react";
const Child = React.memo(({ click }) => {
  console.log("hello from child component");
  return (
    <div>
      <h4>Child Component</h4>
      <button onClick={click}>click from child component</button>
    </div>
  );
});

export default Child;
