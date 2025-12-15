import React, { useState } from "react";
import AddStudent from "./AddStudent";
import ShowStudent from "./ShowStudent";

const App = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState("");


  function addStudent(){
    setStudents([...students, student]);
  }

  return (
    <div>
      <h2>Lifting State Up</h2>
      <AddStudent setStudent={setStudent} addStudent={addStudent} />
      <ShowStudent students={students} />
    </div>
  );
};

export default App;
