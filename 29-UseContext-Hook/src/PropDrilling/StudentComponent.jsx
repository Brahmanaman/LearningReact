import React from "react";
import SubjectComponent from "./SubjectComponent";

const StudentComponent = ({ subject }) => {
  return (
    <>
      <div>StudentComponent</div>
      <h3>Subject: {subject}</h3>
      <SubjectComponent subject={subject} />
    </>
  );
};

export default StudentComponent;
