import React from "react";

const AddStudent = ({ setStudent, addStudent }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        onChange={(e) => {
          setStudent(e.target.value);
        }}
      />

      <button style={{marginLeft:"10px"}} onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default AddStudent;
