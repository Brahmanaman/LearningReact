import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPost = async (pageNumber) => {
  const result = await api.get(`/posts?_start=${pageNumber}&_limit=10`);
  return result.status === 200 ? result.data : [];
};

export const fetchIndividualData = async (id) => {
  const result =  await api.get(`/posts/${id}`);
  return result.status === 200 ? result.data : [];
};

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`)
}

export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { body: "this is the updated body" })
}

export const fetchUsers = async ({ pageParam = 1 }) => {
  try {
    const resp = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`)
    return resp.data;
  }
  catch (error) {
    console.log(error);
  }
}