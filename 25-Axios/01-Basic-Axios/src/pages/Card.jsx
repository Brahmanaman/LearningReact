import React from "react";

const Card = ({ movieData }) => {
  return (
    <>
      <li>
        <div className="bg-white w-78 shadow-2xl/80 rounded-md">
          <div className="w-60 h-80 mx-auto">
            <img className="h-full " src={movieData.Poster} alt="poster" />
          </div>
          <div className="bg-gray-700 w-full rounded-bl-md rounded-br-md">
            <div className="text-center">
              <a href={`/movie/${movieData.imdbID}`}>
                <button className="text-white text-2xl p-2">Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
