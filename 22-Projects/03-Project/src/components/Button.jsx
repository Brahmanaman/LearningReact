import React from "react";
import { MdOutlineMessage } from "react-icons/md";

const Button = ({ text, logo, isEmail }) => {
  return (
    <>
      <button
        className={` ${
          isEmail ? "text-black border" : "bg-black text-white"
        } flex items-center justify-center gap-2 uppercase py-1 px-2 rounded-sm text-center w-full`}
      >
        {logo}
        {text}
      </button>
    </>
  );
};

export default Button;
