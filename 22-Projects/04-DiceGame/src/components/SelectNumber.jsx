import React from "react";

const SelectNumber = ({
  selectedNumber,
  setSelectedNumber,
  setErrorMessage,
}) => {
  const number = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="flex flex-col justify-center items-end">
        <div className="flex gap-3">
          {number.map((num, index) => {
            return (
              <div
                key={index}
                className={`border h-13 w-13 flex items-center justify-center text-2xl font-semibold cursor-pointer select-none rounded-xs ${
                  selectedNumber == num ? "bg-black text-white" : ""
                }`}
                onClick={() => {
                  setErrorMessage("");
                  setSelectedNumber(num);
                }}
              >
                {num}
              </div>
            );
          })}
        </div>
        <p className="font-bold text-xl">Select Number</p>
      </div>
    </>
  );
};

export default SelectNumber;
