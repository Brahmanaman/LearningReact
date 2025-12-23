import React from "react";

const ShowStudent = ({ students }) => {
  return (
    <div>
        <h1>Show Students</h1>
      {students.map((elem, index) => {
        return <h5 key={index}>{elem}</h5>;
      })}
    </div>
  );
};

export default ShowStudent;
