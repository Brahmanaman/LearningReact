import { useState } from "react";
import "./App.css";
import InlineStyle from "./InlineStyle";
import StyledComponent from "./StyledComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <InlineStyle /> */}
      <StyledComponent/>
    </>
  );
}

export default App;
