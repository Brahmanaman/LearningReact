import React from "react";
import User from "./User";

const App = () => {
  function displayName(user) {
    alert(user);
  }

  return (
    <div>
      <h1>Call Parent Component Function from child component</h1>
      <User displayName={displayName} name="Bebu" />
      <User displayName={displayName} name="baby"/>
     
    </div>
  );
};

export default App;
