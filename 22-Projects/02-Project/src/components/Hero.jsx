import React from "react";

const Hero = () => {
  return (
    <main className="flex m-auto p-10">
      {/* left part */}
      <div className="flex flex-col w-2/4">
        <h1 className="text-8xl font-bold uppercase">
          Your feet deserve the best
        </h1>
        <p className="uppercase text-gray-600 font-semibold w-2/3 mt-10">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        {/* buttons */}
        <div className="flex gap-10 mt-6">
          <button className="bg-red-700 text-white py-1.5 font-bold px-3">
            Shop Now
          </button>
          <button className="border-gray-500 text-gray-600 font-bold border-2 py-1.5 px-3">
            Category
          </button>
        </div>
        <div className="mt-10 ">
          <h5 className="text-gray-500">Also Available On</h5>
          <div className="flex gap-5 mt-5">
            <img
              className="h-10"
              src="/src/assets/flipkart.png"
              alt="flipkart logo"
            />
            <img
              className="h-10"
              src="/src/assets/amazon.png"
              alt="amazon logo"
            />
          </div>
        </div>
      </div>

      {/* right part */}
      <div className="w-2/4 flex items-center justify-center">
        <img
          className="filter drop-shadow-[2px_4px_6px_rgba(5,5,10,1)]"
          src="/src/assets/shoes.png"
          alt="banner image"
        />
      </div>
    </main>
  );
};

export default Hero;
