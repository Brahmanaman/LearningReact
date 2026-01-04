import React, { use, useEffect, useState } from "react";
import { getComments, deleteComment } from "../services/CommentServiceApi";
import Form from "./Form";
import { toast } from "react-toastify";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [updateComment, setUpdateComment] = useState({});
  useEffect(() => {
    fetchAllComments();
  }, []);

  async function fetchAllComments() {
    const res = await getComments();
    setComments(res.data);
  }

  async function removeComment(id) {
    try {
      const res = await deleteComment(id);
      if (res.status === 200) {
        toast.success("comment delete successfully!");
        const data = comments.filter((comment) => {
          return comment.id != id;
        });
        setComments(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function updateCommentHandler(comment) {
    setUpdateComment(comment);
  }

  return (
    <>
      <div>
        <Form
          comments={comments}
          setComments={setComments}
          updateComment={updateComment}
          setUpdateComment={setUpdateComment}
        />
        <ul className="grid grid-cols-3 gap-4 mt-20">
          {comments.map((data) => {
            return (
              <li
                key={data.id}
                className="w-95 max-w-md rounded-xl bg-gray-900 border border-gray-700 p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {data.name}
                  </h3>
                  <p className="text-sm text-gray-400">{data.email}</p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {data.body}
                </p>

                <div className="mt-5 w-50 flex items-center gap-10">
                  <button
                    className="bg-green-700 px-6 py-1 rounded-md font-semibold cursor-pointer hover:scale-110 transition"
                    onClick={() => updateCommentHandler(data)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-700 px-6 py-1 rounded-md font-semibold cursor-pointer hover:scale-110 transition"
                    onClick={() => removeComment(data.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Comments;
