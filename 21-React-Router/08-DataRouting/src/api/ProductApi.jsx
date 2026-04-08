import axios from "axios";

export const getAllProducts = async () => {
  console.log("api hit");
  const result = await axios("https://dummyjson.com/products");
  return result.data.products;
};
