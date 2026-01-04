import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getComments = () => {
  return api.get("/comments");
};

export const addComments = (comment) => {
  return api.post("/comments/", comment);
};

export const deleteComment = (id) => {
  return api.delete(`/comments/${id}`);
};

export const updateCommentApi = (id, comment) => {
  return api.put(`/comments/${id}`, comment);
};
