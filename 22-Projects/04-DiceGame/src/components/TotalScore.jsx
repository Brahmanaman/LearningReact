import React from "react";

const TotalScore = ({ score }) => {
  return (
    <>
      <div className="text-center w-40">
        <h1 className="text-7xl font-semibold">{score}</h1>
        <p className="text-2xl font-semibold">Total Score</p>
      </div>
    </>
  );
};

export default TotalScore;
