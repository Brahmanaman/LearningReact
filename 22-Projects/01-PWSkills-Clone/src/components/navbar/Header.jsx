import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-auto">
        <img className="w-full hidden md:block"
          src="https://blog.pwskills.com/wp-content/uploads/2023/05/Untitled-1-3.png"
          alt=""
        />
        <img className=" w-full block md:hidden"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT62axF81KfqnASEFK0cMQllYrV0rmsZJjhQ&s"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
