import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/comments",
});

export const getComments = () => {
  return api.get("");
};

export const deleteComment = (id) => {
  return api.delete(`/${id}`);
};
