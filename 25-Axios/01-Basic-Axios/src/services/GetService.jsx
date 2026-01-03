import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const getMovie = () => {
  return api.get("?i=tt3896198&apikey=32c88810&s=titanic");
};
