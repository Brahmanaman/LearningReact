import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPost = async () => {
  const result = await api.get("/posts");
  return result.status == 200 ? result.data : [];
};

export const fetchIndividualData = async (id) =>{
  const result = await api.get(`/posts/${id}`);
  return result.status == 200 ? result.data : [];
}