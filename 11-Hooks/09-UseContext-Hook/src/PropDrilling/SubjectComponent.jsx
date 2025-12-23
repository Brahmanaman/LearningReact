import React, { useContext } from "react";
import { SubjectContext } from "../SubjectContext";

const SubjectComponent = ({ subject }) => {
  const subj = useContext(SubjectContext);
  return (
    <>
      <div>SubjectComponent</div>
      <h3>Subject: {subj}</h3>
    </>
  );
};

export default SubjectComponent;
