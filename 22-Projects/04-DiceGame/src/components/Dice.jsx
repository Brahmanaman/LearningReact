import { useState } from "react";
import Button from "./Button.jsx";
import Rules from "./Rules.jsx";
const Dice = ({ selectedNumber, diceNumber, setDiceNumber, rolldice }) => {
  const ruleButton = false;
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-15">
        <img
          src={"/images/dice_" + diceNumber + ".png"}
          alt="discImages"
          onClick={rolldice}
        />
        <h5 className="font-semibold text-2xl">Click on dice to roll</h5>
        <Button ruleButton={false} text="Reset Score" />
        <Button
          ruleButton={true}
          text="Show Rules"
          setShowRules={setShowRules}
          showRules={showRules}
        />
        <Rules showRules={showRules} />
      </div>
    </>
  );
};

export default Dice;
