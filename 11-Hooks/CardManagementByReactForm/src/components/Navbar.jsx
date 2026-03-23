import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <>
      <div className="h-[10%]  px-10 flex items-center justify-between bg-stone-950 text-white">
        <div className="h-[70%]">
          <img
            className="w-full h-full rounded-full"
            src="https://imgs.search.brave.com/XLM6WQZOOjg4USteTMmA56CbGwKhBGOcLHTpbDno-xU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE3/MTM4MjYzMy92ZWN0/b3IvdXNlci1wcm9m/aWxlLWljb24tYW5v/bnltb3VzLXBlcnNv/bi1zeW1ib2wtYmxh/bmstYXZhdGFyLWdy/YXBoaWMtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WndPRjZOZk9S/MHpoWUM0NHhPWDA2/cnlJUEFVaER2QWFq/clBzYVo2djEtdz0"
            alt="profile"
          />
        </div>

        <div className="flex items-center gap-10">
          <p className="cursor-pointer font-semibold">Home</p>
          <p className="cursor-pointer font-semibold">About</p>
          <p className="cursor-pointer font-semibold">Contact</p>
        </div>
        <div>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="cursor-pointer bg-stone-800 py-2 px-4 rounded-md"
          >
            Add User
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
