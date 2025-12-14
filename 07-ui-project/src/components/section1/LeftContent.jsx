import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 ">
      <div className="p-6">
        <h3 className="mb-7 leading-[1.1] text-5xl font-bold">
          Prospective <br /> <span>customer</span> <br /> segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
          dignissimos suscipit harum beatae ullam necessitatibus vel nisi,
          placeat asperiores unde.
        </p>
      </div>
      <div className="text-8xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
