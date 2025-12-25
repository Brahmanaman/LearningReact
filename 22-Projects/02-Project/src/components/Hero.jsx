import React from "react";
import flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";
import shoes from "../assets/shoes.png";

const Hero = () => {
  console.log(flipkart);
  return (
    <main className="flex flex-col md:flex-row m-auto p-5 md:p-10">
      {/* left part */}
      <div className="flex flex-col md:w-2/4 w-full order-2 md:order-1">
        <h1 className="text-7xl md:text-8xl font-bold uppercase">
          Your feet deserve the best
        </h1>
        <p className="uppercase text-gray-600 font-semibold md:w-2/3 mt-10 w-full">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        {/* buttons */}
        <div className="flex gap-10 mt-6">
          <button className="bg-red-700 text-white py-1.5 font-bold px-3 cursor-pointer">
            Shop Now
          </button>
          <button className="border-gray-500 text-gray-600 font-bold border-2 py-1.5 px-3 cursor-pointer">
            Category
          </button>
        </div>
        <div className="mt-10 ">
          <h5 className="text-gray-500">Also Available On</h5>
          <div className="flex gap-5 mt-5">
            <img
              className="h-10 cursor-pointer"
              src={flipkart}
              alt="flipkart logo"
            />
            <img
              className="h-10 cursor-pointer"
              src={amazon}
              alt="amazon logo"
            />
          </div>
        </div>
      </div>

      {/* right part */}
      <div className="md:w-2/4 flex items-center justify-center order-1 mb-10 md:mb-0 md:order-2">
        <img
          className="filter drop-shadow-[2px_4px_6px_rgba(5,5,10,1)] scale-180 md:scale-150"
          src={shoes}
          alt="banner image"
        />
      </div>
    </main>
  );
};

export default Hero;
