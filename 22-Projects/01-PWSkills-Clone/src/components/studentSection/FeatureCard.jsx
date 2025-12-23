import React from "react";

const FeatureCard = () => {
  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-evenly">
        <div className=" flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://freemiumicons.com/wp-content/uploads/2022/04/history-book-icon.svg"
            alt=""
          />
          <p className="text-white text-2xl font-bold">600+</p>
          <p className="text-3xl font-bold text-gray-500">Different Courses</p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn.iconscout.com/icon/free/png-256/free-student-icon-svg-download-png-448582.png?f=webp&w=128"
            alt=""
          />
          <p className="text-white text-2xl font-bold">700,000+</p>
          <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn-icons-png.flaticon.com/128/12494/12494973.png"
            alt=""
          />
          <p className="text-white text-2xl font-bold">1000+</p>
          <p className="text-3xl font-bold text-gray-500">
            Successful Transition
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
