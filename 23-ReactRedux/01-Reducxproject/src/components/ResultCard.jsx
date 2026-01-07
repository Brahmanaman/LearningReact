import React from "react";

const ResultCard = ({ item }) => {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];
    const newData = [...oldData, item];
    localStorage.setItem("collection", JSON.stringify(newData));
  };

  return (
    <>
      <div className="w-[20vw] h-80 bg-white rounded relative">
        <a target="_blank" className="w-full h-full" href={item.url}>
          {item.type == "photo" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "video" ? (
            <video
              className="h-full w-full object-cover object-center"
              src={item.src}
              loop
              autoPlay
              muted
            ></video>
          ) : (
            ""
          )}
          {item.type == "gif" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
        </a>

        <div
          id="bottom"
          className="w-full px-6 py-10 absolute bottom-0 text-white bg-linear-to-b from-transparent to-black flex items-center justify-between gap-2 "
        >
          <h1 className="text-xl font-semibold capitalize ">{item.title}</h1>
          <button
            className="bg-red-500 py-1 px-2 rounded-md cursor-pointer hover:bg-red-800 transition font-semibold active:scale-95"
            onClick={() => {
              addToCollection(item);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
