import React, { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

const Button = ({ ruleButton, text, setShowRules, showRules }) => {
  const { setScore } = useContext(ScoreContext);
  return (
    <>
      <button
        onClick={() => {
          if (ruleButton) {
            setShowRules(!showRules);
          } else {
            setScore(0);
          }
        }}
        className={`font-bold rounded-sm border px-10 py-2 mt-5 cursor-pointer hover:scale-120 transition ${
          ruleButton ? "text-white bg-black " : "text-black bg-white "
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
