import React, { useState } from "react";
import { addComments } from "../services/CommentServiceApi";

const Form = ({ comments, setComments }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  function inputHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      let response = await addComments(formData);
      if (response.status === 201) {
        setComments([...comments, response.data]);
      }
      setFormData({
        name: "",
        email: "",
        body: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="flex justify-center pt-10 gap-5"
        onSubmit={submitHandler}
      >
        <input
          className="border py-2 px-5 rounded-md text-2xl outline-0 w-70"
          type="text"
          placeholder="enter name"
          id="name"
          name="name"
          value={formData.name}
          onChange={inputHandler}
        />
        <input
          className="border py-2 px-5 rounded-md text-2xl outline-0"
          type="email"
          placeholder="enter email"
          id="email"
          name="email"
          value={formData.email}
          onChange={inputHandler}
        />
        <input
          className="border py-2 px-5 rounded-md text-2xl outline-0 w-95"
          type="text"
          placeholder="enter description"
          id="body"
          name="body"
          value={formData.body}
          onChange={inputHandler}
        />
        <button className="bg-blue-600 px-6 rounded-md text-2xl cursor-pointer hover:bg-blue-950 transition">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
