import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Movie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMovieData();
  }, []);

  const API = "https://www.omdbapi.com/?i=tt3896198&apikey=32c88810&s=titanic";
  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ul className="flex item-center justify-center flex-wrap gap-10 p-10">
        {data.map((movie) => {
          return <Card key={movie.imdbID} movieData={movie} />;
        })}
      </ul>
    </>
  );
};

export default Movie;
