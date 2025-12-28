import { useState } from "react";
import PlayGame from "./components/PlayGame";
import StartGame from "./components/StartGame";

const App = () => {
  const [playGame, setPlayGame] = useState(false);
  return (
    <>
      <div className="max-w-325 m-auto">
        {playGame ? <PlayGame /> : <StartGame setPlayGame={setPlayGame} />}
      </div>
    </>
  );
};

export default App;
