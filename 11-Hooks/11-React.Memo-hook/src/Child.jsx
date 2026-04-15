import React from "react";

const Child = ({ user, count }) => {
  console.log("child render");

  return (
    <div>
      About-Count: {count}
      <h1>Child Component</h1>
    </div>
  );
};

// export default Child;
// export default React.memo(Child);

export default React.memo(Child, function (prevProps, nextProps) {
  if (prevProps.user.id === nextProps.user.id) {
    return true;
  }
  return false;
});
