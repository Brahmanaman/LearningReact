import React, { useRef } from "react";

const Child = ({ props }) => {
  const renderCount = useRef(0);

  function incCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Child Component</h1>
      <h3>Count: {renderCount.current++}</h3>
    </div>
  );
};

export default React.memo(Child, function (prevProps, nextProps) {
  if (prevProps.count == nextProps.count) return true;
  return false;
});
