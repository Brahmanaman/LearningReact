import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getMovie } from "../services/GetService";

const Movie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    try {
      const res = await getMovie();
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
