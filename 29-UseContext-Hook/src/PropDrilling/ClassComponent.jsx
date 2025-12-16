import React from "react";
import StudentComponent from "./StudentComponent";

const ClassComponent = ({ subject }) => {
  return (
    <>
      <div>ClassComponent</div>
      <h3>Subject: {subject}</h3>
      <StudentComponent subject={subject} />
    </>
  );
};

export default ClassComponent;
