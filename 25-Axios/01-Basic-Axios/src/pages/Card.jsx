import React from "react";

const Card = ({ movieData }) => {
  console.log(movieData)
  return (
    <>
      <li>
        <div className="bg-white w-78 shadow-2xl/80 rounded-md">
          <div className="w-60 h-80 mx-auto relative">
            <img
              className="h-full w-full object-cover object-center absolute -mt-5 shadow-2xl/90"
              src={movieData.Poster}
              alt="poster"
            />
          </div>
          <div className="bg-gray-700 w-full rounded-bl-md rounded-br-md">
            <div className="text-center">
              <a href={`/movie/${movieData.imdbID}`}>
                <button className="text-white text-2xl p-2 cursor-pointer">
                  Watch Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
