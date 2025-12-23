import React, { createContext, useState } from "react";
import CollegeComponent from "./PropDrilling/CollegeComponent";
import SubjectComponent from "./PropDrilling/SubjectComponent";
import { SubjectContext } from "./SubjectContext";

const App = () => {
  const [subject, setSubject] = useState("");

  return (
    <>
      <div>App</div>
      <select
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      >
        <option value="">Select Subject</option>
        <option value="English">English</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
      </select>
      {/* props drilling */}
      {/* <CollegeComponent subject={subject} /> */}

      {/* ContextApi */}
      <SubjectContext.Provider value={subject}>
        <CollegeComponent />
      </SubjectContext.Provider>
    </>
  );
};

export default App;
