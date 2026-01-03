import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  return (
    <>
      <form className="flex justify-center pt-10 gap-5" action="">
        <input
          className="border py-2 px-5 rounded-md text-2xl outline-0 w-70"
          type="text"
          placeholder="enter name"
        />
        <input
          className="border py-2 px-5 rounded-md text-2xl outline-0"
          type="email"
          placeholder="enter email"
        />
        <input
          className="border py-2 px-5 rounded-md text-2xl outline-0 w-95"
          type="text"
          placeholder="enter description"
        />
        <button className="bg-blue-600 px-6 rounded-md text-2xl cursor-pointer hover:bg-blue-950 transition">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
