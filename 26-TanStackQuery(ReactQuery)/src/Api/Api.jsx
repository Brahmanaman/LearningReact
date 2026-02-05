import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPost = async (pageNumber) => {
  const result = await api.get(`/posts?_start=${pageNumber}&_limit=10`);
  return result.status == 200 ? result.data : [];
};

export const fetchIndividualData = async (id) => {
  const result = await api.get(`/posts/${id}`);
  return result.status == 200 ? result.data : [];
};

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`)
}
