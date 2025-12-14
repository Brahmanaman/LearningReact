import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Button />
      </div>
    </>
  );
}

export default App;
