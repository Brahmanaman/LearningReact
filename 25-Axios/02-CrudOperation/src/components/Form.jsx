import React, { useEffect, useRef, useState } from "react";
import { addComments, updateCommentApi } from "../services/CommentServiceApi";
import { toast } from "react-toastify";

const Form = ({ comments, setComments, updateComment, setUpdateComment }) => {
  const btnRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  let isEmpty = Object.keys(updateComment).length === 0;
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
      const action = btnRef.current.value;
      if (action === "Add") {
        let response = await addComments(formData);
        if (response.status === 201) {
          toast.success("comment added successfully!");
          setComments([...comments, response.data]);
        }
      } else if (action === "Edit") {
        let response = await updateCommentApi(updateComment.id, formData);
        if (response.status === 200) {
          toast.success("comment updated successfully!");
          setComments((prev) => {
            return prev.map((comment) => {
              return comment.id === response.data.id ? response.data : comment;
            });
          });
        }
      }
      setFormData({
        name: "",
        email: "",
        body: "",
      });
      setUpdateComment({});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateComment &&
      setFormData((prev) => {
        return {
          ...prev,
          ...updateComment,
        };
      });
  }, [updateComment]);

  return (
    <>
      <section>
        <form
          className="flex justify-center p-2 rounded-md gap-5 fixed top-0 bg-white/20 mt-2 backdrop-blur-md  border border-white/30 shadow-lg"
          onSubmit={submitHandler}
        >
          <input
            className="border py-2 px-5 rounded-md text-2xl outline-0 w-70 bg-transparent"
            type="text"
            placeholder="enter name"
            autoComplete="off"
            id="name"
            name="name"
            value={formData.name}
            onChange={inputHandler}
          />
          <input
            className="border py-2 px-5 rounded-md text-2xl outline-0 bg-transparent"
            type="email"
            placeholder="enter email"
            autoComplete="off"
            id="email"
            name="email"
            value={formData.email}
            onChange={inputHandler}
          />
          <input
            className="border py-2 px-5 rounded-md text-2xl outline-0 w-95 bg-transparent"
            type="text"
            placeholder="enter description"
            autoComplete="off"
            id="body"
            name="body"
            value={formData.body}
            onChange={inputHandler}
          />
          <button
            className="bg-blue-600 px-6 rounded-md text-2xl cursor-pointer hover:bg-blue-950 transition"
            value={isEmpty ? "Add" : "Edit"}
            ref={btnRef}
          >
            {isEmpty ? "Add" : "Edit"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
