import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const getProducts = async () => {
  const res = await api.get("products");
  return res.data;
};
