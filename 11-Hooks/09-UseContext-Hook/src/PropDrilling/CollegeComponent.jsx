import React from "react";
import ClassComponent from "./ClassComponent";

const CollegeComponent = ({ subject }) => {
  return (
    <>
      <div>CollegeComponent</div>
      <h3>Subject: {subject}</h3>
      <ClassComponent subject={subject} />
    </>
  );
};

export default CollegeComponent;
