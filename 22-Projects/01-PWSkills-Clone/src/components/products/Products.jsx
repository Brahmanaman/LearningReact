import React from "react";

const Products = () => {
  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-evenly">
        <div className="w-55 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn-icons-png.freepik.com/256/9423/9423801.png?semt=ais_white_label"
            alt=""
          />
          <p className="text-white text-2xl font-bold">Job Portal</p>
          <p className="text-sm text-center text-gray-500">
            Use exceptional templates for a stand-out resume minus the sign up
            process
          </p>
        </div>

        <div className="w-55 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn1.iconfinder.com/data/icons/online-education-indigo-vol-3/256/Self-Paced_Learning-512.png"
            alt=""
          />
          <p className="text-white text-2xl font-bold">Self Placed</p>
          <p className="text-sm text-center text-gray-500">
            PW Skills's self-placed experience portal priorities hands-on
            training with 570+ internship projects
          </p>
        </div>

        <div className="w-55 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn-icons-png.freepik.com/256/10846/10846492.png?semt=ais_white_label"
            alt=""
          />
          <p className="text-white text-2xl font-bold">Affiliate Marketing</p>
          <p className="text-sm text-center text-gray-500">
            Explore affiliate marketing opportunity with PW skills and attain
            financial freedom
          </p>
        </div>

        <div className="w-55 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44"
            src="https://cdn-icons-png.freepik.com/256/11213/11213488.png?semt=ais_white_label"
            alt=""
          />
          <p className="text-white text-2xl font-bold">Placements</p>
          <p className="text-sm text-center text-gray-500">
            Our students placements and 100k+ carrer transitions speak volumes
            about our courses
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
