import { useState } from "react";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import Dice from "./Dice";
import Button from "./Button";
import { ScoreContext } from "../context/ScoreContext";

const PlayGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceNumber, setDiceNumber] = useState(
    Math.floor(Math.random() * (7 - 1) + 1)
  );
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const rolldice = () => {
    setErrorMessage("");
    if (!selectedNumber) {
      setErrorMessage("You have not selected any number");
      return;
    }
    const randomNumber = Math.floor(Math.random() * (7 - 1) + 1);
    setDiceNumber(randomNumber);
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      //   if (score <= 0) {
      //     return;
      //   }

      setScore((prev) => prev - 2);
    }
  };
  return (
    <>
      <ScoreContext.Provider value={{ setScore }}>
        <p className=" text-red-600 font-semibold text-right -mb-5 mt-2">
          {errorMessage}
        </p>
        <div className="flex items-center justify-between mt-5">
          <TotalScore score={score} />
          <SelectNumber
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            setErrorMessage={setErrorMessage}
          />
        </div>
        <Dice
          selectedNumber={selectedNumber}
          diceNumber={diceNumber}
          setDiceNumber={setDiceNumber}
          rolldice={rolldice}
        />
      </ScoreContext.Provider>
    </>
  );
};

export default PlayGame;
