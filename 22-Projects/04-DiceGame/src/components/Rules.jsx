import React from "react";

const Rules = ({ showRules }) => {
  if (showRules) {
    return (
      <>
        <div className="bg-[#FBF1F1] px-3 py-4 rounded-sm m-5">
          <h1 className="font-bold text-3xl mb-5">How to play dice game</h1>
          <div className="font-semibold">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </p>
            <p>if you get wrong guess then 2 point will be deducted</p>
          </div>
        </div>
      </>
    );
  }
};

export default Rules;
